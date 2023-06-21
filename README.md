# @nakedjsx/plugin-asset-mdx
Import MDX files as JSX elements to use within [NakedJSX](https://nakedjsx.org) pages.

Given this MDX file:

**src/test.mdx**
```
# Hello, world!

<p css="color: fuchsia">And hello NakedJSX.</p>
```

this NakedJSX page:

**src/index-page.jsx**
```
import { Page } from '@nakedjsx/core/page';
import TestMdx from ':mdx:./test.mdx';

Page.Create('en');
Page.AppendBody(<TestMdx />);
Page.Render();
```

and this build command from the parent directory:

```
npx nakedjsx src --out out --plugin mdx @nakedjsx/plugin-asset-mdx --pretty
```

Then the resulting file is:

**out/index.html**
```
<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        .a {
            color: #f0f
        }
    </style>
</head>

<body>
    <h1>Hello, world!</h1>
    <p class="a">And hello NakedJSX.</p>
</body>

</html>
```

This plugin is not bundled with `npx nakedjsx`. To use it,
either install it globally for all projects:

```
npm install -g @nakedjsx/plugin-asset-mdx
```

or locally, in a parent directory of your source files:

```
npm install @nakedjsx/plugin-asset-mdx
```

See the [documentation](https://nakedjsx.org/documentation/) for more information about NakedJSX.