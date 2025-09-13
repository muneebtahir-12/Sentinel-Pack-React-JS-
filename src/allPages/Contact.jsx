import Header from '../../allComponents/common/Header'
import Footer from '../../allComponents/common/Footer'
import Banner from '../../allComponents/common/Banner'
import TopInfo from '../../allComponents/contact/TopInfo'
import ContactUs from '../../allComponents/contact/ContactUs'



function Conatct(){
    return(
        <div className='bg-[#FAFAFA]'>
            <Header />
            <TopInfo />
            <ContactUs />
            <Banner />
            <Footer />
        </div>
    )
}

export default Conatct;