/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly/core";

const table = {
  type: "table",
  message0: "Create table with keys %1 and values %2",
  args0: [
    {
      type: "input_value",
      name: "KEYS",
      check: "Array",
    },
    {
      type: "input_value",
      name: "VALUES",
      check: "Array",
    },
  ],
  colour: "#943794",
  tooltip: "Create a table with keys and values",
  helpUrl: "",
  output: "table",
};

const table_get = {
  type: "table_get",
  message0: "Get value of key %1 from table %2",
  args0: [
    {
      type: "input_value",
      name: "KEY",
      check: "String",
    },
    {
      type: "input_value",
      name: "TABLE",
      check: "table",
    },
  ],
  colour: "#943794",
  tooltip: "Get a value from a table",
  helpUrl: "",
  output: null,
};

const table_set = {
  type: "table_set",
  message0: "Set value of key %1 in table %2 to %3",
  args0: [
    {
      type: "input_value",
      name: "KEY",
      check: "String",
    },
    {
      type: "input_value",
      name: "TABLE",
      check: "table",
    },
    {
      type: "input_value",
      name: "VALUE",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#943794",
  tooltip: "Set a value in a table",
  helpUrl: "",
};

const table_remove = {
  type: "table_remove",
  message0: "Remove key %1 from table %2",
  args0: [
    {
      type: "input_value",
      name: "KEY",
      check: "String",
    },
    {
      type: "input_value",
      name: "TABLE",
      check: "table",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#943794",
  tooltip: "Remove a value from a table",
  helpUrl: "",
};

const table_keys = {
  type: "table_keys",
  message0: "Get keys from table %1",
  args0: [
    {
      type: "input_value",
      name: "TABLE",
      check: "table",
    },
  ],
  colour: "#943794",
  tooltip: "Get all keys of a table",
  helpUrl: "",
  output: "Array",
};

const table_values = {
  type: "table_values",
  message0: "Get value from table %1",
  args0: [
    {
      type: "input_value",
      name: "TABLE",
      check: "table",
    },
  ],
  colour: "#943794",
  tooltip: "Get all values of a table",
  helpUrl: "",
  output: "Array",
};

const table_length = {
  type: "table_length",
  message0: "Get size of table %1",
  args0: [
    {
      type: "input_value",
      name: "TABLE",
      check: "table",
    },
  ],
  colour: "#943794",
  tooltip: "Get length of a table",
  helpUrl: "",
  output: "Number",
};

// CC: Base

const sleep = {
  type: "sleep",
  message0: "Wait %1 seconds",
  args0: [
    {
      type: "input_value",
      name: "SEC",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#A1A15D",
  tooltip: "Wait for some time",
  helpUrl: "https://github.com/Sarxzer/cc-blockly-editor/wiki/CC:-Base#wait-time-seconds",
};
const print = {
  type: "print",
  message0: "Print %1",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#A1A15D",
  tooltip: "Write text with newline",
  helpUrl: "https://github.com/Sarxzer/cc-blockly-editor/wiki/CC:-Base#print-string-number-boolean"
};
const printerror = {
  type: "printerror",
  message0: "Log error: %1",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#A1A15D",
  tooltip: "Log an error",
  helpUrl: "",
};

const write = {
  type: "write",
  message0: "Write %1",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#A1A15D",
  tooltip: "Write text without newline",
  helpUrl: "https://github.com/Sarxzer/cc-blockly-editor/wiki/CC:-Base#write-string-number-boolean"
};

const read = {
  type: "read",
  message0: "Read",
  colour: "#A1A15D",
  tooltip: "Read from console",
  helpUrl: "https://github.com/Sarxzer/cc-blockly-editor/wiki/CC:-Base#read",
  output: "String",
};

const read_completion = {
  type: "read_completion",
  message0: "Read with autocomplete %1",
  args0: [
    {
      type: "input_value",
      check: "Array",
    },
  ],
  colour: "#A1A15D",
  tooltip: "Read from console",
  helpUrl: "",
  output: "String",
};

const tonumber = {
  type: "tonumber",
  message0: "To number: %1",
  args0: [
    {
      type: "input_value",
      name: "OBJ",
    },
  ],
  colour: "#A1A15D",
  tooltip: "Convert any object to a number",
  helpUrl: "https://github.com/Sarxzer/cc-blockly-editor/wiki/CC:-Base#to-number-string",
  output: "Number",
};

const tostring = {
  type: "tostring",
  message0: "To string: %1",
  args0: [
    {
      type: "input_value",
      name: "OBJ",
    },
  ],
  colour: "#A1A15D",
  tooltip: "Convert any object to string",
  helpUrl: "https://github.com/Sarxzer/cc-blockly-editor/wiki/CC:-Base#to-string-all",
  output: "String",
};

const read_replace = {
  type: "read_replace",
  message0: "Read and replace with %1",
  args0: [
    {
      type: "input_value",
      name: "CHAR",
      check: "String",
    },
  ],
  colour: "#A1A15D",
  tooltip: "Read from console and replace input with a character",
  helpUrl: "https://github.com/Sarxzer/cc-blockly-editor/wiki/CC:-Base#read-and-replace-with-string",
  output: "String",
};


// Filesystem


const fs_open = {
  type: "fs_open",
  message0: "Open for %1 byte mode %2 file: %3",
  args0: [
    {
      type: "field_dropdown",
      name: "MODE",
      options: [
        ["read", "r"],
        ["write (overwrite)", "w"],
        ["write (keep)", "a"],
        ["update (keep)", "r+"],
        ["update (overwrite)", "w+"],
      ],
    },
    {
      type: "field_checkbox",
      name: "ISBYTE",
      checked: false,
    },
    {
      type: "input_value",
      check: "String",
      name: "NAME",
    },
  ],
  colour: "#185C9A",
  tooltip: "Open a file",
  helpUrl: "",
  output: "FileHandle",
};
const fs_close = {
  type: "fs_close",
  message0: "Close file %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "FileHandle",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#005C9A",
  tooltip: "Close a file",
  helpUrl: "",
};
const fs_read = {
  type: "fs_read",
  message0: "Read %1 bytes from file %2",
  args0: [
    {
      type: "input_value",
      name: "BYTE",
      check: "Number",
    },
    {
      type: "input_value",
      name: "FILE",
      check: "FileHandle",
    },
  ],
  inputsInline: true,
  colour: "#185C9A",
  tooltip: "Read bytes from file",
  helpUrl: "",
  output: "String",
};
const fs_readall = {
  type: "fs_readall",
  message0: "Read everything from %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "FileHandle",
    },
  ],
  colour: "#185C9A",
  tooltip: "Read all remaining contents from file",
  helpUrl: "",
  output: "String",
};
const fs_readline = {
  type: "fs_readline",
  message0: "Read a line from %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "FileHandle",
    },
  ],
  colour: "#185C9A",
  tooltip: "Read a line from file",
  helpUrl: "",
  output: "String",
};
const fs_seek = {
  colour: "#005C9A",
  type: "fs_seek",
  message0: "Offset pointer in file %1 by %2, relative to the %3",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "FileHandle",
    },
    {
      type: "input_value",
      name: "OFFSET",
      check: "Number",
    },
    {
      type: "field_dropdown",
      name: "MODE",
      options: [
        ["current position", "cur"],
        ["beginning of the file", "set"],
        ["end of the file", "end"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  tooltip: "Move the file pointer",
  helpUrl: "",
};
const fs_seek_pos = {
  colour: "#185C9A",
  type: "fs_seek_pos",
  message0: "Pointer position in file %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "FileHandle",
    },
  ],
  output: "Number",
};
const fs_getsize = {
  type: "fs_getsize",
  message0: "Get size of file %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: "#185C9A",
  tooltip: "Get the size of a file",
  helpUrl: "",
  output: "Number",
};
const fs_exists = {
  type: "fs_exists",
  message0: "%1 exists?",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: "#185C9A",
  tooltip: "Checks whether the file exists",
  helpUrl: "",
  output: "Boolean",
};
const fs_isdir = {
  type: "fs_isdir",
  message0: "Is %1 a directory?",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: "#185C9A",
  tooltip: "Checks whether the path is a directory",
  helpUrl: "",
  output: "Boolean",
};
const fs_isreadonly = {
  type: "fs_isreadonly",
  message0: "Is %1 read-only?",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: "#185C9A",
  tooltip: "Checks whether the file can only be read",
  helpUrl: "",
  output: "Boolean",
};
const fs_makedir = {
  type: "fs_makedir",
  message0: "Create directory %1",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#005C9A",
  tooltip: "Create a directory",
  helpUrl: "",
};
const fs_move = {
  type: "fs_move",
  message0: "Move file %1 to %2",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
    {
      type: "input_value",
      name: "DEST",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#005C9A",
  tooltip: "Move file to a directory",
  helpUrl: "",
};
const fs_delete = {
  type: "fs_delete",
  message0: "Delete %1",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#005C9A",
  tooltip: "Delete a file or directory",
  helpUrl: "",
};
const fs_copy = {
  type: "fs_copy",
  message0: "Copy %1 as %2",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
    {
      type: "input_value",
      name: "DEST",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#005C9A",
  tooltip: "Copy file to another file",
  helpUrl: "",
};
const fs_getdrive = {
  type: "fs_getdrive",
  message0: "Drive of %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: "#185C9A",
  tooltip: "Checks which drive is file located on",
  helpUrl: "",
  output: "String",
};
const fs_getfreespace = {
  type: "fs_getfreespace",
  message0: "Free space of drive of %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: "#185C9A",
  tooltip: "Returns free space on the drive this file is located on",
  helpUrl: "",
  output: "Number",
};
const fs_getcapacity = {
  type: "fs_getcapacity",
  message0: "Capacity of drive of %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: "#185C9A",
  tooltip: "Returns capacity of the drive this file is located on",
  helpUrl: "",
  output: "Number",
};
const fs_complete = {
  type: "fs_complete",
  message0: "Completions of name %1 from directory %2",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
    {
      type: "input_value",
      name: "DEST",
      check: "String",
    },
  ],
  colour: "#185C9A",
  tooltip: "Returns list of filenames that can complete input",
  helpUrl: "",
  output: "Array",
};
const fs_find = {
  type: "fs_find",
  message0: "Find files which match pattern %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: "#185C9A",
  tooltip: "Find all files which can fit in the search string",
  helpUrl: "",
  output: "Array",
};
const fs_isdriveroot = {
  type: "fs_isdriveroot",
  message0: "Is drive of %1 root?",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: "#185C9A",
  tooltip: "Checks whether the drive is file located on is root",
  helpUrl: "",
  output: "Boolean",
};
const fs_list = {
  type: "fs_list",
  message0: "List dir %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: "#185C9A",
  tooltip: "Return all filepaths in a directory",
  helpUrl: "",
  output: "Array",
};
const fs_attributes = {
  type: "fs_attributes",
  message0: "Attributes of %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: "#185C9A",
  tooltip: "Return all attributes of a file",
  helpUrl: "",
  output: "Array",
};
const fs_combine = {
  type: "fs_combine",
  message0: "Combine paths in table %1",
  args0: [
    {
      type: "input_value",
      name: "PATHS",
      check: "Array",
    },
  ],
  colour: "#185C9A",
  tooltip: "Combine paths",
  helpUrl: "",
  output: null,
};

// Turtle


const turtle_dig = {
  type: "turtle_dig",
  message0: "Dig %1",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "Up"],
        ["down", "Down"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "Dig. Rock and stone!",
  helpUrl: "",
};
const turtle_build = {
  type: "turtle_build",
  message0: "Build %1",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "Up"],
        ["down", "Down"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "Place the selected block",
  helpUrl: "",
};
const turtle_move = {
  type: "turtle_move",
  message0: "Move %1 %2 times",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", "forward"],
        ["up", "up"],
        ["down", "down"],
        ["back", "back"],
        ["left", "turnLeft"],
        ["right", "turnRight"],
      ],
    },
    {
      type: "input_value",
      name: "TIMES",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "I like to move it move it",
  helpUrl: "",
};
const turtle_craft = {
  type: "turtle_craft",
  message0: "Attempt to craft %1 items",
  args0: [
    {
      type: "input_value",
      name: "NUM",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 100,
  tooltip: "Anybody actually uses crafting turtles?",
  helpUrl: "",
};
const turtle_drop = {
  type: "turtle_drop",
  message0: "Drop %1 %2 items",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "Up"],
        ["down", "Down"],
      ],
    },
    {
      type: "input_value",
      name: "TIMES",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "Drop the selected item",
  helpUrl: "",
};
const turtle_detect = {
  type: "turtle_detect",
  message0: "Is there a block %1?",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "Up"],
        ["down", "Down"],
      ],
    },
  ],
  colour: 230,
  tooltip: "Check for a block in given direction",
  helpUrl: "",
  output: "Boolean",
};
const turtle_compare = {
  type: "turtle_compare",
  message0: "Compare %1 to inventory",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "Up"],
        ["down", "Down"],
      ],
    },
  ],
  colour: 230,
  tooltip: "Is the block the same as selected?",
  helpUrl: "",
  output: "Boolean",
};
const turtle_attack = {
  type: "turtle_attack",
  message0: "Attack %1",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "Up"],
        ["down", "Down"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "Attack!!!!",
  helpUrl: "",
};
const turtle_suck = {
  type: "turtle_suck",
  message0: "Suck item from %1",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "up"],
        ["down", "down"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "Hmmm...",
  helpUrl: "",
};
const turtle_inspect = {
  type: "turtle_inspect",
  message0: "Inspect the block %1",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "up"],
        ["down", "down"],
      ],
    },
  ],
  colour: 230,
  tooltip: "I'm watching...",
  helpUrl: "",
  output: "Array",
};
const turtle_getfuellevel = {
  type: "turtle_getfuellevel",
  message0: "Get fuel level",
  colour: 100,
  tooltip: "Turtle not moving? Check the fuel!",
  helpUrl: "",
  output: "Number",
};
const turtle_getfuellimit = {
  type: "turtle_getfuellimit",
  message0: "Get fuel limit",
  colour: 100,
  tooltip:
    "By default, 20000 for regular turtles and 100000 for advanced ones.",
  helpUrl: "",
  output: "Number",
};
const turtle_refuel_isfuel = {
  type: "turtle_refuel_isfuel",
  message0: "Is selected item combustable?",
  colour: 100,
  tooltip: "Sticks are true, bucket of axolotl is false.",
  helpUrl: "",
  output: "Boolean",
};
const turtle_refuel = {
  type: "turtle_refuel",
  message0: "Refuel, consume at most %1 items",
  args0: [
    {
      type: "input_value",
      name: "NUM",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 100,
  tooltip: "Refuel the turtle",
  helpUrl: "",
};
const turtle_compareto = {
  type: "turtle_compareto",
  message0: "Compare selected slot to slot # %1",
  args0: [
    {
      type: "input_value",
      name: "SLOT",
      check: "Number",
    },
  ],
  colour: 100,
  tooltip: "Compares selected item to another one",
  helpUrl: "",
  output: "Boolean",
};
const turtle_transferto = {
  type: "turtle_transferto",
  message0: "Transfer item to slot %1",
  args0: [
    {
      type: "input_value",
      name: "SLOT",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 100,
  tooltip: "Moves the item in inventory",
  helpUrl: "",
};
const turtle_equip = {
  type: "turtle_equip",
  message0: "Equip selected slot to %1",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["left", "Left"],
        ["right", "Right"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "Equips selected item. If slot is empty, unequip the side.",
  helpUrl: "",
};
const turtle_getitemdetail = {
  type: "turtle_getitemdetail",
  message0: "Get %1 details of item in slot # %2",
  args0: [
    {
      type: "field_dropdown",
      name: "QUANTITY",
      options: [
        ["some", "false"],
        ["all", "true"],
      ],
    },
    {
      type: "input_value",
      name: "SLOT",
      check: "Number",
    },
  ],
  colour: 230,
  tooltip:
    "Returns a table with some data about item. If 0, defaults to current slot.",
  helpUrl: "",
  output: "Array",
};

const turtle_getselectedslot = {
  type: "turtle_getselectedslot",
  message0: "Get selected slot",
  colour: 230,
  tooltip: "Get selected slot number",
  helpUrl: "",
  output: "Number",
};
const turtle_select = {
  type: "turtle_select",
  message0: "Select slot #%1",
  args0: [
    {
      type: "input_value",
      name: "NUM",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 100,
  tooltip: "Get the selected slot from 1 to 16",
  helpUrl: "",
};
const get_arg = {
  type: "get_arg",
  message0: "Get arg # %1",
  args0: [{ type: "input_value", check: "Number", name: "NUM" }],
  colour: "#A1A15D",
  tooltip: "Get command line argument",
  helpUrl: "https://github.com/Sarxzer/cc-blockly-editor/wiki/CC:-Base#get-arg--int",
  output: null,
};
const shallow_copy = {
  type: "shallow_copy",
  message0: "Shallow copy of table %1",
  args0: [{ type: "input_value", check: "Array", name: "TABLE" }],
  colour: 100,
  tooltip: "Get a copy of a table",
  helpUrl: "",
  output: "Array",
};
const args = {
  type: "args",
  message0: "args",
  colour: "#A1A15D",
  tooltip: "Argument table",
  helpUrl: "https://github.com/Sarxzer/cc-blockly-editor/wiki/CC:-Base#args",
  output: "Array",
};
const get_arg_amount = {
  type: "get_arg_amount",
  message0: "Amount of arguments",
  colour: "#A1A15D",
  tooltip: "Amount of command line arguments",
  helpUrl: "https://github.com/Sarxzer/cc-blockly-editor/wiki/CC:-Base#amount-of-arguments",
  output: "Number",
};

const shell_resolve = {
  type: "shell_resolve",
  message0: "Resolve relative path %1",
  args0: [
    {
      type: "input_value",
      name: "PATH",
      check: "String",
    },
  ],
  colour: 0,
  tooltip: "Convert a relative path to an absolute one",
  helpUrl: "",
  output: "String",
};
const os_pullevent = {
  type: "os_pullevent",
  message0: "Pull event with filter: %1 raw? %2",
  args0: [
    { type: "input_value", check: "String", name: "FILTER" },
    {
      type: "field_checkbox",
      name: "RAW",
      checked: false,
    },
  ],
  colour: 0,
  tooltip:
    "Pull an event and return all data as a table. If raw, will also pull terminate event.",
  helpUrl: "",
  output: "Array",
};
const os_clock = {
  type: "os_clock",
  message0: "Uptime",
  colour: 0,
  tooltip: "Time since computer boot, in seconds",
  helpUrl: "",
  output: "Number",
};
const os_starttimeevent = {
  type: "os_starttimeevent",
  message0: "Start %1 for time %2",
  args0: [
    {
      type: "field_dropdown",
      name: "MODE",
      options: [
        ["alarm", "setAlarm"],
        ["timer", "startTimer"],
      ],
    },
    { type: "input_value", check: "Number", name: "TIME" },
  ],
  colour: 0,
  tooltip:
    "Start a timer for given amount of seconds or set an alarm for ingame time in range [0.0,24.0). Outputs an ID by which event can be cancelled.",
  helpUrl: "",
  output: "Number",
};
const os_time = {
  type: "os_time",
  message0: "Get time in locale %1",
  args0: [
    {
      type: "field_dropdown",
      name: "LOCALE",
      options: [
        ["utc", "utc"],
        ["ingame", "ingame"],
        ["local", "local"],
      ],
    },
  ],
  colour: 0,
  tooltip:
    "Returns milliseconds since 1 Jan 1970 in UTC timezone (utc), in server timezone (local), or since world creation (ingame). Use textutils.formatTime() to turn it into human-readable string",
  helpUrl: "",
  output: "Number",
};

// disk
const disk_ispresent = {
  type: "disk_ispresent",
  message0: "Is disk %1 present?",
  args0: [
    {
      type: "input_value",
      name: "DRIVE",
      check: "String",
    },
  ],
  colour: "#004859",
  tooltip: "Checks whether any item at all is in the disk drive",
  helpUrl: "",
  output: "Boolean",
};

const disk_getlabel = {
  type: "disk_getlabel",
  message0: "Get label of disk %1",
  args0: [
    {
      type: "input_value",
      name: "DRIVE",
      check: "String",
    },
  ],
  colour: "#004859",
  tooltip: "Get the label of the floppy disk, record, or other media within the given disk drive",
  helpUrl: "",
  output: "String",
};

const disk_setlabel = {
  type: "disk_setlabel",
  message0: "Set label of disk %1 to %2",
  args0: [
    {
      type: "input_value",
      name: "DRIVE",
      check: "String",
    },
    {
      type: "input_value",
      name: "LABEL",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#276359",
  tooltip: "Set the label of the floppy disk or other media",
  helpUrl: "",
};

const disk_hasdata = {
  type: "disk_hasdata",
  message0: "Has disk %1 data?",
  args0: [
    {
      type: "input_value",
      name: "DRIVE",
      check: "String",
    },
  ],
  colour: "#004859",
  tooltip: "Check whether the current disk provides a mount",
  helpUrl: "",
  output: "Boolean",
};

const disk_getmountpath = {
  type: "disk_getmountpath",
  message0: "Get mount path of disk %1",
  args0: [
    {
      type: "input_value",
      name: "DRIVE",
      check: "String",
    },
  ],
  colour: "#004859",
  tooltip: "Find the directory name on the local computer where the contents of the current floppy disk (or other mount) can be found",
  helpUrl: "",
  output: "String",
};

const disk_hasaudio = {
  type: "disk_hasaudio",
  message0: "Has disk %1 audio?",
  args0: [
    {
      type: "input_value",
      name: "DRIVE",
      check: "String",
    },
  ],
  colour: "#004859",
  tooltip: "Whether the current disk is a music disk as opposed to a floppy disk or other item",
  helpUrl: "",
  output: "Boolean",
};

const disk_getaudiotitle = {
  type: "disk_getaudiotitle",
  message0: "Get audio title of disk %1",
  args0: [
    {
      type: "input_value",
      name: "DRIVE",
      check: "String",
    },
  ],
  colour: "#004859",
  tooltip: "Get the title of the audio track from the music record in the drive",
  helpUrl: "",
  output: "String",
};

const disk_playaudio = {
  type: "disk_playaudio",
  message0: "Play audio of disk %1",
  args0: [
    {
      type: "input_value",
      name: "DRIVE",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#276359",
  tooltip: "Starts playing the music record in the drive",
  helpUrl: "",
};

const disk_stopaudio = {
  type: "disk_stopaudio",
  message0: "Stop audio of disk %1",
  args0: [
    {
      type: "input_value",
      name: "DRIVE",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#276359",
  tooltip: "Stops the music record in the drive from playing",
  helpUrl: "",
};

const disk_eject = {
  type: "disk_eject",
  message0: "Eject disk %1",
  args0: [
    {
      type: "input_value",
      name: "DRIVE",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#276359",
  tooltip: "Ejects any item currently in the drive, spilling it into the world as a loose item",
  helpUrl: "",
};

const disk_getid = {
  type: "disk_getid",
  message0: "Get ID of disk %1",
  args0: [
    {
      type: "input_value",
      name: "DRIVE",
      check: "String",
    },
  ],
  colour: "#004859",
  tooltip: "Returns a number which uniquely identifies the disk in the drive",
  helpUrl: "",
  output: "String",
};

const side = {
  type: "side",
  message0: "Side %1",
  args0: [
    {
      type: "field_dropdown",
      name: "SIDE",
      options: [
        ["bottom", '"bottom"'],
        ["top", '"top"'],
        ["front", '"front"'],
        ["back", '"back"'],
        ["left", '"left"'],
        ["right", '"right"'],
      ],

    },
  ],
  colour: "#A1A15D",
  tooltip: "Side of the computer",
  helpUrl: "https://github.com/Sarxzer/cc-blockly-editor/wiki/CC:-Base#side--front--back--left--right--top--bottom-",
  output: "String",
};

// http

const http_get = {
  type: "http_get",
  message0: "GET %1 with header (optional) %2",
  args0: [
    {
      type: "input_value",
      name: "URL",
      check: "String",
    },
    {
      type: "input_value",
      name: "HEADERS",
      check: "Array",
    },
  ],
  inputsInline: true,
  colour: "#008B8B",
  tooltip: "Make a HTTP GET request to the given url",
  helpUrl: "",
  output: "String",
};

const http_post = {
  type: "http_post",
  message0: "POST %1 with data %2 and headers (optional) %3",
  args0: [
    {
      type: "input_value",
      name: "URL",
      check: "String",
    },
    {
      type: "input_value",
      name: "DATA",
      check: "String",
    },
    {
      type: "input_value",
      name: "HEADERS",
      check: "Array",
    },
  ],
  inputsInline: true,
  colour: "#008B8B",
  tooltip: "Make a HTTP POST request to the given url",
  helpUrl: "",
  output: "String",
};

const http_request = {
  type: "http_request",
  message0: "Request %1 with data %2 and header (optional) %3",
  args0: [
    {
      type: "input_value",
      name: "URL",
      check: "String",
    },
    {
      type: "input_value",
      name: "DATA",
      check: "String",
    },
    {
      type: "input_value",
      name: "HEADERS",
      check: "Array",
    },
  ],
  colour: "#008B8B",
  tooltip: "Asynchronously make a HTTP request to the given url",
  helpUrl: "",
  output: "String",
};

const http_checkurl = {
  type: "http_checkurl",
  message0: "Check URL %1 Async? %2",
  args0: [
    {
      type: "input_value",
      name: "URL",
      check: "String",
    },
    {
      type: "field_checkbox",
      name: "ASYNC",
      checked: false,
    },
  ],
  colour: "#008B8B",
  tooltip: "Determine whether a URL can be requested",
  helpUrl: "",
  output: "Boolean",
};

const http_websocket = {
  type: "http_websocket",
  message0: "Open websocket %1 with headers (optional) %2 Async? %3",
  args0: [
    {
      type: "input_value",
      name: "URL",
      check: "String",
    },
    {
      type: "input_value",
      name: "HEADERS",
      check: "Array",
    },
    {
      type: "field_checkbox",
      name: "ASYNC",
      checked: false,
    },
  ],
  inputsInline: true,
  colour: "#598B8B",
  tooltip: "Open a websocket to the given url",
  helpUrl: "",
  output: "String",
};

const http_websocket_receive = {
  type: "http_websocket_receive",
  message0: "Receive from websocket %1 with timeout %2",
  args0: [
    {
      type: "input_value",
      name: "SOCKET",
      check: "String",
    },
    {
      type: "input_value",
      name: "TIMEOUT",
      check: "Number",
    },
  ],
  colour: "#598B8B",
  tooltip: "Receive a message from the websocket",
  helpUrl: "",
  output: "String",
};

const http_websocket_send = {
  type: "http_websocket_send",
  message0: "Send %1 to websocket %2",
  args0: [
    {
      type: "input_value",
      name: "DATA",
      check: "String",
    },
    {
      type: "input_value",
      name: "SOCKET",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#598B8B",
  tooltip: "Send a message to the websocket",
  helpUrl: "",
};

const http_websocket_close = {
  type: "http_websocket_close",
  message0: "Close websocket %1",
  args0: [
    {
      type: "input_value",
      name: "SOCKET",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#598B8B",
  tooltip: "Close the websocket",
  helpUrl: "",
};

// Peripherals

const per_getnames = {
  type: "per_getnames",
  message0: "Get names of all peripherals",
  colour: "#BCA400",
  tooltip: "Get names of all peripherals",
  helpUrl: "",
  output: "Array",
};

const per_ispresent = {
  type: "per_ispresent",
  message0: "Is peripheral %1 present?",
  args0: [
    {
      type: "input_value",
      name: "NAME",
      check: "String",
    },
  ],
  colour: "#BCA400",
  tooltip: "Check whether a peripheral is present",
  helpUrl: "",
  output: "Boolean",
};

const per_gettypes = {
  type: "per_gettypes",
  message0: "Get type of peripheral %1",
  args0: [
    {
      type: "input_value",
      name: "NAME",
      check: "String",
    },
  ],
  colour: "#BCA400",
  tooltip: "Get the type of a peripheral",
  helpUrl: "",
  output: "String",
};

const per_hastype = {
  type: "per_hastype",
  message0: "Has peripheral %1 type %2?",
  args0: [
    {
      type: "input_value",
      name: "NAME",
      check: "String",
    },
    {
      type: "input_value",
      name: "TYPE",
      check: "String",
    },
  ],
  colour: "#BCA400",
  tooltip: "Check whether a peripheral has a specific type",
  helpUrl: "",
  output: "Boolean",
};

const per_getmethods = {
  type: "per_getmethods",
  message0: "Get methods of peripheral %1",
  args0: [
    {
      type: "input_value",
      name: "NAME",
      check: "String",
    },
  ],
  colour: "#BCA400",
  tooltip: "Get the methods of a peripheral",
  helpUrl: "",
  output: "Array",
};

const per_call = {
  type: "per_call",
  message0: "Call method %1 of peripheral %2 with arguments %3",
  args0: [
    {
      type: "input_value",
      name: "METHOD",
      check: "String",
    },
    {
      type: "input_value",
      name: "NAME",
      check: "String",
    },
    {
      type: "input_value",
      name: "ARGS",
      check: "Array",
    },
  ],
  colour: "#BCA400",
  tooltip: "Call a method of a peripheral",
  helpUrl: "",
  output: null,
};

const per_wrap = {
  type: "per_wrap",
  message0: "Wrap peripheral %1",
  args0: [
    {
      type: "input_value",
      name: "NAME",
      check: "String",
    },
  ],
  colour: "#BCA400",
  tooltip: "Wrap a peripheral",
  helpUrl: "",
  output: "Table",
};

const per_find = {
  type: "per_find",
  message0: "Find peripheral with type %1",
  args0: [
    {
      type: "input_value",
      name: "TYPE",
      check: "String",
    },
  ],
  colour: "#BCA400",
  tooltip: "Find a peripheral with a specific type",
  helpUrl: "",
  output: "Table",
};

//Redstone

const rs_getsides = {
  type: "rs_getsides",
  message0: "Get computer sides",
  colour: "#B01113",
  tooltip: "Get all sides of the computer",
  helpUrl: "",
  output: "Array",
};

const rs_setoutput = {
  type: "rs_setoutput",
  message0: "Set redstone signal on side %1 to %2",
  args0: [
    {
      type: "input_value",
      name: "SIDE",
      check: "String",
    },
    {
      type: "input_value",
      name: "VALUE",
      check: "Boolean",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  colour: "#C51113",
  tooltip: "Set the redstone output on a side between on and off",
  helpUrl: "",
};

const rs_getoutput = {
  type: "rs_getoutput",
  message0: "Get redstone output signal on side %1",
  args0: [
    {
      type: "input_value",
      name: "SIDE",
      check: "String",
    },
  ],
  colour: "#B01113",
  tooltip: "Get the redstone output on a side",
  helpUrl: "",
  output: "Boolean",
};

const rs_getinput = {
  type: "rs_getinput",
  message0: "Get redstone input signal on side %1",
  args0: [
    {
      type: "input_value",
      name: "SIDE",
      check: "String",
    },
  ],
  colour: "#B01113",
  tooltip: "Get the redstone input on a side",
  helpUrl: "",
  output: "Boolean",
};

const rs_setanalogoutput = {
  type: "rs_setanalogoutput",
  message0: "Set redstone analog signal on side %1 to %2",
  args0: [
    {
      type: "input_value",
      name: "SIDE",
      check: "String",
    },
    {
      type: "input_value",
      name: "VALUE",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  colour: "#C51113",
  tooltip: "Set the redstone analog output on a side to a value between 0 and 15",
  helpUrl: "",
};

const rs_getanalogoutput = {
  type: "rs_getanalogoutput",
  message0: "Get analog output signal on side %1",
  args0: [
    {
      type: "input_value",
      name: "SIDE",
      check: "String",
    },
  ],
  colour: "#B01113",
  tooltip: "Get the analog output on a side",
  helpUrl: "",
  output: "Number",
};

const rs_getanaloginput = {
  type: "rs_getanaloginput",
  message0: "Get redstone analog input signal on side %1",
  args0: [
    {
      type: "input_value",
      name: "SIDE",
      check: "String",
    },
  ],
  colour: "#B01113",
  tooltip: "Get the redstone analog input on a side",
  helpUrl: "",
  output: "Number",
};


// NEED TO DO BUNDLE


// Rednet

const rn_chbroadcast = {
  type: "rn_chbroadcast",
  message0: "Change broadcast channel to %1",
  args0: [
    {
      type: "input_value",
      name: "CHANNEL",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#C15100",
  tooltip: "Set the channel used by the Rednet API to broadcast messages.",
  helpUrl: "",
};

const rn_getchbroadcast = {
  type: "rn_getchbroadcast",
  message0: "Get broadcast channel",
  colour: "#9C5100",
  tooltip: "Get the channel used by the Rednet API to broadcast messages.",
  helpUrl: "",
  output: "Number",
};

const rn_chrepeat = {
  type: "rn_chrepeat",
  message0: "Change repeat channel to %1",
  args0: [
    {
      type: "input_value",
      name: "CHANNEL",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#C15100",
  tooltip: "Set the channel used by the Rednet API to repeat messages.",
  helpUrl: "",
};

const rn_getchrepeat = {
  type: "rn_getchrepeat",
  message0: "Get repeat channel",
  colour: "#9C5100",
  tooltip: "Get the channel used by the Rednet API to repeat messages.",
  helpUrl: "",
  output: "Number",
};

const rn_chmaxid = {
  type: "rn_chmaxid",
  message0: "Change max id to %1",
  args0: [
    {
      type: "input_value",
      name: "CHANNEL",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#C15100",
  tooltip: "Set the number of channels rednet reserves for computer IDs.",
  helpUrl: "",
};

const rn_getchmaxid = {
  type: "rn_getchmaxid",
  message0: "Get max id",
  colour: "#9C5100",
  tooltip: "Get the number of channels rednet reserves for computer IDs.",
  helpUrl: "",
  output: "Number",
};

const rn_open = {
  type: "rn_open",
  message0: "Open %1",
  args0: [
    {
      type: "input_value",
      name: "SIDE",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#C15100",
  tooltip: "Open a rednet modem",
  helpUrl: "",
};

const rn_close = {
  type: "rn_close",
  message0: "Close %1",
  args0: [
    {
      type: "input_value",
      name: "SIDE",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#C15100",
  tooltip: "Close a rednet modem",
  helpUrl: "",
};

const rn_isopen = {
  type: "rn_isopen",
  message0: "Is %1 open?",
  args0: [
    {
      type: "input_value",
      name: "SIDE",
      check: "String",
    },
  ],
  colour: "#9C5100",
  tooltip: "Check whether a rednet modem is open",
  helpUrl: "",
  output: "Boolean",
};

const rn_send = {
  type: "rn_send",
  message0: "Send %1 to %2 with protocol %3 (optional)",
  args0: [
    {
      type: "input_value",
      name: "MESSAGE",
      check: [
        "String",
        "Number",
        "Boolean",
        "Array"
      ],
    },
    {
      type: "input_value",
      name: "ID",
      check: "Number",
    },
    {
      type: "input_value",
      name: "FILTER",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#C15100",
  tooltip: "Send a message to a computer with a specific id",
  helpUrl: "",
};

const rn_broadcast = {
  type: "rn_broadcast",
  message0: "Broadcast %1 with protocol %2 (optional)",
  args0: [
    {
      type: "input_value",
      name: "MESSAGE",
      check: [
        "String",
        "Number",
        "Boolean",
        "Array"
      ],
    },
    {
      type: "input_value",
      name: "FILTER",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#C15100",
  tooltip: "Broadcast a message to all computers on the same channel",
  helpUrl: "",
};

const rn_receive = {
  type: "rn_receive",
  message0: "Receive",
  colour: "#9C5100",
  tooltip: "Receive a message from the rednet",
  helpUrl: "",
  output: "Array",
};

const rn_receivewith = {
  type: "rn_receivewith",
  message0: "Receive with timeout %1 and/or protocol filter %2",
  args0: [
    {
      type: "input_value",
      name: "TIMEOUT",
      check: "Number",
    },
    {
      type: "input_value",
      name: "FILTER",
      check: "String",
    },
  ],
  inputsInline: true,
  colour: "#9C5100",
  tooltip: "Receive a message from the rednet with a timeout and a filter",
  helpUrl: "",
  output: "Array",
};

const rn_host = {
  type: "rn_host",
  message0: "Host protocol %1 with hostname %2",
  args0: [
    {
      type: "input_value",
      name: "FILTER",
      check: "String",
    },
    {
      type: "input_value",
      name: "HOSTNAME",
      check: "String",
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: "#C15100",
  tooltip: "Register the computer as a host for a specific protocol",
  helpUrl: "",
};

const rn_unhost = {
  type: "rn_unhost",
  message0: "Unhost %1",
  args0: [
    {
      type: "input_value",
      name: "FILTER",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#C15100",
  tooltip: "Unregister the computer as a host for a specific protocol",
  helpUrl: "",
};

const rn_lookup = {
  type: "rn_lookup",
  message0: "Lookup %1 with hostname %2 (optional)",
  args0: [
    {
      type: "input_value",
      name: "FILTER",
      check: "String",
    },
    {
      type: "input_value",
      name: "HOSTNAME",
      check: "String",
    },
  ],
  colour: "#9C5100",
  tooltip: "Get the ID of a computer hosting a specific protocol",
  helpUrl: "",
  output: "Number",
};


// Monitor

const mon_settextscale = {
  type: "mon_settextscale",
  message0: "Set text scale to %1 of the monitor %2",
  args0: [
    {
      type: "input_value",
      name: "SCALE",
      check: "Number",
    },
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#D4A017",
  tooltip: "Set the text scale of the monitor",
  helpUrl: "",
};

const mon_gettextscale = {
  type: "mon_gettextscale",
  message0: "Get text scale of the monitor %1",
  args0: [
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
  ],
  colour: "#B58900",
  tooltip: "Get the text scale of the monitor",
  helpUrl: "",
  output: "Number",
};

const mon_write = {
  type: "mon_write",
  message0: "Write %1 to the monitor %2",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#D4A017",
  tooltip: "Write text to the monitor",
  helpUrl: "",
};

const mon_scroll = {
  type: "mon_scroll",
  message0: "Scroll monitor %1 by %2 pixels",
  args0: [
    {
      type: "input_value",
      name: "Y",
      check: "Number",
    },
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#D4A017",
  tooltip: "Move all positions up (or down) by y pixels",
  helpUrl: "",
};

const mon_getcursorpos = {
  type: "mon_getcursorpos",
  message0: "Get cursor position of the monitor %1",
  args0: [
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
  ],
  colour: "#B58900",
  tooltip: "Get the cursor position of the monitor",
  helpUrl: "",
  output: "Array",
};

const mon_setcursorpos = {
  type: "mon_setcursorpos",
  message0: "Set cursor position of the monitor %1 to x %2 y %3",
  args0: [
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
    {
      type: "input_value",
      name: "X",
      check: "Number",
    },
    {
      type: "input_value",
      name: "Y",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#D4A017",
  tooltip: "Set the cursor position of the monitor",
  helpUrl: "",
};

const mon_getcursorblink = {
  type: "mon_getcursorblink",
  message0: "Check if cursor is blinking on the monitor %1",
  args0: [
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
  ],
  colour: "#B58900",
  tooltip: "Check if the cursor is blinking on the monitor",
  helpUrl: "",
  output: "Boolean",
};

const mon_setcursorblink = {
  type: "mon_setcursorblink",
  message0: "Set cursor blinking on the monitor %1 to %2",
  args0: [
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
    {
      type: "dropdown",
      name: "VALUE",
      options: [
        ["true", "true"],
        ["false", "false"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#D4A017",
  tooltip: "Set the cursor blinking on the monitor",
  helpUrl: "",
};

const mon_getsize = {
  type: "mon_getsize",
  message0: "Get size of the monitor %1",
  args0: [
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
  ],
  colour: "#B58900",
  tooltip: "Get the size of the monitor",
  helpUrl: "",
  output: "Array",
};

const mon_clear = {
  type: "mon_clear",
  message0: "Clear monitor %1",
  args0: [
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#D4A017",
  tooltip: "Clear the monitor",
  helpUrl: "",
};

const mon_clearline = {
  type: "mon_clearline",
  message0: "Clear line %1 of monitor %2",
  args0: [
    {
      type: "input_value",
      name: "LINE",
      check: "Number",
    },
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#D4A017",
  tooltip: "Clear a line of the monitor",
  helpUrl: "",
};

const mon_gettextcolor = {
  type: "mon_gettextcolor",
  message0: "Get text color of the monitor %1",
  args0: [
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
  ],
  colour: "#B58900",
  tooltip: "Get the text color of the monitor",
  helpUrl: "",
  output: "Number",
};

const mon_settextcolor = {
  type: "mon_settextcolor",
  message0: "Set text color of the monitor %1 to %2",
  args0: [
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
    {
      type: "input_value",
      name: "COLOR",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#D4A017",
  tooltip: "Set the text color of the monitor",
  helpUrl: "",
};

const mon_getbgcolor = {
  type: "mon_getbgcolor",
  message0: "Get background color of the monitor %1",
  args0: [
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
  ],
  colour: "#B58900",
  tooltip: "Get the background color of the monitor",
  helpUrl: "",
  output: "Number",
};

const mon_setbgcolor = {
  type: "mon_setbgcolor",
  message0: "Set background color of the monitor %1 to %2",
  args0: [
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
    {
      type: "input_value",
      name: "COLOR",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#D4A017",
  tooltip: "Set the background color of the monitor",
  helpUrl: "",
};

const mon_iscolor = {
  type: "min_iscolor",
  message0: "Is %1 color?",
  args0: [
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
  ],
  colour: "#B58900",
  tooltip: "Check if the monitor supports colors",
  helpUrl: "",
  output: "Boolean",
};

const mon_blit = {
  type: "mon_blit",
  message0: "Write %1 to monitor %2 with text color %3 and background color %4",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
    {
      type: "input_value",
      name: "TEXTCOLOR",
      check: "Number",
    },
    {
      type: "input_value",
      name: "BGCOLOR",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#D4A017",
  tooltip: "Write text to the monitor with colors",
  helpUrl: "",
};

const mon_setpalettecolor = {
  type: "mon_setpalettecolor",
  message0: "Set palette color %1 from monitor %2 to red %3 green %4 blue %5",
  args0: [
    {
      type: "input_value",
      name: "INDEX",
      check: "Number",
    },
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
    {
      type: "input_value",
      name: "RED",
      check: "Number",
    },
    {
      type: "input_value",
      name: "GREEN",
      check: "Number",
    },
    {
      type: "input_value",
      name: "BLUE",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#D4A017",
  tooltip: "Set the palette color of the monitor",
  helpUrl: "",
};

const mon_getpalettecolor = {
  type: "mon_getpalettecolor",
  message0: "Get palette color %1 from monitor %2",
  args0: [
    {
      type: "input_value",
      name: "INDEX",
      check: "Number",
    },
    {
      type: "input_value",
      name: "MONITOR",
      check: "Table",
    },
  ],
  colour: "#B58900",
  tooltip: "Get the palette color of the monitor",
  helpUrl: "",
  output: "List",
};

// Printer

const pr_write = {
  type: "pr_write",
  message0: "Write %1 on printer %2",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
    {
      type: "input_value",
      name: "PRINTER",
      check: "Table",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#9E23FF",
  tooltip: "Write text to the loaded page on the printer",
  helpUrl: "",
};

const pr_getcursorpos = {
  type: "pr_getcursorpos",
  message0: "Get cursor position of printer %1",
  args0: [
    {
      type: "input_value",
      name: "PRINTER",
      check: "Table",
    },
  ],
  colour: "#AB23FF",
  tooltip: "Get the cursor position of the loaded page on the printer",
  helpUrl: "",
  output: "Array",
};

const pr_setcursorpos = {
  type: "pr_setcursorpos",
  message0: "Set cursor position of printer %1 to x %2 y %3",
  args0: [
    {
      type: "input_value",
      name: "PRINTER",
      check: "Table",
    },
    {
      type: "input_value",
      name: "X",
      check: "Number",
    },
    {
      type: "input_value",
      name: "Y",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#9E23FF",
  tooltip: "Set the cursor position of the loaded page on the printer",
  helpUrl: "",
};

const pr_getpagesize = {
  type: "pr_getpagesize",
  message0: "Get page size of printer %1",
  args0: [
    {
      type: "input_value",
      name: "PRINTER",
      check: "Table",
    },
  ],
  colour: "#AB23FF",
  tooltip: "Get the page size of the printer",
  helpUrl: "",
  output: "Array",
};

const pr_newpage = {
  type: "pr_newpage",
  message0: "New page on printer %1",
  args0: [
    {
      type: "input_value",
      name: "PRINTER",
      check: "Table",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#9E23FF",
  tooltip: "Start a new page on the printer",
  helpUrl: "",
};

const pr_endpage = {
  type: "pr_endpage",
  message0: "End page on printer %1",
  args0: [
    {
      type: "input_value",
      name: "PRINTER",
      check: "Table",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#9E23FF",
  tooltip: "End the current page on the printer and print it",
  helpUrl: "",
};

const pr_setpagetitle = {
  type: "pr_setpagetitle",
  message0: "Set page title of printer %1 to %2",
  args0: [
    {
      type: "input_value",
      name: "PRINTER",
      check: "Table",
    },
    {
      type: "input_value",
      name: "TITLE",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#9E23FF",
  tooltip: "Set the title of the current page on the printer",
  helpUrl: "",
};

const pr_getinklevel = {
  type: "pr_getinklevel",
  message0: "Get ink level of printer %1",
  args0: [
    {
      type: "input_value",
      name: "PRINTER",
      check: "Table",
    },
  ],
  colour: "#AB23FF",
  tooltip: "Get the ink level of the printer",
  helpUrl: "",
  output: "Number",
};

const pr_getpaperlevel = {
  type: "pr_getpaperlevel",
  message0: "Get paper level of printer %1",
  args0: [
    {
      type: "input_value",
      name: "PRINTER",
      check: "Table",
    },
  ],
  colour: "#AB23FF",
  tooltip: "Get the paper level of the printer",
  helpUrl: "",
  output: "Number",
};

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  table,
  table_get,
  table_set,
  table_remove,
  table_keys,
  table_values,
  table_length,


  sleep,
  print,
  printerror,
  write,
  read,
  read_completion,
  read_replace,
  tonumber,
  tostring,

  fs_open,
  fs_close,
  fs_read,
  fs_readall,
  fs_readline,
  fs_seek,
  fs_seek_pos,
  fs_copy,
  fs_delete,
  fs_exists,
  fs_getdrive,
  fs_getfreespace,
  fs_getcapacity,
  fs_isdir,
  fs_makedir,
  fs_isreadonly,
  fs_getsize,
  fs_move,
  fs_complete,
  fs_attributes,
  fs_list,
  fs_find,
  fs_isdriveroot,
  shell_resolve,
  fs_combine,

  turtle_attack,
  turtle_build,
  turtle_compare,
  turtle_compareto,
  turtle_craft,
  turtle_detect,
  turtle_dig,
  turtle_drop,
  turtle_equip,
  turtle_getfuellevel,
  turtle_getfuellimit,
  turtle_getitemdetail,
  turtle_getselectedslot,
  turtle_inspect,
  turtle_move,
  turtle_refuel,
  turtle_refuel_isfuel,
  turtle_select,
  turtle_suck,
  turtle_transferto,

  get_arg,
  get_arg_amount,
  args,
  shallow_copy,
  os_pullevent,

  disk_ispresent,
  disk_getlabel,
  disk_setlabel,
  disk_hasdata,
  disk_getmountpath,
  disk_hasaudio,
  disk_getaudiotitle,
  disk_playaudio,
  disk_stopaudio,
  disk_eject,
  disk_getid,

  side,

  http_get,
  http_post,
  http_request,
  http_checkurl,
  http_websocket,
  http_websocket_receive,
  http_websocket_send,
  http_websocket_close,

  per_getnames,
  per_ispresent,
  per_gettypes,
  per_hastype,
  per_getmethods,
  per_call,
  per_wrap,
  per_find,

  rs_getsides,
  rs_setoutput,
  rs_getoutput,
  rs_getinput,
  rs_setanalogoutput,
  rs_getanalogoutput,
  rs_getanaloginput,

  rn_chbroadcast,
  rn_getchbroadcast,
  rn_chrepeat,
  rn_getchrepeat,
  rn_chmaxid,
  rn_getchmaxid,
  rn_open,
  rn_close,
  rn_isopen,
  rn_send,
  rn_broadcast,
  rn_receive,
  rn_receivewith,
  rn_host,
  rn_unhost,
  rn_lookup,

  mon_settextscale,
  mon_gettextscale,
  mon_write,
  mon_scroll,
  mon_getcursorpos,
  mon_setcursorpos,
  mon_getcursorblink,
  mon_setcursorblink,
  mon_getsize,
  mon_clear,
  mon_clearline,
  mon_gettextcolor,
  mon_settextcolor,
  mon_getbgcolor,
  mon_setbgcolor,
  mon_iscolor,
  mon_blit,
  mon_setpalettecolor,
  mon_getpalettecolor,

  pr_write,
  pr_getcursorpos,
  pr_setcursorpos,
  pr_getpagesize,
  pr_newpage,
  pr_endpage,
  pr_setpagetitle,
  pr_getinklevel,
  pr_getpaperlevel,
]);
