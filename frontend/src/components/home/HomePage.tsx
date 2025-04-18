import { Header } from "../Header";
import { DrawerMenu } from "../drawerMenu/DrawerMenu";
import { RecommendedSection } from "./RecommendedSection";

export const HomePage: React.FC = () => {
  return (
    <div className="bg-slate-200 flex justify-start">
      <DrawerMenu />
      <div className="w-full">
        <Header />
        <div className="p-6">
          <RecommendedSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
