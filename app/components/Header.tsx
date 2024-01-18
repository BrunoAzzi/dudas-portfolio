import { Link } from "@remix-run/react";
import { LiHTMLAttributes } from "react";

import { ArrowDownIcon } from "./icons/ArrowDownIcon";
import { ArrowExternalLink } from "./icons/ArrowExternalLink";
import { Download } from "./icons/Download";

const MenuItem = (props: LiHTMLAttributes<HTMLLIElement>) => (
  <li className="flex flex-row items-center gap-2 text-secondary" {...props} />
);

const Presentation = () => (
  <div className="flex flex-col justify-between py-[83px] md:pt-24 md:pb-0">
    <div className="flex flex-col h-full gap-[18px]">
      <h1 className="text-pink-500 text-[64px] font-black ">Oie!</h1>
      <h1 className="text-secondary text-4xl md:text-[40px] font-semibold md:leading-none">
        <span className="">Meu nome é Eduarda de Souza e sou </span>
        <span className="font-extrabold">UX Designer</span>
      </h1>
      <div className="text-secondary text-xl font-normal max-w-[519px]">
        Sou uma profissional generalista que aprecia participar de todas as
        etapas do guarda-chuva de UX, desde a imersão no contexto do usuário até
        o design visual (UI). <br />
        Busco proporcionar experiências incríveis com ideias inovadoras e
        estratégias inteligentes.
      </div>
    </div>
    <div className="flex text-primary items-center text-xl font-bold max-md:hidden mt-4">
      <span>Confira alguns projetos</span> <ArrowDownIcon />
    </div>
  </div>
);

export function Header() {
  return (
    <header className="flex max-md:flex-wrap justify-between">
      <Presentation />
      <img
        className="max-md:-ml-5 max-w-[180px] max-h-[302px] md:max-w-[384px] md:max-h-[644px] max-md:rounded-r-3xl md:rounded-b-3xl md:mx-28 object-cover"
        alt=""
        src="images/profile-picture.jpeg"
      />
      <Navigation />
      <div className="flex text-primary items-center text-xl font-bold md:hidden mt-12">
        <span>Confira alguns projetos</span> <ArrowDownIcon />
      </div>
    </header>
  );
}

function Navigation() {
  return (
    <nav className="pt-24">
      <ul className="flex flex-col gap-[14px]">
        <MenuItem>
          <Link
            className="flex flex-1 underline text-secondary text-xl font-semibold font-sans"
            to="https://www.linkedin.com/in/eduarda-desouza/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </Link>
          <ArrowExternalLink />
        </MenuItem>
        <MenuItem>
          <Link
            className="flex flex-1 underline text-secondary text-xl font-semibold font-sans"
            to="https://dudasouzaa.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </Link>
          <ArrowExternalLink />
        </MenuItem>
        <MenuItem>
          <Link
            className="flex flex-1 underline text-secondary text-xl font-semibold font-sans"
            to="/EduardaDeSouza-Curriculum.pdf"
            target="_blank"
          >
            Currículo
          </Link>
          <Download />
        </MenuItem>
      </ul>
    </nav>
  );
}
