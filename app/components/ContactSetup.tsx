import { ArrowExternalLink } from "./icons/ArrowExternalLink";
import { HeartChatBubble } from "./icons/HeartChatBubble";

export function ContactSection() {
  return (
    <div className="flex gap-5 flex-col align-middle justify-center p-8 max-w-md">
      <h2 className="text-[40px] font-black text-secondary">
        Vamos conversar?
      </h2>
      <div className="flex gap-7">
        <div className="flex flex-col gap-5 basis-2/3">
          <p className="text-secondary text-sm font-normal">
            Tem alguma dúvida ou gostaria de bater um papo sobre design? Me
            chame {";)"}
          </p>
          <div>
            <button className="flex items-center justify-center gap-1 bg-primary text-white rounded-md py-3 px-5">
              <span>Conversar com a Duda</span>
              <ArrowExternalLink size={14} />
            </button>
          </div>
        </div>
        <HeartChatBubble />
      </div>
    </div>
  );
}
