import UserSidebar from "@/ui/userSidebar";
import Topbar from "@/ui/topbar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex">
      <UserSidebar />
      <div className="flex flex-col w-full overflow-hidden">
        <Topbar />
        <div className=" flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
