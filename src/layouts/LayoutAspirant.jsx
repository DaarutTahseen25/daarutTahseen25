import DashboardHeader from "../Components/DashboardHeader";
import DashboardMain from "../Components/DashboardMain";
import DashboardSidebar from "../Components/DashboardSidebar";
import MobileDashboardSidebar from "../Components/MobileDashboardSidebar";

const LayoutAspirant = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[250px_1fr]">
      <DashboardSidebar />
      <MobileDashboardSidebar />
      <div className="flex flex-col h-screen overflow-y-auto">
        <DashboardHeader />
        <DashboardMain />
      </div>
    </div>
  );
};

export default LayoutAspirant;
