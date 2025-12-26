import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./register.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
