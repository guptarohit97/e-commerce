
import {Routes,Route} from "react-router-dom"
import { HomePage } from "../pages/Home/HomePage"
import { ProductsList } from "../pages/Products/ProductsList"
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/products" element={<ProductsList/>}></Route>
        </Routes>
    </div>
  )
}
