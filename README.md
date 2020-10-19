# HonKit Default Theme with FontAwesome 5 [![npm version](https://badge.fury.io/js/%40dogatana%2Fhonkit-plugin-theme-default-fa5.svg)](https://badge.fury.io/js/%40dogatana%2Fhonkit-plugin-theme-default-fa5)

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
