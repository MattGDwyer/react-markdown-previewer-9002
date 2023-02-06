import React, { useState } from 'react';
import { marked } from 'marked';

function App() {
  const [markdown, setMarkdown] = useState("");

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const renderMarkdown = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="container">
      <textarea onChange={handleChange} />
      <div
        className="preview"
        dangerouslySetInnerHTML={renderMarkdown()}
      />
    </div>
  );
}

export default App;

