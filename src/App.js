import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/react-portfolio" element={<Layout />}>
          <Route path="home" index element={<Home />} />
          <Route path="about" element={<About />} />
          {/*<Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
