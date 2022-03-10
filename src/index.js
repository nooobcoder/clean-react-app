import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from "react-dom/client";

// ⚠️ React 17 code (Soon to be LEGACY!) ⚠️
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// ⚠️ NEW! React 18 has the new Client Rendering API.
// Read more from the release candidate: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>)