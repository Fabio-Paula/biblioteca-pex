import { authService } from "@/src/auth/authService";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

export interface IFormInput {
  Login: string;
  Senha: string;
}

export default function Login() {
  const router = useRouter();
  const [values, setValues] = React.useState({
    user: 'fabio',
    password: 'safepassword'
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: { Login: "", Senha: "" },
  });

  console.log(errors);

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          authService
            .login(data) 
            .then(() => {
              router.push("/dashboard");
            })
            .catch(() => {
              <p>Usuário ou senha estão inválidos</p>;
              console.log("errors");
            });
          console.log(data);
        })}
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
                className="input-login"
                {...register("Login", { required: "Inserir o Nome" })}
                placeholder="  Login"
              />
              <p>{errors.Login?.message}</p>
              <input
                type="password"
                className="mt-5 input-login"
                {...register("Senha", {
                  required: "Inserir a Senha",
                })}
                placeholder="  Senha"
              />
              <p>{errors.Senha?.message}</p>
            </div>
            <div className="mt-5">
              <h1 className="cursor-pointer">Manter-se Conectado</h1>
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
