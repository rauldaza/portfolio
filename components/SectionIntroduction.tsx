interface SectionIntroductionProps {
  title: string;
  description: string;
}

const SectionIntroduction = ({
  title,
  description,
}: SectionIntroductionProps) => {
  return (
    <div className="section-introduction">
      <h2>{title}</h2>
      <p className="w-2/4 text-center">{description}</p>
    </div>
  );
};
export { SectionIntroduction };
