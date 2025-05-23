"use client";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { MIN_WIDTH } from "breakpoints";
import styles from "./About.module.css";
import { useTheme } from "@/context/ThemeContext";

interface Props {
  delegated?: any;
}

const About = ({ ...delegated }: Props) => {
  const { aboutUrl, aboutUrlSmall } = useTheme();

  return (
    <section className={styles.about} {...delegated} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <SectionTitle side={"left"}>About Me</SectionTitle>
          <div className={styles.description}>
            <p>
              Hey there, I am Shah Hussain, a full-stack engineer and top GitHub
              contributor{" "}
              <a
                href="https://committers.top/pakistan_private"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.badge}
              >
                <img
                  src="https://user-badge.committers.top/pakistan_private/shhahhussain.svg"
                  alt="committers.top badge"
                  className={styles.badgeImage}
                />
              </a>
              , based in Pakistan, creating user-centric digital experiences.
            </p>
            <p>
              I build seamless, intuitive systems for frontend and backend&apos;s.
              Whether designing sleek UIs or developing robust web apps, I aim to
              make technology more accessible for users.
            </p>
            <p>
              Alongside development, I have DevOps expertise in optimizing deployment
              pipelines, managing cloud infrastructures, and streamlining workflows.
              From scalable web apps to real-time systems, I ensure solutions are
              efficient, reliable, and user-friendly.
            </p>
            <p>
              I love solving complex problems and keeping every part of the system
              in harmony. If you are looking to collaborate on backend development,
              frontend development or DevOps, feel free to reach out!
            </p>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <picture className={styles.picture}>
            <source media={MIN_WIDTH.desktop} srcSet={aboutUrl} />
            <source media={MIN_WIDTH.tablet} srcSet={aboutUrlSmall} />
            <img src={aboutUrl} alt="Shah Hussain" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default About;
