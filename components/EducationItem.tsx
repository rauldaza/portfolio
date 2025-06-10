interface EducationItemProps {
  institution: string;
  role: string;
  date: string;
  title: string;
  description: string;
}

const EducationItem = ({
  institution,
  role,
  date,
  title,
  description,
}: EducationItemProps) => {
  return (
    <div className="education-item">
      <div className="w-3/4">
        <h3>{institution}</h3>
        <div className="flex items-center">
          <p className="text-black">
            {role}&nbsp;&nbsp;&nbsp;
            <span className="bg-sky-500 text-xs text-white p-1 rounded-s">
              {date}
            </span>
          </p>
        </div>
      </div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export { EducationItem };
