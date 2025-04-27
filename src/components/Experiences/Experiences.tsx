import { ConstrainedTitle } from "@/components/SectionTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "./Experiences.module.css";
import Image from "next/image";

const Experiences: React.FC = () => {
  return (
    <div className={styles.experiences} id="experience">
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Experiences</ConstrainedTitle>
        <div className={styles.items}>
          <div className={styles.timeline} />

          <div className={styles.item}>
            <Image
              height={100}
              width={100}
              className={styles.image}
              src="/shahhussaindev/images/Antonx.jpeg"
              alt="Antonx"
            ></Image>
            <div className={styles.connector} />
            <div className={styles.infos}>
              <div className={styles.bullet}>
                <div className={styles.dotPrimary}>
                  <div className={styles.dotCore} />
                </div>
                <div className={styles.info}>
                  <Image
                    className={styles.mobileImage}
                    height={100}
                    width={100}
                    src="/shahhussaindev/images/Antonx.jpeg"
                    alt="Antonx"
                  ></Image>
                  <p className={styles.time}>Jan 2025 - Present</p>
                  <h4 className={styles.company}>Antonx</h4>
                  <h4 className={styles.role}>
                    Software Development Engineer I
                  </h4>
                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Optimized backend systems, reducing API response time by 35% and cutting production bugs by 40% through rigorous code reviews, while ensuring high-quality, bug-free code.
                    <br />
                    <br />
                    ⦿ &nbsp; &nbsp; Led technical discussions to drive software architecture improvements, modernized boilerplates to reduce project setup time by 30%, and streamlined development processes.
                    <br />
                    <br />
                    ⦿ &nbsp; &nbsp; Enhanced authentication by cutting response time by 44%, strengthening security by refining RBAC, and contributed to the development of the backend
                    <br />
                  </p>
                </div>
              </div>
              <div className={styles.bullet}>
                <div className={styles.dotSecondary}>
                  <div className={styles.dotCore} />
                </div>
                <div className={styles.info}>
                  <p className={styles.time}>Feb 2024 - Jan 2025</p>
                  <h4 className={styles.role}>
                    Junior Software Development Engineer
                  </h4>
                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Contributed to the development of the backend for a social media project, created its admin panel website, and built both the frontend and backend of an eCommerce website with real-time features like chatting and user location tracking
                    <br />
                    <br />
                    ⦿ &nbsp; &nbsp; Implemented role-based authentication, CI/CD pipelines for deployment, managed Ubuntu & NGINX servers, and integrated third-party services such as AWS, Firebase, Stripe, PayPal, and Twilio.
                    <br />
                  </p>
                </div>
              </div>

              <div className={styles.bullet}>
                <div className={styles.dotSecondary}>
                  <div className={styles.dotCore} />
                </div>
                <div className={styles.info}>
                  <p className={styles.time}>Aug 2023 - Jan 2024</p>
                  <h4 className={styles.role}>
                    Software Development Engineer Intern
                  </h4>

                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Assisted in writing and testing code for software applications, collaborated with cross-functional teams on design and development projects, and explored new technologies to enhance coding practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <Image
              className={styles.image}
              height={100}
              width={100}
              src="/shahhussaindev/images/shadiyana.jpeg"
              alt="Shadiyana"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore} />
            </div>
            <div className={styles.connector} />
            <div className={styles.info}>
              <Image
                className={styles.mobileImage}
                height={100}
                width={100}
                src="/shahhussaindev/images/shadiyana.jpeg"
                alt="Shadiyana"
              />
              <p className={styles.time}>Jul 2023 - Aug 2023</p>
              <h4 className={styles.company}>Shadiyana</h4>
              <h4 className={styles.role}>
                Software Development Engineer Intern
              </h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Crafted multiple responsive pages for an event using React.js and Ant Design, collaborated on GitHub to implement features, and analyzed the Node.js codebase to enhance user experience.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Experiences;
