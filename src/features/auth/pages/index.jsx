import { LockKey, UserCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { matchUser } from "./api";
import Swal from "sweetalert2";

function LoginPages() {
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const dataJuri = await matchUser(dataLogin);
    if (dataJuri) {
      localStorage.setItem("juri", JSON.stringify(dataJuri));

      window.location.href = "/";
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Username atau Password yang anda masukkan salah!",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-11/12 shadow-2xl md:w-1/3">
        <div className="w-full p-4 text-xl font-semibold rounded-t-lg md:text-2xl bg-sky-800 text-slate-50">
          Masuk ke Akun Anda
        </div>
        <form className="container flex flex-col p-4 mx-auto rounded-b-lg bg-slate-50 text-slate-900">
          {/* Username */}
          <div className="w-full mb-4 space-y-2 text-slate-800">
            <label htmlFor="username" className="block text-lg font-medium">
              Username
            </label>
            <div className="flex">
              <span className="flex items-center px-3 text-sm pointer-events-none rounded-l-md bg-sky-300">
                <UserCircle size={30} />
              </span>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username..."
                className="flex flex-1 h-10 p-4 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-r-md focus:ring-inset focus:ring-sky-600"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Password */}
          <div className="w-full mb-4 space-y-2 text-slate-800">
            <label htmlFor="password" className="text-lg font-medium">
              Password
            </label>
            <div className="flex">
              <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md bg-sky-300">
                <LockKey size={30} />
              </span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="flex flex-1 h-10 p-4 text-gray-800 bg-gray-100 border border-gray-300 sm:text-sm rounded-r-md focus:ring-inset focus:ring-sky-600"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Button */}
          <button
            className="w-full h-10 mt-4 font-semibold rounded text-slate-50 bg-sky-800 hover:bg-sky-600"
            type="button"
            onClick={handleSubmit}
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPages;
