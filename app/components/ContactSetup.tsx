import { useI18n } from "~/i18n/I18nProvider";

import { ArrowExternalLink } from "./icons/ArrowExternalLink";
import { HeartChatBubble } from "./icons/HeartChatBubble";

export function ContactSection() {
  const { t } = useI18n();

  return (
    <div className="flex gap-4 flex-col align-middle items-start justify-center max-w-md mx-auto">
      <h2 className="text-secondary text-[34px] md:text-[40px] font-black">
        {t.contact.title}
      </h2>
      <div className="flex justify-between md:gap-[27px] grow-0">
        <div className="flex flex-col gap-5 py-1 items-start">
          <div className="flex grow overflow-hidden">
            <p className="text-secondary text-sm font-normal md:max-w-[238px]">
              {t.contact.description}
            </p>
          </div>

          <a
            href="https://wa.me/5548999102094"
            target="_blank"
            className="flex items-center justify-center gap-1 bg-primary text-white text-sm font-bold rounded-md py-3 px-5"
            rel="noreferrer"
          >
            <span>{t.contact.cta}</span>
            <ArrowExternalLink size={14} />
          </a>
        </div>
        <div className="w-[140px] h-[132px]">
          <HeartChatBubble />
        </div>
      </div>
    </div>
  );
}
