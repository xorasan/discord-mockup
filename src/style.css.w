+include managed.css.w

.servers
	left				0
	top					0
	bottom				0
	width				100px
	background			@primaryl
	padding-top			12px
.server
	display				inline-block
	width				100px
	height				80px
.server .marker
	border-radius		6px
	width				6px
	left				0
	top					36px
	bottom				36px
	background			@textl
.server:hover .marker
	background			@textd
.server[data-selected] .marker
	top					12px
	bottom				12px
.server .icon
	background-color	@tertiary
	background-position	50% 50%
	background-size		cover
	width				64px
	height				64px
	top					7px
	left				18px
	border-radius		30%
.server .icon img
	width				64px
	height				64px
.server .icon svg
	width				52px
	height				52px
.server[data-selected]
	background			@secondaryd
.server .badge
	box-shadow			0 0 0 2px @primaryl
	border-radius		100%
	top					2px
	right				12px
	width				20px
	height				20px
	background			@secondaryl
.server[data-selected] .badge
	box-shadow			0 0 0 2px @secondaryd
.server .badge svg
	margin-top			2px
	fill				@text
	padding				1px
	width				16px
	height				16px
.server .count
	box-shadow			0 0 0 2px @secondaryl
	color				white
	border-radius		8px
	bottom				2px
	right				12px
	background			@red
.server[data-selected] .count
	box-shadow			0 0 0 2px @secondaryl


.messages
	left		100px
	top			0
	bottom		0
	width		280px
	background	@secondaryl
.messages .find
	top				0
	height			63px
	left			0
	right			0
	border-bottom	1px solid @primaryl
.messages .find input
	background		@secondaryd
	height			61px
	padding			0 0 0 10px
.messages .directmsgs
	top				64px
	left			0
	right			0
	bottom			64px
	height			calc(100vh - 128px)
.messages .profile
	left			0
	right			0
	height			64px
	bottom			0
	background		@secondaryd
.conversation
	left			380px
	top				0
	bottom			0
	width			calc(100vw - 380px)
	background		@tertiary

.profile_list
	margin-left			8px
.profile_controls
	margin-right		8px

.persistent_profiles [data-selected]
	background-color	@secondary

.control
	height				64px
.control .icon
	margin				auto 0
.control .icon svg
	width				32px
	height				32px

.directmsg
	width				100%
	height				64px
	padding				2px 5px
.directmsg_container
	width				inherit
	border-radius		5px
	overflow			hidden
.directmsg:hover .directmsg_container
	background			@tertiaryl
.directmsg[data-selected] .directmsg_container
	background			@tertiary

.directmsg .directmsg_shadow
	box-shadow			0 0 12px 5px @secondaryl inset
.directmsg:hover .directmsg_shadow
	box-shadow			0 0 12px 5px @tertiaryl inset
.directmsg[data-selected] .directmsg_shadow
	box-shadow			0 0 12px 5px @tertiary inset

.directmsg .status
	box-shadow			0 0 2px 1px @secondaryd
	border				2px solid @textxd
	background-color	@secondaryd
	padding				5px
	border-radius		50%
	bottom				8px
	right				8px
.directmsg .status[data-state='1']
	background-color	@greenl
	border-color		@greend
.directmsg .count
	right				10px
	box-shadow			0 0 0 2px @secondaryl
	color				white
	padding				0 10px
	border-radius		8px
	background-color	@red

.msg
	padding				10px
.msg .name_time
.msg .text
.directmsg .icon, .msg .icon
	box-shadow			0 0 3px 0 @primary
	background-position	50% 50%
	background-size		cover
	border-radius		100%
	background-color	@secondaryd
	margin				auto 8px
	padding				24px
.directmsg .text
	justify-content		center

.text_input_bar
	bottom				0
	left				380px
	right				0
	min-height			40px
	z-index				200
//	padding				24px 14px
	background-color	@tertiaryt
	border-radius		10px
	margin				20px
.text_input
	min-height			40px
.text_input_bar .icon
	padding				15px




