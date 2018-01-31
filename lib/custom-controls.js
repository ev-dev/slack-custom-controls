const { get } = require('https')

const remoteStyles = 'https://raw.githubusercontent.com/ev-dev/slack-custom-controls/remote-lib-files/lib/dark.css'

get(remoteStyles, resp => {
  let data = ''
  resp.on('data', chunk => {
    data += chunk
  })

  resp.on('end', () => {
    window.DARK_CSS = data
  })
})

// Initialize DarkMode Theme
window.initDarkMode = () => {
  $('<style></style>').appendTo('head').html(window.DARK_CSS)
  window.darkModeEnabled = true
}

// Initialize Default Theme Styles
window.initDefaultMode = () => {
  if (window.darkModeEnabled) {
    $('head').children().last().remove()
    window.darkModeEnabled = false
  }
}

// Initialize Buttons On Main Window
setInterval(() => {
  (() => {
    window.customControlsLoaded = document.getElementsByClassName('custom-controls-div')[0] !== undefined

    if (!window.customControlsLoaded) {
      $('<div></div>')
        .addClass('custom-controls-div')
        .css('margin-top', '-15px')
        .css('margin-left', '10px')
        .prependTo('.messages_header');

      $('<button>Dark Mode</button>')
        .addClass('darkmode-toggle-btn')
        .addClass('custom-control-btn')
        .prependTo('.custom-controls-div')
        .click(() => {
          if (window.darkModeEnabled) window.initDefaultMode()
          else window.initDarkMode()
        });

      $('<button>Sidebar</button>')
        .addClass('sidebar-toggle-btn')
        .addClass('custom-control-btn')
        .css('margin-bottom', '3px')
        .prependTo('.custom-controls-div')
        .click(() => {
          const sidebar = $('.client_channels_list_container')
          if (sidebar.css('display') !== 'none') sidebar.css('display', 'none')
          else sidebar.css('display', 'flex')
        });

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
  })()
}, 2000)
