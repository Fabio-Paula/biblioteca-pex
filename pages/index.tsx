import Button from "@/components/button";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridRowSelectionModel } from "@mui/x-data-grid";
import { useState } from "react";
import { Signed } from "./api/protectPages";

interface IRow {
  id: string;
  book: string;
  author: string;
}

export const getServerSideProps = Signed()

export default function Books(props: any) {
  const columns = [
    {
      field: "book",
      headerName: "Livro",
      headerClassName: "bg-neutral-900 text-white",
      width: 400,
    },
    {
      field: "author",
      headerName: "Autor",
      headerClassName: "bg-neutral-900 text-white",
      width: 400,
    },
  ];

  const rows: IRow[] = [
    {
      id: "1",
      book: "Como queimar um Pneu",
      author: "Authorzin",
    },
    {
      id: "2",
      book: "Capoeirista loko",
      author: "Authorzin",
    },
    {
      id: "3",
      book: "Onças Pintadas",
      author: "Authorzin",
    },
    {
      id: "4",
      book: "Manual do Alien",
      author: "Authorzin",
    },
    {
      id: "5",
      book: "Como queimar um Pneu",
      author: "Authorzin",
    },
    {
      id: "6",
      book: "Capoeirista loko",
      author: "Authorzin",
    },
    {
      id: "7",
      book: "Onças Pintadas",
      author: "Authorzin",
    },
    {
      id: "8",
      book: "Manual do Alien",
      author: "Authorzin",
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
      <div className="mt-5 flex justify-end right-2 z-10 fixed lg:hidden">
        <Button>Emprestar</Button>
      </div>
      <div className="hidden justify-center items-center h-screen flex-col lg:flex">
        <div>
          <Box sx={{ height: "auto", width: "70%" }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{ textAlign: "center", mb: 3 }}
            >
              Livros
            </Typography>
            <DataGrid
              sx={{ cursor: "pointer", width: "max-content", height: "auto" }}
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
        <div className="mt-5 flex justify-end">
          <Button>Emprestar</Button>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex mt-5 ml-8 justify-center text-4xl">Livros</div>
        <div className="grid mt-5 ml-8">
          {rows.map((e, index) => (
            <div
              key={e.id}
              className={` ${changeBackgroundColor(
                index
              )} grid-cols-1 w-full text-center p-2 m-auto`}
            >
              {e.book}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
