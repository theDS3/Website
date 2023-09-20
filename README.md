# DS<sup>3</sup> Website

| Site                                   | Status                                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Production](https://ds3utsc.com)      | [![Netlify Status](https://api.netlify.com/api/v1/badges/14115eba-7e02-4351-80ce-9da8a136ca6b/deploy-status)](https://app.netlify.com/sites/ds3-main/deploys) |
| [Development](https://dev.ds3utsc.com) | [![Netlify Status](https://api.netlify.com/api/v1/badges/a69e3dee-1833-4ec8-a5ba-a62b66e9714c/deploy-status)](https://app.netlify.com/sites/ds3-dev/deploys)  |

## Getting Started

Clone the project from GitHub

```git
git clone https://github.com/theDS3/Website.git
```

Then you can run it by:

```sh
cd Website
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
Website.

Take a look at our [SUPPORT](./SUPPORT.md) file for more instructions.

### Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| -------------------------- | ------------------------------------------------ |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:3000`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

refer [LICENSE](./LICENSE.md) file in this repository.
