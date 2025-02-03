import { TbBackground, TbMarquee } from "react-icons/tb";
import styles from "../../styles/projects.module.css";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Dynamic Portfolio Website",
      description: "This is the first project description. It showcases the use of React for building a dynamic user interface, along with CSS for styling and HTML for structure.",
      technology: ["React", "CSS", "HTML"],
      Image: "https://www.rib-software.com/en/blogs/enterprise-software-applications-tools",
    },
    {
      id: 2,
      title: "Server-side Application with Node.js",
      description: "This is the second project description. It involves creating a server-side application using Node.js and JavaScript, demonstrating backend development skills.",
      technology: ["JavaScript", "Node.js"],
      Image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Web Application with Django",
      description: "This is the third project description. It focuses on building a web application using Python and Django, highlighting the use of a powerful web framework.",
      technology: ["Python", "Django"],
      Image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Enterprise Application with Spring Boot",
      description: "This is the fourth project description. It demonstrates the development of a robust application using Java and Spring Boot, showcasing enterprise-level development.",
      technology: ["Java", "Spring Boot"],
      Image: "https://via.placeholder.com/150",
    },
  ];
  
  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2><br />
      <div className={styles.projectContainer}>
        {projects.map((project) => {
          return (
            <div
              className={styles.project}
              key={project.id}
              style={{ backgroundImage: `url(${project.Image})` }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.technology.join(", ")}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
