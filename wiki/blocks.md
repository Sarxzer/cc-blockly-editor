# CC:BE Blocks List

Here is a list of all the blocks in CC:BE. This list is not exhaustive, and will be updated as new blocks are added to the game.

## How to Read the List
- **Category**: The category of the block.
    - **Logic**: Blocks that deal with logical operations.
    - **Loops**: Blocks that deal with looping operations.
    - **Math**: Blocks that deal with mathematical operations.
    - **Text**: Blocks that deal with text operations.
    - **Lists**: Blocks that deal with list operations.
    - **Tables**: Blocks that deal with table operations.

- **Name**: The name of the block.

- **Type**: The type of the block (Statement, Value, or Hat).
    - **Statement**: A block that performs an action.
    - **Value**: A block that returns a value.
    - **Hat**: A block that starts a script.

- **Description**: A brief description of what the block does.

### Input Types
- When you see `<type>`, it represents a specific type of input.
    - **`<all>`**: Any type of input.
    - **`<bool>`**: A boolean value.
    - **`<float>`**: A floating-point number.
    - **`<int>`**: An integer number.
    - **`<string>`**: A string of text.
    - **`<list>`**: A list of items.
    - **`<table>`**: A table of key-value pairs.
    - **`<variable>`**: A variable.

- When you see `{}`, it represents a user input. For example, `{123}` means the user can input any number, but it can't be changed in the block.

- When you see `[]`, it represents a block that can contain other blocks.

- When you see `()` with a list of options separated by `¦`, it means you can choose one of the options.



## Base Blocks

### Logic
| Name | Type | Description |
|------|------|-------------|
| `if <bool> do []` | Statement | Executes a block of code if a condition is true. |
| `if <bool> do [] else []` | Statement | Executes a block of code if a condition is true; otherwise, executes another block of code. |
| `if <bool> do [] elseif <bool> do []` | Statement | Executes a block of code if a condition is true; otherwise, executes another block of code if a different condition is true. |
| `<all> ( = ¦ ≠ ¦ < ¦ ≤ ¦ > ¦ ≥ ) <all>` | Value | Compares two values and returns a boolean result. |
| `<bool> ( and ¦ or ) <bool>` | Value | Combines two boolean values using logical operators. |
| `not <bool>` | Value | Returns the opposite of a boolean value. |
| `(true ¦ false)` | Value | Returns a boolean value. |
| `null` | Value | Represents a null value. |
| `test <bool> if true <all> if false <all>` | Value | Tests a condition and returns a value based on the result. |

### Loops
| Name | Type | Description |
|------|------|-------------|
| `repeat <int> times []` | Statement | Repeats a block of code a specified number of times. |
| `repeat ( while ¦ until ) <bool> do []` | Statement | Repeats a block of code while or until a condition is true. |
| `count with <variable> from <int> to <int> by <float> do []` | Statement | Repeats a block of code a specified number of times, with an index variable. |
| `for each item <variable> in list <list> do [] ` | Statement | Iterates over a list and executes a block of code for each item. |
| `( break out ¦ continue with the next iteration )` | Statement | Exits the loop or skips to the next iteration. |

### Math
| Name | Type | Description |
|------|------|-------------|
| `{123}` | Value | Represents a number. |
| `<float> ( + ¦ - ¦ * ¦ / ¦ ^ ) <float>` | Value | Performs arithmetic operations on two values. |
| `( square root ¦ absolute ¦ - ¦ Ln ¦ Log10 ¦ e^ ¦ 10^ ) <float>` | Value | Applies a mathematical function to a value. |
| `( π ¦ e ¦ φ ¦ sqrt(2) ¦ sqrt(1/2) ¦ ∞ )` | Value | Represents mathematical constants. |
| `<float> is ( even ¦ odd ¦ prime ¦ whole ¦ positive ¦ negative ¦ divisible by <float> )` | Value | Checks if a number has a specific property. |
| `( round ¦ round up ¦ round down ) <float>` | Value | Rounds a number to the nearest integer. |
| `( sum ¦ min ¦ max ¦ average ¦ median ¦ modes ¦ standard deviation ¦ random item ) of list <list>` | Value | Calculates a statistical value of a list of numbers. |
| `remainder of <float> ÷ <float>` | Value | Returns the remainder of a division operation. |
| `constrain <float> low <float> high <float>` | Value | Constrains a value within a specified range. |
| `random integer from <int> to <int>` | Value | Generates a random integer within a specified range. |
| `random fraction` | Value | Generates a random fraction between 0 and 1. |
| `atan2 of X: <float> Y: <float>` | Value | Returns arctangent of Y/X in degrees from -180 to 180. |

### Text
| Name | Type | Description |
|------|------|-------------|
| `"{string}"` | Value | Represents a string. |
| `¶ {string}` | Value | Represents a newline character. |
| `create text with <strings>` | Value | Concatenates text values. |
| `to {item} append text <string>` | Statement | Appends text to a variable. |
| `length of <string>` | Value | Returns the length of a string. |
| `<string> is empty` | Value | Checks if a string is empty. |
| `in text <string> find ( first ¦ last ) occurrence of text <string>` | Value | Finds the position of a substring in a string. |
| `in text <string> get ( letter # <int> ¦ letter # from end <int> ¦ first letter ¦ last letter ¦ random letter )` | Value | Retrieves a character from a string. |
| `in text <string> get substring from ( letter # <int> ¦ letter # from end <int> ¦ first letter ) to ( letter # <int> ¦ letter # from end <int> ¦ last letter )` | Value | Retrieves a substring from a string. |
| `to ( UPPER CASE ¦ lower case ¦ Title Case ) <string>` | Value | Converts text to a specified case. |
| `trim spaces from ( both sides ¦ left side ¦ right side ) of <string>` | Value | Removes spaces from a string. |
| `count <string> in <string>` | Value | Counts the occurrences of a substring in a string. |
| `replace <string> with <string> in <string>` | Value | Replaces a substring in a string with another substring. |
| `reverse <string>` | Value | Reverses the characters in a string. |

