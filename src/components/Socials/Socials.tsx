import {
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import styles from "./Socials.module.css";
import clsx from "clsx";

const enum ESocials {
    GITHUB_URL = "https://github.com/shhahhussain",
    TWITTER_URL = "https://x.com/shhahhussain",
    LINKEDIN_URL = "https://www.linkedin.com/in/shhahhussain/",
}

export const SocialIcons: React.FC = () => {
  return (
    <>
      <IconLink
        className={styles.iconLink}
        href={ESocials.GITHUB_URL}
        target="_blank"
      >
        <FaGithubAlt />
      </IconLink>
      <IconLink
        className={styles.iconLink}
        href={ESocials.TWITTER_URL}
        target="_blank"
      >
        <AiOutlineTwitter />
      </IconLink>
      <IconLink
        className={styles.iconLink}
        href={ESocials.LINKEDIN_URL}
        target="_blank"
      >
        <FaLinkedinIn />
      </IconLink>
    </>
  );
};

type IconLinkProps = React.ComponentProps<typeof Link>;

export const IconLink = ({
  children,
  className,
  ...delegated
}: IconLinkProps) => {
  return (
    <Link className={clsx(styles.iconLink, className)} {...delegated}>
      {children}
    </Link>
  );
};

const Socials: React.FC = () => {
  return (
    <address className={styles.socials}>
      <SocialIcons />
      <div className={styles.line} />
    </address>
  );
};

export default Socials;
