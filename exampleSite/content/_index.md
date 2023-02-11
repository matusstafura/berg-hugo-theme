---
title: "Berg Hugo Theme"
description: "Documentation for Berg - Hugo Theme"
---

# Berg Hugo Theme

Berg theme is a clean and modern responsive blog theme for Hugo with TailwindCSS.
See the _[demo](https://berg.stafura.dev/)_.

## Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## Features

- Responsive
- Dark mode
- Pagination
- Google Tag Manager
- Breadcrumbs
- Social sharing
- Meta verification

## Quick Start

```shell
hugo new site quickstart
cd quickstart
git init
git submodule add https://github.com/matusstafura/berg-hugo-theme themes/berg
echo "theme = 'berg'" >> config.toml
hugo server
```

## Development

### Tailwind CSS 

```shell
npm run dev
```

## Documentation

Read the documentation by deploying it locally:

```shell
cd exampleSite && hugo server
```

or read the docs online [https://berg.stafura.dev/docs](https://berg.stafura.dev/docs)

## License

This theme is released under the MIT license. For more information read the [License](LICENSE).

