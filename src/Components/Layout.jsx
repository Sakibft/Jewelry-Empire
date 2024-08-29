 
import Banner from './Banner';
import Header from './Header';
 

const Layout = () => {
    return (
        <div className='  mb-4 h-8 md:w-[1440px] mx-auto'>
            <Header></Header>
         <Banner></Banner>
        </div>
    );
};

export default Layout;