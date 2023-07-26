import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Formbuilder from "./pages/Formbuilder";
import Formviewer from "./pages/Formviewer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/builder" element={<Formbuilder/>} />
        <Route path="/viewer/:id" element={<Formviewer/>} />
        <Route path="/" element={<Navigate to="/builder" />} />
      </Routes>
    </div>
  );
}

export default App;
