# JS-Standard
ESLint Config for all JavaScript Official Projects

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for _FIRST_ Lego League JS Projects

Based on [JavaScript Standard Style](http://standardjs.com)

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

Run the following command:

```bash
yarn add --dev @first-lego-league/eslint-config \
  eslint
  eslint-config-standard \
  eslint-plugin-import \
  eslint-plugin-node \
  eslint-plugin-promise \
  eslint-plugin-standard
```

Then, add this to your `.eslintrc.yml` file:

```yml
extends: "@first-lego-league"
```

*Note: We omitted the `/eslint-config` suffix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## Additional Standards

### React / JSX

Add the following plugins to your package.json:
```bash
yarn add --dev \
  eslint-config-standard-jsx \
  eslint-plugin-react
```

Then, add this to your `.eslintrc.yml` file:

```yml
extends:
  - "@first-lego-league"
  - "@first-lego-league/eslint-config/jsx"
```


### Tests (Mocha + Chai-expect)

Add the following plugins to your package.json:
```bash
yarn add --dev \
  eslint-plugin-chai-friendly \
  eslint-plugin-chai-expect \
  eslint-plugin-mocha
```

Then, add this to your `.eslintrc.yml` file:

```yml
extends:
  - "@first-lego-league"
  - "@first-lego-league/eslint-config/tests"
```

