/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Order } from "blockly/lua";

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock["table"] = function (block, generator) {
  const keys = (generator.valueToCode(block, "KEYS", Order.NONE) || "[]").slice(1, -1).split(", ");
  const values = (generator.valueToCode(block, "VALUES", Order.NONE) || "[]").slice(1, -1).split(", ");
  // Generate the function call for this block.
  const code = `{${keys.map((k, i) => `[${k}]=${values[i] || "nil"}`).join(", ")}}`;
  return [code, Order.NONE];
};

forBlock["table_get"] = function (block, generator) {
  const table = generator.valueToCode(block, "TABLE", Order.NONE) || "{}";
  const key = generator.valueToCode(block, "KEY", Order.NONE) || "''";
  const code = `${table}[${key}]`;
  return [code, Order.NONE];
};

forBlock["table_set"] = function (block, generator) {
  const table = generator.valueToCode(block, "TABLE", Order.NONE) || "{}";
  const key = generator.valueToCode(block, "KEY", Order.NONE) || "''";
  const value = generator.valueToCode(block, "VALUE", Order.NONE) || "''";
  const code = `${table}[${key}]=${value}\n`;
  return code;
};

forBlock["table_remove"] = function (block, generator) {
  const table = generator.valueToCode(block, "TABLE", Order.NONE) || "{}";
  const key = generator.valueToCode(block, "KEY", Order.NONE) || "''";
  const code = `table.remove(${table},${key})\n`;
  return code;
};

forBlock["table_keys"] = function (block, generator) {
  const getKey = generator.provideFunction_(
    "table.keys",
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(t)
    local keys={}
    for key,_ in pairs(t) do
      table.insert(keys, key)
    end
    return keys
  end
`
  );
  const table = generator.valueToCode(block, "TABLE", Order.NONE) || "{}";
  const code = `${getKey}(${table})`;
  return [code, Order.NONE];
};

forBlock["table_values"] = function (block, generator) {
  const getValues = generator.provideFunction_(
    "table.values",
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(t)
    local values={}
    for _,value in pairs(t) do
      table.insert(values, value)
    end
    return values
  end
`
  );
  const table = generator.valueToCode(block, "TABLE", Order.NONE) || "{}";
  const code = `${getValues}(${table})`;
  return [code, Order.NONE];
};

forBlock["table_length"] = function (block, generator) {
  const table = generator.valueToCode(block, "TABLE", Order.NONE) || "{}";
  const code = `#${table}`;
  return [code, Order.NONE];
};

