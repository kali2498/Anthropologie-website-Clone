import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Compoents/Navbar";
import Topdiv from "./Compoents/Topdiv";
import Mininav from "./Compoents/Mininav";

function App() {
  return (
    <div className="App">
      <Topdiv />
      <Mininav />
      <Navbar />
    </div>
  );
}

export default App;
