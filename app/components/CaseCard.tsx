import { PropsWithChildren } from "react";

import { FullExternalLink } from "./icons/FullExternalLink";
import { TagList } from "./Tags";

interface Props {
  className?: string;
  tags: string[];
  title: string;
  description: string;
  link?: string;
}

const CommingSoon = () => (
  <div className="w-[87px] h-[31px] px-3 py-1.5 bg-amber-500 rounded-md justify-center items-center gap-3 inline-flex absolute md:relative left-0 top-0">
    <div className="text-center text-white text-xs font-bold font-['Montserrat']">
      Em breve
    </div>
  </div>
);

const InteractiveTags = ({ link }: { link?: string }) =>
  link ? (
    <a
      href={link}
      target="_blank"
      className="p-3 rounded-full bg-violet-400 inline-flex absolute right-0 bottom-0 md:relative md:self-end"
      rel="noreferrer"
    >
      <FullExternalLink size={17} />
    </a>
  ) : (
    <CommingSoon />
  );

export function CaseCard({
  className,
  title,
  description,
  tags,
  children,
  link,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={`flex flex-col md:flex-row-reverse gap-8 items-center bg-secondary text-white p-7 md:p-8 rounded-2xl shadow-md duration-300 hover:scale-[102%] hover:shadow-xl hover:shadow-xl overflow-hidden ${className}`}
    >
      <div className="flex flex-col justify-between gap-10 w-full">
        <div className="flex flex-col gap-7">
          <TagList tags={tags} />

          <div className="flex flex-col gap-1">
            <h1 className=" text-[26px] font-bold mb-2">{title}</h1>
            <p className="  text-lg font-normal">{description}</p>
          </div>

          <div className="flex max-md:hidden w-full flex-col">
            <InteractiveTags link={link} />
          </div>
        </div>
      </div>

      <div className="flex relative w-full items-center justify-center">
        {children}

        <span className="md:hidden">
          <InteractiveTags link={link} />
        </span>
      </div>
    </div>
  );
}
