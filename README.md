# HonKit Default Theme with FontAwesome 5

This is the default theme for HonKit.

It can be used as a template for theming books or can be extended.

![Image](./preview.png)

## License

Apache License

Also, This theme includes GitBook default theme codes.
These are also Apache License.

- https://github.com/GitbookIO/theme-default


## Fork of @honkit/theme-default

honkit-plugin-theme-default-fa5 is a fork of https://github.com/honkit/honkit.

This plugin has following features.

- Enable FontAwesome 5
- Change "burger menu" icon to "fas fa-bars".
- Add configuration to change "burger menu" icon.

## Install

```
npm i @dogatana/honkit-plugin-theme-default-fa5
```

## Setup

Before building book, add following settings in `book.json`
```js
{
	"plugins": [
		"-theme-default",
		"@dogatana/theme-default-fa5"
	]
}

```

## Costomize Icon

Specify a name of class in `book.json` like following.<br>
You can use any icon of FontAwesome 5.

```js
{
    "pluginsConfig": {
        "theme-default-fa5": {
            "iconClass": "fas fa-home"
        }
    }
}
```

## Relases

- 1.0.6 - suppress unnecessary message when changing page and apply https://github.com/honkit/honkit/pull/196
- 1.0.5 - fix Uncaught TypeError https://github.com/honkit/honkit/issues/191
- 1.0.4 - apply resolution for honkit issue #135
- 1.0.3 - remove a unnecessary meta tag to avoid warning of tidy
- 1.0.2 - remove npm badge
- 1.0.1 - add @dogatana scope name
- 1.0.0 - initial release
