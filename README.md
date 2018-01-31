# Slack Custom Controls
Slacks' slacking on some pretty basic features. Here is an easy script to install some useful addons.

## Features
- Dark Mode Theme
- Hide Channels Sidebar for more screen space
- Convenient buttons for toggling features
- **Keyboard Shortcuts:**  _Toggle Dark Theme_ [ **⌘-D** ] & _Toggle Sidebar_ [ **⌘-B** ]

## Screenshot
[![https://gyazo.com/451567e9ddaa44cb675c48f016d085e8](https://i.gyazo.com/451567e9ddaa44cb675c48f016d085e8.gif)](https://gyazo.com/451567e9ddaa44cb675c48f016d085e8)
**_Only For OS X Desktop Version_**

## Instructions
Included in this repo is an install script which simply moves a modified file of the Slack source code into place and backs up the original.

```bash
$ git clone https://github.com/ev-dev/slack-custom-controls.git
$ cd slack-custom-controls
$ ./install
```

To uninstall, run uninstall script from within the same directory.  

**Important:** _Install and uninstall scripts use relative paths._ Do **not** run from outside the repo's root directory. Always `cd` into repo directory before running either script.  

**Note:** Scripts will ask for your password..This is because some users don't own their `/Applications` directory and therefore cannot perform file operations on the Slack.app contents files.

## Sidebar Theme
Additionally, you can update your Sidebar's theme from the Preferences. To match the Dark Mode Theme colorscheme of this project:
- From the menu, go to **_Preferences_** ➪ **_Sidebar_** ➪ **_Theme_**
- At the bottom click **_Customize Your Theme_** and clear the textbox
- Paste the follow Hex colors:  
`#222222,#444A47,#D39B46,#FFFFFF,#434745,#FFFFFF,#99D04A,#DB6668`

## Feature Requests
Want anything else out of Slack? Make an issue.

## Slack Desktop Too **Bulky**?
If Slack.app takes up too much system resources and you use the web version, you can still customize your slack from this fantastic extension which has custom styles for many popular sites.
- Stylish Chrome Extension:  [_Link to Chrome Webstore_](https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcff)
- Stylish Firefox Add-on:  [_Link to Firefox Add-on_](https://addons.mozilla.org/en-US/firefox/addon/stylish/)
- Slack Styles For Stylish Extension/Add-on:  [_Link to Stylish Themes for Slack_](https://userstyles.org/styles/browse?search_terms=slack)  
  
Other options for easing your weary eyes:
- [_Dark Reader Chrome Extension_](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh)
- [_Hacker Vision Chrome Extension_](https://chrome.google.com/webstore/detail/hacker-vision/fommidcneendjonelhhhkmoekeicedej)

### Credits
Lots of credit goes to a chain of repositories starting from:
- https://github.com/ashutosh-shirole/slack-dark-theme.git
