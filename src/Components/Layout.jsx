import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import MakeAGift from "./MakeAGift";
import ShopByCategory from "./ShopByCategory";
import ShopBYGender from "./ShopBYGender";
import TopCard from "./TopCard";
import TopProducts from "./TopProducts";

const Layout = () => {
  return (
    <div className="  mb-4 h-8 md:w-[1440px] mx-auto  ">
      <Header></Header>

     <div className="md:m-0 m-4">
     <Banner></Banner>
      <TopCard></TopCard>
      <TopProducts></TopProducts>
      <ShopByCategory></ShopByCategory>
      <ShopBYGender></ShopBYGender>
      <MakeAGift></MakeAGift>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
