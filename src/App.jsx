// store
import useAppStore from "./store/useAppStore";
import { useShallow } from "zustand/react/shallow";
// pages
import LoginPages from "./features/auth/pages";
import { useEffect } from "react";

function App() {
  const [isLogin, setIsLogin, role] = useAppStore(
    useShallow((state) => [state.isLogin, state.setIsLogin, state.role])
  );

  useEffect(() => {
    if (localStorage.getItem("juri")) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-200 text-slate-900">
      {!isLogin ? (
        <LoginPages />
      ) : (
        (role === "admin" && <p>Admin</p>) ||
        (role === "pbb" && <p>Peserta</p>) ||
        (role === "varfor" && <p>VarFor</p>) ||
        (role === "kos" && <p>Kos</p>)
      )}
    </div>
  );
}

export default App;
