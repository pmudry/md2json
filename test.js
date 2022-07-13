import * as fs from 'fs';
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

main()

async function main() {

    let text = fs.readFileSync('./test.md', 'utf8')

    const file = await unified()
        .use(remarkParse)
        // .use(remarkMath)
        .use(remarkRehype)
        // .use(rehypeKatex)
        .use(rehypeStringify)
        .process(await text)

        console.log(String(file))
}