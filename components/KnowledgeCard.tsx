import { IconType } from "react-icons";

interface KnowledgeCardProps {
  Icon: IconType;
  title: string;
  paragraph: string;
}

const KnowledgeCard = ({ Icon, title, paragraph }: KnowledgeCardProps) => {
  return (
    <div className="knowledge-card">
      <div>
        <Icon />
      </div>
      <h3>{title}</h3>
      <p className="text-center">{paragraph}</p>
    </div>
  );
};
export { KnowledgeCard };
