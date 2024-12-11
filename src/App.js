import './App.css';
import About from './view/About';
import Faq from './view/Faq';
import Main from './view/Main';
import Service from './view/Service';
import Testimonials from './view/Testimonials';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WhyUs from './view/WhyUs';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/why-us" element={<WhyUs/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
