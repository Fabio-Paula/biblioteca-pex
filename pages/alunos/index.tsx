import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";

interface IRow {
  id: string;
  name: string;
  book: string;
  DateOfLoan: string;
  status: string;
}

export default function Loan(props: any) {
  function AlternatingColorTable(rows: number) {
    if (rows % 2 == 0) {
      return "bg-black/5";
    } else {
      return "bg-white";
    }
  }

  const columns = [
    {
      field: "name",
      headerName: "Nome",
      headerClassName: "bg-neutral-900 text-white",
      width: 350,

    },
    {
      field: "book",
      headerName: "Livro",
      headerClassName: "bg-neutral-900 text-white",
      width: 400,

    },
    {
      field: "DateOfLoan",
      headerName: "Data de Empréstimo",
      headerClassName: "bg-neutral-900 text-white",
      width: 400,
      renderCell: (params: any) =>
        moment(params.row.createdAt).format("DD/MM/YYYY"),
    },
    {
      field: "status",
      headerName: "Status",
      headerClassName: "bg-neutral-900 text-white",
      width: 200,
    },
  ];

  const rows: IRow[] = [
    {
      id: "1",
      name: 'Mauricião Sampaio Miguel da Grota Júnior da Silva',
      book: "Como queimar um Pneu",
      DateOfLoan: "22-04-2023",
      status: "Atrasado",
    },
    {
      id: "2",
      name: 'Mauricião',
      book: "Capoeirista loko",
      DateOfLoan: "22-04-2023",
      status: "Pendente",
    },
    {
      id: "3",
      name: 'Mauricião',
      book: "Onças Pintadas",
      DateOfLoan: "22-04-2023",
      status: "Pendente",
    },
    {
      id: "4",
      name: 'Mauricião',
      book: "Manual do Alien",
      DateOfLoan: "22-04-2023",
      status: "Devolvido",
    },
    {
      id: "5",
      name: 'Mauricião',
      book: "Como queimar um Pneu",
      DateOfLoan: "22-04-2023",
      status: "Atrasado",
    },
    {
      id: "6",
      name: 'Mauricião',
      book: "Capoeirista loko",
      DateOfLoan: "22-04-2023",
      status: "Pendente",
    },
    {
      id: "7",
      name: 'Mauricião',
      book: "Onças Pintadas",
      DateOfLoan: "22-04-2023",
      status: "Pendente",
    },
    {
      id: "8",
      name: 'Mauricião',
      book: "Manual do Alien",
      DateOfLoan: "22-04-2023",
      status: "Devolvido",
    },
  ];

  return (
    <>
      <Box sx={{ height: "auto", width: "70%" }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{ textAlign: "center", mt: "-10%", mb: 3 }}
        >
          Alunos
        </Typography>
        <DataGrid
          sx={{ cursor: "pointer", width: 'max-content'}}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10 },
            },
          }}
          getRowId={(row) => row.id}
          className={`bg-white`}
          columns={columns}
          rows={rows}
        />
      </Box>
    </>
  );
}

// export default dynamic(() => Promise.resolve(Loan), { ssr: false });
