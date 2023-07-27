import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Formbuilder from "./pages/Formbuilder";
import Formviewer from "./pages/Formviewer";
import ResponseViewer from "./pages/ResponseViewer";
import FormLists from "./pages/FormLists";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/builder" element={<Formbuilder/>} />
        <Route path="/list" element={<FormLists/>} />
        <Route path="/viewer/:id" element={<Formviewer/>} />
        <Route path="/responses/:id" element={<ResponseViewer/>} />
        <Route path="/" element={<Navigate to="/list" />} />
      </Routes>
    </div>
  );
}

export default App;
