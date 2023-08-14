import { motion } from "framer-motion";

const Virtualdom = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ delay: 0.25 }}
    >
      <div className="flexBetween h-fit">
        <section className=" flexCenter p-12 pb-0">
          <div className="border border-black rounded-2xl p-3 shadow-2xl">
            <iframe
              className="min-h-[450px] 2xl:min-h-[600px]"
              width="427"
              src="https://www.youtube.com/embed/kXJ9CNr0WMg?autoplay=1&mute=1&loop=1"
              title="Virtual DOM in React -  React Interview Question #reactjs #shorts"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <section className="w-3/5">
          <h3 className="normalHeading text-center mb-7">Virtual DOM</h3>
          <ul className="text-center text-2xl">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-green text-black listItemPatterns"
            >
              Virtual representation (JSON)
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-orange text-black listItemPatterns"
            >
              Improves performance
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-green text-black listItemPatterns"
            >
              Computational low cost
            </motion.li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default Virtualdom;
