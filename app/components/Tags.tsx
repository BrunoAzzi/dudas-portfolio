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
    <span className="border border-white rounded-md px-3 py-[6px]">
      {children}
    </span>
  </div>
);
