// lib
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// store
import useAppStore from "src/store/useAppStore";
import { useShallow } from "zustand/react/shallow";
// api
import { getPeserta } from "../../api";
// icons
import {
  Book,
  BookOpenText,
  CaretDown,
  CaretUp,
  ChartBar,
  Drop,
  Fire,
  MarkerCircle,
  PencilCircle,
  SquaresFour,
  Users,
  UsersThree,
} from "@phosphor-icons/react";

const Sidebar = () => {
  const location = useLocation();
  const [sidebarOpen] = useAppStore(useShallow((state) => [state.openSidebar]));
  const [openMenus, setOpenMenus] = useState({
    peserta: false,
    subs: false,
    total: false,
    smp: false,
    sma: false,
  });
  const [pesertaSmp, setPesertaSmp] = useState([]);
  const [pesertaSma, setPesertaSma] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const pesertaSmp = await getPeserta("smp");
      const pesertaSma = await getPeserta("sma");
      setPesertaSmp(pesertaSmp);
      setPesertaSma(pesertaSma);
    }

    fetchData();
  }, []);

  return (
    <aside
      className={`p-4 md:translate-x-0 ${
        sidebarOpen ? "left-0 w-screen" : "-left-56"
      } top-0 fixed h-screen md:w-56 bg-slate-800 text-slate-50 overflow-y-auto`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between h-10">
          <h2 className="text-sm font-bold">E-SCORING SYSTEM</h2>
          <img src="/logo.png" alt="logo" className="w-8 h-8" />
        </div>
        <hr />
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {/* Dashboard */}
            <li
              className={`${
                location.pathname === "/" && "bg-sky-700"
              } rounded-md hover:bg-slate-700`}
            >
              <Link to="/" className="flex items-center p-2 space-x-3">
                {location.pathname === "/" ? (
                  <SquaresFour size={28} weight="fill" />
                ) : (
                  <SquaresFour size={28} />
                )}
                <span>Dashboard</span>
              </Link>
            </li>

            {/* Juri */}
            <li
              className={`${
                location.pathname === "/juri" && "bg-sky-700"
              } rounded-md hover:bg-slate-700`}
            >
              <Link to="/juri" className="flex items-center p-2 space-x-3">
                {location.pathname === "/juri" ? (
                  <Users size={28} weight="fill" />
                ) : (
                  <Users size={28} />
                )}
                <span>Juri</span>
              </Link>
            </li>

            {/* Peserta */}
            <li className={`rounded-md`}>
              <button
                type="button"
                onClick={() =>
                  setOpenMenus({
                    ...openMenus,
                    peserta: !openMenus.peserta,
                    subs: false,
                    total: false,
                    smp: false,
                    sma: false,
                  })
                }
                className="flex items-center justify-between w-full p-2 hover:bg-slate-700"
              >
                <div className="flex items-center space-x-3">
                  <UsersThree size={28} />
                  <span>Peserta</span>
                </div>
                {openMenus?.peserta ? (
                  <CaretUp size={28} weight="bold" />
                ) : (
                  <CaretDown size={28} weight="bold" />
                )}
              </button>
              {openMenus.peserta && (
                <ul className={`pl-2`}>
                  {/* Peserta SMP */}
                  <li
                    className={`rounded-md hover:bg-slate-700 ${
                      location.pathname === "/peserta/smp" && "bg-sky-700"
                    }`}
                  >
                    <Link
                      to="/peserta/smp"
                      className="flex items-center p-2 space-x-3"
                    >
                      {location.pathname === "/peserta/smp" ? (
                        <Drop size={28} weight="fill" />
                      ) : (
                        <Drop size={28} />
                      )}
                      <span>SMP</span>
                    </Link>
                  </li>
                  {/* Peserta SMA */}
                  <li
                    className={`rounded-md hover:bg-slate-700 ${
                      location.pathname === "/peserta/sma" && "bg-sky-700"
                    }`}
                  >
                    <Link
                      to="/peserta/sma"
                      className="flex items-center p-2 space-x-3"
                    >
                      {location.pathname === "/peserta/sma" ? (
                        <Fire size={28} weight="fill" />
                      ) : (
                        <Fire size={28} />
                      )}
                      <span>SMA</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Subs */}
            <li className="rounded-md">
              <button
                type="button"
                onClick={() =>
                  setOpenMenus({
                    ...openMenus,
                    peserta: false,
                    subs: !openMenus.subs,
                    total: false,
                    smp: false,
                    sma: false,
                  })
                }
                className="flex items-center justify-between w-full p-2 hover:bg-slate-700"
              >
                <div className="flex items-center space-x-3">
                  <BookOpenText size={28} />
                  <span>Kriteria</span>
                </div>
                {openMenus?.subs ? (
                  <CaretUp size={28} weight="bold" />
                ) : (
                  <CaretDown size={28} weight="bold" />
                )}
              </button>
              {openMenus.subs && (
                <ul className={`pl-2`}>
                  {/* Subs Kategori */}
                  <li
                    className={`rounded-md hover:bg-slate-700 ${
                      location.pathname === "/subs/kategori" && "bg-sky-700"
                    }`}
                  >
                    <Link
                      to="/subs/kategori"
                      className="flex items-center p-2 space-x-3"
                    >
                      {location.pathname === "/subs/kategori" ? (
                        <Book size={28} weight="fill" />
                      ) : (
                        <Book size={28} />
                      )}
                      <span>Kategori</span>
                    </Link>
                  </li>
                  {/* Subs PBB */}
                  <li
                    className={`rounded-md hover:bg-slate-700 ${
                      location.pathname === "/subs/pbb" && "bg-sky-700"
                    }`}
                  >
                    <Link
                      to="/subs/pbb"
                      className="flex items-center p-2 space-x-3"
                    >
                      {location.pathname === "/subs/pbb" ? (
                        <Book size={28} weight="fill" />
                      ) : (
                        <Book size={28} />
                      )}
                      <span>PBB</span>
                    </Link>
                  </li>
                  {/* Subs DAN */}
                  <li
                    className={`rounded-md hover:bg-slate-700 ${
                      location.pathname === "/subs/dan" && "bg-sky-700"
                    }`}
                  >
                    <Link
                      to="/subs/dan"
                      className="flex items-center p-2 space-x-3"
                    >
                      {location.pathname === "/subs/dan" ? (
                        <Book size={28} weight="fill" />
                      ) : (
                        <Book size={28} />
                      )}
                      <span>Danton</span>
                    </Link>
                  </li>
                  {/* Subs VAR */}
                  <li
                    className={`rounded-md hover:bg-slate-700 ${
                      location.pathname === "/subs/var" && "bg-sky-700"
                    }`}
                  >
                    <Link
                      to="/subs/var"
                      className="flex items-center p-2 space-x-3"
                    >
                      {location.pathname === "/subs/var" ? (
                        <Book size={28} weight="fill" />
                      ) : (
                        <Book size={28} />
                      )}
                      <span>Variasi</span>
                    </Link>
                  </li>
                  {/* Subs FOR */}
                  <li
                    className={`rounded-md hover:bg-slate-700 ${
                      location.pathname === "/subs/for" && "bg-sky-700"
                    }`}
                  >
                    <Link
                      to="/subs/for"
                      className="flex items-center p-2 space-x-3"
                    >
                      {location.pathname === "/subs/for" ? (
                        <Book size={28} weight="fill" />
                      ) : (
                        <Book size={28} />
                      )}
                      <span>Formasi</span>
                    </Link>
                  </li>
                  {/* Subs KOS */}
                  <li
                    className={`rounded-md hover:bg-slate-700 ${
                      location.pathname === "/subs/kos" && "bg-sky-700"
                    }`}
                  >
                    <Link
                      to="/subs/kos"
                      className="flex items-center p-2 space-x-3"
                    >
                      {location.pathname === "/subs/kos" ? (
                        <Book size={28} weight="fill" />
                      ) : (
                        <Book size={28} />
                      )}
                      <span>Kostum</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Total */}
            <li className="rounded-md">
              <button
                type="button"
                onClick={() =>
                  setOpenMenus({
                    ...openMenus,
                    peserta: false,
                    subs: false,
                    total: !openMenus.total,
                    smp: false,
                    sma: false,
                  })
                }
                className="flex items-center justify-between w-full p-2 hover:bg-slate-700"
              >
                <div className="flex items-center space-x-3">
                  <ChartBar size={28} />
                  <span>Total</span>
                </div>
                {openMenus?.total ? (
                  <CaretUp size={28} weight="bold" />
                ) : (
                  <CaretDown size={28} weight="bold" />
                )}
              </button>
              {openMenus?.total && (
                <ul className={`pl-2`}>
                  {/* Peserta SMP */}
                  <li
                    className={`rounded-md hover:bg-slate-700 ${
                      location.pathname === "/peserta/smp" && "bg-sky-700"
                    }`}
                  >
                    <Link
                      to="/total/smp"
                      className="flex items-center p-2 space-x-3"
                    >
                      {location.pathname === "/peserta/smp" ? (
                        <Drop size={28} weight="fill" />
                      ) : (
                        <Drop size={28} />
                      )}
                      <span>SMP</span>
                    </Link>
                  </li>
                  {/* Peserta SMA */}
                  <li
                    className={`rounded-md hover:bg-slate-700 ${
                      location.pathname === "/peserta/sma" && "bg-sky-700"
                    }`}
                  >
                    <Link
                      to="/total/sma"
                      className="flex items-center p-2 space-x-3"
                    >
                      {location.pathname === "/peserta/sma" ? (
                        <Fire size={28} weight="fill" />
                      ) : (
                        <Fire size={28} />
                      )}
                      <span>SMA</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Penilaian SMP */}
            <li className="rounded-md">
              <button
                type="button"
                onClick={() =>
                  setOpenMenus({
                    ...openMenus,
                    peserta: false,
                    subs: false,
                    total: false,
                    smp: !openMenus.smp,
                    sma: false,
                  })
                }
                className="flex items-center justify-between w-full p-2 hover:bg-slate-700"
              >
                <div className="flex items-center space-x-3">
                  <PencilCircle size={28} />
                  <span>Penilaian SMP</span>
                </div>
                {openMenus?.smp ? (
                  <CaretUp size={28} weight="bold" />
                ) : (
                  <CaretDown size={28} weight="bold" />
                )}
              </button>
              {openMenus?.smp &&
                pesertaSmp.map((item) => (
                  <li
                    key={item.no}
                    className={`rounded-md hover:bg-slate-700 ${
                      location.pathname === `/penilaian/smp/${item.no}` &&
                      "bg-sky-700"
                    }`}
                  >
                    <Link
                      to={`/penilaian/smp/${item.no}`}
                      className="flex items-center p-2 space-x-3 text-xs"
                    >
                      {location.pathname === `/penilaian/smp/${item.no}` ? (
                        <Drop size={28} weight="fill" />
                      ) : (
                        <Drop size={28} />
                      )}
                      <span>{item.nama}</span>
                    </Link>
                  </li>
                ))}
            </li>

            {/* Penilaian SMA */}
            <li className="rounded-md">
              <button
                type="button"
                onClick={() =>
                  setOpenMenus({
                    ...openMenus,
                    peserta: false,
                    subs: false,
                    total: false,
                    smp: false,
                    sma: !openMenus.sma,
                  })
                }
                className="flex items-center justify-between w-full p-2 hover:bg-slate-700"
              >
                <div className="flex items-center space-x-3">
                  <MarkerCircle size={28} />
                  <span>Penilaian SMA</span>
                </div>
                {openMenus?.sma ? (
                  <CaretUp size={28} weight="bold" />
                ) : (
                  <CaretDown size={28} weight="bold" />
                )}
              </button>
              {openMenus?.sma &&
                pesertaSma.map((item) => (
                  <li
                    key={item.no}
                    className={`rounded-md hover:bg-slate-700 ${
                      location.pathname === `/penilaian/sma/${item.no}` &&
                      "bg-sky-700"
                    }`}
                  >
                    <Link
                      to={`/penilaian/sma/${item.no}`}
                      className="flex items-center p-2 space-x-3 text-xs"
                    >
                      {location.pathname === `/penilaian/sma/${item.no}` ? (
                        <Drop size={28} weight="fill" />
                      ) : (
                        <Drop size={28} />
                      )}
                      <span>{item.nama}</span>
                    </Link>
                  </li>
                ))}
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
