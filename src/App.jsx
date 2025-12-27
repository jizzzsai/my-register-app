import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SubmitData from "./SubmitData.jsx";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Navigate to="/submit-data" />} />

        <Route path="/submit-data" element={<SubmitData />} />
      </Routes>
    </BrowserRouter>
  );
}
