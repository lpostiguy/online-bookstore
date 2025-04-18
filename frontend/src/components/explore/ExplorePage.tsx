import { Header } from "../Header";
import { DrawerMenu } from "../drawerMenu/DrawerMenu";
import { ExploreSection } from "./ExploreSection";

export const CategoriesPage: React.FC = () => {
  return (
    <div className="bg-slate-200 flex justify-start">
      <DrawerMenu />
      <div className="w-full">
        <Header />
        <div className="p-6">
          <ExploreSection />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
