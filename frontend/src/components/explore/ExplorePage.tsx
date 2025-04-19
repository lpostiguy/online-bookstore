import { Header } from "../Header";
import { DrawerMenu } from "../drawerMenu/DrawerMenu";
import { ExploreSection } from "./ExploreSection";
import bannerJPG from "../../assets/img/banner-vedette.jpg";

export const CategoriesPage: React.FC = () => {
  return (
    <div className="bg-slate-200 flex justify-start">
      <DrawerMenu />
      <div className="w-full">
        <Header />
        <div className="p-6 flex justify-between">
          <ExploreSection />
          <div className="w-3/12 px-4">
            <img className="rounded-2xl" src={bannerJPG} alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
