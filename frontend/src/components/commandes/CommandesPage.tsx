import { Header } from "../Header";
import { DrawerMenu } from "../drawerMenu/DrawerMenu";
import { CommandesSection } from "../commandes/CommandesSection";

export const CommandesPage: React.FC = () => {
  return (
    <div className="bg-slate-200 flex justify-start">
      <DrawerMenu />
      <div className="w-full">
        <Header />
        <div className="p-6 flex justify-between">
          <CommandesSection />
        </div>
      </div>
    </div>
  );
};

export default CommandesPage;
