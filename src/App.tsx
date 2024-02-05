import { useState } from 'react'
import ReactMarkdown from "react-markdown";
import './App.css';

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
        1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>
      <div>
        <div className="boxes-container">
          <div className="edit">
            <h3>Editor</h3>
          <textarea name="editor" id="editor" typeof="text"  cols={70} value={markdownText}    onChange={(e) => setMarkdownText(e.target.value)}>
          </textarea>
          </div>
          <div id="preview">
            <ReactMarkdown className="prev">{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
