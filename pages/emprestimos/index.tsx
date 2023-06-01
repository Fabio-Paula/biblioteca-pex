import { Box, Typography } from "@mui/material";
import { DataGrid, GridRowSelectionModel } from "@mui/x-data-grid";
import moment from "moment";
import { useEffect, useState } from "react";

interface IRow {
  id: string;
  book: string;
  DateOfLoan: string;
}

export default function Loan(props: any) {

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
    }
  ];

  const rows: IRow[] = [
    {
      id: "1",
      book: "Como queimar um Pneu",
      DateOfLoan: "22-04-2023",
    },
    {
      id: "2",
      book: "Capoeirista loko",
      DateOfLoan: "22-04-2023",
    },
    {
      id: "3",
      book: "Onças Pintadas",
      DateOfLoan: "22-04-2023",
    },
    {
      id: "4",
      book: "Manual do Alien",
      DateOfLoan: "22-04-2023",
    },
    {
      id: "5",
      book: "Como queimar um Pneu",
      DateOfLoan: "22-04-2023",
    },
    {
      id: "6",
      book: "Capoeirista loko",
      DateOfLoan: "22-04-2023",
    },
    {
      id: "7",
      book: "Onças Pintadas",
      DateOfLoan: "22-04-2023",
    },
    {
      id: "8",
      book: "Manual do Alien",
      DateOfLoan: "22-04-2023",
    },
  ];

  const [rowData, setRowData] = useState<GridRowSelectionModel>([]);

  const handleRowClick = (params: any) => {
    const lineData = params.row;
    setRowData(lineData);
  };

  function changeBackgroundColor(data: number) {
    if (data % 2 == 0) {
      return "bg-black/10";
    } else {
      return "";
    }
  }

  return (
    <>
      <div className="hidden justify-center items-center h-screen lg:flex">
        <Box sx={{ height: "auto", width: "70%" }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{ textAlign: "center", mt: "-10%", mb: 3 }}
          >
            Empréstimos
          </Typography>
          <DataGrid
            sx={{ cursor: "pointer", width: "max-content", height: 'auto' }}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 },
              },
            }}
            // checkboxSelection
            onRowClick={handleRowClick}
            className={`bg-white m-auto`}
            columns={columns}
            rows={rows}
          />
        </Box>
      </div>
      <div className="lg:hidden">
        <div className="flex mt-5 ml-8 justify-center text-4xl">Livros</div>
        <div className="grid mt-5 ml-8">
          {rows.map((e, index) => (
            <div key={e.id}
              className={` ${changeBackgroundColor(index)} grid-cols-1 w-full text-center p-2 m-auto`}
            >
              {e.book}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
