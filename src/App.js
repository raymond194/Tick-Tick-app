import { Routes, Route } from "react-router-dom"
import Features from "./pages/Features";
import Download from "./pages/Download";
import Premium from "./pages/Premium";
import HelpCenter from "./pages/HelpCenter";
import Header from "./pages/Header";
import Sign from "./pages/Sign";
import "./styling/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <div className="cont1">
        <Header />

        <div className="main-body">
            <Routes>
              <Route path="/" element={<Features />} />
              <Route path="/downloads" element={<Download />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/helpcenter" element={<HelpCenter />} />
              <Route path="/signin" element={<Sign />} />
            </Routes>
        </div>

      </div>
    </>
  );
}

export default App;
