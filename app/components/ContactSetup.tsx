import { ArrowExternalLink } from "./icons/ArrowExternalLink";
import { HeartChatBubble } from "./icons/HeartChatBubble";

export function ContactSection() {
  return (
    <div className="flex gap-4 flex-col align-middle items-start justify-center max-w-md mx-auto">
      <h2 className="text-secondary text-[40px] font-black">
        Vamos conversar?
      </h2>
      <div className="flex justify-between gap-[27px] grow-0">
        <div className="flex flex-col gap-5 py-1 items-start">
          <div className="flex grow overflow-hidden">
            <p className="text-secondary text-sm font-normal max-w-[238px]">
              Tem alguma dúvida ou gostaria de bater um papo sobre design? Me
              chame {";)"}
            </p>
          </div>

          <button className="flex items-center justify-center gap-1 bg-primary text-white text-sm font-bold rounded-md py-3 px-5">
            <span>Conversar com a Duda</span>
            <ArrowExternalLink size={14} />
          </button>
        </div>
        <div className="w-[140px] h-[132px]">
          <HeartChatBubble />
        </div>
      </div>
    </div>
  );
}