forBlock["sleep"] = function (block, generator) {
  const time = generator.valueToCode(block, "SEC", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `sleep(${time})\n`;
  return code;
};
forBlock["print"] = function (block, generator) {
  const text = generator.valueToCode(block, "TEXT", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `print(${text})\n`;
  return code;
};
forBlock["printerror"] = function (block, generator) {
  const text = generator.valueToCode(block, "TEXT", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `printError(${text})\n`;
  return code;
};
forBlock["write"] = function (block, generator) {
  const text = generator.valueToCode(block, "TEXT", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `write(${text})\n`;
  return code;
};
forBlock["read"] = function (block, generator) {
  // Generate the function call for this block.
  const code = `read()`;
  return code;
};
forBlock["read_completion"] = function (block, generator) {
  const text = generator.valueToCode(block, "TEXT", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `read(nil, nil, ${text})`;
  return code;
};
forBlock["read_replace"] = function (block, generator) {
  const text = generator.valueToCode(block, "CHAR", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `read(${text})`;
  return code;
};
forBlock["fs_open"] = function (block, generator) {
  const text = generator.valueToCode(block, "NAME", Order.NONE) || "''";
  const bytes = block.getFieldValue("ISBYTE") === "TRUE";
  let mode = block.getFieldValue("MODE");
  // Generate the function call for this block.
  if (bytes) mode = mode.slice(0, 1) + "b" + mode.slice(1);
  const code = `fs.open(${text},${mode})`;
  return [code, Order.NONE];
};
forBlock["fs_close"] = function (block, generator) {
  const text = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `${text}.close()\n`;
  return code;
};
forBlock["fs_read"] = function (block, generator) {
  const bytes = generator.valueToCode(block, "BYTE", Order.NONE) || "1";
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `${file}.read(${bytes == 1 ? "" : bytes})`;
  return [code, Order.NONE];
};
forBlock["fs_readall"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `${file}.readAll()`;
  return [code, Order.NONE];
};
forBlock["fs_readline"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `${file}.readLine()`;
  return [code, Order.NONE];
};
forBlock["shell_resolve"] = function (block, generator) {
  const file = generator.valueToCode(block, "PATH", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `shell.resolve(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_seek"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE);
  const offset = generator.valueToCode(block, "OFFSET", Order.NONE);
  const mode = block.getFieldValue("MODE");
  // Generate the function call for this block.
  const code = `${file}.seek("${mode}",${offset})\n`;
  return code;
};
forBlock["fs_seek_pos"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE);
  // Generate the function call for this block.
  const code = `${file}.seek("cur")`;
  return [code, Order.NONE];
};
forBlock["tostring"] = function (block, generator) {
  const obj = generator.valueToCode(block, "OBJ", Order.NONE);
  // Generate the function call for this block.
  const code = `tostring(${obj})`;
  return [code, Order.NONE];
};
forBlock["tonumber"] = function (block, generator) {
  const obj = generator.valueToCode(block, "OBJ", Order.NONE);
  // Generate the function call for this block.
  const code = `tonumber(${obj})`;
  return [code, Order.NONE];
};
forBlock["fs_copy"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE);
  const dest = generator.valueToCode(block, "DEST", Order.NONE);
  // Generate the function call for this block.
  const code = `fs.copy("${file}",${dest})\n`;
  return code;
};
forBlock["fs_move"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE);
  const dest = generator.valueToCode(block, "DEST", Order.NONE);
  // Generate the function call for this block.
  const code = `fs.copy("${file}",${dest})\n`;
  return code;
};
forBlock["fs_list"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.list(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_delete"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE);
  // Generate the function call for this block.
  const code = `fs.delete("${file}")\n`;
  return code;
};
forBlock["fs_makedir"] = function (block, generator) {
  const file = generator.valueToCode(block, "TEXT", Order.NONE);
  // Generate the function call for this block.
  const code = `fs.makedir("${file}")\n`;
  return code;
};
forBlock["fs_isdir"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.isDir(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_isreadonly"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.isReadOnly(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_getsize"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.getSize(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_getcapacity"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.getCapacity(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_getfreespace"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.getFreeSpace(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_attributes"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.attributes(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_exists"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.exists(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_complete"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  const dest = generator.valueToCode(block, "DEST", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.complete(${file},${dest})`;
  return [code, Order.NONE];
};
forBlock["fs_find"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.find(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_getdrive"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.getDrive(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_isdriveroot"] = function (block, generator) {
  const file = generator.valueToCode(block, "FILE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.isDriveRoot(${file})`;
  return [code, Order.NONE];
};
forBlock["fs_combine"] = function (block, generator) {
  const files = generator.valueToCode(block, "PATHS", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `fs.combine(unpack(${files}))`;
  return [code, Order.NONE];
};
forBlock["turtle_move"] = function (block, generator) {
  const dir = block.getFieldValue("DIR");
  const times = generator.valueToCode(block, "TIMES", Order.NONE) || "";
  return `${times > 1 ? `for i=1,${times} do ` : ""}turtle.${dir}()${
    times > 1 ? " end" : ""
  }\n`;
};
forBlock["turtle_attack"] = function (block, generator) {
  const dir = block.getFieldValue("DIR");
  return `turtle.attack${dir}()\n`;
};
forBlock["turtle_dig"] = function (block, generator) {
  const dir = block.getFieldValue("DIR");
  return `turtle.dig${dir}()\n`;
};
forBlock["turtle_build"] = function (block, generator) {
  const dir = block.getFieldValue("DIR");
  return `turtle.build${dir}()\n`;
};
forBlock["turtle_compare"] = function (block, generator) {
  const dir = block.getFieldValue("DIR");
  return [`turtle.compare${dir}()`, Order.NONE];
};
forBlock["turtle_drop"] = function (block, generator) {
  const dir = block.getFieldValue("DIR");
  const times = generator.valueToCode(block, "TIMES", Order.NONE) || "";
  return `turtle.drop${dir}(${times})\n`;
};
forBlock["turtle_equip"] = function (block, generator) {
  const dir = block.getFieldValue("DIR");
  return `turtle.equip${dir}()\n`;
};
forBlock["turtle_detect"] = function (block, generator) {
  const dir = block.getFieldValue("DIR");
  return [`turtle.detect${dir}()`, Order.NONE];
};
forBlock["turtle_suck"] = function (block, generator) {
  const dir = block.getFieldValue("DIR");
  return `turtle.suck${dir}()\n`;
};
forBlock["turtle_inspect"] = function (block, generator) {
  const dir = block.getFieldValue("DIR");
  return [`{turtle.inspect${dir}()}`, Order.NONE];
};
forBlock["turtle_craft"] = function (block, generator) {
  const num = generator.valueToCode(block, "NUM", Order.NONE) || "64";
  return `turtle.craft(${num})\n`;
};
forBlock["turtle_compareto"] = function (block, generator) {
  const slot = generator.valueToCode(block, "SLOT", Order.NONE) || "";
  return [`turtle.compareTo(${slot})`, Order.NONE];
};
forBlock["turtle_transferto"] = function (block, generator) {
  const slot = generator.valueToCode(block, "SLOT", Order.NONE) || "";
  return `turtle.transferTo(${slot})\n`;
};
forBlock["turtle_getfuellevel"] = function (block, generator) {
  return [`turtle.getFuelLevel()`, Order.NONE];
};
forBlock["turtle_getfuellimit"] = function (block, generator) {
  return [`turtle.getFuelLimit()`, Order.NONE];
};
forBlock["turtle_getitemdetail"] = function (block, generator) {
  const quantity = block.getFieldValue("QUANTITY");
  const slot = generator.valueToCode(block, "SLOT", Order.NONE) || "0";
  return [`turtle.getItemDetail(${slot},${quantity})`, Order.NONE];
};
forBlock["turtle_getselectedslot"] = function (block, generator) {
  return [`turtle.getSelectedSlot()`, Order.NONE];
};
forBlock["turtle_refuel_isfuel"] = function (block, generator) {
  return [`turtle.refuel(0)`, Order.NONE];
};
forBlock["turtle_refuel"] = function (block, generator) {
  const num = generator.valueToCode(block, "NUM", Order.NONE) || "64";
  return `turtle.refuel(${num})\n`;
};
forBlock["turtle_select"] = function (block, generator) {
  const num = generator.valueToCode(block, "NUM", Order.NONE) || "1";
  return `turtle.select(${num})\n`;
};
forBlock["shallow_copy"] = function (block, generator) {
  const shallowCopy = generator.provideFunction_(
    "shallow_copy",
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}
  local t2 = {}
  for k,v in pairs(t) do
    t2[k] = v
  end
  return t2
end
`
  );
  const getArgs = generator.provideFunction_("getArgs", "local args = {...}\n");
  const table = generator.valueToCode(block, "TABLE", Order.NONE) || "1";
  return [`${shallowCopy}(${table})`, Order.NONE];
};
forBlock["get_arg"] = function (block, generator) {
  const getArgs = generator.provideFunction_("getArgs", "local args = {...}\n");
  const num = generator.valueToCode(block, "NUM", Order.NONE) || "1";
  return [`args[${num}]`, Order.NONE];
};
forBlock["args"] = function (block, generator) {
  const getArgs = generator.provideFunction_("getArgs", "local args = {...}\n");
  return [`args`, Order.NONE];
};
forBlock["get_arg_amount"] = function (block, generator) {
  const getArgs = generator.provideFunction_("getArgs", "local args = {...}\n");
  return [`#args`, Order.NONE];
};


// disk

forBlock["disk_ispresent"] = function (block, generator) {
  const drive = generator.valueToCode(block, "DRIVE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `disk.isPresent(${drive})`;
  return [code, Order.NONE];
};

forBlock["disk_getlabel"] = function (block, generator) {
  const drive = generator.valueToCode(block, "DRIVE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `disk.getLabel(${drive})`;
  return [code, Order.NONE];
};

forBlock["disk_setlabel"] = function (block, generator) {
  const drive = generator.valueToCode(block, "DRIVE", Order.NONE) || "''";
  const label = generator.valueToCode(block, "LABEL", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `disk.setLabel(${drive},${label})\n`;
  return code;
};

forBlock["disk_hasdata"] = function (block, generator) {
  const drive = generator.valueToCode(block, "DRIVE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `disk.hasData(${drive})`;
  return [code, Order.NONE];
};

forBlock["disk_getmountpath"] = function (block, generator) {
  const drive = generator.valueToCode(block, "DRIVE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `disk.getMountPath(${drive})`;
  return [code, Order.NONE];
};

forBlock["disk_hasaudio"] = function (block, generator) {
  const drive = generator.valueToCode(block, "DRIVE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `disk.hasAudio(${drive})`;
  return [code, Order.NONE];
};

forBlock["disk_getaudiotitle"] = function (block, generator) {
  const drive = generator.valueToCode(block, "DRIVE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `disk.getAudioTitle(${drive})`;
  return [code, Order.NONE];
};

forBlock["disk_playaudio"] = function (block, generator) {
  const drive = generator.valueToCode(block, "DRIVE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `disk.playAudio(${drive})\n`;
  return code;
};

forBlock["disk_stopaudio"] = function (block, generator) {
  const drive = generator.valueToCode(block, "DRIVE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `disk.stopAudio(${drive})\n`;
  return code;
};

forBlock["disk_eject"] = function (block, generator) {
  const drive = generator.valueToCode(block, "DRIVE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `disk.eject(${drive})\n`;
  return code;
};

forBlock["disk_getid"] = function (block, generator) {
  const drive = generator.valueToCode(block, "DRIVE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `disk.getID(${drive})`;
  return [code, Order.NONE];
};

forBlock["side"] = function (block, generator) {
  const side = block.getFieldValue("SIDE");
  // Generate the function call for this block.
  const code = `${side}`;
  return [code, Order.NONE];
}

forBlock["http_get"] = function (block, generator) {
  const url = generator.valueToCode(block, "URL", Order.NONE) || "''";
  let headers = generator.valueToCode(block, "HEADERS", Order.NONE) || "";
  // Generate the function call for this block.
  if (headers != "") { headers = `,${headers}`; }
  const code = `http.get(${url}${headers})`;
  return [code, Order.NONE];
}

forBlock["http_post"] = function (block, generator) {
  const url = generator.valueToCode(block, "URL", Order.NONE) || "''";
  const data = generator.valueToCode(block, "DATA", Order.NONE) || "''";
  let headers = generator.valueToCode(block, "HEADERS", Order.NONE) || "";
  // Generate the function call for this block.
  if (headers != "") { headers = `,${headers}`; }
  const code = `http.post(${url},${data}${headers})`;
  return [code, Order.NONE];
}

forBlock["http_request"] = function (block, generator) {
  const url = generator.valueToCode(block, "URL", Order.NONE) || "''";
  const data = generator.valueToCode(block, "DATA", Order.NONE) || "''";
  let headers = generator.valueToCode(block, "HEADERS", Order.NONE) || "";
  // Generate the function call for this block.
  if (headers != "") { headers = `,${headers}`; }
  const code = `http.request(${url},${data}${headers})`;
  return [code, Order.NONE];
}

forBlock["http_checkurl"] = function (block, generator) {
  const url = generator.valueToCode(block, "URL", Order.NONE) || "''";
  let async = block.getFieldValue("ASYNC");
  // Generate the function call for this block.
  async = async == "TRUE" ? ",true" : "";
  const code = `http.checkURL(${url}${async})`;
  return [code, Order.NONE];
}

forBlock["http_websocket"] = function (block, generator) {
  const url = generator.valueToCode(block, "URL", Order.NONE) || "''";
  let headers = generator.valueToCode(block, "HEADERS", Order.NONE) || "";
  let async = block.getFieldValue("ASYNC");
  // Generate the function call for this block.
  if (headers != "") { headers = `,${headers}`; }
  async = async == "TRUE" ? ",true" : "";
  const code = `http.websocket("${url}"${headers}${async})`;
  return [code, Order.NONE];
}

forBlock["http_websocket_receive"] = function (block, generator) {
  const socket = generator.valueToCode(block, "SOCKET", Order.NONE) || "''";
  const timeout = generator.valueToCode(block, "TIMEOUT", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `${socket}.receive(${timeout})`;
  return [code, Order.NONE];
}

forBlock["http_websocket_send"] = function (block, generator) {
  const socket = generator.valueToCode(block, "SOCKET", Order.NONE) || "''";
  const message = generator.valueToCode(block, "MESSAGE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `${socket}.send("${message}")\n`;
  return code;
}

forBlock["http_websocket_close"] = function (block, generator) {
  const socket = generator.valueToCode(block, "SOCKET", Order.NONE) || "''";
  const code = `${socket}.close()\n`;
  return code;
}


// Peripheral

forBlock["per_getnames"] = function (block, generator) {
  // Generate the function call for this block.
  const code = `peripheral.getNames()`;
  return [code, Order.NONE];
}

forBlock["per_ispresent"] = function (block, generator) {
  const name = generator.valueToCode(block, "NAME", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `peripheral.isPresent("${name}")`;
  return [code, Order.NONE];
}

forBlock["per_gettypes"] = function (block, generator) {
  const name = generator.valueToCode(block, "NAME", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `peripheral.getType("${name}")`;
  return [code, Order.NONE];
}

forBlock["per_hastype"] = function (block, generator) {
  const name = generator.valueToCode(block, "NAME", Order.NONE) || "''";
  const type = generator.valueToCode(block, "TYPE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `peripheral.hasType("${name}","${type}")`;
  return [code, Order.NONE];
}

forBlock["per_getmethods"] = function (block, generator) {
  const name = generator.valueToCode(block, "NAME", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `peripheral.getMethods("${name}")`;
  return [code, Order.NONE];
}

forBlock["per_call"] = function (block, generator) {
  const name = generator.valueToCode(block, "NAME", Order.NONE) || "''";
  const method = generator.valueToCode(block, "METHOD", Order.NONE) || "''";
  const args = generator.valueToCode(block, "ARGS", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `peripheral.call("${name}","${method}","${args}")`;
  return [code, Order.NONE];
}

forBlock["per_wrap"] = function (block, generator) {
  const name = generator.valueToCode(block, "NAME", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `peripheral.wrap("${name}")`;
  return [code, Order.NONE];
}

forBlock["per_find"] = function (block, generator) {
  const type = generator.valueToCode(block, "TYPE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `peripheral.find("${type}")`;
  return [code, Order.NONE];
}


// Redstone

forBlock["rs_getsides"] = function (block, generator) {
  // Generate the function call for this block.
  const code = `redstone.getSides()`;
  return [code, Order.NONE];
}

forBlock["rs_setoutput"] = function (block, generator) {
  const side = generator.valueToCode(block, "SIDE", Order.NONE) || "''";
  const value = generator.valueToCode(block, "VALUE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `redstone.setOutput(${side},${value})\n`;
  return code;
}

forBlock["rs_getoutput"] = function (block, generator) {
  const side = generator.valueToCode(block, "SIDE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `redstone.getOutput(${side})`;
  return [code, Order.NONE];
}

forBlock["rs_getinput"] = function (block, generator) {
  const side = generator.valueToCode(block, "SIDE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `redstone.getInput(${side})`;
  return [code, Order.NONE];
}

forBlock["rs_setanalogoutput"] = function (block, generator) {
  const side = generator.valueToCode(block, "SIDE", Order.NONE) || "''";
  const value = generator.valueToCode(block, "VALUE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `redstone.setAnalogOutput(${side},${value})\n`;
  return code;
}

forBlock["rs_getanalogoutput"] = function (block, generator) {
  const side = generator.valueToCode(block, "SIDE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `redstone.getAnalogOutput(${side})`;
  return [code, Order.NONE];
}

forBlock["rs_getanaloginput"] = function (block, generator) {
  const side = generator.valueToCode(block, "SIDE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `redstone.getAnalogInput(${side})`;
  return [code, Order.NONE];
}



// Rednet

forBlock["rn_chbroadcast"] = function (block, generator) {
  const channel = generator.valueToCode(block, "CHANNEL", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `rednet.CHANNEL_BROADCAST = ${channel}\n`;
  return code;
}

forBlock["rn_getchbroadcast"] = function (block, generator) {
  // Generate the function call for this block.
  const code = `rednet.CHANNEL_BROADCAST`;
  return [code, Order.NONE];
}

forBlock["rn_chrepeat"] = function (block, generator) {
  const channel = generator.valueToCode(block, "CHANNEL", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `rednet.CHANNEL_REPEAT = ${channel}\n`;
  return code;
}

forBlock["rn_getchrepeat"] = function (block, generator) {
  // Generate the function call for this block.
  const code = `rednet.CHANNEL_REPEAT`;
  return [code, Order.NONE];
}

forBlock["rn_chmaxid"] = function (block, generator) {
  const channel = generator.valueToCode(block, "CHANNEL", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `rednet.CHANNEL_MAXID = ${channel}\n`;
  return code;
}

forBlock["rn_getchmaxid"] = function (block, generator) {
  // Generate the function call for this block.
  const code = `rednet.CHANNEL_MAXID`;
  return [code, Order.NONE];
}

forBlock["rn_open"] = function (block, generator) {
  const side = generator.valueToCode(block, "SIDE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `rednet.open(${side})\n`;
  return code;
}

forBlock["rn_close"] = function (block, generator) {
  const side = generator.valueToCode(block, "SIDE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `rednet.close(${side})\n`;
  return code;
}

forBlock["rn_isopen"] = function (block, generator) {
  const side = generator.valueToCode(block, "SIDE", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `rednet.isOpen(${side})`;
  return [code, Order.NONE];
}

forBlock["rn_send"] = function (block, generator) {
  const id = generator.valueToCode(block, "ID", Order.NONE) || "''";
  const message = generator.valueToCode(block, "MESSAGE", Order.NONE) || "''";
  let protocol = generator.valueToCode(block, "FILTER", Order.NONE) || "";
  // Generate the function call for this block.
  if (protocol != "") protocol = `,${protocol}`;
  const code = `rednet.send(${id},${message}${protocol})\n`;
  return code;
}

forBlock["rn_broadcast"] = function (block, generator) {
  const message = generator.valueToCode(block, "MESSAGE", Order.NONE) || "''";
  let protocol = generator.valueToCode(block, "FILTER", Order.NONE) || "";
  // Generate the function call for this block.
  if (protocol != "") protocol = `,${protocol}`;
  const code = `rednet.broadcast(${message}${protocol})\n`;
  return code;
}

forBlock["rn_receive"] = function (block, generator) {
  // Generate the function call for this block.
  const code = `rednet.receive()`;
  return [code, Order.NONE];
}

forBlock["rn_receivewith"] = function (block, generator) {
  let protocol = generator.valueToCode(block, "FILTER", Order.NONE) || "";
  let timeout = generator.valueToCode(block, "TIMEOUT", Order.NONE) || "";
  // Generate the function call for this block.
  if (protocol != "") protocol = `${protocol}`;
  if (protocol != "" && timeout != "") protocol = `${protocol},`;
  if (timeout != "" && protocol == "") timeout = `nil,${timeout}`;
  const code = `rednet.receive(${protocol}${timeout})`;
  return [code, Order.NONE];
}

forBlock["rn_host"] = function (block, generator) {
  const protocol = generator.valueToCode(block, "FILTER", Order.NONE) || "''";
  const hostname = generator.valueToCode(block, "HOSTNAME", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `rednet.host(${protocol},${hostname})\n`;
  return code;
}

forBlock["rn_unhost"] = function (block, generator) {
  const protocol = generator.valueToCode(block, "FILTER", Order.NONE) || "''";
  // Generate the function call for this block.
  const code = `rednet.unhost(${protocol})\n`;
  return code;
}

forBlock["rn_lookup"] = function (block, generator) {
  const protocol = generator.valueToCode(block, "FILTER", Order.NONE) || "''";
  let hostname = generator.valueToCode(block, "HOSTNAME", Order.NONE) || "";
  // Generate the function call for this block.
  if (hostname != "") hostname = `,${hostname}`;
  const code = `rednet.lookup(${protocol}${hostname})`;
  return [code, Order.NONE];
}