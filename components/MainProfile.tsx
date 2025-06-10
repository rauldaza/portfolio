import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const MainProfile = () => {
  return (
    <header>
      <div className="information-main-profile">
        <h1>I´m Raul Daza</h1>
        <h1 className="flex">
          <span className="text-sky-500">Data Scientist</span>&nbsp;
        </h1>
        <p className="w-3/4">
          I´m an electronic engineering student focused on data science and computer vision.
          I´m passionate about turning real-world data into valuable solutions by combining
          programming, statistics, and machine learning.
        </p>

        <Link
          className="button"
          target="_blank"
          href="https://www.linkedin.com/in/raul-daza/"
        >
          <button className="w-full flex items-center justify-center gap-2 whitespace-nowrap">
            <span>Contact me</span>
            <FaArrowRight />
          </button>
        </Link>
      </div>

      <div className="image-main-profile">
        <Image
          src={'/images/profilePhoto.png'}
          height={500}
          width={500}
          alt="Profile picture"
        />
      </div>
    </header>
  );
};

export { MainProfile };
