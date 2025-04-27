import College from "@/components/College";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ConstrainedTitle } from "@/components/SectionTitle";
import styles from "./Education.module.css";

const COLLEGES = [
    {
        degree: "Master of Science in Computer Science",
        school: "Arizona State University",
        courses: [
            "Cloud Computing",
            "Data Visualization",
            "Data Processing at Scale",
            "Natural Language Processing",
            "Data Mining",
            "Image Analytics & Informatics",
        ],
        start: 2022,
        end: 2024,
        imgSrc: "/images/asu.jpeg",
    },
    {
        degree: "Bachelor of Engineering in Computer System",
        school: "UET University",
        courses: [
            "Data Structures & Algorithms",
            "Big Data",
            "Operating Systems",
            "Advanced Computer Networks",
            "Advanced Machine Learning",
        ],
        start: 2019,
        end: 2023,
        imgSrc: "/shahhussaindev/images/uet.jpg",
    },
];

const Education: React.FC = () => {
  return (
    <div className={styles.education}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Education</ConstrainedTitle>
        <div className={styles.collegeList}>
          <College {...COLLEGES[1]} side="right" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Education;
