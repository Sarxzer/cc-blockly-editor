/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
This toolbox contains nearly every single built-in block that Blockly offers.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "customCategory",
      name: "Custom Blocks",
    },
    {
      kind: "category",
      name: "Logic",
      colour: "#5C81A6",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_negate",
        },
        {
          kind: "block",
          type: "logic_boolean",
        },
        {
          kind: "block",
          type: "logic_null",
        },
        {
          kind: "block",
          type: "logic_ternary",
        },
      ],
    },
    {
      kind: "category",
      name: "Loops",
      categorystyle: "loop_category",
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext",
          inputs: {
            TIMES: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "controls_whileUntil",
        },
        {
          kind: "block",
          type: "controls_for",
          inputs: {
            FROM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
            BY: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "controls_forEach",
        },
        {
          kind: "block",
          type: "controls_flow_statements",
        },
      ],
    },
    {
      kind: "category",
      name: "Math",
      categorystyle: "math_category",
      contents: [
        {
          kind: "block",
          type: "math_number",
          fields: {
            NUM: 123,
          },
        },
        {
          kind: "block",
          type: "math_arithmetic",
          inputs: {
            A: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            B: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_single",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 9,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_trig",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 45,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_constant",
        },
        {
          kind: "block",
          type: "math_number_property",
          inputs: {
            NUMBER_TO_CHECK: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_round",
          fields: {
            OP: "ROUND",
          },
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 3.1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_on_list",
          fields: {
            OP: "SUM",
          },
        },
        {
          kind: "block",
          type: "math_modulo",
          inputs: {
            DIVIDEND: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 64,
                },
              },
            },
            DIVISOR: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_constrain",
          inputs: {
            VALUE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 50,
                },
              },
            },
            LOW: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            HIGH: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_random_int",
          inputs: {
            FROM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_random_float",
        },
        {
          kind: "block",
          type: "math_atan2",
          inputs: {
            X: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            Y: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Text",
      categorystyle: "text_category",
      contents: [
        {
          kind: "block",
          type: "text",
        },
        {
          kind: "block",
          type: "text_multiline",
        },
        {
          kind: "block",
          type: "text_join",
        },
        {
          kind: "block",
          type: "text_append",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_length",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_isEmpty",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_indexOf",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
            FIND: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_charAt",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_getSubstring",
          inputs: {
            STRING: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_changeCase",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_trim",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_count",
          inputs: {
            SUB: {
              shadow: {
                type: "text",
              },
            },
            TEXT: {
              shadow: {
                type: "text",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_replace",
          inputs: {
            FROM: {
              shadow: {
                type: "text",
              },
            },
            TO: {
              shadow: {
                type: "text",
              },
            },
            TEXT: {
              shadow: {
                type: "text",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_reverse",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Lists",
      categorystyle: "list_category",
      contents: [
        {
          kind: "block",
          type: "lists_create_with",
        },
        {
          kind: "block",
          type: "lists_repeat",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_length",
        },
        {
          kind: "block",
          type: "lists_isEmpty",
        },
        {
          kind: "block",
          type: "lists_indexOf",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_getIndex",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_setIndex",
          inputs: {
            LIST: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_getSublist",
          inputs: {
            LIST: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_split",
          inputs: {
            DELIM: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: ",",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_sort",
        },
        {
          kind: "block",
          type: "lists_reverse",
        },
        { kind: "block",
          type: "shallow_copy"
        },
      ],
    },
    {
      kind: "category",
      name: "Tables",
      categorystyle: "table_category",
      contents: [
        {
          kind: "block",
          type: "table",
        },
        {
          kind: "block",
          type: "table_get",
        },
        {
          kind: "block",
          type: "table_set",
        },
        {
          kind:"block",
          type:"table_remove"
        },
        {
          kind: "block",
          type: "table_keys",
        },
        {
          kind: "block",
          type: "table_values",
        },
        {
          kind: "block",
          type: "table_length",
        }
      ],
    },
    {
      kind: "sep",
    },
    {
      kind: "category",
      name: "CC: Base",
      categorystyle: "base_category",
      contents: [
        {
          kind: "block",
          type: "sleep",
          inputs: {
            SEC: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "args",
        },
        {
          kind: "block",
          type: "get_arg",
        },
        {
          kind: "block",
          type: "get_arg_amount",
        },
        {
          kind: "block",
          type: "print",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "write",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "read",
        },
        {
          kind: "block",
          type: "read_replace",
          inputs: {
            CHAR: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "*",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "tostring",
        },
        {
          kind: "block",
          type: "tonumber",
        },
        {
          kind: "block",
          type: "side",
        },
      ],
    },
    //{
    //  kind: "category",
    //  name: "CC: Shell + OS",
    //  categorystyle: "computcraft_category",
    //  contents: [
    //    {
    //      kind: "block",
    //      type: "shell_resolve",
    //    },
    //  ],
    //},
    {
      kind: "category",
      name: "CC: Turtle",
      categorystyle: "turtle_category",
      contents: [
        {
          kind: "block",
          type: "turtle_move",
          inputs: {
            TIMES: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        { kind: "block", type: "turtle_select" },
        { kind: "block", type: "turtle_attack" },
        { kind: "block", type: "turtle_build" },
        { kind: "block", type: "turtle_dig" },
        { kind: "block", type: "turtle_detect" },
        { kind: "block", type: "turtle_compare" },
        { kind: "block", type: "turtle_drop" },
        { kind: "block", type: "turtle_compareto" },
        { kind: "block", type: "turtle_craft" },
        { kind: "block", type: "turtle_equip" },
        { kind: "block", type: "turtle_getfuellevel" },
        { kind: "block", type: "turtle_getfuellimit" },
        { kind: "block", type: "turtle_getitemdetail" },
        { kind: "block", type: "turtle_getselectedslot" },
        { kind: "block", type: "turtle_inspect" },
        { kind: "block", type: "turtle_refuel" },
        { kind: "block", type: "turtle_refuel_isfuel" },
        { kind: "block", type: "turtle_suck" },
        { kind: "block", type: "turtle_transferto" },
      ],
    },
    {
      kind: "category",
      name: "CC: Filesystem",
      categorystyle: "filesystem_category",
      contents: [
        {
          kind: "block",
          type: "fs_open",
        },
        {
          kind: "block",
          type: "fs_close",
        },
        {
          kind: "block",
          type: "fs_seek",
          inputs: {
            OFFSET: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "fs_seek_pos",
        },
        {
          kind: "block",
          type: "fs_readall",
        },
        {
          kind: "block",
          type: "fs_readline",
        },
        { kind: "block", type: "fs_attributes" },
        { kind: "block", type: "fs_copy" },
        { kind: "block", type: "fs_delete" },
        { kind: "block", type: "fs_exists" },
        { kind: "block", type: "fs_getdrive" },
        { kind: "block", type: "fs_getfreespace" },
        { kind: "block", type: "fs_getcapacity" },
        { kind: "block", type: "fs_isdir" },
        { kind: "block", type: "fs_makedir" },
        { kind: "block", type: "fs_isreadonly" },
        { kind: "block", type: "fs_getsize" },
        { kind: "block", type: "fs_move" },
        { kind: "block", type: "fs_complete" },
        { kind: "block", type: "fs_combine" },
        { kind: "block", type: "fs_list" },
        { kind: "block", type: "fs_find" },
        { kind: "block", type: "fs_isdriveroot" },
      ],
    },

    {
      kind: "category",
      name: "CC: Disk",
      categorystyle: "disk_category",
      contents: [
        {
          kind: "block",
          type: "disk_ispresent",
          inputs: {
            DRIVE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "disk_getlabel",
          inputs: {
            DRIVE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "disk_setlabel",
          inputs: {
            LABEL: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
            DRIVE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "disk_hasdata",
          inputs: {
            DRIVE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "disk_getmountpath",
          inputs: {
            DRIVE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "disk_hasaudio",
          inputs: {
            DRIVE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "disk_getaudiotitle",
          inputs: {
            DRIVE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "disk_playaudio",
          inputs: {
            DRIVE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "disk_stopaudio",
          inputs: {
            DRIVE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "disk_eject",
          inputs: {
            DRIVE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "disk_getid",
          inputs: {
            DRIVE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
      ],
    },

    {
      kind: "category",
      name: "CC: HTTP",
      categorystyle: "http_category",
      contents: [
        {
          kind: "block",
          type: "http_checkurl",
          inputs: {
            URL: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "http://example.com",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "http_get",
          inputs: {
            URL: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "http://example.com",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "http_post",
          inputs: {
            URL: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "http://example.com",
                },
              },
            },
            DATA: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "data",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "http_request",
          inputs: {
            URL: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "http://example.com",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "http_websocket",
          inputs: {
            URL: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "ws://example.com",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "http_websocket_send",
          inputs: {
            DATA: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "data",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "http_websocket_receive",
        },
        {
          kind: "block",
          type: "http_websocket_close",
        },
      ],
    },

    {
      kind: "category",
      name: "CC: Peripherals",
      categorystyle: "peripheral_category",
      contents: [
        {
          kind: "block",
          type: "per_getnames",
        },
        {
          kind: "block",
          type: "per_gettypes",
          inputs: {
            NAME: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "modem",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "per_ispresent",
          inputs: {
            NAME: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "modem",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "per_getmethods",
          inputs: {
            NAME: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "modem",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "per_call",
          inputs: {
            NAME: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "modem",
                },
              },
            },
            METHOD: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "open",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "per_gettypes",
          inputs: {
            NAME: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "modem",
                },
              },
            },
          },
        },
      ],
    },

    {
      kind: "category",
      name: "CC: Redstone",
      categorystyle: "redstone_category",
      contents: [
        {
          kind: "block",
          type: "rs_getsides",
        },
        {
          kind: "block",
          type: "rs_setoutput",
          inputs: {
            SIDE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rs_getoutput",
          inputs: {
            SIDE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rs_getinput",
          inputs: {
            SIDE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rs_setanalogoutput",
          inputs: {
            SIDE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rs_getanalogoutput",
          inputs: {
            SIDE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rs_getanaloginput",
          inputs: {
            SIDE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "CC: Rednet",
      categorystyle: "rednet_category",
      contents: [
        {
          kind: "block",
          type: "rn_chbroadcast",
          inputs: {
            CHANNEL: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 65535,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rn_getchbroadcast",
        },
        {
          kind: "block",
          type: "rn_chrepeat",
          inputs: {
            CHANNEL: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 65533,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rn_getchrepeat",
        },
        {
          kind: "block",
          type: "rn_chmaxid",
          inputs: {
            CHANNEL: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 65500,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rn_getchmaxid",
        },
        {
          kind: "block",
          type: "rn_open",
          inputs: {
            SIDE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rn_close",
          inputs: {
            SIDE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rn_isopen",
          inputs: {
            SIDE: {
              shadow: {
                type: "side",
                fields: {
                  SIDE: "top",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rn_send",
          inputs: {
            MESSAGE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "message",
                },
              },
            },
            ID: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rn_broadcast",
          inputs: {
            MESSAGE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "message",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rn_receive",
        },
        {
          kind: "block",
          type: "rn_receivewith",
          inputs: {
            TIMEOUT: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rn_host",
          inputs: {
            FILTER: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "chat",
                },
              },
            },
            HOSTNAME: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "chat_host",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rn_unhost",
        },
        {
          kind: "block",
          type: "rn_lookup",
          inputs: {
            FILTER: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "host",
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "sep",
    },
    {
      kind: "category",
      name: "Variables",
      categorystyle: "variable_category",
      custom: "VARIABLE",
    },
    {
      kind: "category",
      name: "Functions",
      categorystyle: "procedure_category",
      custom: "PROCEDURE",
    },
  ],
};
