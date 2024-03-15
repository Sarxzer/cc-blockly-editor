#!/bin/bash

# Specify the package names
package_names=("blockly" "@blockly/shadow-block-converter" "package3")

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js before running this script."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "npm is not installed. Please install npm before running this script."
    exit 1
fi

# Loop over the array and install each package
for package_name in "${package_names[@]}"; do
    echo "Installing $package_name..."
    npm install $package_name

    # Check if the installation was successful
    if [ $? -eq 0 ]; then
        echo "Package $package_name has been successfully installed."
    else
        echo "Failed to install package $package_name."
    fi
done