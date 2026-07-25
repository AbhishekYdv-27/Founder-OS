import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Vision from "./pages/Vision";
import OKRs from "./pages/OKRs";
import Hiring from "./pages/Hiring";
import Investors from "./pages/Investors";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-slate-100">
        <Sidebar />

        <div className="flex-1">
          <Navbar />

          <main className="p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/okrs" element={<OKRs />} />
              <Route path="/hiring" element={<Hiring />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/roadmap" element={<Roadmap />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;