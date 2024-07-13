import { Route, Router } from "react-router-dom";
import Home from "./pages/Home/Home";
function App() {
  return (
    <Router>
      <Route path="/" Component={<Home/>} />
    </Router>
  );
}

export default App;
