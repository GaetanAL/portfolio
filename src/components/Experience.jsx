

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Site web de réseau social Full Stack',
    tags: ['API', 'Web', 'Database'],
    projectLink: 'https://github.com/Projet-Integration-Team-7/Projet-Academix'
  },
];

const Experience = () => {
  return (
    <section 
    id="experience"
    className="section"
    >
      <div className="container">

          <h2 className="headline-2">
              Mes experiences
          </h2>

          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink, key }) => (
              <ProjectCard 
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
              />
            ))}
          </div>

      </div>
    </section>
  )
}

export default Experience