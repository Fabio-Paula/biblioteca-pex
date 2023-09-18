import api from "@/src/auth/infra/HttpClient";
import { URL_GET } from "@/src/constants/service";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/dist/client/router";

interface IStudents {
  id_aluno?: number,
  id_usuario?: number,
  periodo: string,
  curso: string,
  registro_academico?: string
}

export const getServerSideProps = async (ctx : any) => {
  const res = await api(ctx).get(`${URL_GET.alunos}`)
  if(res.data){
    const data = res.data
    return {
      props: {
        data 
      }
    }
  }
  return {}
}

export default function Loan({data} : {data: IStudents[]}) {
  console.log(data)
  // const [students, setStudents] = useState<IStudents>(data)

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
      field: "periodo",
      headerName: "Período",
      headerClassName: "bg-neutral-900 text-white",
      width: 350,

    },
    {
      field: "curso",
      headerName: "Curso",
      headerClassName: "bg-neutral-900 text-white",
      width: 300,
    },
    {
      field: "registro_academico",
      headerName: "Registro Acadêmico",
      headerClassName: "bg-neutral-900 text-white",
      width: 300,
    }
  ];

  const rows: IStudents[] = data.map((res, index) => ({
    periodo: res.periodo,
    curso: res.curso,
    registro_academico: res.registro_academico
  }))


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
          getRowId={(row) => row.curso}
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
            <div onClick={() => push('/addStudents')} key={e.id_aluno}
              className={` ${changeBackgroundColor(index)} grid-cols-1 w-full text-center p-2 m-auto`}
            >
              {/* {e.name.slice(0, 35)} */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// export default dynamic(() => Promise.resolve(Loan), { ssr: false });