### Lists
| Name | Type | Description |
|------|------|-------------|
| `create list with <alls>` | Value | Creates a list with specified items. |
| `create list with item <all> repeated <int> times` | Value | Creates a list with a repeated item. |
| `length of <list>` | Value | Returns the number of items in a list. |
| `<list> is empty` | Value | Checks if a list is empty. |
| `in list <list> find ( first ¦ last ) occurrence of <all>` | Value | Finds the position of an item in a list. |
| `in list <list> ( get ¦ get and remove ¦ remove ) ( # <int> ¦ # from end <int> ¦ first ¦ last ¦ random )` | Value & Statement | Retrieves or manipulates an item in a list. |
| `in list <list> ( set ¦ insert at ) ( # <int> ¦ # from end <int> ¦ first ¦ last ¦ random ) as <all>` | Statement | Sets or inserts an item in a list. |
| `in list <list> get sub-list from ( # <int> ¦ # from end <int> ¦ first ) to ( # <int> ¦ # from end <int> ¦ last )` | Value | Retrieves a sub-list from a list. |
| `make ( list from text <string> ¦ text from list <list> ) with delimiter <string>` | Value | Converts a list to text or text to a list using a delimiter. |
| `sort ( numeric ¦ alphabetic ¦ alphabetic, ignore case ) ( ascending ¦ descending ) <list>` | Value | Sorts a list in a specified order. |
| `reverse <list>` | Value | Reverses the order of items in a list. |

### Tables
| Name | Type | Description |
|------|------|-------------|
| `Create table with keys <string> and values <all>` | Value | Creates a table with specified keys and values. |
| `Get key <string> from table <table>` | Value | Retrieves a value from a table using a key. |
| `Set key <string> in table <table> to <all>` | Statement | Sets a value in a table using a key. |
| `Remove key <string> from table <table>` | Statement | Removes a key-value pair from a table. |
| `Get keys from table <table>` | Value | Retrieves all keys from a table. |
| `Get values from table <table>` | Value | Retrieves all values from a table. |
| `Get size of table <table>` | Value | Retrieves the number of key-value pairs in a table. |


## ComputerCraft Blocks List

### CC: Base
| Name | Type | Description |
|------|------|-------------|
| `Wait <time> seconds` | Statement | Pauses the script for a specified amount of time. |
| `Args` | Value | Returns the arguments passed to the script. |
| `Get arg # <int>` | Value | Returns a specific argument passed to the script. |
| `Amount of arguments` | Value | Returns the number of arguments passed to the script. |
| `Print <string, number, boolean>` | Statement | Prints a value to the console. |
| `Write <string, number, boolean>` | Statement | Writes a value to the console without a newline. |
| `Read` | Value | Reads a line of input from the console. |
| `Read and replace with <string>` | Value | Reads a line of input from the console and replaces it with a specified value. |
| `To string: <all>` | Value | Converts a value to a string. |
| `To number: <string>` | Value | Converts a string to a number. |
| `Side ( front ¦ back ¦ left ¦ right ¦ top ¦ bottom )` | Value | Represents a side of the computer. |

### CC: Turtle
| Name | Type | Description |
|------|------|-------------|
| `Move ( forward ¦ back ¦ up ¦ down ¦ left ¦ right ) <int> times` | Statement | Moves the turtle in a specified direction a specified number of times. |
| `Select slot # <int>` | Statement | Selects a slot in the turtle's inventory. |
| `Attack ( forward ¦ up ¦ down )` | Statement | Attacks entities in a specified direction. |
| `Build ( forward ¦ up ¦ down )` | Statement | Places a block in a specified direction. |
| `Dig ( forward ¦ up ¦ down )` | Statement | Digs a block in a specified direction. |
| `Is there a block ( forward ¦ up ¦ down )` | Value | Checks if there is a block in a specified direction. |
| `Compare ( forward ¦ up ¦ down ) to inventory` | Value | Compares a block in a specified direction to the turtle's inventory. |
| `Drop ( forward ¦ up ¦ down ) <int> items` | Statement | Drops items from the turtle's inventory in a specified direction. |
| `Compare selected slot to slot #<int>` | Value | Compares the selected slot to a specified item. |
| `Attempt to craft <int> items` | Statement | Attempts to craft a specified number of items. |
| `Equip selected slot to ( left ¦ right )` | Statement | Equips the selected slot to the left or right side of the turtle. |
| `Get fuel level` | Value | Returns the current fuel level of the turtle. |
| `Get fuel limit` | Value | Returns the maximum fuel level of the turtle. |
| `Get ( some ¦ all ) details of item in slot #<int>` | Value | Returns details of the item in the selected slot. |
| `Get selected slot` | Value | Returns the selected slot number. |
| `Inspect the block ( forward ¦ up ¦ down )` | Value | Inspects a block in a specified direction. |
| `Refuel, consume at most <int> items` | Statement | Refuels the turtle using items from its inventory. |
| `Is selected slot combustible` | Value | Checks if the item in the selected slot is combustible. |
| `Suck item from ( forward ¦ up ¦ down )` | Statement | Sucks an item from a block in a specified direction. |
| `Transfer item to ( forward ¦ up ¦ down )` | Statement | Move an item from the selected slot to another one. |

### CC: Filesystem

### CC: Disk

### CC: HTTP

### CC: Peripherals

### CC: Redstone

### CC: Rednet

## Variables and Functions