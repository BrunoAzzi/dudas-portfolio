import { FullExternalLink } from "./icons/FullExternalLink";
import { TagList } from "./Tags";

interface Props {
  image: string;
  className?: string;
  tags?: string[];
  horizontal?: boolean;
}

export function CaseCard({ image, className, tags, horizontal = true }: Props) {
  return (
    <div
      className={`flex relative bg-secondary text-white p-6 rounded-lg ${className}`}
    >
      <div className="flex gap-14">
        <div>
          <h1 className="text-3xl font-bold mb-2">Telemedicina</h1>
          <p>
            Uma solução para profissionais da saúde pública garantirem que os
            protocolos de saúde sejam respeitados na infância e adolescência.
          </p>
        </div>
        {tags && !horizontal ? <TagList tags={tags} /> : null}
      </div>

      <img className="" alt="" src={image} />

      {tags && horizontal ? <TagList tags={tags} /> : null}

      <button className="text-secondary p-4 rounded-full bg-white absolute bottom-6 right-6">
        <FullExternalLink size={26} />
      </button>
    </div>
  );
}

export const VerticalCaseCard = ({ className, ...props }: Props) => (
  <CaseCard className={`flex-col ${className}`} horizontal={false} {...props} />
);
