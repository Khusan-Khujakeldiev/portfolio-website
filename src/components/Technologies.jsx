import PropTypes from "prop-types";
import { motion } from "motion/react";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies({ technologies }) {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map(
          (tech, index) => (
            console.log(index),
            (
              <motion.div
                variants={iconVariants(2.5 + index * 0.2)}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.1 }}
                key={index}
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <tech.icon className={`text-7xl ${tech.color}`} />
              </motion.div>
            )
          )
        )}
      </motion.div>
    </div>
  );
}

Technologies.propTypes = {
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Technologies;
