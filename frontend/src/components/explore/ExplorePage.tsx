import { Header } from "../Header";
import { DrawerMenu } from "../drawerMenu/DrawerMenu";
import { ExploreSection } from "./ExploreSection";
import bannerJPG from "../../assets/img/banner-vedette.jpg";
import { useState } from "react";

export const CategoriesPage: React.FC = () => {
  const [showProductPage, setShowProductPage] = useState<boolean>(false);

  return (
    <div className="bg-slate-200 flex justify-start">
      <DrawerMenu />
      <div className="w-full">
        <Header />
        <div className="p-6 flex justify-between">
          <ExploreSection
            showProductPage={showProductPage}
            setShowProductPage={setShowProductPage}
          />
          {!showProductPage && (
            <div className="w-3/12 px-4 hidden lg:block">
              <img className="rounded-2xl" src={bannerJPG} alt="Banner" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
