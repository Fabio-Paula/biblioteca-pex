import { authService } from "@/src/auth/authService"
import { tokenService } from "@/src/auth/tokenService"
import { GetServerSideProps } from "next"

// export const getServerSideProps : GetServerSideProps = async () => {
//   authService.getSession

//   return {
//     props: {
//       token: token
//     }
//   }
// }

export default function PageSsr() {
  return (
    <>Ssr</>
  )
}