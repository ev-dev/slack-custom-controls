/**
 * The preload script needs to stay in regular ole JavaScript, because it is
 * the point of entry for electron-compile.
 */
require('../stat-cache');

const { init } = require('electron-compile');
const { assignIn } = require('lodash');
const path = require('path');

const { isPrebuilt } = require('../utils/process-helpers');
const profiler = require('../utils/profiler.js');

if (profiler.shouldProfile()) profiler.startProfiling();

process.on('uncaughtException', (e) => console.error(e));

/**
 * Patch Node.js globals back in, refer to
 * https://electron.atom.io/docs/api/process/#event-loaded.
 */
const processRef = window.process;
process.once('loaded', () => {
  window.process = processRef;
});

/**
 * loadSettings are just the command-line arguments we're concerned with, in
 * this case developer vs production mode.
 */
const loadSettings = window.loadSettings = assignIn({},
  require('electron').remote.getGlobal('loadSettings'),
  { windowType: 'webapp' }
);

const resourcePath = path.join(__dirname, '..', '..');
const mainModule = require.resolve('../ssb/main.ts');
const isDevMode = loadSettings.devMode && isPrebuilt();

init(resourcePath, mainModule, !isDevMode);


// --------- MODIFICATIONS ---------
	
// CUSTOM CONTROLS
window.initCustomControls = () => {
	window.customControlsLoaded = document.getElementsByClassName('custom-controls-div')[0] !== undefined

	if (!window.customControlsLoaded)	{
		$('<div></div>')
			.addClass('custom-controls-div')
			.css('margin-left', '15px', 'text-align', 'center')
			.prependTo('.messages_header');
		
		$('<button>DarkMode</button>')
			.addClass('darkmode-toggle-btn')
			.addClass('custom-control-btn')
			.prependTo('.custom-controls-div')
			.click(() => {
				if (window.customTheme === 'default') window.setThemeDark()
				else window.setThemeDefault()
			});

		$('<button>Sidebar</button>')
			.addClass('sidebar-toggle-btn')
			.addClass('custom-control-btn')
			.prependTo('.custom-controls-div')
			.click(() => {
				const sidebar = $('.client_channels_list_container')
				if (sidebar.css('display') !== 'none') sidebar.css('display', 'none')
				else sidebar.css('display', 'flex')
			});

		$('.custom-control-btn')
			.css('width', '95px')
			.css('margin', '2px')
			.css('background-color', '#4D394B')
			.css('color', 'white')
			.css('border', '0')
			.css('border-radius', '5%')
	}	
}

// GLOBAL THEME CHANGER FUNCTION
window.setThemeDark = () => {
	window.customTheme = 'dark'
	
	$('.c-virtual_list__scroll_container')
		.css('background-color', '#242424')
	
	$('#footer_msgs')
		.css('background-color', '#242424')
	
	$('#msg_input')
		.css('background-color', '#121212', 'color', 'white')
	
	$('.c-message_list__day_divider__label__pill')
		.css('background-color', 'grey')
	
	$('.ql-container.texty_single_line_input .ql-editor')
		.css('background-color', '#121212')
		
	$('.ql-container.texty_single_line_input .ql-editor, .ql-container.texty_single_line_input .ql-placeholder')
		.css('background-color', 'white');
	
	$('.c-message__body')
		.css('color', '#E2E2E2')
	
	$('.c-message__sender_link')
		.css('color', '#757575')
	
	$('.c-timestamp__label')
		.css('color', 'yellow')
	
	$('.c-mrkdwn__member--link, .c-mrkdwn__subteam--link')
		.css('background-color', '#121212')

	// Interval to set style for new messages that appear in on scroll
	console.log('\n\n*** INITIALIZING DARK THEME STYLES INTERVAL ***\n\n')
	
	window.themeInterval = setInterval(() => {
		$('.c-virtual_list__item > div')
			.css('background-color', '#242424')	
			
		$('.c-message__body')
			.css('color', '#E2E2E2')

		$('.c-message__sender_link')
			.css('color', '#757575')

		$('.c-timestamp__label')
			.css('color', 'yellow')

		$('.c-mrkdwn__member--link, .c-mrkdwn__subteam--link')
			.css('background-color', '#121212')

		$('.ql-editor p')
			.css('color', 'white')
	}, 1000)
}


// GLOBAL THEME CHANGER FUNCTION
window.setThemeDefault = () => {
	window.customTheme = 'default'
	
	clearInterval(window.themeInterval)

	$('<style>.p-message_pane .c-message_list:not(.c-virtual_list--scrollbar):before, .p-message_pane .c-message_list.c-virtual_list--scrollbar > .c-scrollbar__hider:before{background-color: #fff;}</style>').appendTo('head')

	$('.c-virtual_list__scroll_container')
		.css('background-color', 'rgba(0, 0, 0, 0)')

	$('.c-message__body')
		.css('color', 'rgb(44, 45, 48)')
	
	$('.c-message__sender_link')
		.css('color', 'rgb(44, 45, 48)')
	
	$('.c-timestamp__label')
		.css('color', 'rgb(160, 160, 162)')
	
	$('.c-mrkdwn__member--link, .c-mrkdwn__subteam--link')
		.css('background-color', 'rgb(234, 245, 252)')

	$('#footer_msgs')
		.css('background-color', 'rgba(0, 0, 0, 0)')

	$('#msg_input')
		.css('background-color', 'rgb(255, 255, 255)')

	$('.channel_header')
		.css('background-color', 'rgb(255, 255, 255)')

	$('#channel_title')
		.css('color', 'rgb(44, 45, 48)')

	$('.c-message_list__day_divider__label__pill')
		.css('background-color', 'rgb(255, 255, 255)')

	$('#channel_topic_text')
		.css('background-color', 'rgba(0, 0, 0, 0)')
	
	$('.ql-container.texty_single_line_input .ql-editor')
		.css('background-color', 'rgba(0, 0, 0, 0)')
	
	$('.ql-container.texty_single_line_input .ql-editor, .ql-container.texty_single_line_input .ql-placeholder')
		.css('background-color', 'rgba(0, 0, 0, 0)')
}


// INITIAL LOAD THEME
document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		if (process.env.SLACK_CUSTOM_THEME === 'dark')
			window.setThemeDark()
		else 
			window.customTheme = 'default'
	}, 1500)
	
	setTimeout(() => {
		setInterval(() => {
			window.initCustomControls()
		}, 2000)
	}, 7000)

	// LISTEN FOR SHORTCUT KEYS CTRL+SHIFT+D
	document.addEventListener('keydown', evt => {
		if (evt.keyCode === 68 && (evt.ctrlKey && evt.shiftKey)) {
			if (window.customTheme === 'default') 
				window.setThemeDark()
			else 
				window.setThemeDefault()
		}
	})
})

