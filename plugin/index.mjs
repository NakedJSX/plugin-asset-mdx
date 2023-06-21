import fsp from 'node:fs/promises';
import { compile } from '@mdx-js/mdx'

let log;

export default function(context)
{
    log = context.logging.log;

    context.register(plugin);
}

const plugin =
    {
        type: 'asset',
        importAsset
    };

async function importAsset(context, asset)
{
    //
    // Load the MDX file, compile it to JavaScript, and return the result to NakedJSX.
    //

    const compiled =
        await compile(
            await fsp.readFile(asset.file),
            {
                jsxRuntime: 'automatic',
                jsxImportSource: '@nakedjsx/core/page'
            });

    return compiled.toString();
}