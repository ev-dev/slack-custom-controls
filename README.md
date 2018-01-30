# Slack Custom Controls
Slack is slacking on some pretty basic features. Here is a script to install some custom addons. This places convenient buttons for toggling the Channels Sidebar and a global Darkmode theme.

### Screenshot
[![https://gyazo.com/8c96fe49b1ccd2ea8634f7d8171d7ac4](https://i.gyazo.com/8c96fe49b1ccd2ea8634f7d8171d7ac4.gif)](https://gyazo.com/8c96fe49b1ccd2ea8634f7d8171d7ac4)

### Only tested in OS X Desktop version

# Instructions
Included in this repo is an install script which simply moves a modified file of the Slack source code into place and backs up the original. To uninstall, run uninstall script. 

```bash
$ git clone https://github.com/ev-dev/slack-custom-controls.git
$ cd slack-custom-controls
$ ./install
```

Important: Install and Uninstall scripts use relative paths so they MUST be ran from within your cloned repo's directory. Please `cd` into the repo directory before running.


## TODO
- Port to Slack web app
- Fix threads in DarkMode
- Fix code snippets in DarkMode
- Other DarkMode fixes