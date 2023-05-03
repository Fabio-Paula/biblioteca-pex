import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";

interface IRow {
  id: string;
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
      width: 400,
    },
  ];

  const rows: IRow[] = [
    {
      id: "1",
      book: "Como queimar um Pneu",
      DateOfLoan: "22-04-2023",
      status: "Atrasado",
    },
    {
      id: "2",
      book: "Capoeirista loko",
      DateOfLoan: "22-04-2023",
      status: "Pendente",
    },
    {
      id: "3",
      book: "Onças Pintadas",
      DateOfLoan: "22-04-2023",
      status: "Pendente",
    },
    {
      id: "4",
      book: "Manual do Alien",
      DateOfLoan: "22-04-2023",
      status: "Devolvido",
    },
    {
      id: "5",
      book: "Como queimar um Pneu",
      DateOfLoan: "22-04-2023",
      status: "Atrasado",
    },
    {
      id: "6",
      book: "Capoeirista loko",
      DateOfLoan: "22-04-2023",
      status: "Pendente",
    },
    {
      id: "7",
      book: "Onças Pintadas",
      DateOfLoan: "22-04-2023",
      status: "Pendente",
    },
    {
      id: "8",
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
          Empréstimos
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
