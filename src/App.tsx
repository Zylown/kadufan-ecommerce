import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>404 No encontrado</div>} />
    </Routes>
  );
}

export default App;
