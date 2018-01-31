
// All of this is from the original source code
require('../stat-cache');

const { init } = require('electron-compile');
const { assignIn } = require('lodash');
const path = require('path');

const { isPrebuilt } = require('../utils/process-helpers');
const profiler = require('../utils/profiler.js');

if (profiler.shouldProfile()) profiler.startProfiling();

process.on('uncaughtException', (e) => console.error(e));

const processRef = window.process;
process.once('loaded', () => {
  window.process = processRef;
});

const loadSettings = window.loadSettings = assignIn({},
  require('electron').remote.getGlobal('loadSettings'),
  { windowType: 'webapp' }
);

const resourcePath = path.join(__dirname, '..', '..');
const mainModule = require.resolve('../ssb/main.ts');
const isDevMode = loadSettings.devMode && isPrebuilt();

init(resourcePath, mainModule, !isDevMode);


/****************************************
 CUSTOM MODIFICATIONS BELOW 
 Report Issues At: 
 https://github.com/ev-dev/slack-custom-controls
****************************************/

const { readFile } = require('fs')
const darkModeStyles = path.join(__dirname, '..', '..', '..', 'app.asar.unpacked', 'src', 'static', 'dark.css')

// Get Dark Mode styles ready on App Launch
readFile(darkModeStyles, 'utf8', (err, css) => {
  if (err) console.error(err)
  window.darkModeStyles = css
})

// Initialize Buttons On Main Window
window.initCustomControls = () => {
  window.customControlsLoaded = document.getElementsByClassName('custom-controls-div')[0] !== undefined

  if (!window.customControlsLoaded)	{
    $('<div></div>')
      .addClass('custom-controls-div')
      .css('margin-top', '-15px')
      .css('margin-left', '10px')
      .prependTo('.messages_header');
    
    $('<button>Dark Mode</button>')
      .addClass('darkmode-toggle-btn')
      .addClass('custom-control-btn')
      .prependTo('.custom-controls-div')
      .click(window.toggleDarkMode);

    $('<button>Sidebar</button>')
      .addClass('sidebar-toggle-btn')
      .addClass('custom-control-btn')
      .css('margin-bottom', '3px')
      .prependTo('.custom-controls-div')
      .click(window.toggleSidebar);

    $('.custom-control-btn')
    	.css('display', 'block')
      .css('width', '95px')
      .css('height', '27px')
      .css('padding-top', '1px')
      .css('font-size', '15px')
      .css('background-color', '#4D394B')
      .css('color', 'white')
      .css('border', '0')
      .css('border-radius', '5%');
  }	
}

// Toggle Sidebar
window.toggleSidebar = () => {
  const sidebar = $('.client_channels_list_container')
  if (sidebar.css('display') !== 'none') {
    sidebar.css('display', 'none')
    window.sidebarEnabled = true
  } else {
    sidebar.css('display', 'flex')
    window.sidebarEnabled = false
  }
}

// Toggle Dark Theme Mode
window.toggleDarkMode = () => {
  if (window.darkModeEnabled) {
    $('head').children().last().remove()
    window.darkModeEnabled = false
  } else {
    $('<style></style>').appendTo('head').html(window.darkModeStyles)
    window.darkModeEnabled = true
  }
}

// Initialize Custom Controls
document.addEventListener('DOMContentLoaded', () => {  
  // Interval exists to persist controls after navigating to new Workspace
  // Eventually replace this with an Event based solution
  setInterval(() => {  
    window.initCustomControls()
  }, 2000)

  // Keyboard Shortcuts! Toggle Dark Mode (Cmd+D) & Toggle Sidebar (Cmd+B)
  document.addEventListener('keydown', ({ keyCode, metaKey }) => {
		console.log('\n\n\nKEYCODE = ', keyCode, '\n\n\n')
    if (keyCode === 68 && metaKey) window.toggleDarkMode()
    if (keyCode === 66 && metaKey) window.toggleSidebar()
  })
})
