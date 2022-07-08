import Commit from "~/Component/Commit";
import FlashSale from "~/Component/FlashSale";
import ListCategory from "~/Component/ListCategory";
import { ListCompany } from "~/Component/ListComPany";
import ListProduct from "~/Component/ListProduct";
import Slider from "~/Component/Slider";

function HomePage() {
  return (
    <div>
      <Slider />
      <Commit />
      <ListCategory />
      <FlashSale />
      <ListProduct />
      <ListCompany />
    </div>
  );
}

export default HomePage;
