import { GetServerSidePropsContext } from "next";
import { getSession, signOut } from "next-auth/react";

export const Signed = (functionServer?: (context: any) => void) => {
  return async (ctx: GetServerSidePropsContext) => {
    const session = await getSession(ctx);
    if(session?.user.error){
      signOut()
    }
    if (!session) {
      return {
        redirect: {
          destination: "/signUp",
          permanent: false,
        },
      };
    }
    const modifiedCtx = {
      ...ctx,
      session,
    };

    if (functionServer) {
      return functionServer(modifiedCtx);
    }
    return {
      props: {
        session,
      },
    };
  };
};

export const Login = (functionServer?: (context: any) => void) => {
  return async (ctx: GetServerSidePropsContext) => {
    const session = await getSession(ctx);
    if (session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    const modifiedCtx = {
      ...ctx,
      session,
    };

    if (functionServer) {
      return functionServer(modifiedCtx);
    }
    return {
      props: {
        session,
      },
    };
  };
};
