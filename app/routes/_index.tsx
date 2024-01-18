import type { MetaFunction } from "@remix-run/node";

import { CaseCard } from "~/components/CaseCard";
import { ContactSection } from "~/components/ContactSetup";
import { Header } from "~/components/Header";
import { CopyRight } from "~/components/icons/Copyright";
import { DudasGallery } from "~/components/ImageGallery";

export const meta: MetaFunction = () => [
  { title: "Portfolio | Eduarda" },
  {
    name: "description",
    content:
      "Sou uma profissional generalista que aprecia participar de todas as etapas do guarda-chuva de UX, desde a imersão no contexto do usuário até o design visual (UI). Busco proporcionar experiências incríveis com ideias inovadoras e estratégias inteligentes.",
  },
  {
    property: "og:description",
    content:
      "Sou uma profissional generalista que aprecia participar de todas as etapas do guarda-chuva de UX, desde a imersão no contexto do usuário até o design visual (UI). Busco proporcionar experiências incríveis com ideias inovadoras e estratégias inteligentes.",
  },
  {
    property: "og:image",
    content: "https://eduardadesouza.com/images/profile-picture.png",
  },
];

export default function Index() {
  return (
    <div className="flex flex-col mx-auto max-w-[1440px]">
      <div className="flex flex-col px-5 md:px-20  gap-14">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CaseCard
            title="Dashboard "
            description="Análise socioeconômica e saúde da população"
            link="https://www.notion.so/Dashboard-de-Telemedicina-8fd63c930af24673b8485b3bb3518518"
            tags={["Web", "B2B", "Telemedicina"]}
          >
            <img
              src="images/telemedicina.png"
              srcSet="images/telemedicina1.5x.png 1.5x, images/logistica2x.png 2x, images/telemedicina3x.png 3x"
              alt="case"
              className="w-[281px] h-[212px]"
            />
          </CaseCard>
          <CaseCard
            title="Plataforma"
            description="Gestão de entregas para motoristas autônomos"
            link="https://www.notion.so/Plataforma-de-log-stica-8fd63c930af24673b8485b3bb3518518"
            tags={["Web responsivo", "B2B", "Logística"]}
          >
            <img
              src="images/logistica.png"
              srcSet="images/logistica1.5x.png 1.5x, images/logistica2x.png 2x, images/logistica3x.png 3x"
              alt="case"
              className="w-[281px] h-[212px]"
            />
          </CaseCard>
          <CaseCard
            title="Plataforma"
            description="Ambiente de cursos para educação empresarial"
            tags={["Web responsivo", "B2B", "E-learning"]}
          >
            <img
              src="images/elearning.png"
              srcSet="images/elearning2x.png 2x, images/logistica2x.png 2x, images/elearning3x.png 3x"
              alt="case"
              className="w-[281px] h-[212px]"
            />
          </CaseCard>
          <CaseCard
            title="Gamificação"
            description="Ambiente de cursos para educação empresarial"
            tags={["Web responsivo", "B2B", "E-learning"]}
          >
            <img
              src="images/elearning.png"
              srcSet="images/elearning2x.png 2x, images/logistica2x.png 2x, images/elearning3x.png 3x"
              alt="case"
              className="w-[281px] h-[212px]"
            />
          </CaseCard>
        </div>
        <ContactSection />
      </div>

      <DudasGallery />

      <footer className="flex px-5 md:px-20">
        <div className="flex grow justify-start items-center border-t border-secondary border-opacity-10 py-5 md:px-5 md:mb-2 gap-1">
          <CopyRight />
          <span className="text-slate-700 text-[10px] font-light font-sans">
            Eduarda de Souza, 2023
          </span>
        </div>
      </footer>
    </div>
  );
}
