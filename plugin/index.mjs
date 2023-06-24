import fsp from 'node:fs/promises';
import { compile } from '@mdx-js/mdx'

export default function(context)
{
    context.register(
        {
            type: 'asset-import',
            importAsset
        });
}

async function importAsset(context, asset)
{
    //
    // Load the MDX file, compile it to JSX, and return the result to NakedJSX.
    //

    const compiled =
        await compile(
            await fsp.readFile(asset.file),
            {
                jsx: true
            });

    //
    // The MDX compiler generates comments like
    // '/*@jsxRuntime automatic @jsxImportSource react*/'
    // which we don't want.
    //
    
    return compiled.toString().replaceAll(/\s*\/\*@jsxRuntime.*?\*\/\s*/g, '');
}