// store
import { CaretLeft, List } from "@phosphor-icons/react";
import useAppStore from "src/store/useAppStore";
import { useShallow } from "zustand/react/shallow";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useAppStore(
    useShallow((state) => [state.openSidebar, state.setOpenSidebar])
  );

  return (
    <header
      className={`p-4 text-slate-50 fixed top-0 right-0 z-50 ${
        openSidebar
          ? "md:left-56 bg-slate-800 md:bg-sky-500"
          : "left-0 bg-sky-800"
      }`}
    >
      <div className="container flex items-center justify-between h-10 mx-auto">
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
      </div>
    </header>
  );
};

export default Navbar;
