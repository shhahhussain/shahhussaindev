import { IProject } from "@/components/Project";
import styles from "./ProjectGrid.module.css";
export interface IProps {
  projects: IProject[];
}

const ProjectGrid: React.FC<React.PropsWithChildren<IProps>> = ({
  projects,
  children,
  ...delegated
}) => {
  return (
    <div className={styles.projectGrid} id="other-projects">
    </div>
  );
};

export default ProjectGrid;
