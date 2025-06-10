import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

interface PortfolioItemProps {
  title: string;
  description: string;
  image: string; // antes era 'url'
  link: string;  // nuevo
  linkText?: string; // opcional
}

const PortfolioCard = ({
  title,
  description,
  image,
  link,
  linkText = "Visit site",
}: PortfolioItemProps) => {
  return (
    <div className="portfolio-card">
      <div className="image-portfolio">
        <Image src={image} width={300} height={300} alt="Picture of portfolio" />
      </div>

      <div className="information-portfolio">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link target="_blank" href={link}>
          <button>
            <h3>{linkText}</h3>
            <FaAngleRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export { PortfolioCard };
