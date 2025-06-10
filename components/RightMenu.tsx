import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const RightMenu = () => {
  return (
    <section className="right-menu">
      <h3 className="text-3xl">Links</h3>

      <Link href="https://www.linkedin.com/in/raul-daza/" target="blank">
        <div className="conteiner-icon">
          <FaLinkedinIn className="redes-icon" />
        </div>
      </Link>

      <Link href="https://github.com/rauldaza" target="blank">
        <div className="conteiner-icon">
          <FaGithub className="redes-icon" />
        </div>
      </Link>
    </section>
  );
};
export { RightMenu };
