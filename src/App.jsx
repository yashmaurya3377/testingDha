import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import HeroPage from "./pages/HeroSection/HeroPage"
import Footer from "./components/footer/Footer"
import About from "./pages/About"
import GalleryPage from "./pages/gallery/GalleryPage"
import MenuPage from "./pages/menu/MenuPage"


function App() {
  return (
    <div
      style={{ background: "bg-[linear-gradient(310deg,rgba(212,30,30,1)_10%,rgba(142,15,15,1)_61%,rgba(194,34,34,1)_100%)]" }}
      className="min-h-screen w-full overflow-x-hidden m-0  ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>


  )
}

export default App
