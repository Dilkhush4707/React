 import styles from '../../styles/skills.module.css';
 const Skills = () => {
  const images = [{id:1,
    url:"/images/react.png",
    alt:"React.js"
  },
  {id:2,
    url:"/images/react.png",
    alt:"React.js"
  },
  {id:3,
    url:"/images/react.png",
    alt:"React.js"
  },
  {id:4,  
    url:"/images/react.png",
    alt:"React.js"
  },
  {id:5,
    url:"/images/react.png",
    alt:"React.js"
  },
  {id:6,
    url:"/images/react.png",
    alt:"React.js"
  },
  {id:7,
    url:"/images/react.png",
    alt:"React.js"
  },
  {id:8,  
    url:"/images/react.png",
    alt:"React.js"
  },];
  const skills = ["React.js", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "JavaScript", "GitHub", "Figma", "C++", "Python", "GSAP", "SQL",];
    
  return (<>
  <section className={styles.skills}>
  
  <h2 className={styles.heading}>Skills That Make Things Happen.</h2>
  <div className={styles.skillimg} >
    {images.map((image)=>{
      return <div className={styles.images} key={images.id}>{image.alt}</div>
    })}
  </div>
  <div className={styles.skillsName}>
    {skills.map((skill)=>{
      return <div className={styles.skill} key={skill}>{skill}</div>
    })}
  </div>


download button
My Journey So Far

  </section>
  </>)
}
export default Skills;