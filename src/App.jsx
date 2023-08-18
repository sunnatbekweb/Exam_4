import Header from './Components/Header'
import Layout from './Pages/Flower'
import Footer from './Components/Footer'
import Home from './Pages/Flower'
import Flowers from './Pages/Home'
import Plants from './Pages/Plants'
import NoPage from './Pages/Page404'
import Gifts from './Pages/Gifts'
import Discounts from './Pages/Discounts'
import About from './Pages/About'
import { Routes, Route } from "react-router-dom";
import Page1 from './Ui/Page1'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Flowers />} />
        <Route path="flowers" element={<Home />} />
        <Route path="plants" element={<Plants />} />
        <Route path="gifts" element={<Gifts />} />
        <Route path="discount" element={<Discounts />} />
        <Route path="about" element={<About />} />
        <Route path="/newFlowers/:id" element={<Page1 />} />
        <Route path='/relevant/:id' element={<Page1 />} />
        <Route path='/plants/:id' element={<Page1 />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
