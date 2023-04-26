import Input from "@/components/InputForm";
import { useForm } from "react-hook-form";

interface IFormInput {
  Nome: string;
  Período: string;
  Etapa: string;
  Ano: string;
}

export default function Alunos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: { Nome: "", Período: "", Etapa: "", Ano: "" },
  });

  console.log(errors);

  return (
    <div>
      {/* <form className="flex flex-col space-y-5"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <h1 className="text-3xl m-auto mb-10">Alunos</h1>
        <Input
          {...register("Nome", { required: "Por favor inserir a Nome" })}
          placeholder="  Nome"
        />
          <p>{errors.Nome?.message}</p>
        <Input
          {...register("Período", { required: "Por favor inserir a Período" })}
          placeholder="  Período"
        />
        <p>{errors.Período?.message}</p>
        <Input
          {...register("Etapa", { required: "Por favor inserir a Etapa" })}
          placeholder="  Etapa"
        />
        <p>{errors.Etapa?.message}</p>
        <Input type='number'
          {...register("Ano", { required: "Por favor inserir a Ano" })}
          placeholder="  Ano"
        />
        <p>{errors.Ano?.message}</p>
        <div className="cursor-pointer p-2 w-28 m-auto hover:bg-neutral-950 text-white bg-neutral-900">
        <input className="flex m-auto cursor-pointer" type="submit" />
        </div>
      </form> */}
    </div>
  );
}
