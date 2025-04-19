import { Header } from "../Header";
import { DrawerMenu } from "../drawerMenu/DrawerMenu";
import { EmpruntsSection } from "../emprunts/EmpruntsSection";

export const EmpruntsPage: React.FC = () => {
  return (
    <div className="bg-slate-200 flex justify-start">
      <DrawerMenu />
      <div className="w-full">
        <Header />
        <div className="p-6 flex justify-between">
          <EmpruntsSection />
        </div>
      </div>
    </div>
  );
};

export default EmpruntsPage;
