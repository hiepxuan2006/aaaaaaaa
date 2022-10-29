import FlashSale from "~/Component/FlashSale";
import ListCategory from "~/Component/ListCategory";
import { ListCompany } from "~/Component/ListComPany";
import ListProduct from "~/Component/ListProduct";
import ProductNew from "~/Component/ProductNew";
import Review from "~/Component/Review";
import Slider from "~/Component/Slider";

function HomePage() {
  return (
    <div>
      <Slider />
      {/* <Commit /> */}
      <Review />
      <ListCategory />
      <FlashSale />
      <ListProduct />
      <ProductNew />
      <ListCompany />
    </div>
  );
}

export default HomePage;
