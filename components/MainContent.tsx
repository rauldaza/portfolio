import { Education } from "./Education";
import { MainProfile } from "./MainProfile";
import MyKnowledge from "./Knowledge";
import { Portfolio } from "./Portfolio";
import { SectionIntroduction } from "./SectionIntroduction";

const MainContent = () => {
  return (
    <section className="main-content">
      <div>
        <MainProfile />
      </div>

      <div>
        <SectionIntroduction
          title="My Knowledge"
          description="Proficient in Python, data science, machine learning, and deep learning. Experienced with tools like Dash, TensorFlow, OpenCV, and libraries for visualization, scraping, and graphical interfaces."
        />
        <MyKnowledge />
      </div>

      <div>
        <SectionIntroduction
          title="Education"
          description="My education in electronic engineering has been strongly focused on artificial intelligence, computer vision, and optimization. Through university courses, research groups, and practical experience, I’ve built a solid foundation in both theory and the implementation of intelligent systems."
        />
        <Education />
      </div>

      <div>
        <SectionIntroduction
          title="Portfolio"
          description="I’ve worked on real-world projects such as Carpocef, a computer vision system to estimate bone age in children, and at Isagen, where I developed tools to detect sensor faults in power generation systems. I focus on building clear, efficient, and visual solutions."
        />
        <div className="snap-x scroll-smooth md:scroll-auto">
          <Portfolio />
        </div>
      </div>

      <div className="separate"></div>
      <footer>
        <p>2023 All Rights Reserved. Jose Ortiz</p>
      </footer>
    </section>
  );
};

export { MainContent };
