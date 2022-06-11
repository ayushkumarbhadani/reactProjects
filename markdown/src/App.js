import "./App.css";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {useState} from "react";
import remarkGfm from 'remark-gfm'
const App=()=>{
  const [markdownText,setMarkdownText]=useState(
    `You can write MARKDOWN syntex here and then this app will translate it to MARKDOWN Output. 
    <p>
    To learn more about markdown you can visit this link: <a href="https://www.markdownguide.org/getting-started/" target="blank" >https://www.markdownguide.org/getting-started/</a> 
    </p>
    `);
    
  return(
    <main>
      <textarea className="main-textarea" placeholder="Write your markdown text here.." value={markdownText} onChange={(e)=>{setMarkdownText(e.target.value)}}></textarea>
      <article className="markdown-output">
        <Markdown linkTarget={'_blank'} remarkPlugins={[[remarkGfm, {singleTilde: false}]]}  rehypePlugins={[rehypeRaw]}>{markdownText}</Markdown>
      </article>
    </main>
  );
}
export default App;




/* 

Headers
# h1
## h2
### h3
#### h4
##### h5
###### h6
Header 1
========
Header 2
--------
Emphasis
*italic*
_italic_
**bold**
__bold__
***bold italic***
___bold italic___
~~strikethrough~~
`code`
Lists
* Item 1
* Item 2
- Item 1
- Item 2
- [ ] Checkbox off
- [x] Checkbox on
1. Item 1
2. Item 2

Links
[link](http://google.com)
[link][google]
[google]: http://google.com
<http://google.com>
Images
![Image alt text](https://source.unsplash.com/random)
![Image alt text](https://source.unsplash.com/random "Random Unsplash Imgage")
![Random Unsplash Image][https://source.unsplash.com/random]
[https://source.unsplash.com/random]: https://source.unsplash.com/random

Code
`inline code`
    4 space indent
    makes a code block
```
code fences
```
```js
codeFences.withLanguage()
```
Blockquotes
> This is
> a blockquote
>
> > Nested
> > Blockquote
Horizontal line
----
****
Tables
| Column 1 Heading | Column 2 Heading |
| ---------------- | ---------------- |
| Some content     | Other content    |
Column 1 Heading | Column 2 Heading
--- | ---
Some content | Other content




<input type="text"/>

<input type="reset"/>
*/