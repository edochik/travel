import { BrowserRouter as Router } from "react-router-dom";
import s from "./App.module.scss";
import { RouterConfig } from "./RouterConfig.jsx";

function App() {

  return (
    <>
      <Router>
        <RouterConfig />
      </Router>
    </>
  );
}

export default App;
