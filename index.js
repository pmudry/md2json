import { unified } from 'unified'
import remarkParse from 'remark-parse'
import {fromMarkdown} from 'mdast-util-from-markdown'
import {removePosition} from 'unist-util-remove-position'


main()

async function main() {

    let tree = unified()
        .use(remarkParse)
        .parse('# Hi\n\n*Hello*, world!');

    // remove unused position tags from the tree
    removePosition(tree, true)

    // console.log(JSON.stringify(tree, null, "   "));
    console.dir(tree, {depth: null})
}