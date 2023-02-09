# HUGO theme BERG

### Installation

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
