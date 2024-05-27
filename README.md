
# Welcome to [Startup101.io](https://startup101.io/) &middot; [![GitHub license](https://img.shields.io/badge/License-BSD--3--Clause-blue)](https://github.com/LpmRaven/startup101.io/blob/main/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

A community empowering developer-founders to build successful SaaS projects. Our mission is to provide a comprehensive framework, resources, and support for our members to:
- Build scalable projects with our opinionated monorepo stack
- Launch quickly with our proven templates and tools
- Profit with our guidance on growth and revenue strategies

## What We Offer
- Open-source (3-clause BSD) code for infrastructure and components
- Detailed documentation and tutorials
- [Members-only community](https://startup101.io/) access for additional resources and support

## Join Our Community
[Visit Startup101.io](https://startup101.io/) to learn more and become a part of our vibrant community of dev founders!

## The Stack
Our opinionated tech stack for building and deploying SaaS projects:
- Frontend: [React](https://react.dev/) for building reusable UI components
- Language: [TypeScript](https://www.typescriptlang.org/) for type safety and maintainability
- Development: [Vite](https://vitejs.dev/) for fast and efficient local development
- Infrastructure: [Pulumi](https://www.pulumi.com/) for infrastructure-as-code and easy deployment
- Build Tool: [Turbo](https://turbo.build/) for efficient monorepo builds
- Cloud: [AWS](https://aws.amazon.com/) for scalable and reliable cloud services

### Flexibility
- Feel free to use Next, Remix, Gatsby, or any other framework for your app
- Keep common package contributions framework-agnostic to ensure community-wide compatibility

### Community-Driven Tech Decisions
Our tech decisions are transparent and documented in the [tech decisions docs](https://startup101.io/docs/)




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

