interface ProgressBarProps {
  title: string;
  num: number;
}

const ProgressBar = ({ title, num }: ProgressBarProps) => {
  return (
    <div>
      <div className="name-progess-bar">
        <p>{title}</p>
        <p>{num}%</p>
      </div>
      <progress value={num} max={100} />
    </div>
  );
};
export { ProgressBar };
