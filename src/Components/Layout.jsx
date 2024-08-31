 
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import TopCard from './TopCard';
 

const Layout = () => {
    return (
        <div className='  mb-4 h-8 md:w-[1440px] mx-auto'>
            <Header></Header>
         <div className=''>
         <Banner></Banner>
         <TopCard></TopCard>
         </div>
         <Footer></Footer>
        </div>
    );
};

export default Layout;