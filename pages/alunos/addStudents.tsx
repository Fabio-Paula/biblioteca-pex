import Input from "@/components/InputForm";
import { useForm } from "react-hook-form";

interface IFormInput {
  Livro: string;
  Author: string;
  Etapa: string;
  Ano: string;
}

export default function AddBooks() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: { Livro: "", Author: "", Etapa: "", Ano: "" },
  });

  return (
    <div className="flex justify-center items-center w-full h-full">
      <form className="flex flex-col space-y-5"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <h1 className="text-3xl m-auto mb-10">Adicionar Livros</h1>
        <Input
          {...register("Livro", { required: "Por favor inserir o livro" })}
          placeholder="  Nome do Livro"
        />
          <p>{errors.Livro?.message}</p>
        <Input
          {...register("Author", { required: "Por favor inserir o autor" })}
          placeholder="  Autor"
        />
        <p>{errors.Author?.message}</p>
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
      </form>
    </div>
  );
}
