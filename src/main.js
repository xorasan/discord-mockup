var servers_list, directmsgs_list, profile_list, profile_controls, convo_list, main;
;(function(){
	'use strict';

	var counter_interval = [], is_running, profile_selection_list, selected_profile, main_keys;

	main = {
		select_profile: function (uid) { if (uid) {
			var o = persistent_profiles.get(uid);
			if (o) {
				selected_profile = o;
				profile_list.set({
					uid: 1, icon: o.icon, name: o.displayname, text: o.name ? '@'+o.name : '',
					username: o.name,
					profile: o,
				});
				Preferences.set('selected_profile', uid);
			}
		} },
		send: function () {
			var name, text = main_keys.text_input.value.trim();
			if (selected_profile) {
				name = selected_profile.displayname || '@'+selected_profile.name;

				if (text.length) {
					convo_list.set({ name, profile: selected_profile, text });
					main_keys.text_input.value = '';
					var last_element = convo_list.get_item_element( convo_list.length()-1 );
					if (last_element) {
						scroll_into_view_with_padding( last_element, [Webapp.get_tall_screen_height(), 0, 200, 0] );
					}
				}
			} else {
				Webapp.status('Select a profile first!');
			}
		},
		start: function () {
			this.stop();
			is_running = 1;
			var old;
			counter_interval.push( setInterval(function () {
				old = servers_list.adapter.get(0);
				servers_list.set({ uid: 0, count: 1+(old.count || 0) });
			}, 150) );
			counter_interval.push( setInterval(function () {
				old = servers_list.adapter.get(2);
				servers_list.set({ uid: 2, count: 1+(old.count || 0) });
			}, 300) );
			counter_interval.push( setInterval(function () {
				old = servers_list.adapter.get(4);
				servers_list.set({ uid: 4, count: 1+(old.count || 0) });
			}, 600) );
		},
		stop: function () {
			is_running = 0;
			counter_interval.forEach(function (o) {
				clearInterval( o );
			});
		}
	};
	
	function generate_random_text(limit) {
		var words = ['origami', 'pink', 'flower', 'pot', 'seed', 'wojak', 'girl',
			'boy', 'man', 'woman', 'walnut', 'black', 'sin', 'pure', 'joy', 'angry'], text = [];
		
		var limit = limit || 2;
		
		for (var i = 0; i < limit; ++i) {
			text.push( words[ parseint(words.length * Math.random()) ] );
		}
		
		return text.join(' ');
	}
	Hooks.set('ready', function () {
		Webapp.header();
		Webapp.status_bar_padding();
		Webapp.add_minimal_view('main');
		Softkeys.shadow();
		Softkeys.hide_dots();
		
		var keys = main_keys = View.dom_keys('main');
		
		profile_list = List(keys.profile_list).idprefix('profile').listitem('msg').prevent_focus(1);
		profile_list.set({ uid: 1 });
		profile_list.on_selection = function () {
			open_list_sheet('Select Profile', function (l) {
				profile_selection_list = l;
				
				l.on_selection = function (o) {
					main.select_profile( o.uid );
					Sheet.cancel();
				};
				
				persistent_profiles.populate( profile_selection_list );
			});
		};
		profile_list.after_set = function (o, c, k) {
			var name, image;
			if (o.profile) {
				name = o.profile.name;
				if (o.profile.image)
					image = 'propics/'+o.profile.image;
			}

			set_profile_picture(k.icon, name, image);
		};

		profile_controls = List(keys.profile_controls).idprefix('control').listitem('control')
							.prevent_focus(1);

		[
			{ icon: 'iconm' },
			{ icon: 'iconheadset' },
			{ icon: 'iconsettings' },
		].forEach(function (o, i) {
			profile_controls.set({ icon: o.icon });
		});

		directmsgs_list = List(keys.directmsgs).idprefix('directmsg').listitem('directmsg').prevent_focus(1);
		directmsgs_list.title('DIRECT MESSAGES');
		directmsgs_list.after_set = function (o, c, k) {
			set_profile_picture(k.icon, o.name, o.image);

			if (o.count === 0)
				k.count.hidden = !o.count;
			if (o.state)
				setdata(k.status, 'state', o.state);
			else
				popdata(k.status, 'state');
			
			directmsgs_list.select_silently( directmsgs_list.selected );

			$.taxeer('update-discord-button-count', function () {
				var total_count = 0;
				directmsgs_list.adapter.each(function (o) {
					if (o.count) total_count++;
				});
				servers_list.set({ uid: 0, count: total_count });
			});
		};
		[
			{	image: '1.JPG'	, name: 'Path_X_finder'	, count: 3	, subtitle: 'thanks…'											},
			{	image: '2.JPG'	, name: 'iamcool'		, state: 1	, subtitle: 'well, so where are we going with our lives…'		},
			{	image: '3.JPG'	, name: 'serpeuf'					, subtitle: 'DUDE!!! you are so late 💀😟'						},
		].forEach(function (o, i) {
			var image;
			if (o.image)
				image = './propics/'+o.image;
			directmsgs_list.set({
				name: o.name || generate_random_text(2),
				subtitle: o.subtitle,
				image: image,
				count: o.count,
				state: o.state,
			});
		});
		directmsgs_list.select(0);

		servers_list = List(keys.servers).idprefix('server').listitem('server').prevent_focus(1);
		servers_list.after_set = function (o, c, k) {
			if (o.image)
				setcss(k.icon, 'background-image', 'url('+o.image+')');
			var badge = Templates.has_property(o, 'badge')
			if (badge === 0)
				k.badge.hidden = !badge;

			if (o.count === 0)
				k.count.hidden = !o.count;

			servers_list.select_silently( servers_list.selected );
		};
		
		[
			{	image: '01.WEBP'							},
			{	image: '02.JPG', badge: 'icontv'			},
			{	image: '03.PNG'								},
			{	image: '04.WEBP'							}, 
			{	image: '05.WEBP'							}
		].forEach(function (o, i) {
			servers_list.set({
				image: './servers/'+o.image,
				badge$icon: o.badge,
				count: o.count,
			});
		});
		servers_list.select(0);

		convo_list = List(keys.conversation).idprefix('convo').listitem('msg').prevent_focus(1);
		convo_list.after_set = function (o, c, k) {
			var name, image;
			if (o.profile) {
				name = o.profile.name;
				if (o.profile.image)
					image = 'propics/'+o.profile.image;
			}
			set_profile_picture(k.icon, name, image);
		};

		[].forEach(function (o, i) {
			var image;
			if (o.image)
				image = './propics/'+o.image;

			convo_list.set({
				name: o.name || generate_random_text(2),
				text: o.subtitle,
				image: image,
				time: o.time || Time.now(),
				state: o.state,
			});
		});
		convo_list.select(0);

		keys.send.onclick = function () {
			main.send();
		};
		listener(keys.text_input, 'keydown', function (e) {
			if (!e.shiftKey && e.key == 'Enter') {
				main.send();
				preventdefault(e);
			}
		});
		keys.text_input.focus();
		
		main.select_profile( Preferences.get('selected_profile') );
	});
	
	function update_softkeys() {
		Softkeys.add({ n: is_running ? 'Stop' : 'Start',
			k: 's',
			alt: 1,
			i: is_running ? 'iconstop' : 'iconplayarrow',
			cb: function () {
				if (is_running) main.stop(); else main.start();

				update_softkeys();
			}
		});
		Softkeys.add({ n: 'Persistent Profiles',
			k: 'y',
			alt: 1,
			ctrl: 1,
			i: 'iconperson',
			cb: function () {
				Hooks.run('view', 'persistent_profiles');
			}
		});
		Softkeys.remove(K.sr);
	}
	Hooks.set('viewready', function (arg_one) {
		if (View.is_active('main')) {
			update_softkeys();
		}
	});

})();
