import Prd_Banner from '../../allComponents/common/ProductBanner'
import Footer from '../../allComponents/common/Footer'
import Header from '../../allComponents/common/Header'
import Banner from '../../allComponents/common/Banner'
import Add from '../../allComponents/productDetails/Add.jsx'
import Description from '../../allComponents/productDetails/Description.jsx'
import RelatedProducts from '../../allComponents/productDetails/RelatedProducts.jsx'
import Back from '../../allComponents/productDetails/BackAndSearch.jsx'
function Details() {
    return (
        <>
            <Header />
            <Prd_Banner />
            <Back />
            <Add />
            <Description />
            <RelatedProducts />
            <Banner />
            <Footer />
        </>
    )
}
export default Details;