# Generic Shopping App

A simple Node.js shopping application built with Express and EJS.

## Requirements

- Node.js 16 or newer
- npm

## Install

1. Install dependencies:

```bash
npm install
```

2. Start the application:

```bash
npm start
```

3. Open http://localhost:3000 in your browser.

## Features

- Browse products
- Add items to cart
- Remove items from cart

## Deployment

This repository uses GitHub Actions to deploy in two stages:

- `build`: installs dependencies and builds the app
- `deploy-staging`: deploys to the `staging` environment first
- `deploy-production`: deploys to the `production` environment only after staging succeeds

The production deployment uses GitHub Environments, so you can enforce a manual approval gate before the production job runs.

### How to set up GitHub environments

1. Open your repository on GitHub.
2. Go to `Settings` > `Environments`.
3. Add a `staging` environment.
4. Add a `production` environment.
5. For `production`, configure protection rules such as required reviewers or a wait timer.
   - This creates the approval gate used by the `deploy-production` job.

### Notes

- Ensure the workflow file is at `.github/workflows/deploy.yml`.
- Set `AZURE_CREDENTIALS` in repository secrets for Azure authentication.
- Update `app-name` values in the workflow to match your Azure Web App names, such as `my-shop-app-staging` and `my-shop-app`.
