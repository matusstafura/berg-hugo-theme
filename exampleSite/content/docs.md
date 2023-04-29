---
title: "Docs"
date: 2023-02-11T12:51:30+01:00
draft: false
---

## Contents

- [Install Hugo](#install-hugo)
- [Quick Start](#quick-start)
- [First Post](#first-post)
- [Menu](#menu)
- [Settings](#settings)
- [Shortcodes](#shortcodes)
- [Languages](#languages)
- [Deployment](#deployment)
- [Development](#development)

## Install Hugo

Install Hugo on macOS, Linux, Windows, BSD, and on any machine that can run the Go compiler tool chain.

For full info visit official doc: [https://gohugo.io/installation/](https://gohugo.io/installation/)

## Quick Start

```bash
hugo new site quickstart
cd quickstart
git init
git submodule add https://github.com/matusstafura/berg-hugo-theme themes/berg
echo "theme = 'berg'" >> config.toml
```

and to start the server, run:
```shell
hugo server
```

## First Post

Create a new post in terminal:
```shell
hugo new posts/my-first-post.md
```

or manually, where you create a directory in `content` folder named `posts` and file `my-first-post.md`.

Fill the content of the file like below and save the file.

```md
---
title: "My First Post"
---

# Hello
```

now run server:
```shell
hugo server
```

you can visit `/posts/my-first-post` to see the posts.

## Menu

To create menu, edit config file:

You can add:
- menu.main (navbar menu)
- menu.footer (footer menu)

Example:
```toml
[[menu.main]]
  name = "Home"
  url = "/"
  weight = 1
[[menu.main]]
  name = "Posts"
  url = "/posts/"
  weight = 2

[[menu.footer]]
  name = "Privacy Policy"
  url = "/privacy-policy/"
  weight = 1
```

## Settings

To change settings, edit file config.toml.

```toml

# Provide Google Analytics 4 (GA4)
# Example: "G-XXXXXXXXXXXX"
# leave empty or omit to disable
googleAnalytics = ""

[params]

  # Upload your logo to the `static` folder
  # Set the path, excluding `static`, or
  # leave the empty string to disable -> ""
  # Example: "/images/logo.png"
  logo = ""

  # Set the path for favicon
  # Example: "/images/favicon.ico"
  favicon = ""

  # Enter number of posts to display per page.
  # Should be an unsigned(bigger than 0) integer.
  # Default is 10
  paginate = 10

  # Enter how many posts to display in 
  # shortcode latest-posts
  # Should be an unsigned integer.
  # default is 3
  latestPostsCount = 6

  # Global date format
  # Please DO NOT change the numbers in the date format.
  # It must be 02 for day, Jan or 01 for month, 2006 for year
  # Examples 02 Jan 2006, 01/02/2006, 02-01-2006
  date_format = "2006-01-02"

  # enable or disable the breadcrumbs
  # true or false
  breadcrumbs = false

  # A description of the site.
  description = ""

  # Backlink to the original theme
  createdBy = true

  # custom JS files
  # upload in `assets` folder
  # Example: ['js/_custom.js']
  custom_js = []

  # custom CSS files
  # upload in `assets` folder
  # Example: ['css/_custom.css']
  custom_css = []

  # shows language switcher
  # for multilingual site
  # true or false
  showLanguageSelector = false

  # shows dark mode toggle
  # true or false
  showDarkModeToggle = false

[params.posts]

  # Show prev/next post links
  showPrevNext = true

  # Show profile in posts
  # make sure to set the author name, email, bio
  # and avatar in the author section
  showProfile = false

  # Show Author Name in posts
  # make sure to set the author name in the post
  # otherwise it uses [params.author] if not set
  showAuthor = false
  
  # Show Date in posts
  # make sure to set the date in the post
  showDate = false

  # Show categories in posts
  showCategories = true

  # Show tags in posts
  showTags = true

  # Show share post in posts
  # [params.social]
  showShare = true

[params.author]
  # Enter your name
  name = ""
  # Enter your email
  email = ""
  # Enter your bio
  bio = ""
  # Enter your profile picture
  # Example: "/images/profile.jpg"
  avatar = ""

[social]
  # enter your twitter handle without @
  twitter = "johndoe"

[markup]
  [markup.highlight]
    style = 'hrdark'

[params.social]
    
  # What social links to show in the posts
  twitter = true
  linkedin = true
  reddit = true
  facebook = true
  telegram = true

# Third party services
[params.verification]

  google = ""
  bing = ""

[params.plugins]
  # TAG MANAGER Google Tag Manager
  # Enter the full ID (like "GTM-XXXXXX")
  # or leave empty string to disable -> ""
  tagmanager = ""

```

## Shortcodes

Shortcodes are simple snippets inside your content files calling built-in or custom templates.
Just add the code to your markdown file.

- ### Latest posts vertical

```md
{{</* latest-posts-vertical */>}}
```

- ### Latest posts horizontal

```md
{{</* latest-posts-horizontal */>}}
```

- ### Horizontal card

Creates a horizontal card. In markdown call shortcode and add info in 

```md
{{</* horizontal_card */>}}
```

Example:
```md
---
title: "My post"
...
horizontal_card:
  enable: true
  feature_item:
    - title: "Headline text"
      description: "This is a description for a horizontal_card"
      image: "images/myproject.webp"
      link: "https://mywebsite.dev/"
      button: "More info here"
    - title: "Second project"
      description: "A collection of tools for everyday use."
      image: "images/second_project.webp"
      link: "https://github.com/repo/repo"
      button: "Public repo here"
---
```

## Languages

To make site multilingual, see https://gohugo.io/content-management/multilingual/.

#### Define languages in config file
```toml
defaultContentLanguage = 'en'
[languages]
  [languages.en]
    weight = 1
    languageName = "english"
    contentDir = "content/en"
  [languages.se]
    weight = 2
    languageName = "svenska"
    contentDir = "content/se"
```

#### Translate 
by filename
- /content/about.en.md
- /content/about.se.md

or by directory
- /content/en/about.md
- /content/se/about.md

## Deployment

### Digital Ocean 

If you have a repo of your hugo site, you can have it hosted on DigitalOcean for **FREE**.
DigitalOcean will automatically recognize your repo as Hugo.

1. Create an account on [Digital Ocean](https://m.do.co/c/74a3950fb600) or sign-in.
2. Click on link `Apps` in the sidebar and click `Create App` on the right.
![](/images/deploy/do1.jpeg)
3. Choose Service Provider.
![](/images/deploy/do2.jpeg)
4. In the review section, click Create Resources.
![](/images/deploy/do3.jpeg)
5. Within few minutes your web will be deployed.

## Development

Tailwind CSS 

```shell
npm run dev
```

