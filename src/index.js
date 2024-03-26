import * as Blockly from "blockly";
import { blocks } from "./blocks/computcraft";
import { forBlock } from "./generators/lua";
import { luaGenerator } from "blockly/lua";
import { save, load } from "./serialization";
import { toolbox } from "./toolbox";
import Prism from "prismjs";
import "./prismjs/prism-lua.js";
import "./prismjs/prism-dark.css";
import "./index.css";
import "./toolbox_style.css";

import {shadowBlockConversionChangeListener} from '@blockly/shadow-block-converter';

Prism.highlightAll();

const secret = require('./secret.json');

// Variables
const version = "1.1.6";
const date = new Date().toUTCString();


Blockly.common.defineBlocks(blocks);
Object.assign(luaGenerator.forBlock, forBlock);

const codeDiv = document.getElementById("generatedCode").firstChild;
const blocklyDiv = document.getElementById("blocklyDiv");
const ws = Blockly.inject(blocklyDiv, { toolbox });

ws.addChangeListener(shadowBlockConversionChangeListener);

function htmlDecode(input){
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const runCode = () => {
  const code = luaGenerator.workspaceToCode(ws).replace(/<br>/g, '\n');
  codeDiv.textContent = htmlDecode(code);
  Prism.highlightElement(codeDiv);
};

runCode();

ws.addChangeListener((e) => {
  if (e.isUiEvent) return;
  save(ws);
});

ws.addChangeListener((e) => {
  if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING || ws.isDragging()) {
    return;
  }
  runCode();
});


// Theme

const theme = Blockly.Theme.defineTheme('computcraft', {
  'base': Blockly.Themes.Classic,
  'categoryStyles': {
    'table_category': {
      'colour': '#943794',
    },
    'redstone_category': {
      'colour': '#B01113',
    },
    'rednet_category': {
      'colour': '#C15100',
    },
    'turtle_category': {
      'colour': '#00B400',
    },
    'peripheral_category': {
      'colour': '#BCA400',
    },
    'disk_category': {
      'colour': '#276359',
    },
    'filesystem_category': {
      'colour': '#005C9A',
    },
    'base_category': {
      'colour': '#CFCA77',
    },
    'http_category': {
      'colour': '#008B8B',
    },
    'monitor_category': {
      'colour': '#D4A017',
    },
    'printer_category': {
      'colour': '#9E23FF',
    },
  },

  'blockStyles': {
    'table_category': {
      'colourPrimary': '#943794',
      'colourSecondary': '#7B2CBF',
      'colourTertiary': '#5C007A',
    },
    'computcraft_block': {
      'colourPrimary': '#4C97FF',
      'colourSecondary': '#3373CC',
      'colourTertiary': '#2E5BAE',
    },
  },
});


ws.setTheme(theme);


const copyButton = document.getElementById('copyButton');
const fileName = document.getElementById('fileName');
const downloadButton = document.getElementById('downloadButton');
const loadButton = document.getElementById('loadButton');

const copyCode = () => {
  const code = luaGenerator.workspaceToCode(ws);
  navigator.clipboard.writeText(code);
};

