import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

import styles from "../style";

const Footer = () => {
  return (
    <footer className="border-t border-t-[#555] pt-12 pb-20">
      <div className={`${styles.container}`}>
        <div className="text-center mb-10">
          <Link to="/" className="font-Mansalva text-2xl cursor-pointer">
            Salvador Puppy
          </Link>
        </div>

        <div
          className={`flex sm:flex-row flex-col gap-8 justify-between items-center`}
        >
          <p className="sm:max-w-sm max-w-full flex flex-col gap-2">
            <small className="xs:text-sm text-xs">
              Copyright &copy; {new Date().getFullYear()} Salvador Puppy
            </small>
            <span>모든 문의는 DM으로 부탁드립니다 🙏</span>
          </p>

          <ul className="flex gap-6">
            <li className={styles.flexCenter}>
              <a
                href="https://github.com/k-maledev/salvador-puppy"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="sm:w-10 sm:h-10 w-8 h-8"
                />
              </a>
            </li>
            <li className={styles.flexCenter}>
              <a
                href="https://www.instagram.com/salvadorpuppy/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="sm:w-10 sm:h-10 w-8 h-8"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
