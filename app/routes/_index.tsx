import type { MetaFunction } from "@remix-run/node";

import { CaseCard, VerticalCaseCard } from "~/components/CaseCard";
import { ContactSection } from "~/components/ContactSetup";
import { Footer } from "~/components/Footer";
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
    <div className="flex flex-col">
      <div className="flex flex-col px-5 md:px-20 gap-14">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <VerticalCaseCard
            title="Telemedicina"
            description="Uma solução para profissionais da saúde pública garantirem que os protocolos de saúde sejam respeitados na infância e adolescência."
            link="/telemedicina"
            tags={["Desktop"]}
          >
            <img src="images/case-image.png" alt="case" />
          </VerticalCaseCard>
          <VerticalCaseCard
            title="E-learning"
            description="Uma solução para profissionais da saúde pública garantirem que os protocolos de saúde sejam respeitados na infância e adolescência."
            link="/e-learning"
            tags={["Desktop", "Responsivo"]}
          >
            <img src="images/case-image.png" alt="case" />
          </VerticalCaseCard>
          <CaseCard
            title="Logística"
            description="Uma solução para profissionais da saúde pública garantirem que os protocolos de saúde sejam respeitados na infância e adolescência."
            link="/logistica"
            className="col-span-full"
            tags={["Desktop", "Responsivo"]}
          >
            <img src="images/case-image.png" alt="case" />
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
