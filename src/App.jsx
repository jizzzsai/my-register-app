import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./register.jsx";
import SubmitData from "./SubmitData.jsx";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        
        <Route path="/register" element={<Register />} />
        <Route path="/submit-data" element={<SubmitData />} />
      </Routes>
    </BrowserRouter>
  );
}
