import { LockKey, UserCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { matchUser } from "../api";
import Swal from "sweetalert2";
import { Button, Label, TextInput } from "flowbite-react";

function LoginPages() {
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setDataLogin({ ...dataLogin, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        <form
          className="flex flex-col max-w-md gap-4 p-4"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="block mb-2">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="username..."
              icon={UserCircle}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="block mb-2">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="* * * * *"
              icon={LockKey}
              required
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-sky-800 hover:bg-sky-600"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPages;
