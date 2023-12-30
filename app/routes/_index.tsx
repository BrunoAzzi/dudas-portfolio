import type { MetaFunction } from "@remix-run/node";

import { CaseCard, VerticalCaseCard } from "~/components/Card";
import { ContactSection } from "~/components/ContactSetup";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { DudasGallery } from "~/components/ImageGallery";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

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
            <img src="images/telemedicina-mockup.png" />
          </VerticalCaseCard>
          <VerticalCaseCard
            title="E-learning"
            description="Uma solução para profissionais da saúde pública garantirem que os protocolos de saúde sejam respeitados na infância e adolescência."
            link="/e-learning"
            tags={["Desktop", "Responsivo"]}
          >
            <img src="images/restaurante.png" />
          </VerticalCaseCard>
          <CaseCard
            title="Logística"
            description="Uma solução para profissionais da saúde pública garantirem que os protocolos de saúde sejam respeitados na infância e adolescência."
            link="/logistica"
            className="col-span-full"
            tags={["Desktop"]}
          />
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
