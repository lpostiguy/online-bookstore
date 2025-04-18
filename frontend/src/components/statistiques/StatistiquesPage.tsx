import { StatistiquesSection } from "./StatistiquesSection";
import { Header } from "../Header";
import { DrawerMenu } from "../drawerMenu/DrawerMenu";

export const StatistiquesPage: React.FC = () => {
  return (
    <div className="bg-slate-200 flex justify-start">
      <DrawerMenu />
      <div className="w-full">
        <Header />
        <div className="p-6">
          <StatistiquesSection />
        </div>
      </div>
    </div>
  );
};

export default StatistiquesPage;
