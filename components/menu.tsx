import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBook, FaHandshake } from "react-icons/fa";
import { GiEntryDoor } from "react-icons/gi";
import { HiMenu } from "react-icons/hi";

const menuValues = [{
  path: "/alunos",
  text: "Alunos",
  icon: <BsFillPersonFill className="animation-icon" size={25} />
},
  {
  path: "/alunos/addStudents",
  text: "Adicionar Livros",
  icon: <FaBook className="animation-icon" size={25} />
},
  {
  path: "/",
  text: "Livros",
  icon: <FaBook className="animation-icon" size={25} />
}, {
  path: "/emprestimos",
  text: "Empréstimos",
  icon: <FaHandshake className="animation-icon" size={25} />
}]

export default function Menu() {
  const [changeValueMenu, setChangeValueMenu] = useState<boolean>(true);
  const [windowSize, setWindowSize] = useState<number>(0);
  const { pathname } = useRouter()

  function ChangeStateMenu() {
    setChangeValueMenu(!changeValueMenu);
  }

  function verifyMenuState(text: string){
    const itemText = text.toLowerCase()
    if(pathname==itemText) return "bg-white/20"
    else return ""
  }

  useEffect(() => {
    setWindowSize(globalThis?.window?.innerWidth)
  },[])

  return (
    <>
    {pathname != '/signUp' &&
    <>
    {changeValueMenu && windowSize < 1024 ?
      <div onClick={() => setChangeValueMenu(false)} className="fixed w-full h-full bg-black/40 backdrop-blur-sm" /> : null}
      <nav className="relative lg:flex">
        <div
          className={
            changeValueMenu
              ? "w-[14rem] absolute lg:relative h-screen transition-all duration-200 colors-menu"
              : "w-[3.5rem] absolute lg:relative h-screen transition-all duration-200 colors-menu"
          }
        >
        {changeValueMenu && (
            <Link href={"/"} className="flex-center">
              <h1 className="mt-3 text-2xl text-white">Bibsys</h1>
            </Link>
          )}
          <div className={
            changeValueMenu
            ? "transition-all mt-10 space-y-4"
            : "item-menu-close"
          }>
            {
              menuValues.map(item => {
                if (changeValueMenu) {
                return (
                  <Link key={item.path} href={item.path} className={`item-menu-open ${verifyMenuState(item.path)}`}>
                    {item.icon}
                    <p>{item.text}</p>
                  </Link>
                )} else {
                  return (
                  <Link key={item.path} href={item.path}>
                    {item.icon}
                  </Link>
                  )}
              })
            }
          </div>
          {changeValueMenu ? (
            <Link
              href={"/signUp"}
              className="item-menu-open bottom-0 w-full absolute"
            >
              <GiEntryDoor size={25} />
              <h1>Sair</h1>
            </Link>
          ) : (
            <div className="item-menu-close bottom-0 fixed">
              <Link href={"/signUp"}>
                <GiEntryDoor className="animation-icon" size={25} />
              </Link>
            </div>
          )}
        </div>
        {changeValueMenu ? (
          <div className="fixed transition-all duration-200 p-2 ml-56">
            <HiMenu
              onClick={ChangeStateMenu}
              className="text-neutral-900 cursor-pointer"
              size={40}
            />
          </div>
        ) : (
          <div className="text-white items-center p-2 fixed mt-0">
            <HiMenu
              className="cursor-pointer animation-icon"
              onClick={ChangeStateMenu}
              size={"40"}
            />
          </div>
        )}
        </nav>
    </>
    }
    </>
  );
}
