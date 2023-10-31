import Nav from "./components/navbar/Nav.jsx"
import Products from "./components/products/Products.jsx"
import Resturant from "./components/resturant/Resturant.jsx"
import { Routes , Route } from "react-router-dom"

function App() {

  return (
    <>
        <Nav />
        <Routes>
          <Route path='/products' element = {<Products />} />
          <Route path='/resturant' element = {<Resturant />} />
        </Routes>
    </>
  )
}

export default App
