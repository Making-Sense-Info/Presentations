# Documentation

To create a new presentation, create a new directory following this convention : `YYYYMMDD-name-for-the-meeting`, for example `20240410-vtl-sdmx-unece`.

Next, copy the content of the `template` directory.

The easiest way to produce content is to edit the `slides.md` file. See template [here](./template/slides.md).

## Local run

To check the content before commiting, launch a **live-reloaded** HTTP server:

```sh
# Python ; `pip` here depends on your install, could be `pip3`, `pip`, etc.
pip install livereload
livereload --port 8000 .

# Node
npx live-server .

# Ruby
gem install rerun
rerun "ruby -run -e httpd . -p 8000"
```

## Plugins

Supported features:

- notes
- mermaid

## Housekeeping

> TODO explain set up
> TODO keep track of Reveal.js version