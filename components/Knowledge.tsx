import {
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiPandas,
  SiTensorflow,
  SiOpencv,
  SiScikitlearn,
  SiPlotly,
  SiMysql,
} from "react-icons/si";
import { KnowledgeCard } from "./KnowledgeCard";

const MyKnowledge = () => {
  return (
    <div className="my-knowledge grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <KnowledgeCard
        Icon={FaPython}
        title="Python"
        paragraph="Main language I use for data science, machine learning, and developing intelligent solutions."
      />
      <KnowledgeCard
        Icon={SiPandas}
        title="Data Science"
        paragraph="Experience with pandas, NumPy, matplotlib, seaborn, and scikit-learn for data analysis, modeling, and processing."
      />
      <KnowledgeCard
        Icon={SiTensorflow}
        title="Machine Learning and Deep Learning"
        paragraph="Use of TensorFlow, Keras, and techniques such as regression, clustering, CNNs, LSTMs, and autoencoders to solve real-world problems."
      />
      <KnowledgeCard
        Icon={SiPlotly}
        title="Data Visualization"
        paragraph="Building interactive dashboards with Dash and Plotly for visual analysis and interpretation of industrial data."
      />
      <KnowledgeCard
        Icon={FaDatabase}
        title="SQL"
        paragraph="Querying data from relational databases for analysis and visualization purposes."
      />
      <KnowledgeCard
        Icon={FaGitAlt}
        title="Version Control"
        paragraph="Using Git and GitHub for collaboration and version control in development and data science projects."
      />
    </div>
  );
};

export default MyKnowledge;
