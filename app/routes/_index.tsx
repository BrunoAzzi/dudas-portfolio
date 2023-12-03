import type { MetaFunction } from "@remix-run/node";

import { CaseCard, VerticalCaseCard } from "~/components/Card";
import { ContactSection } from "~/components/ContactSetup";
import { Header } from "~/components/Header";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
    <div className="flex flex-col gap-14 items-center mx-auto px-20">
      <Header />
      <div className="grid grid-cols-2 gap-12">
        <VerticalCaseCard
          image="images/telemedicina-mockup.png"
          tags={["Desktop"]}
        />
        <VerticalCaseCard
          image="images/restaurante.png"
          tags={["Desktop", "Responsivo"]}
        />
        <CaseCard
          className="col-span-full"
          image="images/telemedicina-mockup.png"
          tags={["Desktop"]}
        />
      </div>
      <ContactSection />
    </div>
  );
}
