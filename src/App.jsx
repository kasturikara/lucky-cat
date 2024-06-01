// store
import useAppStore from "./store/useAppStore";
import { useShallow } from "zustand/react/shallow";
// layout
import AdminLayout from "./features/admin/layout";
// routes
import AdminRoutes from "./features/admin/routes";
// pages
import LoginPages from "./features/auth/pages";
import { useEffect } from "react";

function App() {
  const [isLoading, setIsLoading, isLogin, setIsLogin, role] = useAppStore(
    useShallow((state) => [
      state.isLoading,
      state.setIsLoading,
      state.isLogin,
      state.setIsLogin,
      state.role,
    ])
  );

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("juri")) {
      setIsLogin(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-slate-200 text-slate-900">
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
        </div>
      ) : !isLogin ? (
        <LoginPages />
      ) : (
        (role === "admin" && (
          <AdminLayout>
            <AdminRoutes />
          </AdminLayout>
        )) ||
        (role === "pbb" && <p>Peserta</p>) ||
        (role === "varfor" && <p>VarFor</p>) ||
        (role === "kos" && <p>Kos</p>)
      )}
    </div>
  );
}

export default App;
