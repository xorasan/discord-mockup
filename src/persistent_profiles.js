// TODO stable pro pic import from dewaan
var persistent_profiles, persistent_profiles_list, persistent_profiles_data = {};
function set_profile_picture(icon, name, image) {
	if (image)
		setcss(icon, 'background-image', 'url('+image+')');
	else
	if ( name ) {
//		if (!getcss(k.icon, 'background-image')) {
			var random_color = Themes.darken_hex_color( Themes.generate_predictable_color( name ), 150, .7 );
			setcss(icon, 'background-image', 'url(./propics/0.png)');
			setcss(icon, 'background-color', random_color);
//		}
	}
}
;(function(){
	'use strict';

	var ppuid = 1, module_name = 'persistent_profiles';

	persistent_profiles = {
		get: function (uid) {
			var o = persistent_profiles_data[uid] || {};
			o.uid = uid;
			return o;
		},
		set: function (o) {
			var uid = o.uid || ++ppuid;

			delete o.uid;
			persistent_profiles_data[ uid ] = o;

			persistent_profiles_list.set({
				uid: uid,
				name: o.displayname || '@'+o.name,
				text: o.bio,
				image: o.image,
				state: o.state,
			});

			Hooks.run('profile-set', {
				uid: uid,
				name: o.displayname || '@'+o.name,
				text: o.bio || '',
				image: o.image || '',
				state: o.state || '',
			});
			
			persistent_profiles.save();
		},
		pop: function () { // remove
			var element = persistent_profiles_list.get_item_element();
			if (element) {
				var uid = getdata( element, 'uid' );
				persistent_profiles_list.remove_by_uid( uid );
				
				delete persistent_profiles_data[ uid ];
				
				persistent_profiles.save();
			}
		},
		edit: function () {
			var element = persistent_profiles_list.get_item_element();
			if (element) {
				var uid = getdata( element, 'uid' );

				Hooks.run('sheet', {
					n: 'persistent_profile',
					u: uid,
				});
			}
		},
		populate: function (l) {
			for (var i in persistent_profiles_data) {
				var o = persistent_profiles_data[i];
				
				l.set({
					uid: i,
					title: o.displayname || '@'+o.name,
					subtitle: o.bio,
				});
			}
		},
		save: function () {
			Files.set.file('pub/profiles.w', Weld.encode_config( persistent_profiles_data ));
		},
		load: function () {
			var text = '';
			try {
				text = Files.get.file('pub/profiles.w').toString();
			} catch (e) {}
			persistent_profiles_data = Weld.decode_config( text );
			for (var i in persistent_profiles_data) {
				var o = persistent_profiles_data[i];
				
				ppuid = Math.max( ppuid, parseint(i) );
				
				persistent_profiles_list.set({
					uid: i,
					name: o.displayname || '@'+o.name,
					text: o.bio || '',
					image: o.image || '',
					state: o.state || '',
				});
				
				Hooks.run('profile-set', {
					uid: i,
					name: o.displayname || '@'+o.name,
					text: o.bio || '',
					image: o.image || '',
					state: o.state || '',
				});
				
			}
			
			Hooks.run('profiles-loaded');
			$.log( 'pp uid is', ppuid );
		},
	};

	Hooks.set('ready', function () {
		var keys = View.dom_keys(module_name);
		persistent_profiles_list = List(keys.list).idprefix('perspro').listitem('msg');
		
		persistent_profiles_list.after_set = function (o, c, k) {
			set_profile_picture( k.icon, o.name, (o.image ? 'propics/'+o.image : '') );
		};
		
		$.taxeer('load-'+module_name, function () {
			persistent_profiles.load();
		});
	});
	
	function update_softkeys() {
		Softkeys.add({ n: 'Add',
			k: 'a',
			alt: 1,
			i: 'iconadd',
			cb: function () {
				Hooks.run('sheet', {
					n: 'persistent_profile',
				});
			},
		});
		Softkeys.add({ n: 'Remove',
			k: 'r',
			alt: 1,
			i: 'icondeleteforever',
			cb: function () {
				persistent_profiles.pop();
			},
		});
		Softkeys.add({ n: 'Edit',
			k: K.sl,
			alt: 1,
			i: 'iconedit',
			cb: function () {
				persistent_profiles.edit();
			},
		});
	}

	var pers_prof_keys, pers_states;
	Hooks.set('sheet-ready', async function (args, k) { if (args.name == 'persistent_profile') {
		Sheet.set_title('Setup Persistent Profile');
		pers_prof_keys = k;
		k.name.focus();
		var o = persistent_profiles_data[ args.uid ];

		pers_states = List(k.states).idprefix('ppstates').freeflow(1).listitem('state');
		[
		{ name: 'Online', color: '' },
		{ name: 'Away', color: '' },
		{ name: 'Busy', color: '' },
		{ name: 'Offline', color: '' },
		].forEach(function ({ color, name }, i) {
			pers_states.set({ uid: i+1, color, name });
		});

		if (o) {
			if (o.state) {
				pers_states.select_silently( pers_states.id2num( o.state ) );
			}
			k.uid.value = args.uid;
			k.name.value = o.name || '';
			k.displayname.value = o.displayname || '';
			k.bio.value = o.bio || '';
			k.image.value = o.image || '';
		}
	} });
	Hooks.set('sheet-okay', function (args, k) { if (args.name == 'persistent_profile') {
		var state;
		if (pers_states) {
			state = getdata( pers_states.get_item_element(), 'uid' );
		}
		persistent_profiles.set({
			uid: pers_prof_keys.uid.value,
			name: pers_prof_keys.name.value,
			displayname: pers_prof_keys.displayname.value,
			bio: pers_prof_keys.bio.value,
			image: pers_prof_keys.image.value || '',
			state,
		});
		pers_prof_keys = 0;
	} });

	Hooks.set('viewready', function (arg_one) {
		if (View.is_active(module_name)) {
			Webapp.header(['Persistent Profiles', 0, 'iconperson']);
			update_softkeys();
		}
	});

})();
