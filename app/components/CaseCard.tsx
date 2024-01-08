import { PropsWithChildren } from "react";

import { FullExternalLink } from "./icons/FullExternalLink";
import { TagList } from "./Tags";

interface Props {
  className?: string;
  tags?: string[];
  horizontal?: boolean;
  title: string;
  description: string;
  link: string;
}

export function CaseCard({
  className,
  title,
  description,
  tags,
  horizontal = true,
  children,
  link,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={`flex relative bg-secondary text-white p-6 rounded-2xl shadow-md duration-300 hover:scale-105 hover:shadow-xl hover:shadow-xl" ${className}`}
    >
      <div className="flex gap-14">
        <div>
          <h1 className="text-white text-[26px] font-bold mb-2">{title}</h1>
          <p className=" text-white text-base font-normal ">{description}</p>
        </div>
        {tags && !horizontal ? <TagList tags={tags} /> : null}
      </div>

      {children}

      {tags && horizontal ? <TagList tags={tags} /> : null}

      <a
        href={link}
        className="text-secondary p-4 rounded-full bg-white absolute bottom-6 right-6"
      >
        <FullExternalLink size={26} />
      </a>
    </div>
  );
}

export const VerticalCaseCard = ({
  className,
  ...props
}: PropsWithChildren<Props>) => (
  <CaseCard className={`flex-col ${className}`} horizontal={false} {...props} />
);
