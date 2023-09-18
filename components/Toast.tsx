import { toast } from "react-toastify";

interface ToastSucessProps {
  title: string
}
export function ToastSuccess({title} : ToastSucessProps){
    return(

          toast.success(`${title}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
    )
}

export function ToastError({title} : ToastSucessProps){
    return(

          toast.error(`${title}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
    )
}