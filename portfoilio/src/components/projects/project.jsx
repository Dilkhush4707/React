import styles from "../../styles/projects.module.css";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Projects",
      description: "This is a project",
      technology: "React",
      Image: [""],
    },
    {
      id: 2,
      title: "Projects",
      description: "This is a project",
      technology: "React",
      Image: [""],
    },
    {
      id: 3,
      title: "Projects",
      description: "This is a project",
      technology: "React",
      Image: [""],
    },
    {
      id: 4,
      title: "Projects",
      description: "This is a project",
      technology: "React",
      Image: [""],
    },
  ];
  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2><br />
      <div className={styles.projectContainer}>
        {projects.map((project) => {
          return (
            <>
              <div className={styles.project} key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>{project.technology}</p>
                <img src={project.Image} alt="project" />
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
