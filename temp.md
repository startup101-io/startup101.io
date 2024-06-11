## Getting started

The best place to start is [Startup101.io](https://startup101.io/) or 📖 [our docs](https://startup101.io/docs/).


## Create a new app


### Allow Submodules to update

Our monorepo uses [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) to keep your app code seperate from the community shared code.

Before doing anything with submodules, I recommend running this command to update the config and set [submodule.recurse](https://blog.bitsrc.io/how-to-utilize-submodules-within-git-repos-5dfdd1c62d09#:~:text=config%20and%20set-,submodule.recurse,-to%20true%2C%20which) to `true`, which allows `git clone` and `git pull` to automatically update submodules. (Trust me, this definitely makes life easier, later on).

```bash
git config --global submodule.recurse true
```

If you forgot to do this first, you can run this (next) command after the fact.

```bash
git submodule update --init --recursive
```

### New Github repo

So, first things first, we need to setup a new Github repo for your app. This will allow you to keep your app private and prevent copy-cat sites.

I suggest that you give your repo the same url as your app. For example, if I was creating my portfolio app, my repo would be named `liamraven.com`.

### Add Submodule to Apps

Temporarily remove the apps directory from .gitignore. 
```bash
# apps/*
```

We want to put your app into the apps folder, so lets go there.

```bash
cd apps
```

If your repo is not the url of your app, now is the time to correct that by making it name of the directory.

```bash
git submodule add [URL of project to add in GitHub] [name of directory you want to see in the project]
```

Heres what my full git submodules command looks like:

```bash
git submodule add git@github.com:LpmRaven/liamraven.com.git liamraven.com
```

### Yarn workspaces

Create two folders: `apps` and `packages`

Apps will contain the code and content that is specific to those sites.
Packages will contain common elements and functions such as UI components.

In the root folder, create a package.json with the workspaces defined.
```json
{
    "workspaces": [
        "packages/*",
        "apps/*"
    ]
}
```


### Add your app to a new Github repo

```bash
git remote -v
# View existing remotes
# origin  https://github.com/user/repo.git (fetch)
# origin  https://github.com/user/repo.git (push)

git remote set-url origin https://github.com/user/repo2.git
# Change the 'origin' remote's URL

git remote -v
# Verify new remote URL
# origin  https://github.com/user/repo2.git (fetch)
# origin  https://github.com/user/repo2.git (push)
```

