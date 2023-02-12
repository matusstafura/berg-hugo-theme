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

To create menu, create a file `navigation.toml` in `data` folder:
```
/data/navigation.toml
```

You can add:
- header (navbar menu)
- footer (footer menu)

Example:
```toml
[[header]]
  name = "Home"
  url = "/"
  weight = 1
[[header]]
  name = "Posts"
  url = "/posts/"
  weight = 2
[[header]]
  name = "Contact"
  url = "/contact/"
  weight = 3
[[footer]]
  name = "Privacy Policy"
  url = "/privacy-policy/"
  weight = 1
```

## Settings

To change settings, edit file config.toml.

```toml

[params]

  # Upload your logo to `static` folder
  # enter the path or (excluding `static`)
  # leave empty string to disable -> ""
  # Example: "/images/logo.png"
  logo = ""

  # Enter number of posts to display per page.
  # Should be an unsigned(bigger than 0) integer.
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
  # upload in `static` folder
  # Example: ['/js/custom.js']
  custom_js = []

[params.posts]

  # Show prev/next post links
  showPrevNext = true

  # Show profile in posts
  # make sure to set the author name, email, bio
  # and avatar in the author section
  showProfile = false

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
  avatar = ""
  # Example: "/images/profile.jpg"
  twitterHandle = ""

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

## Development

Tailwind CSS 

```shell
npm run dev
```

