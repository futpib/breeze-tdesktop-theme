
// colors here indicate colors from original night theme from `tdesktop/night*/*.colors`

module.exports = ({
	breeze,
	alpha,
	mix,
	overlay,
}) => ({

	// #282e33; // white: fallback for background
	windowBg: breeze.Window.BackgroundNormal,
	// #f5f5f5; // black: fallback for text
	windowFg: breeze.Window.ForegroundNormal,
	// #313b43; // light gray: fallback for background with mouse over
	windowBgOver: tg => overlay(tg.windowBg, alpha(breeze.Window.DecorationHover, 0.25)),
	// #3f4850; // darker gray: fallback for ripple effect
	windowBgRipple: tg => overlay(tg.windowBg, alpha(breeze.Window.DecorationHover, 0.5)),
	// #e9ecf0; // black: fallback for text with mouse over
	windowFgOver: tg => tg.windowFg,
	// #82868a; // gray: fallback for additional text
	windowSubTextFg: breeze.Window.ForegroundInactive,
	// #797b7f; // darker gray: fallback for additional text with mouse over
	windowSubTextFgOver: 'windowSubTextFg',
	// #e9e8e8; // dark gray: fallback for bold text
	windowBoldFg: 'windowFg',
	// #e9e9e9; // dark gray: fallback for bold text with mouse over
	windowBoldFgOver: 'windowFgOver',
	// #3fc1b0; // bright blue: fallback for blue filled active areas
	windowBgActive: breeze.Window.DecorationFocus,
	// #ffffff; // white: fallback for text on active areas
	windowFgActive: breeze.Selection.ForegroundNormal,
	// #4be1c3; // online blue: fallback for active text like online status
	windowActiveTextFg: breeze.Window.ForegroundActive,

	// #000000; // black: fallback for shadow
	windowShadowFg: 'windowBg',
	// windowBg; // gray: fallback for shadow without opacity
	windowShadowFgFallback: 'windowBg',

	// #00000018; // most shadows (including opacity)
	shadowFg: tg => alpha(tg.windowBg, '18'),

	// #0000003c; // slide animation (chat to profile) fade out filling
	slideFadeOutBg: tg => alpha(tg.windowBg, '3c'),
	// windowShadowFg; // slide animation (chat to profile) fade out right section shadow
	slideFadeOutShadowFg: 'windowShadowFg',

	// #000000; // image background fallback (when photo size is less than minimum allowed)
	imageBg: 'windowBg',
	// #ffffff; // image background when displaying an image with opacity where no opacity is needed
	imageBgTransparent: 'windowFg',

	// #2da192; // default active button background
	activeButtonBg: breeze.Button.BackgroundNormal,
	// #32a898; // default active button background with mouse over
	activeButtonBgOver: 'windowBgOver',
	// #42b8a8; // default active button ripple effect
	activeButtonBgRipple: 'windowBgRipple',
	// #ffffff; // default active button text
	activeButtonFg: breeze.Button.ForegroundActive,
	// #ffffff; // default active button text with mouse over
	activeButtonFgOver: 'activeButtonFg',
	// #8ee4d9; // default active button additional text (selected messages counter in forward / delete buttons)
	activeButtonSecondaryFg: mix(breeze.Button.ForegroundActive, breeze.Button.ForegroundNormal),
	// activeButtonSecondaryFg; // default active button additional text with mouse over
	activeButtonSecondaryFgOver: 'activeButtonSecondaryFg',
	// #3ee2cc; // default active line (like code input field bottom border when you log in and field is focused)
	activeLineFg: breeze.Button.ForegroundActive,
	// #f57878; // default active line for error state (like code input field bottom border when you log in and you've entered incorrect code)
	activeLineFgError: breeze.Button.ForegroundNegative,

	// #282e33; // default light button background (like buttons in boxes)
	lightButtonBg: 'windowBg',
	// #313b43; // default light button background with mouse over
	lightButtonBgOver: 'windowBgOver',
	// #3c474f; // default light button ripple effect
	lightButtonBgRipple: 'windowBgRipple',
	// #79e8da; // default light button text
	lightButtonFg: breeze.Button.ForegroundNormal,
	// lightButtonFg; // default light button text with mouse over
	lightButtonFgOver: 'lightButtonFg',

	// #f57474; // default attention button text (like confirm button on log out)
	attentionButtonFg: mix(breeze.Button.ForegroundNormal, breeze.Button.ForegroundNegative),
	// #e76060; // default attention button text with mouse over
	attentionButtonFgOver: 'attentionButtonFg',
	// #613a3a64; // default attention button background with mouse over
	attentionButtonBgOver: 'windowBgOver',
	// #f4c3c2; // default attention button ripple effect
	attentionButtonBgRipple: 'windowBgRipple',

	// windowBg; // default left outlined button background (like shared media links in profiles)
	outlineButtonBg: 'windowBg',
	// #313b43; // default left outlined button background with mouse over
	outlineButtonBgOver: 'windowBgOver',
	// #29baa7; // default left outlined button left outline border
	outlineButtonOutlineFg: breeze.Button.ForegroundPositive,
	// #3c474f; // default left outlined button ripple effect
	outlineButtonBgRipple: 'windowBgRipple',

	// #282e33; // default popup menu background
	menuBg: tg => mix(tg.windowBg, tg.historyComposeAreaBg),
	// #ffffff; // default popup menu item background with mouse over
	menuBgOver: 'windowBgActive',
	// #26292d; // default popup menu item ripple effect
	menuBgRipple: 'windowBgRipple',
	// #808080; // default popup menu item icon (like main menu)
	menuIconFg: 'windowFg',
	// #dcdcdc; // default popup menu item icon with mouse over
	menuIconFgOver: 'windowFgOver',
	// #757575; // default popup menu submenu arrow icon (like in message field context menu in case of RTL system language)
	menuSubmenuArrowFg: 'menuIconFg',
	// #737373; // default popup menu item disabled text (like unavailable items in message field context menu)
	menuFgDisabled: breeze.Window.ForegroundInactive,
	// #42484d; // default popup menu separator (like in message field context menu)
	menuSeparatorFg: tg => mix(tg.windowBg, tg.windowFg),

	// #ffffff53; // default scroll bar current rectangle, the bar itself (like in chats list)
	scrollBarBg: 'windowBgOver',
	// #ffffff7a; // default scroll bar current rectangle with mouse over it
	scrollBarBgOver: 'windowBgRipple',
	// #ffffff1a; // default scroll bar background
	scrollBg: alpha(breeze.View.BackgroundNormal, 0),
	// #ffffff2c; // default scroll bar background with mouse over the scroll bar
	scrollBgOver: 'scrollBg',

	// #6d6d6d; // small X icon (like in Show all sessions box to the right for sessions termination)
	smallCloseIconFg: 'menuIconFg',
	// #a3a3a3; // small X icon with mouse over
	smallCloseIconFgOver: 'menuIconFgOver',

	// windowFgActive; // default radial loader line (like in Media Viewer when loading a photo)
	radialFg: 'windowFgActive',
	// #00000056; // default radial loader background (like in Media Viewer when loading a photo)
	radialBg: tg => alpha(tg.windowFg, '56'),

	// #818991; // default input field placeholder when field is not focused (like in phone input field when you log in)
	placeholderFg: breeze.View.ForegroundInactive,
	// #5d6165; // default input field placeholder when field is focused
	placeholderFgActive: 'placeholderFg',

	// #6f6f6f; // default input field bottom border (like in code input field when you log in and field is not focused)
	inputBorderFg: breeze.View.ForegroundInactive,
	// #3d444b; // default rounded input field border (like in chats list search field when field is focused)
	filterInputBorderFg: mix(breeze.View.BackgroundNormal, breeze.View.DecorationFocus),
	// #3d444b; // default rounded input field background (like in chats list search field when field is inactive)
	filterInputInactiveBg: breeze.View.BackgroundNormal,
	// #3d444b;
	filterInputActiveBg: 'filterInputInactiveBg',

	// #6c6c6c; // default unchecked checkbox rounded rectangle (and also emoji category icons)
	checkboxFg: 'menuIconFg',

	// #545454; // default slider not active bar (like in Settings when you choose interface scale or custom notifications count)
	sliderBgInactive: breeze.Window.BackgroundAlternate,
	// windowBgActive; // default slider active bar (like in Settings when you choose interface scale or custom notifications count)
	sliderBgActive: 'windowBgActive',

	// #d4dadd; // tooltip background (like when you put mouse over the message timestamp and wait)
	tooltipBg: breeze.Tooltip.BackgroundNormal,
	// #9a9e9c; // tooltip text
	tooltipFg: breeze.Tooltip.ForegroundNormal,
	// #c9d1db; // tooltip border
	tooltipBorderFg: breeze.Tooltip.BackgroundAlternate,

	// #00000003; // one pixel line shadow at the bottom of custom window title
	titleShadow: tg => alpha(tg.windowFg, '03'),
	// #3a4047; // custom window title background when window is inactive
	titleBg: breeze.WM.inactiveBackground,
	// titleBg; // custom window title background when window is active
	titleBgActive: breeze.WM.activeBackground,
	// titleBg; // custom window title minimize/maximize/restore button background when window is inactive (Windows only)
	titleButtonBg: 'lightButtonBg',
	// #8b9096; // custom window title minimize/maximize/restore button icon when window is inactive (Windows only)
	titleButtonFg: 'lightButtonFg',
	// #4c535b; // custom window title minimize/maximize/restore button background with mouse over when window is inactive (Windows only)
	titleButtonBgOver: 'lightButtonBgOver',
	// #e0e0e0; // custom window title minimize/maximize/restore button icon with mouse over when window is inactive (Windows only)
	titleButtonFgOver: 'lightButtonFgOver',
	// titleButtonBg; // custom window title minimize/maximize/restore button background when window is active (Windows only)
	titleButtonBgActive: 'titleButtonBg',
	// titleButtonFg; // custom window title minimize/maximize/restore button icon when window is active (Windows only)
	titleButtonFgActive: 'titleButtonFg',
	// titleButtonBgOver; // custom window title minimize/maximize/restore button background with mouse over when window is active (Windows only)
	titleButtonBgActiveOver: 'titleButtonBgOver',
	// titleButtonFgOver; // custom window title minimize/maximize/restore button icon with mouse over when window is active (Windows only)
	titleButtonFgActiveOver: 'titleButtonFgOver',

	// titleButtonBg; // custom window title close button background when window is inactive (Windows only)
	titleButtonCloseBg: 'titleButtonBg',
	// titleButtonFg; // custom window title close button icon when window is inactive (Windows only)
	titleButtonCloseFg: 'titleButtonFg',
	// #e81123; // custom window title close button background with mouse over when window is inactive (Windows only)
	titleButtonCloseBgOver: 'attentionButtonBg',
	// windowFgActive; // custom window title close button icon with mouse over when window is inactive (Windows only)
	titleButtonCloseFgOver: 'windowFgActive',
	// titleButtonCloseBg; // custom window title close button background when window is active (Windows only)
	titleButtonCloseBgActive: 'titleButtonCloseBg',
	// titleButtonCloseFg; // custom window title close button icon when window is active (Windows only)
	titleButtonCloseFgActive: 'titleButtonCloseFg',
	// titleButtonCloseBgOver; // custom window title close button background with mouse over when window is active (Windows only)
	titleButtonCloseBgActiveOver: 'titleButtonCloseBgOver',
	// titleButtonCloseFgOver; // custom window title close button icon with mouse over when window is active (Windows only)
	titleButtonCloseFgActiveOver: 'titleButtonCloseFgOver',

	// #666666; // custom window title text when window is inactive (macOS only)
	titleFg: breeze.WM.inactiveBackground,
	// #808080; // custom window title text when window is active (macOS only)
	titleFgActive: breeze.WM.activeForeground,

	// #f23c34; // tray icon counter background
	trayCounterBg: 'attentionButtonBg',
	// #888888; // tray icon counter background if all unread messages are muted
	trayCounterBgMute: 'lightButtonBg',
	// #ffffff; // tray icon counter text
	trayCounterFg: 'windowFg',
	// #ffffff; // tray icon counter background when tray icon is pressed or when dark theme of macOS is used (macOS only)
	trayCounterBgMacInvert: 'windowFg',
	// #ffffff01; // tray icon counter text when tray icon is pressed or when dark theme of macOS is used (macOS only)
	trayCounterFgMacInvert: tg => alpha(tg.windowFg, '01'),

	// #0000007f; // box and main menu background layer fade
	layerBg: tg => alpha(tg.historyComposeAreaBg, '7f'),

	// #666666; // default for settings close icon and box search cancel icon
	cancelIconFg: 'menuIconFg',
	// #dcdcdc; // default for settings close icon and box search cancel icon with mouse over
	cancelIconFgOver: 'menuIconFgOver',

	// windowBg; // box background
	boxBg: 'windowBg',
	// windowFg; // box text
	boxTextFg: 'windowFg',
	// #56dbce; // accepted box text (like when choosing username that is not occupied)
	boxTextFgGood: breeze.Button.ForegroundPositive,
	// #d84d4d; // rejecting box text (like when choosing username that is occupied)
	boxTextFgError: breeze.Button.ForegroundNegative,
	// #ebebeb; // box title text
	boxTitleFg: mix(breeze.Window.ForegroundActive, breeze.Window.ForegroundNormal),
	// #282e33; // box search field background (like in contacts box)
	boxSearchBg: 'historyComposeAreaBg',
	// #808080; // box title additional text (like in create group box when you see chosen members count)
	boxTitleAdditionalFg: 'windowSubTextFg',
	// cancelIconFg; // settings close icon and box search cancel icon (like in contacts box)
	boxTitleCloseFg: 'cancelIconFg',
	// cancelIconFgOver; // settings close icon and box search cancel icon (like in contacts box) with mouse over
	boxTitleCloseFgOver: 'cancelIconFgOver',

	// #5e6065; // text in channel members box about the limit (max 200 last members are shown)
	membersAboutLimitFg: 'windowFg',

	// #222528; // contacts (and some other) box row background
	contactsBg: 'boxBg',
	// #282e33; // contacts (and some other) box row background with mouse over
	contactsBgOver: 'windowBgOver',
	// boxTextFg; // contacts (and some other) box row name text
	contactsNameFg: 'boxTextFg',
	// #808080; // contacts (and some other) box row additional text (like last seen stamp)
	contactsStatusFg: 'windowSubTextFg',
	// #808080; // contacts (and some other) box row additional text (like last seen stamp) with mouse over
	contactsStatusFgOver: 'windowSubTextFgOver',
	// #55e1d3; // contacts (and some other) box row active additional text (like online status)
	contactsStatusFgOnline: 'windowActiveTextFg',

	// layerBg; // avatar crop box fade background (when choosing a new photo in Settings or for a group)
	photoCropFadeBg: 'layerBg',
	// #ffffff7f; // avatar crop box corner rectangles (when choosing a new photo in Settings or for a group)
	photoCropPointFg: '#ffffff7f',

	// #2bc7b8; // received phone call arrow (in calls list box)
	callArrowFg: 'boxTextFgGood',
	// #dd5b4a; // missed phone call arrow (in calls list box)
	callArrowMissedFg: 'boxTextFgError',

	// windowBg; // login background
	introBg: 'windowBg',
	// #eeeeee; // login title text
	introTitleFg: 'windowFg',
	// #999999; // login description text
	introDescriptionFg: 'windowFg',
	// #999999; // login error text (like when providing a wrong log in code)
	introErrorFg: 'windowFg',

	// #188173; // intro gradient top (from)
	introCoverTopBg: 'mainMenuBg',
	// #188173; // intro gradient bottom (to)
	introCoverBottomBg: 'mainMenuBg',
	// #34a495; // intro cloud graphics
	introCoverIconsFg: 'mainMenuCloudBg',
	// #329d8f; // intro plane traces
	introCoverPlaneTrace: 'mainMenuCloudBg',
	// #ced9e2; // intro plane part
	introCoverPlaneInner: tg => mix(tg.windowFg, tg.introCoverPlaneOuter),
	// #97a9b5; // intro plane part
	introCoverPlaneOuter: breeze.Window.ForegroundInactive,
	// #ffffff; // intro plane part
	introCoverPlaneTop: breeze.Window.ForegroundNormal,

	// menuIconFg; // main menu and lock telegram icon
	dialogsMenuIconFg: 'menuIconFg',
	// menuIconFgOver; // main menu and lock telegram icon with mouse over
	dialogsMenuIconFgOver: 'menuIconFgOver',
	// windowBg; // chat list background
	dialogsBg: 'windowBg',
	// #f5f5f5; // chat list name text
	dialogsNameFg: 'windowFg',
	// dialogsNameFg; // chat list group or channel icon
	dialogsChatIconFg: 'dialogsNameFg',
	// #6d727c; // chat list date text
	dialogsDateFg: 'windowSubTextFg',
	// #8d939e; // chat list message text
	dialogsTextFg: 'windowSubTextFg',
	// #ebebeb; // chat list group sender name text (or media message type text)
	dialogsTextFgService: 'windowFg',
	// #ec6657; // chat list draft label
	dialogsDraftFg: breeze.Window.ForegroundNegative,

	// #53edde; // chat list verified icon background
	dialogsVerifiedIconBg: breeze.Window.ForegroundNeutral,
	// #282e33; // chat list verified icon check
	dialogsVerifiedIconFg: 'windowBg',

	// #727272; // chat list sending message icon (clock)
	dialogsSendingIconFg: 'dialogsDateFg',
	// #20eeda; // chat list sent message tick / double tick icon
	dialogsSentIconFg: breeze.Window.ForegroundPositive,
	// #05a091; // chat list unread badge background for not muted chat
	dialogsUnreadBg: breeze.Window.DecorationFocus,
	// #495159; // chat list unread badge background for muted chat
	dialogsUnreadBgMuted: tg => mix(breeze.Window.BackgroundNormal, tg.dialogsUnreadFg, 0.25),
	// #ffffff; // chat list unread badge text
	dialogsUnreadFg: breeze.Window.ForegroundNormal,
	// #353c43; // chat list background with mouse over
	dialogsBgOver: 'activeButtonBgOver',
	// windowBoldFgOver; // chat list name text with mouse over
	dialogsNameFgOver: 'windowBoldFgOver',
	// dialogsNameFgOver; // chat list group or channel icon with mouse over
	dialogsChatIconFgOver: 'dialogsNameFgOver',
	// #6d727c; // chat list date text with mouse over
	dialogsDateFgOver: 'windowSubTextFgOver',
	// #a3a7ae; // chat list message text with mouse over
	dialogsTextFgOver: 'windowSubTextFgOver',
	// #f0f0f0; // chat list group sender name text with mouse over
	dialogsTextFgServiceOver: 'windowFg',
	// dialogsDraftFg; // chat list draft label with mouse over
	dialogsDraftFgOver: 'dialogsDraftFg',

	// #53edde; // chat list verified icon background with mouse over
	dialogsVerifiedIconBgOver: 'dialogsVerifiedIconBg',
	// dialogsVerifiedIconFg; // chat list verified icon check with mouse over
	dialogsVerifiedIconFgOver: 'dialogsVerifiedIconFg',

	// dialogsSendingIconFg; // chat list sending message icon (clock) with mouse over
	dialogsSendingIconFgOver: 'dialogsSendingIconFg',
	// #41f0df; // chat list sent message tick / double tick icon with mouse over
	dialogsSentIconFgOver: 'dialogsSentIconFg',
	// #009687; // chat list unread badge background for not muted chat with mouse over
	dialogsUnreadBgOver: 'dialogsUnreadBg',
	// #555e67; // chat list unread badge background for muted chat with mouse over
	dialogsUnreadBgMutedOver: 'dialogsUnreadBgMuted',
	// dialogsUnreadFg; // chat list unread badge text with mouse over
	dialogsUnreadFgOver: 'dialogsUnreadFg',
	// #009687; // chat list background for current (active) chat
	dialogsBgActive: 'windowBgActive',
	// windowFgActive; // chat list name text for current (active) chat
	dialogsNameFgActive: 'windowFgActive',
	// dialogsNameFgActive; // chat list group or channel icon for current (active) chat
	dialogsChatIconFgActive: 'dialogsNameFgActive',
	// windowFgActive; // chat list date text for current (active) chat
	dialogsDateFgActive: 'windowFgActive',
	// windowFgActive; // chat list message text for current (active) chat
	dialogsTextFgActive: 'windowFgActive',
	// dialogsTextFgActive; // chat list group sender name text for current (active) chat
	dialogsTextFgServiceActive: 'dialogsTextFgActive',
	// #c6f7f3; // chat list draft label for current (active) chat
	dialogsDraftFgActive: 'dialogsDraftFg',
	// dialogsTextFgActive; // chat list verified icon background for current (active) chat
	dialogsVerifiedIconBgActive: 'dialogsTextFgActive',
	// dialogsBgActive; // chat list verified icon check for current (active) chat
	dialogsVerifiedIconFgActive: 'dialogsBgActive',
	// #ffffff99; // chat list sending message icon (clock) for current (active) chat
	dialogsSendingIconFgActive: 'historySendingOutIconFg',
	// dialogsTextFgActive; // chat list sent message tick / double tick icon for current (active) chat
	dialogsSentIconFgActive: 'dialogsSentIconFg',
	// dialogsTextFgActive; // chat list unread badge background for not muted chat for current (active) chat
	dialogsUnreadBgActive: 'dialogsUnreadBg',
	// #cbf7e9; // chat list unread badge background for muted chat for current (active) chat
	dialogsUnreadBgMutedActive: 'dialogsUnreadBgMuted',
	// #039d8e; // chat list unread badge text for current (active) chat
	dialogsUnreadFgActive: 'dialogsUnreadFg',
	// #43474d; //
	dialogsRippleBg: 'lightButtonBgRipple',
	// #12a798; //
	dialogsRippleBgActive: tg => overlay(tg.dialogsRippleBg, alpha(breeze.Window.DecorationFocus, 0.75)),
	// dialogsBgActive; // forwarding panel background (when forwarding messages in the smallest window size)
	dialogsForwardBg: 'dialogsBgActive',
	// dialogsNameFgActive; // forwarding panel text (when forwarding messages in the smallest window size)
	dialogsForwardFg: 'dialogsNameFgActive',

	// #3a4047; // search results bar background (in chats list, contacts box..)
	searchedBarBg: 'windowBg',
	// #a8a8a8; // search results bar text (in chats list, contacts box..)
	searchedBarFg: 'windowFg',

	// #282e33; // top bar background (in chat view, media overview..)
	topBarBg: 'windowBg',

	// windowBg; // emoji panel background
	emojiPanBg: 'windowBg',
	// #20262b; // emoji panel categories background
	emojiPanCategories: breeze.Button.BackgroundNormal,
	// #90949a; // emoji panel section header text
	emojiPanHeaderFg: 'boxTitleFg',
	// #fffffff2; // emoji panel section header background
	emojiPanHeaderBg: 'windowBg',

	// #000000cc; // delete X button background for custom sent stickers in stickers panel (legacy)
	stickerPanDeleteBg: 'windowBgActive',
	// windowFgActive; // delete X button icon for custom sent stickers in stickers panel (legacy)
	stickerPanDeleteFg: 'windowFgActive',
	// #000000b0; // sticker and GIF preview background (when you press and hold on a sticker)
	stickerPreviewBg: alpha(breeze.View.BackgroundNormal, 'b0'),

	// windowFg; // inbox message text
	historyTextInFg: 'windowFg',
	// #ffffff; // inbox message selected text or text in a selected message
	historyTextInFgSelected: 'historyTextInFg',
	// #e4ecf2; // outbox message text
	historyTextOutFg: 'windowFg',
	// #ffffff; // outbox message selected text or text in a selected message
	historyTextOutFgSelected: 'historyTextOutFg',

	// #37e1cb; // inbox message link
	historyLinkInFg: breeze.Window.ForegroundLink,
	// #a7fff4; // inbox message link in a selected text or message
	historyLinkInFgSelected: breeze.Selection.ForegroundNormal,
	// #37e1cb; // outbox message link
	historyLinkOutFg: 'historyLinkInFg',
	// #a7fff4; // outbox message link in a selected text or message
	historyLinkOutFgSelected: 'historyLinkInFgSelected',

	// historyTextInFg; // inbox media filename text
	historyFileNameInFg: 'historyTextInFg',
	// #ffffff; // inbox media filename text in a selected message
	historyFileNameInFgSelected: 'historyFileNameInFg',
	// historyTextOutFg; // outbox media filename text
	historyFileNameOutFg: 'historyTextOutFg',
	// #ffffff; // outbox media filename text in a selected message
	historyFileNameOutFgSelected: 'historyFileNameOutFg',

	// #40e6c5; // outbox message tick / double tick icon
	historyOutIconFg: breeze.View.ForegroundPositive,
	// #ffffff; // outbox message tick / double tick icon in a selected message
	historyOutIconFgSelected: breeze.Selection.ForegroundNormal,

	// #40e6c5; // media message tick / double tick icon (like in sent photo)
	historyIconFgInverted: breeze.View.ForegroundPositive,

	// #9eface; // outbox sending message icon (clock)
	historySendingOutIconFg: breeze.Window.ForegroundInactive,
	// #76838b; // inbox sending message icon (clock) (like in sent messages to yourself or in sent messages to a channel)
	historySendingInIconFg: 'historySendingOutIconFg',
	// #ffffffc8; // media sending message icon (clock) (like in sent photo)
	historySendingInvertedIconFg: tg => alpha(tg.windowFg, 'c8'),

	// #26c2ad; // received phone call arrow
	historyCallArrowInFg: breeze.Button.ForegroundPositive,
	// #ffffff; // received phone call arrow in a selected message
	historyCallArrowInFgSelected: breeze.Selection.ForegroundNormal,
	// callArrowMissedFg; // missed phone call arrow
	historyCallArrowMissedInFg: 'callArrowMissedFg',
	// #ffffff; // missed phone call arrow in a selected message
	historyCallArrowMissedInFgSelected: breeze.Selection.ForegroundNormal,
	// #ffffff; // outgoing phone call arrow
	historyCallArrowOutFg: 'windowFg',
	// #ffffff; // outgoing phone call arrow
	historyCallArrowOutFgSelected: breeze.Selection.ForegroundNormal,

	// #33393f; // new unread messages bar background
	historyUnreadBarBg: breeze.View.BackgroundAlternate,
	// shadowFg; // new unread messages bar shadow
	historyUnreadBarBorder: 'shadowFg',
	// #3cd3bf; // new unread messages bar text
	historyUnreadBarFg: breeze.View.ForegroundInactive,

	// #0000004c; // forwarding messages in a large window size "choose recipient" background
	historyForwardChooseBg: tg => alpha(tg.windowBg, '4c'),
	// windowFgActive; // forwarding messages in a large window size "choose recipient" text
	historyForwardChooseFg: 'windowFgActive',

	// #ec7577; // red group member name
	historyPeer1NameFg: tg => mix(tg.windowFg, '#ec7577'),
	// #ffffff; // red group member name in a selected message
	historyPeer1NameFgSelected: breeze.Selection.ForegroundNormal,
	// #e17076; // red userpic background
	historyPeer1UserpicFg: tg => mix(tg.windowBg, '#e17076'),

	// #86d67f; // green group member name
	historyPeer2NameFg: tg => mix(tg.windowFg, '#86d67f'),
	// #ffffff; // green group member name in a selected message
	historyPeer2NameFgSelected: breeze.Selection.ForegroundNormal,
	// #7bc862; // green userpic background
	historyPeer2UserpicFg: tg => mix(tg.windowBg, '#7bc862'),

	// #e4c054; // yellow group member name
	historyPeer3NameFg: tg => mix(tg.windowFg, '#e4c054'),
	// #ffffff; // yellow group member name in a selected message
	historyPeer3NameFgSelected: breeze.Selection.ForegroundNormal,
	// #ccad4f; // yellow userpic background
	historyPeer3UserpicFg: tg => mix(tg.windowBg, '#ccad4f'),

	// #68c7f3; // blue group member name
	historyPeer4NameFg: tg => mix(tg.windowFg, '#68c7f3'),
	// #ffffff; // blue group member name in a selected message
	historyPeer4NameFgSelected: breeze.Selection.ForegroundNormal,
	// #65aadd; // blue userpic background
	historyPeer4UserpicFg: tg => mix(tg.windowBg, '#65aadd'),

	// #b383f3; // purple group member name
	historyPeer5NameFg: tg => mix(tg.windowFg, '#b383f3'),
	// #ffffff; // purple group member name in a selected message
	historyPeer5NameFgSelected: breeze.Selection.ForegroundNormal,
	// #a695e7; // purple userpic background
	historyPeer5UserpicFg: tg => mix(tg.windowBg, '#a695e7'),

	// #e16794; // pink group member name
	historyPeer6NameFg: tg => mix(tg.windowFg, '#e16794'),
	// #ffffff; // pink group member name in a selected message
	historyPeer6NameFgSelected: breeze.Selection.ForegroundNormal,
	// #ee7aae; // pink userpic background
	historyPeer6UserpicFg: tg => mix(tg.windowBg, '#ee7aae'),

	// #57c9e0; // sea group member name
	historyPeer7NameFg: tg => mix(tg.windowFg, '#57c9e0'),
	// #ffffff; // sea group member name in a selected message
	historyPeer7NameFgSelected: breeze.Selection.ForegroundNormal,
	// #6ec9cb; // sea userpic background
	historyPeer7UserpicFg: tg => mix(tg.windowBg, '#6ec9cb'),

	// #efb05d; // orange group member name
	historyPeer8NameFg: tg => mix(tg.windowFg, '#efb05d'),
	// #ffffff; // orange group member name in a selected message
	historyPeer8NameFgSelected: breeze.Selection.ForegroundNormal,
	// #eda86c; // orange userpic background
	historyPeer8UserpicFg: tg => mix(tg.windowBg, '#eda86c'),

	// windowFgActive; // default userpic initials
	historyPeerUserpicFg: 'windowFgActive',

	// #8989897a; // scroll bar current rectangle, the bar itself in the chat view (adjusted)
	historyScrollBarBg: 'scrollBarBg',
	// #6b6b6bbc; // scroll bar current rectangle with mouse over it in the chat view (adjusted)
	historyScrollBarBgOver: 'scrollBarBgOver',
	// #5f5f5f4c; // scroll bar background (adjusted)
	historyScrollBg: 'scrollBg',
	// #6262626b; // scroll bar background with mouse over the scroll bar (adjusted)
	historyScrollBgOver: 'scrollBgOver',

	// #33393f; // inbox message background
	msgInBg: breeze.Window.BackgroundNormal,
	// #009687; // inbox selected message background (and background of selected text in those messages)
	msgInBgSelected: tg => mix(tg.msgInBg, breeze.Selection.BackgroundNormal),
	// #2a2f33; // outbox message background
	msgOutBg: mix(breeze.Window.BackgroundNormal, breeze.Window.ForegroundNormal, 0.08),
	// #009687; // outbox selected message background (and background of selected text in those messages)
	msgOutBgSelected: tg => mix(tg.msgOutBg, breeze.Selection.BackgroundNormal),

	// #35d4bf4c; // overlay which is filling the media parts of selected messages (like in selected photo message)
	msgSelectOverlay: alpha(breeze.Selection.BackgroundNormal, '4c'),
	// #35d4bf7f; // overlay which is filling the selected sticker message
	msgStickerOverlay: alpha(breeze.Selection.BackgroundNormal, '7f'),

	// windowActiveTextFg; // inbox message information text (like information about a forwarded message original sender)
	msgInServiceFg: 'windowActiveTextFg',
	// #ffffff; // inbox selected message information text (like information about a forwarded message original sender)
	msgInServiceFgSelected: breeze.Selection.ForegroundNormal,
	// #60e5cb; // outbox message information text (like information about a forwarded message original sender)
	msgOutServiceFg: 'windowActiveTextFg',
	// #ffffff; // outbox message information text (like information about a forwarded message original sender)
	msgOutServiceFgSelected: breeze.Selection.ForegroundNormal,

	// #748ea200; // inbox message shadow (below the bubble)
	msgInShadow: tg => alpha(tg.msgInBg, 0.5),
	// #538ebb00; // inbox selected message shadow (below the bubble)
	msgInShadowSelected: 'msgInShadow',

	// #00000000; // outbox message shadow (below the bubble)
	msgOutShadow: tg => alpha(tg.msgOutBg, 0.5),
	// #37a78d00; // outbox selected message shadow (below the bubble)
	msgOutShadowSelected: 'msgOutShadow',

	// #828d94; // inbox message time text
	msgInDateFg: 'windowSubTextFg',
	// #ffffff; // inbox selected message time text
	msgInDateFgSelected: breeze.Selection.ForegroundNormal,
	// #737f87; // outbox message time text
	msgOutDateFg: 'windowSubTextFg',
	// #ffffff; // outbox selected message time text
	msgOutDateFgSelected: breeze.Selection.ForegroundNormal,

	// windowFgActive; // service message text (like date dividers or service message about the group title being changed)
	msgServiceFg: 'lightButtonFg',
	// #363c43c8; // service message background (like in a service message about group title being changed) (adjusted)
	msgServiceBg: 'lightButtonBg',
	// #009687; // service message selected text background (like in a service message about group title being changed) (adjusted)
	msgServiceBgSelected: tg => mix(tg.msgServiceBg, breeze.Selection.BackgroundNormal),

	// #32ceb9; // inbox message reply outline
	msgInReplyBarColor: tg => mix(tg.msgInBg, breeze.Window.DecorationFocus),
	// #ffffff; // inbox selected message reply outline
	msgInReplyBarSelColor: 'windowFg',
	// #32ceb9; // outbox message reply outline
	msgOutReplyBarColor: 'msgInReplyBarColor',
	// #ffffff; // outbox selected message reply outline
	msgOutReplyBarSelColor: 'windowFg',
	// msgServiceFg; // sticker message reply outline
	msgImgReplyBarColor: 'msgServiceFg',

	// #5aaba0; // inbox message monospace text (like a message sent with `test` text)
	msgInMonoFg: mix(breeze.Window.ForegroundNormal, breeze.Window.ForegroundPositive, 0.3),
	// #c2f2ec; // outbox message monospace text
	msgOutMonoFg: 'msgInMonoFg',
	// #a7fff4; // inbox message monospace text in a selected text or message
	msgInMonoFgSelected: 'msgInMonoFg',
	// #c9fff8; // outbox message monospace text in a selected text or message
	msgOutMonoFgSelected: 'msgOutMonoFg',

	// msgServiceFg; // media message time text (like time text in a sent photo)
	msgDateImgFg: 'msgServiceFg',
	// #00000054; // media message time bubble background (like time bubble in a sent photo) or file with thumbnail download icon circle background
	msgDateImgBg: tg => alpha(tg.windowBg, '54'),
	// #00000074; // media message download icon circle background with mouse over (like file with thumbnail download icon)
	msgDateImgBgOver: tg => alpha(tg.windowBg, '54'),
	// #1c706587; // selected media message time bubble background
	msgDateImgBgSelected: tg => alpha(tg.windowBgActive, '87'),

	// lightButtonFg; // inbox media file message with thumbnail download / open with button text
	msgFileThumbLinkInFg: 'lightButtonFg',
	// lightButtonFgOver; // inbox selected media file message with thumbnail download / open with button text
	msgFileThumbLinkInFgSelected: 'lightButtonFgOver',
	// #60e5cb; // outbox media file message with thumbnail download / open with button text
	msgFileThumbLinkOutFg: 'lightButtonFg',
	// #ffffff; // outbox selected media file message with thumbnail download / open with button text
	msgFileThumbLinkOutFgSelected: 'msgFileThumbLinkOutFg',

	// #50d4c3; // inbox audio file download circle background
	msgFileInBg: breeze.Window.ForegroundActive,
	// #48cfbd; // inbox audio file download circle background with mouse over
	msgFileInBgOver: 'msgFileInBg',
	// #ffffff; // inbox selected audio file download circle background
	msgFileInBgSelected: breeze.Selection.ForegroundNormal,
	// #11bfab; // outbox audio file download circle background
	msgFileOutBg: breeze.Window.ForegroundActive,
	// #ffffff; // outbox audio file download circle background with mouse over
	msgFileOutBgOver: 'msgFileOutBg',
	// #ffffff; // outbox selected audio file download circle background
	msgFileOutBgSelected: breeze.Selection.ForegroundNormal,

	// #3fbbab; // blue shared links / files without image square thumbnail
	msgFile1Bg: '#3fbbab',
	// #269f8f; // blue shared files without image download circle background
	msgFile1BgDark: '#269f8f',
	// #52c4b5; // blue shared files without image download circle background with mouse over
	msgFile1BgOver: '#52c4b5',
	// #ffffff; // blue shared files without image download circle background if file is selected
	msgFile1BgSelected: '#ffffff',

	// #8ef5e8; // green shared links / shared files without image square thumbnail
	msgFile2Bg: '#8ef5e8',
	// #7ef7e7; // green shared files without image download circle background
	msgFile2BgDark: '#7ef7e7',
	// #8df7e9; // green shared files without image download circle background with mouse over
	msgFile2BgOver: '#8df7e9',
	// #ffffff; // green shared files without image download circle background if file is selected
	msgFile2BgSelected: '#ffffff',

	// #e47272; // red shared links / shared files without image square thumbnail
	msgFile3Bg: '#e47272',
	// #cd5b5e; // red shared files without image download circle background
	msgFile3BgDark: '#cd5b5e',
	// #c35154; // red shared files without image download circle background with mouse over
	msgFile3BgOver: '#c35154',
	// #9f6a82; // red shared files without image download circle background if file is selected
	msgFile3BgSelected: '#9f6a82',

	// #efc274; // yellow shared links / shared files without image square thumbnail
	msgFile4Bg: '#efc274',
	// #e6a561; // yellow shared files without image download circle background
	msgFile4BgDark: '#e6a561',
	// #dc9c5a; // yellow shared files without image download circle background with mouse over
	msgFile4BgOver: '#dc9c5a',
	// #b19d84; // yellow shared files without image download circle background if file is selected
	msgFile4BgSelected: '#b19d84',

	// #33393f; // inbox file without thumbnail (like audio file) download arrow icon
	historyFileInIconFg: 'msgInBg',
	// #009687; // inbox selected file without thumbnail (like audio file) download arrow icon
	historyFileInIconFgSelected: 'msgInBgSelected',
	// #33393f; // inbox file without thumbnail (like audio file) radial download animation line
	historyFileInRadialFg: 'msgInBg',
	// historyFileInIconFgSelected; // inbox selected file without thumbnail (like audio file) radial download animation line
	historyFileInRadialFgSelected: 'historyFileInIconFgSelected',

	// #33393f; // outbox file without thumbnail (like audio file) download arrow icon
	historyFileOutIconFg: 'historyFileInIconFg',
	// #009687; // outbox selected file without thumbnail (like audio file) download arrow icon
	historyFileOutIconFgSelected: 'historyFileInIconFgSelected',
	// historyFileOutIconFg; // outbox file without thumbnail (like audio file) radial download animation line
	historyFileOutRadialFg: 'historyFileOutIconFg',
	// #009687; // outbox selected file without thumbnail (like audio file) radial download animation line
	historyFileOutRadialFgSelected: 'historyFileInIconFgSelected',

	// #efefef; // file with thumbnail (or photo / video) download arrow icon
	historyFileThumbIconFg: 'windowFg',
	// #ffffff; // selected file with thumbnail (or photo / video) download arrow icon
	historyFileThumbIconFgSelected: breeze.Selection.ForegroundNormal,
	// historyFileThumbIconFg; // file with thumbnail (or photo / video) radial download animation line
	historyFileThumbRadialFg: 'historyFileThumbIconFg',
	// #ffffff; // selected file with thumbnail (or photo / video) radial download animation line
	historyFileThumbRadialFgSelected: breeze.Selection.ForegroundNormal,

	// historyFileThumbIconFg; // radial playback progress in round video messages
	historyVideoMessageProgressFg: 'historyFileThumbIconFg',

	// windowBgActive; // inbox voice message active waveform lines (like played part of currently playing voice message)
	msgWaveformInActive: breeze.Window.ForegroundActive,
	// #ffffff; // inbox selected voice message active waveform lines (like played part of currently playing voice message)
	msgWaveformInActiveSelected: tg => mix(tg.msgWaveformInInactive, breeze.Selection.ForegroundNormal),
	// #5d6b76; // inbox voice message inactive waveform lines (like upcoming part of currently playing voice message)
	msgWaveformInInactive: breeze.Window.ForegroundInactive,
	// #41d1c0; // inbox selected voice message inactive waveform lines (like upcoming part of currently playing voice message)
	msgWaveformInInactiveSelected: 'historyFileInIconFg',

	// #11bfab; // outbox voice message active waveform lines (like played part of currently playing voice message)
	msgWaveformOutActive: 'msgWaveformInActive',
	// #ffffff; // outbox selected voice message active waveform lines (like played part of currently playing voice message)
	msgWaveformOutActiveSelected: 'msgWaveformInActiveSelected',
	// #596874; // outbox voice message inactive waveform lines (like upcoming part of currently playing voice message)
	msgWaveformOutInactive: 'msgWaveformInInactive',
	// #41d1c0; // outbox selected voice message inactive waveform lines (like upcoming part of currently playing voice message)
	msgWaveformOutInactiveSelected: 'msgWaveformInInactiveSelected',

	// #ffffff14; // this is painted over a bot inline keyboard button (which has msgServiceBg background) when mouse is over that button
	msgBotKbOverBgAdd: tg => alpha(tg.windowFg, '14'),
	// msgServiceFg; // bot inline keyboard button icon in the top-right corner (like in @vote bot when a poll is ready to be shared)
	msgBotKbIconFg: 'msgServiceFg',
	// #9e9d9d10; // bot inline keyboard button ripple effect
	msgBotKbRippleBg: 'lightButtonBgRipple',

	// msgInDateFg; // inbox media message status text (like in file that is being downloaded)
	mediaInFg: 'msgInDateFg',
	// msgInDateFgSelected; // inbox selected media message status text (like in file that is being downloaded)
	mediaInFgSelected: 'msgInDateFgSelected',
	// msgOutDateFg; // outbox media message status text (like in file that is being downloaded)
	mediaOutFg: 'msgOutDateFg',
	// msgOutDateFgSelected; // outbox selected media message status text (like in file that is being downloaded)
	mediaOutFgSelected: 'msgOutDateFgSelected',

	// #e83131c8; // youtube play icon background (when a link to a youtube video with a webpage preview is sent)
	youtubePlayIconBg: '#e83131c8',
	// windowFgActive; // youtube play icon arrow (when a link to a youtube video with a webpage preview is sent)
	youtubePlayIconFg: 'windowFgActive',

	// #0000007f; // other video play icon background (like when a link to a vimeo video with a webpage preview is sent)
	videoPlayIconBg: tg => alpha(tg.windowBg, '7f'),
	// #ffffff; // other video play icon arrow (like when a link to a vimeo video with a webpage preview is sent)
	videoPlayIconFg: 'windowFg',

	// #000000b2; // toast notification background (like when you click on your t.me link when editing your username)
	toastBg: alpha(breeze.Tooltip.BackgroundNormal, 'b2'),
	// windowFgActive; // toast notification text (like when you click on your t.me link when editing your username)
	toastFg: 'windowFgActive',

	// #363c42; // report spam panel background (like a non contact user writes your for the first time)
	reportSpamBg: breeze.Tooltip.BackgroundAlternate,
	// windowFg; // report spam panel text (when you send a report from that panel)
	reportSpamFg: breeze.Tooltip.ForegroundNormal,

	// #434d57; // arrow button background (to scroll to the end of the viewed chat)
	historyToDownBg: 'lightButtonBg',
	// #515b65; // arrow button background with mouse over
	historyToDownBgOver: 'lightButtonBgOver',
	// #636d77; // arrow button ripple effect
	historyToDownBgRipple: 'lightButtonBgRipple',
	// #adb4ba; // arrow button icon
	historyToDownFg: 'lightButtonFg',
	// menuIconFgOver; // arrow button icon with mouse over
	historyToDownFgOver: 'lightButtonFgOver',
	// #00000040; // arrow button shadow
	historyToDownShadow: tg => alpha(tg.historyToDownBg, 0.25),

	// #282e33; // history compose area background (message write area / reply information / forwarding information)
	historyComposeAreaBg: breeze.View.BackgroundNormal,
	// historyTextInFg; // history compose area text
	historyComposeAreaFg: breeze.View.ForegroundNormal,
	// msgInDateFg; // history compose area text when replying to a media message
	historyComposeAreaFgService: 'msgInDateFg',
	// menuIconFg; // history compose area icon (like emoji, attach, bot command..)
	historyComposeIconFg: 'menuIconFg',
	// menuIconFgOver; // history compose area icon with mouse over
	historyComposeIconFgOver: 'menuIconFgOver',

	// windowBgActive; // send message icon
	historySendIconFg: 'windowBgActive',
	// windowBgActive; // send message icon with mouse over
	historySendIconFgOver: 'windowBgActive',
	// historyComposeAreaBg; // pinned message area background
	historyPinnedBg: 'historyComposeAreaBg',

	// historyComposeAreaBg; // reply / forward / edit message area background
	historyReplyBg: 'historyComposeAreaBg',
	// windowBgActive; // reply / forward / edit message left icon
	historyReplyIconFg: 'windowBgActive',
	// cancelIconFg; // reply / forward / edit message cancel button
	historyReplyCancelFg: 'cancelIconFg',
	// cancelIconFgOver; // reply / forward / edit message cancel button with mouse over
	historyReplyCancelFgOver: 'cancelIconFgOver',

	// historyComposeAreaBg; // unblock / join channel / mute channel button background
	historyComposeButtonBg: breeze.View.BackgroundNormal,
	// #31363c; // unblock / join channel / mute channel button background with mouse over
	historyComposeButtonBgOver: t => mix(t.historyComposeButtonBg, t.historyComposeButtonBgRipple),
	// #272b2f; // unblock / join channel / mute channel button ripple effect
	historyComposeButtonBgRipple: breeze.View.BackgroundAlternate,

	// #00000040; // shared files / links checkbox background for not selected rows when some rows are selected
	overviewCheckBg: alpha(breeze.View.BackgroundNormal, '40'),
	// #ffffff; // shared files / links checkbox icon for not selected rows when some rows are selected
	overviewCheckFg: breeze.View.ForegroundNormal,
	// #ffffff; // shared files / links checkbox icon for selected rows
	overviewCheckFgActive: 'overviewCheckFg',
	// #40ace333; // shared photos / videos / links fill for selected rows
	overviewPhotoSelectOverlay: alpha(breeze.View.DecorationFocus, '33'),

	// #9c9c9c; // group members list in group profile user last seen text with mouse over
	profileStatusFgOver: 'windowFg',
	// windowBgActive; // profile verified check icon background
	profileVerifiedCheckBg: 'windowBgActive',
	// windowFgActive; // profile verified check icon tick
	profileVerifiedCheckFg: 'windowFgActive',
	// windowBgActive; // group members list admin star icon
	profileAdminStartFg: 'windowBgActive',

	// windowFg; // custom notifications settings box monitor color
	notificationsBoxMonitorFg: 'windowFg',
	// dialogsBgActive; // #6389a8; // custom notifications settings box monitor screen background
	notificationsBoxScreenBg: 'dialogsBgActive',

	// windowBgActive; // custom notifications settings box small sample userpic placeholder
	notificationSampleUserpicFg: 'windowBgActive',
	// #d7d7d7; // custom notifications settings box small sample close button placeholder
	notificationSampleCloseFg: 'windowFg',
	// #d7d7d7; // custom notifications settings box small sample text placeholder
	notificationSampleTextFg: 'windowFg',
	// #939393; // custom notifications settings box small sample name placeholder
	notificationSampleNameFg: 'windowFg',

	// notificationSampleTextFg; // change phone number box left simcard icon
	changePhoneSimcardFrom: 'notificationSampleTextFg',
	// notificationSampleNameFg; // change phone number box right simcard and plane icons
	changePhoneSimcardTo: 'notificationSampleNameFg',

	// windowBg; // main menu background
	mainMenuBg: 'windowBg',
	// #009687; // main menu top cover background
	mainMenuCoverBg: breeze.Window.DecorationFocus,
	// windowFgActive; // main menu top cover text
	mainMenuCoverFg: 'windowFgActive',
	// activeButtonFg; //
	mainMenuCloudFg: 'activeButtonFg',
	// #0e837f; //
	mainMenuCloudBg: tg => mix(tg.mainMenuBg, breeze.Window.DecorationFocus),

	// windowBg; // audio file player background
	mediaPlayerBg: 'windowBg',
	// windowBgActive; // audio file player playback progress already played part
	mediaPlayerActiveFg: 'windowBgActive',
	// sliderBgInactive; // audio file player playback progress upcoming (not played yet) part with mouse over
	mediaPlayerInactiveFg: 'sliderBgInactive',
	// #9dd1ef; // audio file player loading progress (when you're playing an audio file and switch to the previous one which is not loaded yet)
	mediaPlayerDisabledFg: breeze.Window.ForegroundInactive,

	// windowBg; // file rectangle background (when you view a png file in Media Viewer and go to a previous, not loaded yet, file)
	mediaviewFileBg: 'windowBg',
	// windowFg; // file name in file rectangle
	mediaviewFileNameFg: 'windowFg',

	// windowSubTextFg; // file size text in file rectangle
	mediaviewFileSizeFg: 'windowSubTextFg',
	// #d55959; // red file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .pdf)
	mediaviewFileRedCornerFg: '#d55959',
	// #e8a659; // yellow file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .zip)
	mediaviewFileYellowCornerFg: '#e8a659',
	// #49a957; // green file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .exe)
	mediaviewFileGreenCornerFg: '#49a957',
	// #599dcf; // blue file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .dmg)
	mediaviewFileBlueCornerFg: '#599dcf',

	// activeButtonFg; // file extension text in file thumbnail placeholder in file rectangle
	mediaviewFileExtFg: 'activeButtonFg',

	// #383838; // context menu in Media Viewer background
	mediaviewMenuBg: 'menuBg',
	// #505050; // context menu item background with mouse over
	mediaviewMenuBgOver: 'menuBgOver',
	// #676767; // context menu item ripple effect
	mediaviewMenuBgRipple: 'menuBgRipple',
	// windowFgActive; // context menu item text
	mediaviewMenuFg: 'windowFgActive',

	// #222222eb; // Media Viewer background
	mediaviewBg: alpha(breeze.View.BackgroundNormal, 'eb'),
	// imageBg; // Media Viewer background when viewing a video in full screen
	mediaviewVideoBg: 'imageBg',

	// #0000003c; // controls background (like next photo / previous photo)
	mediaviewControlBg: alpha(breeze.View.BackgroundNormal, '3c'),
	// windowFgActive; // controls icon (like next photo / previous photo)
	mediaviewControlFg: 'windowFgActive',
	// #11111180; // caption text background (when viewing photo with caption)
	mediaviewCaptionBg: alpha(breeze.View.BackgroundNormal, '80'),
	// mediaviewControlFg; // caption text
	mediaviewCaptionFg: 'mediaviewControlFg',

	// #66f7e4; // caption text link
	mediaviewTextLinkFg: breeze.View.ForegroundLink,

	// toastBg; // save to file toast message background in Media Viewer
	mediaviewSaveMsgBg: 'toastBg',
	// toastFg; // save to file toast message text
	mediaviewSaveMsgFg: 'toastFg',

	// #c7c7c7; // video playback progress already played part
	mediaviewPlaybackActive: 'mediaPlayerActiveFg',
	// #252525; // video playback progress upcoming (not played yet) part
	mediaviewPlaybackInactive: 'mediaPlayerBg',
	// #ffffff; // video playback progress already played part with mouse over
	mediaviewPlaybackActiveOver: 'mediaviewPlaybackActive',
	// #474747; // video playback progress upcoming (not played yet) part with mouse over
	mediaviewPlaybackInactiveOver: 'mediaPlayerInactiveFg',
	// #ffffffc7; // video playback progress text
	mediaviewPlaybackProgressFg: tg => alpha(tg.windowFg, 'c7'),

	// mediaviewPlaybackActive; // video playback controls icon
	mediaviewPlaybackIconFg: 'mediaviewPlaybackActive',
	// mediaviewPlaybackActiveOver; // video playback controls icon with mouse over
	mediaviewPlaybackIconFgOver: 'mediaviewPlaybackActiveOver',

	// #ffffff; // transparent filling part (when viewing a transparent .png file in Media Viewer)
	mediaviewTransparentBg: breeze.View.BackgroundNormal,
	// #cccccc; // another transparent filling part
	mediaviewTransparentFg: breeze.View.BackgroundAlternate,

	// windowBg; // custom notification window background
	notificationBg: 'windowBg',

	// #26282cf2; // phone call popup background
	callBg: tg => alpha(tg.windowBg, 'f2'),
	// #ffffff; // phone call popup name text
	callNameFg: 'windowFg',

	// #00000066; // phone call popup emoji fingerprint background
	callFingerprintBg: tg => alpha(tg.windowBg, '66'),

	// #aaabac; // phone call popup status text
	callStatusFg: breeze.Window.ForegroundInactive,

	// #ffffff; // phone call popup answer, hangup and mute mic icon
	callIconFg: 'windowFg',

	// #5ad1c1; // phone call popup answer button background
	callAnswerBg: 'activeButtonBg',
	// #42c2b1; // phone call popup answer button ripple effect
	callAnswerRipple: 'activeButtonBgRipple',
	// #3febc926; // phone call popup answer button outer ripple effect
	callAnswerBgOuter: tg => alpha(tg.activeButtonBg, '26'),

	// #d75a5a; // phone call popup hangup button background
	callHangupBg: 'attentionButtonBg',
	// #c04646; // phone call popup hangup button ripple effect
	callHangupRipple: 'attentionButtonBgRipple',

	// #ffffff; // phone call popup line busy cancel button background
	callCancelBg: 'lightButtonBg',
	// #777777; // phone call popup line busy cancel button icon
	callCancelFg: 'lightButtonFg',
	// #f1f1f1; // phone call popup line busy cancel button ripple effect
	callCancelRipple: 'lightButtonBgRipple',

	// #ffffff12; // phone call popup mute mic ripple effect
	callMuteRipple: tg => alpha(tg.windowFg, '12'),

	// dialogsBgActive; // active phone call bar background
	callBarBg: 'dialogsBgActive',
	// dialogsRippleBgActive; // active phone call bar mute and hangup button ripple effect
	callBarMuteRipple: 'dialogsRippleBgActive',
	// #8f8f8f; // phone call bar with muted mic background
	callBarBgMuted: breeze.Window.ForegroundInactive,
	// #7f7f7f; // phone call bar with muted mic mute and hangup button ripple effect
	callBarUnmuteRipple: breeze.Window.BackgroundNormal,
	// dialogsNameFgActive; // phone call bar text and icons
	callBarFg: 'dialogsNameFgActive',

	// toastBg; //
	importantTooltipBg: 'toastBg',
	// toastFg; //
	importantTooltipFg: 'toastFg',
	// #65fce8; //
	importantTooltipFgLink: breeze.Tooltip.ForegroundLink,

	// #3d444b;
	botKbBg: breeze.Window.BackgroundNormal,
	// #494f55;
	botKbDownBg: breeze.Window.BackgroundAlternate,

	// #6c7278;
	emojiIconFg: 'windowFg',
	// #36cdb9;
	emojiIconFgActive: breeze.Tooltip.ForegroundLink,

	// #e4eaef;
	overviewCheckBorder: 'windowFg',
});
