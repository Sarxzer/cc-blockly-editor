import * as Blockly from "blockly";
import { blocks } from "./blocks/text";
import { forBlock } from "./generators/javascript";
import { luaGenerator } from "blockly/lua";
import { save, load } from "./serialization";
import { toolbox } from "./toolbox";
import "./index.css";

import {shadowBlockConversionChangeListener} from '@blockly/shadow-block-converter';

Blockly.common.defineBlocks(blocks);
Object.assign(luaGenerator.forBlock, forBlock);

const codeDiv = document.getElementById("generatedCode").firstChild;
const outputDiv = document.getElementById("output");
const blocklyDiv = document.getElementById("blocklyDiv");
const ws = Blockly.inject(blocklyDiv, { toolbox });

ws.addChangeListener(shadowBlockConversionChangeListener);

const runCode = () => {
  const code = luaGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
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

const fileName = document.getElementById('fileName');
const downloadButton = document.getElementById('downloadButton');
const loadButton = document.getElementById('loadButton');

const downloadWorkspace = () => {
  const json = save(ws);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName.value || 'workspace.json';
  a.click();
};

const loadWorkspace = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.click();
  input.onchange = () => {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      load(ws, reader.result);
    };
    reader.readAsText(file);
  };
};

const uploadToPastebin = () => {
  const code = luaGenerator.workspaceToCode(ws);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://pastebin.com/api/api_post.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const url = xhr.responseText;
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.click();
    }
  };
  xhr.send(`api_dev_key=nSfNmQEF3ttNwx-zjU5MvguXnz8Oruw7&api_user_key=d43a286490fa94b7d413dd2f5eb8d38d&api_folder_key=5BbL8uf5&api_option=paste&api_paste_code=${encodeURIComponent(code)}&api_paste_private=1&api_paste_name=${(fileName.value || 'workspace') + ' | lua (' + Math.random().toString(36).substring(7) + ')'}&api_paste_format=lua`);
}

const uploadWorkspaceToPastebin = () => {
  const workspace = save(ws);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://pastebin.com/api/api_post.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const url = xhr.responseText;
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.click();
    }
  };
  xhr.send(`api_dev_key=nSfNmQEF3ttNwx-zjU5MvguXnz8Oruw7&api_user_key=d43a286490fa94b7d413dd2f5eb8d38d&api_folder_key=5BbL8uf5&api_option=paste&api_paste_code=${encodeURIComponent(workspace)}&api_paste_private=1&api_paste_name=${(fileName.value || 'workspace') + ' | workspace (' + Math.random().toString(36).substring(7) + ')'}&api_paste_format=json`);
}

const loadWorkspaceFromPastebin = () => {
  const id = prompt('Enter pastebin ID');
  if (!id) return;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `pastebin.php?id=${id}`, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      load(ws, xhr.responseText);
      console.log(xhr.responseText);
    }
  };
  xhr.send();
}

downloadButton.onclick = downloadWorkspace;
uploadButton.onclick = uploadToPastebin;
uploadWorkspaceButton.onclick = uploadWorkspaceToPastebin;
loadWorkspaceButton.onclick = loadWorkspaceFromPastebin;
loadButton.onclick = loadWorkspace;