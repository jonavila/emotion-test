/** @jsx jsx */
import { jsx } from '@emotion/core'
import { render } from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App" css={{backgroundColor: 'red'}}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
