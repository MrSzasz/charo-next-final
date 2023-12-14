import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";

const LoginPage = () => {
  const { userLogin } = useAppContext();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userLogin(
        document.querySelector("#loginEmail").value,
        document.querySelector("#loginPass").value
      );
      router.push("/dash");
    } catch (err) {
      toast.error("Datos de sesión inválidos");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      localStorage.setItem("userData", "null");
    } else if (
      localStorage.getItem("userData") &&
      localStorage.getItem("userData") !== "null"
    ) {
      router.push("/dash");
    }
  }, []);

  return (
    <div className="grid place-content-center w-screen h-screen">
      <form
        className="w-[90vw] md:w-[50vw] h-[60svh] flex flex-col justify-center items-center gap-8"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="p-4 border-b border-black w-[75%]"
          required
          placeholder="Email"
          type="email"
          name="loginEmail"
          id="loginEmail"
        />
        <input
          className="p-4 border-b border-black w-[75%]"
          required
          placeholder="Password"
          type="password"
          name="loginPass"
          id="loginPass"
        />
        <button className="border-black rounded-lg p-4 px-8 border w-fit tracking-wider hover:bg-black hover:text-white transition-all">
          Login
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default LoginPage;
