import "./App.css";
import * as React from "react";
import { ThemeProvider } from "@podiumhq/design-system";

function App({ children }) {
  return (
    <div className="App">
      <header className="App-header">landing page</header>
      <ThemeProvider>{children} </ThemeProvider>
    </div>
  );
}

export default App;
