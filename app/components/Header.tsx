import { NavLink } from "@remix-run/react";
import { PropsWithChildren } from "react";

import { ArrowDownIcon } from "./icons/ArrowDownIcon";
import { ArrowExternalLink } from "./icons/ArrowExternalLink";
import { Download } from "./icons/Download";

interface MenuLinkProps {
  to: string;
}

const MenuLink = ({ to, children }: PropsWithChildren<MenuLinkProps>) => (
  <NavLink to={to} className="flex flex-1 underline">
    {children}
  </NavLink>
);

const Presentation = () => (
  <div className="flex flex-col justify-between pt-24">
    <div className="flex flex-col gap-5">
      <h1 className="text-6xl text-primary font-black">Oie!</h1>
      <h2 className="text-4xl text-secondary font-semibold">
        Meu nome é Eduarda de Souza e sou UX Designer
      </h2>
      <p className="text-xl text-secondary">
        Sou uma profissional generalista que aprecia participar de todas as
        etapas do guarda-chuva de UX, desde a imersão no contexto do usuário até
        o design visual (UI). Busco proporcionar experiências incríveis com
        ideias inovadoras e estratégias inteligentes.
      </p>
    </div>
    <div className="flex text-primary text-xl font-bold">
      Confira alguns projetos <ArrowDownIcon />
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
      <ul className="flex flex-col">
        <li className="flex flex-row gap-2 text-secondary">
          <MenuLink to="#services">Linkedin</MenuLink>
          <ArrowExternalLink />
        </li>
        <li className="flex flex-row gap-2 text-secondary">
          <MenuLink to="#portfolio">Medium</MenuLink>
          <ArrowExternalLink />
        </li>
        <li className="flex flex-row gap-2 text-secondary">
          <MenuLink to="#contact">Currículo</MenuLink>
          <Download />
        </li>
      </ul>
    </nav>
  );
}
