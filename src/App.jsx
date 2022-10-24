import "./app.scss"
import Intro from './components/intro/Intro';
import Works from './components/works/Works';
import Topbar from './components/topbar/Topbar';
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Works />
      </div>
    </div>
  );
}

export default App;
