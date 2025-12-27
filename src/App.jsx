import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./register.jsx";
import SubmitData from "./SubmitData.jsx";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        

        <Route path="/register" element={<Register />} />
        <Route path="/submit-data" element={<SubmitData />} />
      </Routes>
    </HashRouter>
  );
}
