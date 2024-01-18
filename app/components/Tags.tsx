export const TagList = ({ tags }: { tags: string[] }) => (
  <div className="flex gap-4 whitespace-nowrap text-xs font-light">
    {tags.join(" - ")}
  </div>
);
