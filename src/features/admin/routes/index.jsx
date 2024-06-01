import { Route, Routes } from "react-router-dom";
import DashboardPages from "../pages/dashboard";
import JuriPages from "../pages/juri";
import PesertaSmpPages from "../pages/peserta/smp";
import PesertaSmaPages from "../pages/peserta/sma";
import SubsPbbPages from "../pages/subs/pbb";
import SubsDanPages from "../pages/subs/dan";
import SubsVarPages from "../pages/subs/var";
import SubsForPages from "../pages/subs/for";
import SubsKosPages from "../pages/subs/kos";
import KategoriPages from "../pages/subs/kategori";
import TotalSmpPages from "../pages/total/smp";
import TotalSmaPages from "../pages/total/sma";
import useAppStore from "src/store/useAppStore";
import { useShallow } from "zustand/react/shallow";
import PenilaianSmpPages from "../pages/penilaian/smp";

function AdminRoutes() {
  const routes = [
    { path: "/", element: <DashboardPages /> },
    { path: "/juri", element: <JuriPages /> },
    { path: "/peserta/smp", element: <PesertaSmpPages /> },
    { path: "/peserta/sma", element: <PesertaSmaPages /> },
    { path: "/subs/pbb", element: <SubsPbbPages /> },
    { path: "/subs/dan", element: <SubsDanPages /> },
    { path: "/subs/var", element: <SubsVarPages /> },
    { path: "/subs/for", element: <SubsForPages /> },
    { path: "/subs/kos", element: <SubsKosPages /> },
    { path: "/subs/kategori", element: <KategoriPages /> },
    { path: "/total/smp", element: <TotalSmpPages /> },
    { path: "/total/sma", element: <TotalSmaPages /> },
  ];
  const { jumlahSmp } = useAppStore(
    useShallow((state) => ({ jumlahSmp: state.jumlahSmp }))
  );

  const penilaianSmpRoutes = Array.from({ length: jumlahSmp }, (_, index) => ({
    path: `/penilaian/smp/${index + 1}`,
    element: <PenilaianSmpPages no={index + 1} />,
  }));

  return (
    <Routes>
      {[...routes, ...penilaianSmpRoutes].map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default AdminRoutes;
