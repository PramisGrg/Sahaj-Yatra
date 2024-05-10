import UserSidebar from "@/ui/userSidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex">
      <UserSidebar />
      <div className=" flex-grow">{children}</div>
    </div>
  );
};

export default Layout;
