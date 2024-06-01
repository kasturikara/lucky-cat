// lib
import Swal from "sweetalert2";
// store
import useAppStore from "src/store/useAppStore";
import { useShallow } from "zustand/react/shallow";
// icons
import { CaretLeft, List, SignOut } from "@phosphor-icons/react";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useAppStore(
    useShallow((state) => [state.openSidebar, state.setOpenSidebar])
  );
  const handleLogout = () => {
    Swal.fire({
      title: "Apakah anda yakin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Keluar!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        window.location.href = "/";
      }
    });
  };

  return (
    <header
      className={`p-4 text-slate-50 fixed top-0 right-0 z-50 ${
        openSidebar
          ? "md:left-56 bg-slate-800 md:bg-sky-500"
          : "left-0 bg-sky-500"
      }`}
    >
      <div className="flex items-center justify-between w-full h-10 mx-auto">
        <button
          className="rounded-md hover:text-sky-700"
          onClick={() => setOpenSidebar(!openSidebar)}
          type="button"
        >
          {openSidebar ? (
            <CaretLeft size={32} weight="bold" />
          ) : (
            <List size={32} weight="bold" />
          )}
        </button>
        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center p-2 space-x-2 rounded-md hover:text-slate-900"
          type="button"
        >
          <SignOut size={28} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
