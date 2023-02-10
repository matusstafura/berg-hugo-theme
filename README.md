# BERG | HUGO theme 

Berg theme is a clean and modern responsive blog theme for Hugo.

## Contents

- [Features](#features)
- [Quick Start](#quick-start)
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

### Run exampleSite

```shell
cd exampleSite && hugo server
```

## License

This theme is released under the MIT license. For more information read the [License](LICENSE).
