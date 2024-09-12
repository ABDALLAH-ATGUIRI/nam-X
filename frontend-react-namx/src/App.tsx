import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CleintPages from "./pages/client/router";
import AdminPages from "./pages/admin/router";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<CleintPages />} />
        <Route path="/admin" element={<AdminPages />} />
      </Routes>
    </Router>
  );
}

