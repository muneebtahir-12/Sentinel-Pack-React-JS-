import Header from '../../allComponents/common/Header.jsx'
import Footer from '../../allComponents/common/Footer.jsx'
import Prd_Banner from '../../allComponents/common/ProductBanner.jsx'
import Banner from '../../allComponents/common/Banner.jsx'
import ProductDetails from "../../allComponents/product/ProductMain"

function Products() {  
    return (
        <>
          <div>
            <Header />
            <Prd_Banner />
            <ProductDetails/>
            <Banner />
            <Footer />
          </div>
        </>
    )
}

export default Products;