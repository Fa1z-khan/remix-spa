# Remix-SPA

## Welcome to Remix!

This is a single-page application (SPA) built with [Remix](https://remix.run/), a full-stack web framework that lets you focus on the user interface while handling server-side rendering and data fetching seamlessly.

### 📖 [Remix Documentation](https://remix.run/docs)

## Table of Contents

- [Development](#development)
- [Deployment](#deployment)
- [Styling](#styling)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)

## Development

To run the development server, use the following command:

```sh
pnpm run dev
```

This will start the development server using Vite, which provides fast build times and a smooth development experience.

## Deployment

First, build your app for production:

```sh
pnpm run build
```

Then run the app in production mode:

```sh
pnpm start
```

### DIY Deployment

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready. Make sure to deploy the output of `pnpm run build`:

- `build/server`
- `build/client`

## Styling

This project comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer. For more information, see the [Vite documentation on CSS](https://vitejs.dev/guide/features.html#css).

## Scripts

Here's a list of available scripts in the project:

- **build**: `remix vite:build` - Builds the project for production.
- **dev**: `remix vite:dev` - Starts the development server.
- **start**: `remix-serve ./build/server/index.js` - Serves the production build.
- **typecheck**: `tsc` - Runs TypeScript type checking.
- **format**: `pnpx @biomejs/biome format ./ --write` - Formats the code.
- **lint**: `pnpx @biomejs/biome lint ./ --write` - Lints the code.
- **test**: `vitest` - Runs the tests.
- **test:staged**: `vitest --run` - Runs tests on staged files.
- **lint:staged**: `biome check --error-on-warnings --no-errors-on-unmatched --staged ./**/*.{js,ts}` - Lints staged files.
- **prepare**: `husky` - Sets up Husky for Git hooks.

## Husky and Lint-Staged Configuration

This project uses Husky and Lint-Staged to ensure code quality. The following hooks are configured:

- **pre-commit**: Runs `pnpm lint:staged` before commits.

### Lint-Staged

Lint-Staged is configured to run the following commands on staged files:

- **JavaScript/TypeScript files**: Runs tests and various Biome checks and formatting commands.
- **Other files**: Runs Biome checks with specific options.


## Node Engine

Ensure your Node.js version is >= 20.0.0.
