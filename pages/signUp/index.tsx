import { ToastError } from "@/components/Toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";

export interface IFormInput {
  login: string;
  senha: string;
}

export default function Login() {
  const {push} = useRouter();

  const [userInfo, setUserInfo] = useState({email: '', password: ''})

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        login: userInfo.email,
        senha: userInfo.password,
        redirect: false,
      });
      if (res?.ok) {
        push("/");
      }
    } catch {
      ToastError({
        title: "Algo deu errado! Confira seus dados e tente novamente",
      });
    }
  };


  return (
    <div className="flex justify-center h-full items-center">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 w-[30rem] lg:w-[50rem] drop-shadow-xl"
      >
        <h1 className="lg:col-span-2 h-24 lg:h-auto logo bg-neutral-900">
          Bibsys
        </h1>
        <div className="lg:col-span-1 bg-white">
          <div className="flex-center flex-col">
            <div className="title mt-10">
              <h1>Login</h1>
            </div>
            <div className="mt-5">
              <input
                onChange={({ target }) =>
                setUserInfo({ ...userInfo, email: target.value })
              }
                className="input-login"
                placeholder="  Login"
              />
              <input
              onChange={({ target }) =>
              setUserInfo({ ...userInfo, password: target.value })
              }
                type="password"
                className="mt-5 input-login"
                placeholder="  Senha"
              />
            </div>
            <div className="cursor-pointer p-2 mb-5 w-28 mt-5 hover:bg-neutral-950 text-white bg-neutral-900">
              <input className="flex m-auto cursor-pointer" type="submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
