import styles from '../../styles/skills.module.css';
const Skills = () => {
  const images = [
    { id: 1, url: "https://imgs.search.brave.com/YYGC_tPJj6BYV9AvZLq0GAPpdikf6Gh0b6X21xhWaTw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVUlNNDdM/V2FQSUxjcVMtdUtS/amk1VktzVUxTdnNX/SGx3RjhxX05NdS1m/MC9yczpmaXQ6NTYw/OjMyMDoxOjAvZzpj/ZS9hSFIwY0hNNkx5/OWljbUZ1L1pITnNi/MmR2Y3k1amIyMHYv/ZDNBdFkyOXVkR1Z1/ZEM5MS9jR3h2WVdS/ekwybHRZV2RsL2N5/OXlaV0ZqZEMxc2Iy/ZHYvTG5CdVp3.jpeg", alt: "React.js" },
    { id: 2, url: "https://www.alphashubham.xyz/nextjs.jpeg", alt: "Next.js" },
    { id: 3, url: "https://www.alphashubham.xyz/nodejs.png", alt: "Node.js" },
    { id: 4, url: "https://www.alphashubham.xyz/mongodb.png", alt: "MongoDB" },
    { id: 5, url: "https://www.alphashubham.xyz/tailwind.png", alt: "Tailwind CSS" },
    { id: 6, url: "https://www.alphashubham.xyz/bootstrap.png", alt: "Bootstrap" },
    { id: 7, url: "https://imgs.search.brave.com/mAHT62otwTCbRhY3h8lYvZHpaEAoB1qaV5tIVgEPsBw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3ZjViZGNlZjEw/MTRjMGI1ZTQ4OWMu/cG5n", alt: "HTML" },
    { id: 8, url: "https://www.alphashubham.xyz/css.png", alt: "CSS" },
    { id: 9, url: "https://www.alphashubham.xyz/javascript.png", alt: "JavaScript" },
    { id: 10, url: "https://imgs.search.brave.com/VxaubLms-eUySCAcOcYrCUP8jX0cWWV4uSlJxbNEuk4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9leHByZXNzLWxv/Z28ucG5n", alt: "Express.js" },
    { id: 11, url: "https://imgs.search.brave.com/APq7nMmzxFiAGHPfukG2NugbtLWpnAEAPdOglBHEApE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3Zjk4MWNlZjEw/MTRjMGI1ZTQ4YmUu/cG5n", alt: "Git" },
    { id: 12, url: "https://www.alphashubham.xyz/github-logo.png", alt: "GitHub" },
    { id: 13, url: "https://www.alphashubham.xyz/figma.png", alt: "Figma" },
    { id: 14, url: "https://www.alphashubham.xyz/sql.png", alt: "SQL" },

    

    
    
  ];

  return (
    <>
      <section className={styles.skills}>
        <h2 className={styles.heading}>Skills That Make Things Happen.</h2>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeContent}>
            <div className={styles.skillimg}>
              {images.concat(images).map((image, index) => {
                return (
                  <img key={index} className={styles.images} src={image.url} alt={image.alt} />
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.skillsName}>
          {images.map((image) => {
            return <div className={styles.skill} key={image.alt}>{image.alt}</div>;
          })}
        </div>
      </section>
    </>
  );
};
export default Skills;