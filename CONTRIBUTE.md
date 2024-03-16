# Contributing to ComputerCraft : Tweaked Blockly Editor

Thank you for your interest in contributing to ComputerCraft : Tweaked Blockly Editor! Follow these steps to contribute to the project:

## 1. Fork the Repository
- Go to the [GitHub repository](https://github.com/Sarxzer/cc-tweaked_blockly.git).
- Click on the "Fork" button in the top right corner to create a copy of the repository in your GitHub account.

## 2. Clone the Forked Repository
- Open your terminal or command prompt.
- Clone your forked repository to your local machine. Replace `<your-username>` with your GitHub username.
  ```bash
  git clone https://github.com/<your-username>/cc-tweaked_blockly.git
  ```
- Navigate into the cloned repository:
  ```bash
  cd cc-tweaked_blockly
  ```

## 3. Set Up Remote
- Add the original repository as a remote, this will allow you to fetch changes from the original repository.
  ```bash
  git remote add upstream https://github.com/Sarxzer/cc-tweaked_blockly.git
  ```

## 4. Create a New Branch
- Create a new branch for your changes. It's a good practice to name your branch based on the feature or fix you're working on.
  ```bash
  git checkout -b <branch-name>
  ```

## 5. Install Packages
- Download Node.js and npm
- Launch `package_installer.bat`
- If you are encountering unexpected error, please make an issue on Github

## 6. Make Changes
- Make the necessary changes to the project using your preferred text editor or IDE.

## 7. Test your change
- Just do 
  ```bash
  npm start
  ```

## 8. Stage and Commit Changes
- Stage the changes you've made.
  ```bash
  git add .
  ```
- Commit the changes with a descriptive commit message.
  ```bash
  git commit -m "Add feature: <description>"
  ```

## 9. Push Changes to Your Fork
- Push your changes to your forked repository on GitHub.
  ```bash
  git push origin <branch-name>
  ```

## 10. Create a Pull Request
- Visit your forked repository on GitHub.
- Click on the "Compare & pull request" button next to the branch you just pushed.
- Provide a descriptive title and comment for your pull request.
- Click on the "Create pull request" button to submit your changes for review.
- We will review your pull request and see if we can merged it with the original repository.

## 11. Keep Your Fork Updated (Optional)
- To keep your fork updated with the original repository, fetch changes from the upstream repository and merge them into your local master branch.
  ```bash
  git fetch upstream
  git checkout master
  git merge upstream/master
  git push origin master
  ```

That's it! Your pull request will now be reviewed by the project maintainers. Be sure to respond to any feedback they provide and make any necessary changes to your pull request. Once approved, your changes will be merged into the main project.
