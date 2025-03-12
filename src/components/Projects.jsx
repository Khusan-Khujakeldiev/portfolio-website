import { PROJECTS } from "../constants";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Projects() {
  return (
    <div className=" border-x-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className=" my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="">
        {PROJECTS.map((project, index) => (
          <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className=" w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={170}
                height={170}
                alt={project.title}
                className=" mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className=" w-full max-w-xl lg:w-3/4"
            >
              <h6 className=" mb-2 font-semibold ">{project.title}</h6>
              <p className=" mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className=" mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  className="text-neutral-400 hover:text-blue-400 ml-2 pt-2 font-medium inline-flex items-center"
                >
                  <FontAwesomeIcon icon={faGlobe} className="mr-1" /> Visit
                  Website
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-neutral-400 hover:text-yellow-400 ml-2 pt-2 inline-flex items-center"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-1" /> GitHub
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
