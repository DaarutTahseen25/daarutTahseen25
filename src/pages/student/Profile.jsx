import { usePageTitle } from "../../hooks/usePageTitle";
import DashTitle from "../../Components/DashTitle";
import ProfileSettings from "./ProfileSettings";
import SecuritySettings from "./SecuritySettings";
import NotificationSettings from "./NotificationSettings";
import ProfileTab from "./ProfileTab";
import { useProfileTabs } from "./useProfileTabs";

const Profile = () => {
  usePageTitle("My Profile");

  const tabsState = useProfileTabs();

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FFFCE1]/30 via-transparent to-[#009688]/5">
      <div className="max-w-7xl mx-auto mb-8 md:mb-12">
        <DashTitle
          title="Profile Settings"
          subtitle="View and update your personal information and account settings"
        />
      </div>

      <div className="max-w-7xl mx-auto mb-8 md:mb-12">
        <ProfileTab {...tabsState} />

        <div className="mt-8">
          {tabsState.activeId === 1 && <ProfileSettings />}
          {tabsState.activeId === 2 && <SecuritySettings />}
          {tabsState.activeId === 3 && <NotificationSettings />}
        </div>
      </div>
    </section>
  );
};

export default Profile;
