import { Header } from "../Header";
import { DrawerMenu } from "../drawerMenu/DrawerMenu";
import { RecommendedSection } from "./RecommendedSection";
import bannerJPG from "../../assets/img/banner.jpg";
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <div className="bg-slate-200 flex justify-start">
      <DrawerMenu />
      <div className="w-full">
        <Header />
        <div className="p-6 flex justify-between">
          <RecommendedSection />
          <Link to="/explore" className="w-3/12 px-4">
            <img className="rounded-2xl" src={bannerJPG} alt="Banner" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
