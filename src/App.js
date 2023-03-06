import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/react-portfolio" element={<Layout />}>
          <Route path="/react-portfolio" element={<Home />} />
          {/* Make this first home route into a welcome page. gh-page routing!*/}
          <Route path="/react-portfolio/home" index element={<Home />} />
          <Route path="/react-portfolio/about" element={<About />} />
          <Route path="/react-portfolio/contact" element={<Contact />} />
          {/*<Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
