# Slack Custom Controls
Slacks' slacking on some pretty basic features. Here is an easy script to install some useful addons.

## Features
- Dark Mode Theme
- Hide Channels Sidebar for more screen space
- Convenient buttons for toggling features
- Keyboard shortcuts:  Toggle Dark Theme (⌘-D) & Toggle Sidebar (⌘-S)

### Screenshot
[![https://gyazo.com/451567e9ddaa44cb675c48f016d085e8](https://i.gyazo.com/451567e9ddaa44cb675c48f016d085e8.gif)](https://gyazo.com/451567e9ddaa44cb675c48f016d085e8)
**__Only For OS X Desktop Version__**

## Instructions
Included in this repo is an install script which simply moves a modified file of the Slack source code into place and backs up the original. To uninstall, run uninstall script. 

```bash
$ git clone https://github.com/ev-dev/slack-custom-controls.git
$ cd slack-custom-controls
$ ./install
```

Important: Install and Uninstall scripts use relative paths so they MUST be ran from within your cloned repo's directory. Please `cd` into the repo directory before running.

## Sidebar Theme
Additionally, you can update your Sidebar's theme from the Preferences. To match the Dark Mode Theme colorscheme of this project:
- From the menu, go to **_Preferences_** ➪ **_Sidebar_** ➪ **_Theme_**
- At the bottom click **_Customize Your Theme_** and clear the textbox
- Paste the follow Hex colors:  `#222222,#444A47,#D39B46,#FFFFFF,#434745,#FFFFFF,#99D04A,#DB6668`

## Feature Requests
Want anything else out of Slack? Make an issue.

## Slack Desktop Too **Bulky**?
If Slack.app takes up too much system resources and you use the web version, you can still customize your slack from this fantastic extension:
- Stylish Chrome Extension:  [_link to chrome webstore_](https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcff)
- Stylish Firefox Add-on:  [_link to firefox add-on_](https://addons.mozilla.org/en-US/firefox/addon/stylish/)
- Custom Slack Styles For Stylish Extension/Add-on:  [_link to stylish page_](https://userstyles.org/styles/browse?search_terms=slack)

### Credits
Lots of credit goes to a chain of repositories starting from:
- https://github.com/ashutosh-shirole/slack-dark-theme.git
