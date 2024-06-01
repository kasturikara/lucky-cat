// lib
import PropTypes from "prop-types";
// components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useAppStore from "src/store/useAppStore";
import { useShallow } from "zustand/react/shallow";

function AdminLayout({ children }) {
  const [openSidebar] = useAppStore(useShallow((state) => [state.openSidebar]));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Sidebar />
      <main
        className={`p-4 min-h-screen pt-20 ${
          openSidebar ? "md:ml-56" : "ml-0"
        }`}
      >
        {children}
      </main>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default AdminLayout;
