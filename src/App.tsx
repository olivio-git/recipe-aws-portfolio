import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Layouts/Home";

function App() {
  const ProtectedRoute = () => {
    
  };
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
