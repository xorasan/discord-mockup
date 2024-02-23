var servers_list, directmsgs_list, profile_list, profile_controls, convo_list, main;
;(function(){
	'use strict';

	var counter_interval = [], is_running, profile_selection_list, selected_profile, main_keys;

	main = {
		select_profile: function (uid) { if (uid) {
			var o = selected_profile = persistent_profiles.get(uid);
			profile_list.set({
				uid: 1, icon: o.icon, name: o.displayname, text: o.name ? '@'+o.name : '',
				username: o.name,
			});
			Preferences.set('selected_profile', uid);
		} },
		send: function () {
			var name, text = main_keys.text_input.value.trim();
			if (selected_profile) {
				name = selected_profile.name

				if (text.length) {
					convo_list.set({ name, text });
					main_keys.text_input.value = '';
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
	
	var profile_colors = {
		// autogen'd colors by name
	};
	function set_profile_picture(icon, name, image) {
		if (image)
			setcss(icon, 'background-image', 'url('+image+')');

		if ( name ) {
//			if (!getcss(k.icon, 'background-image')) {
				var random_color = Themes.darken_hex_color( Themes.generate_predictable_color( name ), 150, .7 );
				setcss(icon, 'background-image', 'url(./propics/0.png)');
				setcss(icon, 'background-color', random_color);
//			}
		}
	}
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
			set_profile_picture(k.icon, o.username, o.image);
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
			set_profile_picture(k.icon, o.name, o.image);
		};

		[
			{	image: '3.JPG'	, name: 'serpeuf'					, subtitle: 'DUDE!!! you are so late 💀😟'						},
			{					  name: 'Condoriano'				, subtitle: 'overslept… bloody weird dream…'					},
			{	image: '3.JPG'	, name: 'serpeuf'					, subtitle: 'alright, alright…\nYou joining?'					},
			{					  name: 'Condoriano'				, subtitle: 'yeah, yeah… fine…'									},
		].forEach(function (o, i) {
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
