# Support

> 👉 **Note**: Before participating in our community, please read our
> [Code of Conduct](./CODE_OF_CONDUCT.md).
> By interacting with this repository, and/or community you agree to
> abide by its terms.

## Git Setup

1. Download and install the latest version of Git from [here](https://git-scm.com/downloads)

2. Set a Git username:

   ```bash
    git config --global user.name "Your Username"
   ```

3. Set a commit email address in Git.

   ```bash
    git config --global user.email "email@example.com"
   ```

4. Set your GitHub Personal Access Token to access GitHub

   For information on GitHub Personal Access Token can be found [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

   ```bash
    git config --global credential.helper store
   ```

## nvm

For **Linux** and **MacOS** users

1. Run the following command to get the install script for [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

   ```bash
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
   ```

2. Exit your current terminal after the process has finished and run the
   following command to verify the install

   ```bash
    command -v nvm
   ```

3. After, confirming `nvm` is installed, ensure it is setup to use Node LTS

   ```bash
    nvm install --lts
    nvm use --lts
   ```

For **Windows** Users only

1. Ensure that all other versions of Node installs have been uninstalled

2. Click this [link](https://github.com/coreybutler/nvm-windows/releases) and
   download the latest `.exe` and run it to install [nvm-windows](https://github.com/coreybutler/nvm-windows)

3. Exit your current terminal after the process has finished and run the following
   command to verify the install

   ```bash
   nvm help
   ```

4. After, confirming `nvm` is installed, ensure it is setup to use Node LTS

   ```bash
    nvm install lts
    nvm use lts
   ```

## pnpm

For our project we will be using [pnpm](https://pnpm.io/) or known as Performant
NPM, it is a much quicker package manager compared to `npm`

Follow the install instructions
[here](https://pnpm.io/installation#using-a-standalone-script) to install `pnpm`

## VS Code

It is recommend to use VS Code while working on this project, as it
comes with many extensions that will be quite helpful.

Instructions to install can be found [here](https://code.visualstudio.com/#alt-downloads)

## Contributions

If you would like to improve this document to add more resources or other useful
tips and tricks, feel free make and issue and talk to one of the Directors about
it.

See [CONTRIBUTING](./CONTRIBUTING.md) on how to contribute.
