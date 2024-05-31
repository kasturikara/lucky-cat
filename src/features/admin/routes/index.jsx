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

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPages />} />
      <Route path="/juri" element={<JuriPages />} />
      <Route path="/peserta/smp" element={<PesertaSmpPages />} />
      <Route path="/peserta/sma" element={<PesertaSmaPages />} />
      <Route path="/subs/pbb" element={<SubsPbbPages />} />
      <Route path="/subs/dan" element={<SubsDanPages />} />
      <Route path="/subs/var" element={<SubsVarPages />} />
      <Route path="/subs/for" element={<SubsForPages />} />
      <Route path="/subs/kos" element={<SubsKosPages />} />
      <Route path="/subs/kategori" element={<KategoriPages />} />
      <Route path="/total/smp" element={<TotalSmpPages />} />
      <Route path="/total/sma" element={<TotalSmaPages />} />
    </Routes>
  );
}

export default AdminRoutes;
