import SuperAdminSidebar from "@/ui/superadminSidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex">
      <SuperAdminSidebar />
      <div className=" flex-grow">{children}</div>
    </div>
  );
};

export default Layout;
