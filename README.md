# DS<sup>3</sup> Website

| Site                                   | Status                                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Production](https://ds3utsc.com)      | [![Netlify Status](https://api.netlify.com/api/v1/badges/14115eba-7e02-4351-80ce-9da8a136ca6b/deploy-status)](https://app.netlify.com/sites/ds3-main/deploys) |
| [Development](https://dev.ds3utsc.com) | [![Netlify Status](https://api.netlify.com/api/v1/badges/1834b801-8197-45a7-8136-4f465b68a390/deploy-status)](https://app.netlify.com/sites/ds3-dev/deploys)  |

## Getting Started

Clone the project from GitHub

```git
git clone https://github.com/theDS3/Website.git
```

Create and update the `.env` file based on the example file `.env.example`

```bash
cp .env.example .env
```

Then you can run it by:

```sh
cd Website
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Take a look at our [SUPPORT](./SUPPORT.md) file for more instructions.

### Commands

All commands are run from the root of the project, from a terminal:

| Command        | Action                                         |
| -------------- | ---------------------------------------------- |
| `pnpm install` | Installs dependencies                          |
| `pnpm dev`     | Starts local dev server at `localhost:3000`    |
| `pnpm start`   | Preview your build locally, before deploying   |
| `pnpm build`   | Build your production site to `.next`          |
| `pnpm tunnel`  | Tunnels local dev server for testing on mobile |
| `pnpm lint`    | Lints code with ESLint and runs type checking  |
| `pnpm format`  | Formats code with Prettier                     |

## License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

refer [LICENSE](./LICENSE.md) file in this repository.
