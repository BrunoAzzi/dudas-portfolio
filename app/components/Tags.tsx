import { PropsWithChildren } from "react";

export const TagList = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-col gap-4">
    {tags.map((tag) => (
      <Tag key={tag}>{tag}</Tag>
    ))}
  </div>
);

const Tag = ({ children, ...props }: PropsWithChildren) => (
  <div className="text-right" {...props}>
    <span className="border-[0.5px] px-3 py-1.5 rounded-lg border-white justify-center items-center gap-2.5 inline-flex">
      <div className="text-center text-white text-xs font-normal">
        {children}
      </div>
    </span>
  </div>
);
