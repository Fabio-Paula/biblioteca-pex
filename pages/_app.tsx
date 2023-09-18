import MainContainer from "@/components/mainContainer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps: {session, ...pageProps}, }: AppProps) {
  return (
    <SessionProvider session={session}>
    <MainContainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <ToastContainer />
    <Component {...pageProps} />
    </MainContainer>
    </SessionProvider>
  );
}
