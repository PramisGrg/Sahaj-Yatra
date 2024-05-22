import AdminSidebar from "@/ui/adminSidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex">
      <AdminSidebar />
      <div className=" flex-grow">{children}</div>
    </div>
  );
};

export default Layout;
