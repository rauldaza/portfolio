import { EducationItem } from "./EducationItem";

const Education = () => {
  return (
    <div className="education">
      <EducationItem
        institution="Universidad de Antioquia"
        role="Student"
        date="2019 - 2025"
        title="Electronic Engineer"
        description="Electronic Engineering student. During the academic program, I completed courses focused on computational intelligence, computer vision, and optimization. I learned fuzzy logic, genetic algorithms, clustering, CNNs, and the mathematical foundations of deep learning. I also participated in a machine learning research group, where I deepened my understanding of convolutional neural networks and their practical applications."
      />
      <hr />
      <EducationItem
        institution="UNAM y la red de macrouniversidades"
        role="Student"
        date="June 2023"
        title="Macrotraining in Artificial Intelligence"
        description="I participated in an intensive 3-week course focused on the fundamentals of artificial intelligence. We covered classic algorithms, essential mathematics, practical tools, image processing applications (CNNs), and the development of a final applied project."
      />
    </div>
  );
};

export { Education };
