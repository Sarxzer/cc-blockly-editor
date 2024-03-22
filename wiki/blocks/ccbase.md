# CC: Base blocks

This page contains a list of all ComputerCraft: Base blocks.

[ComputerCraft Wiki page](https://tweaked.cc/module/_G.html)

### CC: Base
| Name | Type | Description |
|------|------|-------------|
| [`Wait <time> seconds`](#wait-time-seconds) | Statement | Pauses the script for a specified amount of time. |
| [`Args`](#args) | Value | Returns the arguments passed to the script. |
| [`Get arg # <int>`](#get-arg--int) | Value | Returns a specific argument passed to the script. |
| [`Amount of arguments`](#amount-of-arguments) | Value | Returns the number of arguments passed to the script. |
| [`Print <string, number, boolean>`](#print-string-number-boolean) | Statement | Prints a value to the console. |
| [`Write <string, number, boolean>`](#write-string-number-boolean) | Statement | Writes a value to the console without a newline. |
| [`Read`](#read) | Value | Reads a line of input from the console. |
| [`Read and replace with <string>`](#read-and-replace-with-string) | Value | Reads a line of input from the console and replaces it with a specified value. |
| [`To string: <all>`](#to-string-all) | Value | Converts a value to a string. |
| [`To number: <string>`](#to-number-string) | Value | Converts a string to a number. |
| [`Side ( front ¦ back ¦ left ¦ right ¦ top ¦ bottom )`](#side--front-¦-back-¦-left-¦-right-¦-top-¦-bottom) | Value | Represents a side of the computer. |

## `Wait <time> seconds`
Pauses the script for a specified amount of time.

As it waits for a fixed amount of world ticks, time will automatically be rounded up to the nearest multiple of 0.05 seconds.

- **Parameters**
  - `time` - `float` The amount of time to wait in seconds.


## `Args`
Returns the arguments passed to the script.

- **Returns**
  - `table` The arguments passed to the script.


## `Get arg # <int>`
Returns a specific argument passed to the script.

- **Parameters**
  - `int` - `int` The index of the argument to return.

- **Returns**
    - `string` The argument at the specified index.


## `Amount of arguments`
Returns the number of arguments passed to the script.

- **Returns**
  - `int` The number of arguments passed to the script.


## `Print <string, number, boolean>`
Prints a value to the console.

To print list or table values, use the `To string: <all>` block.

- **Parameters**
  - `string, number, boolean` - `any` The value to print.


## `Write <string, number, boolean>`
Writes a value to the console without a newline.

To write list or table values, use the `To string: <all>` block.

- **Parameters**
  - `string, number, boolean` - `any` The value to write.


## `Read`
Reads a line of input from the console.

- **Returns**
  - `string` The line of input read from the console.


## `Read and replace with <string>`
Reads a line of input from the console and replaces it with a specified value.

- **Parameters**
  - `string` - `string` The value to replace the input with.

- **Returns**
    - `string` The line of input read from the console.


## `To string: <all>`
Converts a value to a string.

- **Parameters**
  - `all` - `any` The value to convert.

- **Returns**
    - `string` The value converted to a string.


## `To number: <string>`
Converts a string to a number.

- **Parameters**
  - `string` - `string` The string to convert.

- **Returns**
    - `number` The string converted to a number.


## `Side ( front ¦ back ¦ left ¦ right ¦ top ¦ bottom )`
Represents a side of the computer.

- **Returns**
  - `string` The side of the computer. Possible values are `front`, `back`, `left`, `right`, `top`, and `bottom`.


[]: # Path: wiki/blocks/ccfs.md