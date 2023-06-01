import { HiMenu } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { GiEntryDoor } from "react-icons/gi";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const menuValues = [
  {
    path: "/alunos",
    text: "Alunos",
    icon: <BsFillPersonFill className="animation-icon" size={25} />,
  },
  {
    path: "/alunos/addStudents",
    text: "Adicionar Livros",
    icon: <FaBook className="animation-icon" size={25} />,
  },
  {
    path: "/",
    text: "Livros",
    icon: <FaBook className="animation-icon" size={25} />,
  },
  {
    path: "/emprestimos",
    text: "Empréstimos",
    icon: <FaHandshake className="animation-icon" size={25} />,
  },
];

export default function Menu() {
  const [changeValueMenu, setChangeValueMenu] = useState<boolean>(true);
  const [windowSize, setWindowSize] = useState<number>(0);
  const [studentsOptions, setStudentsOptions] = useState<boolean>(false);
  const { pathname, push } = useRouter();
  const Route = usePathname();

  function ChangeStateMenu() {
    setChangeValueMenu(!changeValueMenu);
  }

  function verifyMenuState(text: string) {
    const itemText = text.toLowerCase();
    if (Route == itemText) return "bg-white/20";
    else return "";
  }

  useEffect(() => {
    setWindowSize(globalThis?.window?.innerWidth);
  }, []);

  return (
    <>
      {Route != "/signUp" && (
        <div>
          {changeValueMenu && windowSize < 1024 ? (
            <div
              onClick={() => setChangeValueMenu(false)}
              className="fixed w-full h-full bg-black/40 backdrop-blur-sm"
            />
          ) : null}
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
              <div
                className={
                  changeValueMenu
                    ? "transition-all mt-10 space-y-4"
                    : "item-menu-close"
                }
              >
                {changeValueMenu ? (
                  <>
                    <div
                      onClick={() => push("/alunos")}
                      className="flex items-center gap-5 item-menu-open"
                    >
                      <BsFillPersonFill className="animation-icon" size={25} />
                      Alunos
                    </div>
                    <div
                      onClick={() => setStudentsOptions(!studentsOptions)}
                      className="item-menu-open"
                    >
                      <div className="flex items-center gap-5">
                        <FaBook className="animation-icon" size={25} />
                        Livros
                        {studentsOptions ? (
                          <AiOutlineArrowDown />
                        ) : (
                          <AiOutlineArrowRight />
                        )}
                      </div>
                    </div>
                    {studentsOptions && (
                      <div className="transition-all">
                        <ul>
                          <li
                            className="item-menu-open"
                            onClick={() => push("/")}
                          >
                            Biblioteca
                          </li>
                          <li
                            className="item-menu-open"
                            onClick={() => push("/alunos/addStudents")}
                          >
                            Adicionar Livros
                          </li>
                        </ul>
                      </div>
                    )}
                    <div
                      onClick={() => push("/emprestimos")}
                      className="flex items-center gap-5 item-menu-open"
                    >
                      <FaHandshake className="animation-icon" size={25} />
                      Empréstimos
                    </div>
                  </>
                ) : (
                  <ul className="space-y-8">
                    <li>
                      <BsFillPersonFill
                        onClick={() => push("/alunos")}
                        className="animation-icon"
                        size={25}
                      />
                    </li>
                    <li>
                      <FaBook
                        onClick={() => push("/")}
                        className="animation-icon"
                        size={25}
                      />
                    </li>
                    <li>
                      <FaHandshake
                        onClick={() => push("/emprestimos")}
                        className="animation-icon"
                        size={25}
                      />
                    </li>
                  </ul>
                )}
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
        </div>
      )}
    </>
  );
}
