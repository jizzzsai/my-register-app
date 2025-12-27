import { HashRouterr, Routes, Route, Navigate } from "react-router-dom";
import register from ".register"
import SubmitData from "./SubmitData";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<register />} />

        <Route path="/submit-data" element={<SubmitData />} />
      </Routes>
    </BrowserRouter>
  );
}
