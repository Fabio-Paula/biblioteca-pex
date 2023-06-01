import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import { useRouter } from "next/dist/client/router";

interface IRow {
  id: string;
  name: string;
  book: string;
  DateOfLoan: string;
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
      width: 350,

    },
    {
      field: "DateOfLoan",
      headerName: "Data de Empréstimo",
      headerClassName: "bg-neutral-900 text-white",
      width: 300,
      renderCell: (params: any) =>
        moment(params.row.createdAt).format("DD/MM/YYYY"),
    }
  ];

  const rows: IRow[] = [
    {
      id: "1",
      name: 'Mauricião Sampaio Miguel da Grota Júnior da Silva',
      book: "Como queimar um Pneu",
      DateOfLoan: "22-04-2023",
    },
    {
      id: "2",
      name: 'Mauricião',
      book: "Capoeirista loko",
      DateOfLoan: "22-04-2023",
    },
    {
      id: "3",
      name: 'Mauricião',
      book: "Onças Pintadas",
      DateOfLoan: "22-04-2023",
    },
    {
      id: "4",
      name: 'Mauricião',
      book: "Manual do Alien",
      DateOfLoan: "22-04-2023",
    },
    {
      id: "5",
      name: 'Mauricião',
      book: "Como queimar um Pneu",
      DateOfLoan: "22-04-2023",
    },
    {
      id: "6",
      name: 'Mauricião',
      book: "Capoeirista loko",
      DateOfLoan: "22-04-2023",
    },
    {
      id: "7",
      name: 'Mauricião',
      book: "Onças Pintadas",
      DateOfLoan: "22-04-2023",
    },
    {
      id: "8",
      name: 'Mauricião',
      book: "Manual do Alien",
      DateOfLoan: "22-04-2023",
    },
  ];

  function changeBackgroundColor(data: number) {
    if (data % 2 == 0) {
      return "bg-black/10";
    } else {
      return "";
    }
  }
  const { push } = useRouter()

  return (
    <>
    <div className="hidden justify-center items-center h-screen lg:flex flex-initial">
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
          className={`bg-white m-auto`}
          columns={columns}
          rows={rows}
        />
      </Box>
    </div>
    <div className="lg:hidden">
        <div className="flex mt-5 ml-8 justify-center text-4xl">Alunos</div>
        <div className="grid mt-5 ml-8">
          {rows.map((e, index) => (
            <div onClick={() => push('/addStudents')} key={e.id}
              className={` ${changeBackgroundColor(index)} grid-cols-1 w-full text-center p-2 m-auto`}
            >
              {e.name.slice(0, 35)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// export default dynamic(() => Promise.resolve(Loan), { ssr: false });
