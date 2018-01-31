# Slack Custom Controls
Slack is slacking on some pretty basic features. Here is a script to install some custom addons. 

## Features
- Dark Mode Theme
- Hide Channels Sidebar for more screen space
- Convenient buttons for toggling features
- Keyboard shortcuts!  Toggle Dark Theme (⌘ + D) & Toggle Sidebar (⌘ + S)

### Screenshot
[![https://gyazo.com/451567e9ddaa44cb675c48f016d085e8](https://i.gyazo.com/451567e9ddaa44cb675c48f016d085e8.gif)](https://gyazo.com/451567e9ddaa44cb675c48f016d085e8)

### Only For OS X Desktop Version

# Instructions
Included in this repo is an install script which simply moves a modified file of the Slack source code into place and backs up the original. To uninstall, run uninstall script. 

```bash
$ git clone https://github.com/ev-dev/slack-custom-controls.git
$ cd slack-custom-controls
$ ./install
```

Important: Install and Uninstall scripts use relative paths so they MUST be ran from within your cloned repo's directory. Please `cd` into the repo directory before running.

### Sidbar Theme
Additionally, you can update your Sidebar's theme to match the Dark Mode Theme. The setting is in the Slack Preferences.
- From the menu, Go to `Preferences > Sidebar > Theme`
- At the bottom click `Customize your theme` and clear the textbox
- Paste the follow Hex colors:
- `#222222,#444A47,#D39B46,#FFFFFF,#434745,#FFFFFF,#99D04A,#DB6668`


## Feature Requests
Want anything else out of Slack? Make an issue.

## TODO
- Port to Slack web app

### CREDITS
Lots of credit to this repository for providing an extensive list of styling rules
- https://github.com/ashutosh-shirole/slack-dark-theme.git
