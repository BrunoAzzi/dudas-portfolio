import type { MetaFunction } from "@remix-run/node";

import { CaseCard } from "~/components/CaseCard";
import { ContactSection } from "~/components/ContactSetup";
import { Header } from "~/components/Header";
import { CopyRight } from "~/components/icons/Copyright";
import { DudasGallery } from "~/components/ImageGallery";
import { getTranslations, type Locale } from "~/i18n";
import { useI18n } from "~/i18n/I18nProvider";

export const meta: MetaFunction = ({ matches }) => {
  const rootMatch = matches.find((match) => match.id === "root");
  const locale =
    (rootMatch?.data as { locale: Locale } | undefined)?.locale ?? "pt";
  const t = getTranslations(locale);

  return [
    { title: t.meta.title },
    {
      name: "description",
      content: t.meta.description,
    },
    {
      property: "og:description",
      content: t.meta.description,
    },
    {
      property: "og:image",
      content: "https://eduardadesouza.com/images/profile-picture.png",
    },
  ];
};

export default function Index() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col mx-auto max-w-[1440px]">
      <div className="flex flex-col px-5 md:px-20  gap-14">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CaseCard
            title={t.cases.telemedicine.title}
            description={t.cases.telemedicine.description}
            link="https://eduardadesouza.notion.site/Dashboard-de-Telemedicina-5792317104b14b7cbf2e14f92b370a1b"
            tags={[...t.cases.telemedicine.tags]}
          >
            <img
              src="images/telemedicina.png"
              srcSet="images/telemedicina1.5x.png 1.5x, images/telemedicina2x.png 2x, images/telemedicina3x.png 3x"
              alt="case"
              className="w-[281px] h-[212px]"
            />
          </CaseCard>
          <CaseCard
            title={t.cases.logistics.title}
            description={t.cases.logistics.description}
            link="https://eduardadesouza.notion.site/Agile-Flex-Plataforma-log-stica-8fd63c930af24673b8485b3bb3518518"
            tags={[...t.cases.logistics.tags]}
          >
            <img
              src="images/logistica.png"
              srcSet="images/logistica1.5x.png 1.5x, images/logistica2x.png 2x, images/logistica3x.png 3x"
              alt="case"
              className="w-[281px] h-[212px]"
            />
          </CaseCard>
          <CaseCard
            title={t.cases.elearning.title}
            description={t.cases.elearning.description}
            tags={[...t.cases.elearning.tags]}
          >
            <img
              src="images/elearning.png"
              srcSet="images/elearning2x.png 2x, images/logistica2x.png 2x, images/elearning3x.png 3x"
              alt="case"
              className="w-[281px] h-[212px]"
            />
          </CaseCard>
          <CaseCard
            title={t.cases.gamification.title}
            description={t.cases.gamification.description}
            tags={[...t.cases.gamification.tags]}
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
