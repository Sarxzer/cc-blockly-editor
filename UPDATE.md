# Release Notes

## Version 1.1.6 Update

We're thrilled to announce the release of version 1.1.6 of the ComputerCraft : Blockly Editor. This update introduces a comprehensive set of Redstone and Rednet blocks, expanding the capabilities of your Lua scripts.

### New Features
- **Redstone and Rednet Blocks**: This update adds a complete set of Redstone and Rednet blocks to the Blockly Editor. These new blocks allow you to interact with Redstone and the Rednet API, opening up physical and wireless interaction in your Minecraft world.

**Full Changelog**: https://github.com/Sarxzer/cc-blockly-editor/compare/v1.1.5.1...v1.1.6

---

## Version 1.1.5.1 Update

This minor update brings a significant improvement to the saving system of the ComputerCraft : Blockly Editor.

### Changes
- **Improved Saving System**: The saving system, which previously saved an empty object, has been fixed. It now correctly saves the workspace, Lua code, workspace name, save date, and cc:be version. This enhancement provides more context and information in each save file, improving the user's ability to manage and understand their saved data.

**Full Changelog**: https://github.com/Sarxzer/cc-blockly-editor/compare/v1.1.5...v1.1.5.1

---

## Version 1.1.5

We're excited to announce the release of version 1.1.5 of the ComputerCraft : Blockly Editor. This update brings some changes to the file format, security, and user interface.

### Changes
- **Downloaded Workspace File Format**: The downloaded workspace will now be a `.ccbe` file instead of a `.json`. This change is to standardize the file format for the Blockly editor.
- **Pastebin Feature Temporarily Disabled**: The save and load to Pastebin feature has been temporarily stopped due to some major security issues. We are working on a fix and hope to bring this feature back soon.
- **Small UI Improvements**: We've made some minor adjustments to the user interface to improve usability and aesthetics.

**Full Changelog**: https://github.com/Sarxzer/cc-blockly-editor/compare/v1.1.4...v1.1.5

---

## Version 1.1.4

We're excited to announce the release of version 1.1.4 of the ComputerCraft : Blockly Editor. This update brings some enhancements to the user interface and introduces syntax highlighting for a better coding experience.

### New Features
- **Prism.js Syntax Highlighter**: We've integrated Prism.js into our editor. This feature provides syntax highlighting for your Lua code, making it easier to read and understand.
  
### Changes
- **Small UI Improvements**: We've made some minor adjustments to the user interface to improve usability and aesthetics.

**Full Changelog**: https://github.com/Sarxzer/cc-blockly-editor/compare/v1.1.3...v1.1.4

---

## Version 1.1.3

We're delighted to announce the release of version 1.1.3 of the ComputerCraft : Blockly Editor. This update introduces several new features that enhance the usability and functionality of our editor.

### New Features
- **Editable Shadow Blocks**: We've improved our shadow blocks. Now, they turn into normal blocks when you edit them. This feature makes it easier for you to customize your scripts.
- **Upload Lua Code to Pastebin**: You can now upload your Lua code directly to Pastebin. This feature allows you to share your scripts with others easily and quickly.
- **Save and Load Workspace on Pastebin**: We've extended our save and load feature to Pastebin. You can now save your workspace on Pastebin and load it back whenever you want. This feature allows you to edit your scripts across multiple sessions and devices.

**Full Changelog**: https://github.com/Sarxzer/cc-blockly-editor/compare/v1.1.2...v1.1.3

---

## Version 1.1.2

In this update, we've introduced some significant enhancements to our ComputerCraft : Blockly Editor.

### New Features
- **WebSocket Blocks**: We're thrilled to announce the addition of WebSocket blocks to our Blockly Editor. This feature enables you to access WebSocket from your computer. The new blocks include Open WebSocket, Send to WebSocket, Receive from WebSocket, and Close WebSocket.
- **More Pre-Placed Shadow Blocks**: In response to user feedback, we've added more pre-placed shadow blocks to our Blockly workspace. These shadow blocks serve as guides, helping you understand how to use various blocks and features.

### Changes
- **Setup files no longer used**: Given the lightweight nature of our Blockly Editor, we will no longer use Setup files.

**Full Changelog**: https://github.com/Sarxzer/cc-blockly-editor/compare/v1.1.1...v1.1.2

---

## Version 1.1.1

This update brings a significant change to the file saving format of our ComputerCraft : Blockly Editor.

### Changes
- **File Saving Format**: Based on user feedback, we've updated the file saving format. Previously, the code was exported and saved as a .lua file, but the content was in JSON format. Starting from this version, the code will be exported and saved as a .json file.

**Full Changelog**: https://github.com/Sarxzer/cc-blockly-editor/compare/v1.1.0...v1.1.1

---

## Version 1.1.0

We're excited to announce the release of version 1.1.0 of the ComputerCraft : Blockly Editor. This update introduces a highly requested feature - the ability to save and load files.

### New Features
- **Save and Load Files**: You can now save your progress and load it back whenever you want. This feature allows you to work on your scripts over multiple sessions without losing any progress.

### Changes
- Minor bug fixes and performance improvements.

**Full Changelog**: https://github.com/Sarxzer/cc-blockly-editor/compare/v1.0.0...v1.1.0

---

## Release 1.0.0

We are excited to announce the first release of our ComputerCraft : Blockly Editor!

### New Features
- **Visual Code Editor for ComputerCraft**: A visual, block-based interface for creating Lua scripts for the ComputerCraft Minecraft mod.
- **Block-Based Interface**: Designed to be intuitive and user-friendly, making it perfect for beginners learning how to code in Lua.
- **Export Code Directly to ComputerCraft**: Once you're done, you can export your code to ComputerCraft and run it in the game.