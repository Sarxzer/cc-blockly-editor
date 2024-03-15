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

downloadButton.onclick = downloadWorkspace;
loadButton.onclick = loadWorkspace;