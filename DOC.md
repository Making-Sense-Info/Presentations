# Documentation

To create a new presentation, create a new directory following this convention : `YYYYMMDD-name-for-the-meeting`, for example `20240410-vtl-sdmx-unece`.

Next, copy the content of the `template` directory.

The easiest way to produce content is to edit the `slides.md` file. See an example [here](./20250113-constances-lancement/slides.md).

To check the content before commiting, launch an HTTP server:

```sh
# Python ; `python` here depends on your install, could be `python3`, `py`, etc.
python -m http.server

# Node
npx http-server .

# Ruby
ruby -run -e httpd . -p 8080
```



## Housekeeping

> TODO explain set up
> TODO keep track of Reveal.js version