# JS-Standard
ESLint Config for all JavaScript Official Projects

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for _FIRST_ Lego League JS Projects

Based on [JavaScript Standard Style](http://standardjs.com)

## Install


```bash
yarn install eslint-config-first-lego-league
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

Run the following command:

```bash
yarn add --dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

Then, add this to your `.eslintrc.yml` file:

```yml
extends: first-lego-league
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.


