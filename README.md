# @nakedjsx/plugin-asset-mdx
Import MDX files as JSX elements to use within [NakedJSX](https://nakedjsx.org) pages.

Given this MDX file:

**src/test.mdx**
```
# Hello, MDX!

<p css="color: fuchsia">And hello again, NakedJSX.</p>
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

and this build command (from parent directory):

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
    <h1>Hello, MDX!</h1>
    <p class="a">And hello again, NakedJSX.</p>
</body>

</html>
```

## Plugin installation

This plugin is not bundled with `npx nakedjsx`. To use it,
either install it globally for all projects:

```
npm install -g @nakedjsx/plugin-asset-mdx
```

or locally, in a parent directory of your source files (you don't otherwise need to be using a Node project):

```
npm install @nakedjsx/plugin-asset-mdx
```

## You can use MDX in client JavaScript, too

You can also use MDX elements in client JavaScript:

**src/test.mdx**
```
# Hello, MDX!

<p css="color: fuchsia">And hello again, NakedJSX.</p>
```

**src/index-client.jsx**
```
import TestMdx from ':mdx:./test.mdx';

document.body.appendChild(<TestMdx />);
```

**src/index-page.jsx**
```
import { Page } from '@nakedjsx/core/page';

Page.Create('en');
Page.Render();
```

Using the same build command as before, after the page has been loaded in a browser, the resulting DOM  is the same.

By removing `--pretty` from the build command, the resulting html file is only 934 bytes (including all JavaScript).

See the [NakedJSX documentation](https://nakedjsx.org/documentation/) for more information about NakedJSX.