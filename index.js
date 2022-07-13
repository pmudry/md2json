import {read} from 'to-vfile'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { removePosition } from 'unist-util-remove-position'
import * as fs from 'fs';

main()

async function main() {


    let text = fs.readFileSync('./test.md', 'utf8')

    let tree = unified()
        .use(remarkParse)        
        .parse(text);

    // remove unused position tags from the tree
    removePosition(tree, true)

    // console.log(JSON.stringify(tree, null, "   "));
    console.dir(tree, { depth: null })
}