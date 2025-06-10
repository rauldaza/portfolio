import { FaRegClone } from "react-icons/fa";
import { ProgressBar } from "./ProgressBar";
import Image from "next/image";

const LeftMenu = () => {
  return (
    <section className="left-menu">
      <div className="profile-card">
        <div className="image-profile">
          <Image
            src={"/images/profilePhoto2.png"} // Change to your photo if necessary
            height={200}
            width={200}
            alt="Photo of Raul Daza"
          />
        </div>

        <div className="personal-information-profile">
          <h3>Raul Daza Liñan</h3>
          <p>Data Scientist | AI Developer</p>
        </div>
      </div>

      <hr />

      <div className="personal-information">
        <div>
          <p>Residence:</p>
          <p>Medellín, Colombia</p>
        </div>

        <div>
          <p>Phone:</p>
          <p>+57 301 523 8832</p>
        </div>

        <div>
          <p>Email:</p>
          <p>Rauld200116@gmail.com</p>
        </div>
      </div>

      <hr />

      <div className="lenguages">
        <h3>Languages</h3>
        <ProgressBar title="Spanish" num={100} />
        <ProgressBar title="English" num={60} />
      </div>

      <hr />

      <div className="lenguages">
        <h3>Programming Languages</h3>
        <ProgressBar title="Python" num={90} />
        <ProgressBar title="SQL" num={60} />
        <ProgressBar title="C++" num={50} />
        <ProgressBar title="HTML" num={50} />
        <ProgressBar title="CSS" num={50} />
      </div>

      <hr />

      <div className="extra-skills">
        <h3>Tools and Frameworks</h3>

        <div>
          <FaRegClone className="icon mr-1" />
          <p>Dash, Plotly, CustomTkinter</p>
        </div>

        <div>
          <FaRegClone className="icon mr-1" />
          <p>TensorFlow, Keras</p>
        </div>

        <div>
          <FaRegClone className="icon mr-1" />
          <p>OpenCV, YOLO</p>
        </div>

        <div>
          <FaRegClone className="icon mr-1" />
          <p>Selenium</p>
        </div>

        <div>
          <FaRegClone className="icon mr-1" />
          <p>Git, Jupyter Notebook, Anaconda</p>
        </div>
      </div>
    </section>
  );
};

export { LeftMenu };
