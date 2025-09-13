import Header from '../../allComponents/common/Header.jsx'
import Footer from '../../allComponents/common/Footer.jsx'
import Prd_Banner from '../../allComponents/product/ProductBanner.jsx'
import Add from '../../allComponents/product/Add.jsx'
import Description from '../../allComponents/product/Description.jsx'
import RelatedProducts from '../../allComponents/product/RelatedProducts.jsx'
import Banner from '../../allComponents/common/Banner.jsx'



function Products() {
    return (
        <>
          <div className='bg-[#FAFAFA]'>
            <Header />
            <Prd_Banner />
            <Add />
            <Description />
            <RelatedProducts />
            <Banner />
            <Footer />
          </div>
        </>
    )
}

export default Products;