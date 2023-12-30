import { NavLink } from "@remix-run/react";
import { LiHTMLAttributes, PropsWithChildren } from "react";

import { ArrowDownIcon } from "./icons/ArrowDownIcon";
import { ArrowExternalLink } from "./icons/ArrowExternalLink";
import { Download } from "./icons/Download";

interface MenuLinkProps {
  to: string;
}

const MenuLink = ({ to, children }: PropsWithChildren<MenuLinkProps>) => (
  <NavLink
    to={to}
    className="flex flex-1 underline text-secondary text-xl font-semibold font-sans"
  >
    {children}
  </NavLink>
);

const MenuItem = (props: LiHTMLAttributes<HTMLLIElement>) => (
  <li className="flex flex-row items-center gap-2 text-secondary" {...props} />
);

const Presentation = () => (
  <div className="flex flex-col justify-between pt-24">
    <div className="flex flex-col gap-[18px]">
      <h1 className="text-pink-500 text-[64px] font-black ">Oie!</h1>
      <div className="w-[521px]">
        <span className="text-secondary text-[40px] font-semibold">
          Meu nome é Eduarda de Souza e sou{" "}
        </span>
        <span className="text-secondary text-[40px] font-extrabold">
          UX Designer
        </span>
      </div>
      <div className="text-secondary text-xl font-normal">
        Sou uma profissional generalista que aprecia participar de todas as
        etapas do guarda-chuva de UX, desde a imersão no contexto do usuário até
        o design visual (UI). <br />
        Busco proporcionar experiências incríveis com ideias inovadoras e
        estratégias inteligentes.
      </div>
    </div>
    <div className="flex text-primary items-center text-xl font-bold">
      <span>Confira alguns projetos</span> <ArrowDownIcon />
    </div>
  </div>
);

export function Header() {
  return (
    <header className="flex justify-between">
      <Presentation />
      <img className="mx-28" alt="" src="images/profile-picture.png" />
      <Navigation />
    </header>
  );
}

function Navigation() {
  return (
    <nav className="pt-24">
      <ul className="flex flex-col gap-[14px]">
        <MenuItem>
          <MenuLink to="#services">Linkedin</MenuLink>
          <ArrowExternalLink />
        </MenuItem>
        <MenuItem>
          <MenuLink to="#portfolio">Medium</MenuLink>
          <ArrowExternalLink />
        </MenuItem>
        <MenuItem>
          <MenuLink to="#contact">Currículo</MenuLink>
          <Download />
        </MenuItem>
      </ul>
    </nav>
  );
}