const downloadWorkspace = () => {
  const json = {
    "name": fileName.value || "workspace",
    "version": version,
    "date": date,
    "workspace": save(ws),
    "lua": luaGenerator.workspaceToCode(ws)
  }
  const blob = new Blob([JSON.stringify(json)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = (fileName.value || 'workspace.json') + '.ccbe';
  a.click();
};

const downloadLua = () => {
  const code = luaGenerator.workspaceToCode(ws);
  const blob = new Blob([code], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = (fileName.value || 'workspace') + '.lua';
  a.click();
};

const loadWorkspace = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.ccbe';
  input.click();
  input.onchange = () => {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const json = JSON.parse(reader.result);
      load(ws, json['workspace']);
      fileName.value = json['name'];
      codeDiv.innerText = json['lua'];
    };
    reader.readAsText(file);
  };
};

//const uploadToPastebin = () => {
//  const code = luaGenerator.workspaceToCode(ws);
//  const xhr = new XMLHttpRequest();
//  xhr.open('POST', 'https://pastebin.com/api/api_post.php', true);
//  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//  xhr.onreadystatechange = () => {
//    if (xhr.readyState == 4 && xhr.status == 200) {
//      const url = xhr.responseText;
//      const a = document.createElement('a');
//      a.href = url;
//      a.target = '_blank';
//      a.click();
//    }
//  };
//  if (secret['connected'] === false) {
//    xhr.send(`api_dev_key=${secret['api_dev_key']}&api_user_key=${secret['api_user_key']}&api_folder_key=5BbL8uf5&api_option=paste&api_paste_code=${encodeURIComponent(code)}&api_paste_private=1&api_paste_name=${(fileName.value || 'workspace') + ' | lua (' + Math.random().toString(36).substring(7) + ')'}&api_paste_format=lua`);
//  } else {
//    xhr.send(`api_dev_key=${secret['api_dev_key']}&api_option=paste&api_paste_code=${encodeURIComponent(code)}&api_paste_private=1&api_paste_name=${(fileName.value || 'workspace') + ' | lua (' + Math.random().toString(36).substring(7) + ')'}&api_paste_format=lua`);
//  }
//}

//const uploadWorkspaceToPastebin = () => {
//  const workspace = save(ws);
//  const xhr = new XMLHttpRequest();
//  xhr.open('POST', 'https://pastebin.com/api/api_post.php', true);
//  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//  xhr.onreadystatechange = () => {
//    if (xhr.readyState == 4 && xhr.status == 200) {
//      const url = xhr.responseText;
//      const a = document.createElement('a');
//      a.href = url;
//      a.target = '_blank';
//      a.click();
//    }
//  };
//  if (secret['connected'] === false) {
//    xhr.send(`api_dev_key=${secret['api_dev_key']}&api_user_key=${secret['api_user_key']}&api_folder_key=5BbL8uf5&api_option=paste&api_paste_code=${encodeURIComponent(workspace)}&api_paste_private=1&api_paste_name=${(fileName.value || 'workspace') + ' | workspace (' + Math.random().toString(36).substring(7) + ')'}&api_paste_format=json`);
//  } else {
//    xhr.send(`api_dev_key=${secret['api_dev_key']}&api_option=paste&api_paste_code=${encodeURIComponent(workspace)}&api_paste_private=1&api_paste_name=${(fileName.value || 'workspace') + ' | workspace (' + Math.random().toString(36).substring(7) + ')'}&api_paste_format=json`);
//  }
//}

//const loadWorkspaceFromPastebin = () => {
//  const id = prompt('Enter pastebin ID');
//  if (!id) return;
//  const xhr = new XMLHttpRequest();
//  xhr.open('GET', `pastebin.php?id=${id}`, true);
//  xhr.onreadystatechange = () => {
//    if (xhr.readyState == 4 && xhr.status == 200) {
//      load(ws, xhr.responseText);
//      console.log(xhr.responseText);
//    }
//  };
//  xhr.send();
//}

//const connectToPastebin = () => {
//  const username = prompt('Enter pastebin username');
//  const password = prompt('Enter pastebin password');
//  const xhr = new XMLHttpRequest();
//  xhr.open('POST', 'https://pastebin.com/api/api_login.php', true);
//  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//  xhr.onreadystatechange = () => {
//    if (xhr.readyState == 4 && xhr.status == 200) {
//      const response = xhr.responseText;
//      if (response.startsWith('Bad API request')) {
//        alert('Invalid username or password');
//      } else {
//        secret['api_user_key'] = response;
//        alert('Connected to pastebin');
//        connectButton.disabled = true;
//        connectButton.innerText = 'Connected';
//      }
//    }
//  };
//  xhr.send(`api_dev_key=${secret['api_dev_key']}&api_user_name=${username}&api_user_password=${password}`);
//}


copyButton.onclick = copyCode;
downloadButton.onclick = downloadWorkspace;
downloadLuaButton.onclick = downloadLua;
loadButton.onclick = loadWorkspace;
//connectButton.onclick = connectToPastebin;
//uploadButton.onclick = uploadToPastebin;
//uploadWorkspaceButton.onclick = uploadWorkspaceToPastebin;
//loadWorkspaceButton.onclick = loadWorkspaceFromPastebin;