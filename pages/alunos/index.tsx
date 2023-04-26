import { Table } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface IFormInput {
  Nome: string;
  Período: string;
  Etapa: string;
  Ano: string;
}

export default function Loan() {
  const router = useRouter()

  const columns = [
    {
      id: "name",
      label: "Nome",
    },
    {
      id: "book",
      label: "Livro",
    },
    {
      id: "loanDate",
      label: "Data Empréstimo",
    },
    {
      id: "returnDate",
      label: "Data Devolução",
    },
    {
      id: "returned",
      label: "Devolvido",
    },
  ];

  const rows : any = [
    {
      id: "1",
      name: "Paulinho do Pneu",
      book: "Como queimar um Pneu",
      loanDate: "22-04-2023",
      returnDate: "23-04-2023",
      returned: "Atrasado",
    },
    {
      id: "2",
      name: "Jambra do Muaitai",
      book: "Capoeirista loko",
      loanDate: "22-04-2023",
      returnDate: "23-04-2023",
      returned: "Pendente",
    },
    {
      id: "3",
      name: "Pedrinho matador",
      book: "Onças Pintadas",
      loanDate: "22-04-2023",
      returnDate: "23-04-2023",
      returned: "Pendente",
    },
    {
      id: "4",
      name: "Ben do omemtrix",
      book: "Manual do Alien",
      loanDate: "22-04-2023",
      returnDate: "23-04-2023",
      returned: "Devolvido",
    },
  ];

  return (
    <>
      <div className="w-[80%] -mt-[300px] rounded-2xl bg-white">
        <h1 className="text-4xl flex-center p-5">Livros Emprestados</h1>
        <Table selectionMode="single" onClick={() => router.push('/')} sticked striped>
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column key={column.id}>{column.label}</Table.Column>
            )}
          </Table.Header>
          <Table.Body items={rows}>
            {(item : any) => (
              <Table.Row key={item.id}>
                {(columnKey) => <Table.Cell><Link href={'/emprestimos/2'}>{item[columnKey]}</Link></Table.Cell>}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
