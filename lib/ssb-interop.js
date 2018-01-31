
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
 Report Issues At: 
 https://github.com/ev-dev/slack-custom-controls
****************************************/

const { get } = require('https')

const remoteScript = 'https://raw.githubusercontent.com/ev-dev/slack-custom-controls/remote-lib-files/lib/custom-controls.js'

get(remoteScript, resp => {
  let data = ''
  resp.on('data', chunk => {
    data += chunk
  })

  resp.on('end', () => {
    document.addEventListener('DOMContentLoaded', () => {
      eval(data)
    }
  })
})
