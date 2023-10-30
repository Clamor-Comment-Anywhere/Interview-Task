
# Goal: Testing gitlab clone

The goal of this task is to implement a landing page design from Figma. You can find the design in [this Figma link](https://www.figma.com/file/RLLyYyRsth2grVPjAVLbCB/Website-Design?type=design&node-id=0-1&mode=design). Your task is to follow the design in the Figma link and implement it in the project.

## How to Contribute Using Git

If you're new to Git and want to contribute to a project, it's important to follow best practices to ensure a smooth collaboration. One common approach is to avoid committing directly to the main or develop branch. Instead, you should create a new branch for your updates and then submit a pull request. Here's a step-by-step guide:

## 1. Clone the Git Repository

Start by cloning the Git repository to your local machine. This creates a local copy of the project that you can work on.

```
git clone <repository_url>
```

Replace `<repository_url>` with the URL of the Git repository you want to contribute to.

## 2. Make Your Changes from the Develop Branch

It's a good practice to work from the `develop` branch, which is typically where ongoing development takes place.

```
git switch develop
```

This command switches to the `develop` branch.

## 3. Create a New Branch for Your Update

Before making changes, create a new branch for your updates. This branch should have a descriptive name related to the changes you plan to make.

```
git checkout -b your-branch-name
```

Replace `your-branch-name` with a meaningful name for your branch.

## 4. Make and Stage Your Changes

Now, make your changes to the code or project as needed. After making changes, you should stage them for commit.

```bash
git add .
```

This command stages all the changes you made.

## 5. Commit Your Changes

Commit your changes with a descriptive message that explains what you did.

```bash
git commit -m "Your commit message"
```

Replace `"Your commit message"` with a concise and informative message about your changes.

## 6. Push Your Branch to the Repository

To share your changes with others and create a pull request, you need to push your branch to the remote repository.

```bash
git push origin your-branch-name
```

This command pushes your branch to the repository, making it available for others to review and merge into the main project.

That's it! You've successfully contributed to the project by creating a branch, making changes, and submitting a pull request. Your changes can now be reviewed and integrated into the main codebase by the project maintainers.

Happy contributing!


Now, the README starts with the project's main goal, followed by the instructions on how to contribute using Git.
