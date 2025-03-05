import { EDUCATION } from "../constants";
import { COURSES } from "../constants";
import { motion } from "motion/react";

function Education() {
  return (
    <div>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className=" my-20 text-center text-4xl"
      >
        EDUCATION
      </motion.h1>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className=" w-full lg:w-1/4"
            >
              <p className=" mb-2 text-sm text-neutral-400">{education.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className=" w-full max-w-xl lg:w-3/4"
            >
              <h6 className=" mb-2 font-semibold">
                {education.university} -{" "}
                <span className=" text-sm text-purple-100">
                  {education.degree}
                </span>
              </h6>
              <p className=" mb-4 text-neutral-400">{education.description}</p>
            </motion.div>
          </div>
        ))}
        {COURSES.map((course, index) => (
          <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className=" w-full lg:w-1/4"
            >
              <p className=" mb-2 text-sm text-neutral-400">{course.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className=" w-full max-w-xl lg:w-3/4"
            >
              <h6 className=" mb-2 font-semibold">
                {course.course} -{" "}
                <span className=" text-sm text-purple-100">
                  {course.school}
                </span>
              </h6>
              <p className=" mb-4 text-neutral-400">{course.description}</p>
              {course.technologies.map((tech, index) => (
                <span
                  key={index}
                  className=" rounded bg-neutral-900 px-2 py-1 mr-2 mt-4 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
