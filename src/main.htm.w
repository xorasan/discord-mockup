+htm
body
	+include managed.htm.w

	[view=main]
		[id=servers] .servers .fixed
		[id=messages] .messages .fixed
			[id=find] .find .absolute
				input [id=search] .absolute .medium @placeholder(Find or start a conversation...)
			[id=directmsgs] .directmsgs .absolute
			[id=profile] .profile .absolute .flex
				[id=profile_list] .profile_list .absolute .left .bottom .top
				[id=profile_controls] .profile_controls .absolute .right .bottom .top
		[id=conversation] .conversation .fixed
		.text_input_bar .flex .fixed
			[id=attachment] .icon [icon=iconaddcircle]
			.flex .vertical .grow
				[id=selected_profile_name] .dim .bold
				textarea [id=text_input] .text_input
			[id=send] .icon [icon=iconsend]

	[view=persistent_profiles]
		[id=list] .persistent_profiles

	[sheet=persistent_profile] .pad
		input [id=uid] @hidden
		input [id=name] @placeholder(Name)
		input [id=displayname] @placeholder(Display Name)
		textarea [id=bio] @placeholder(Bio)

	[template=control] .control .relative .inlineflex
		[id=icon] .icon

	[template=directmsg] .directmsg .relative .flex
		.directmsg_container .flex .relative
			.directmsg_shadow .absolute .top .left .right .bottom .z100
			.inlineflex .relative
				[id=icon] .icon
				[id=status] .status .absolute
			.inlineflex .vertical .text
				[id=name] .name .bold
				[id=subtitle] .subtitle .dim .nowrap .narrowletters
				[id=count] .count .absolute .centertext .bold .small @hidden

	[template=server] .server .relative
		[id=marker] .marker .absolute
		[id=icon] .icon .absolute
		[id=badge] .badge .absolute .centertext @hidden
		[id=count] .count .absolute .centertext .pad .bold .small @hidden

	[template=msg] .msg .relative
		.flex
			[id=icon] .icon
			.flex .vertical
				.flex .name_time
					[id=name] .name .bold
					[id=time] .time .dim .gap
				[id=text] .text




