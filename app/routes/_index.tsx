import type { MetaFunction } from "@remix-run/node";

import { CaseCard, VerticalCaseCard } from "~/components/CaseCard";
import { ContactSection } from "~/components/ContactSetup";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
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
      <div className="flex flex-col px-20 gap-14">
        <Header />
        <div className="grid grid-cols-2 gap-12">
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

      <div className="flex flex-col px-20 gap-14">
        <Footer />
      </div>
    </div>
  );
}
