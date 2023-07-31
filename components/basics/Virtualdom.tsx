import { BsChevronDoubleRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

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
            <li className="mb-3 pr- flex gap-2 items-center justify-center">
              <BsChevronDoubleRight />
              <span>Virtual representation (JSON).</span>
            </li>
            <li className="mb-3 pr- flex gap-2 items-center justify-center">
              <BsChevronDoubleRight />
              <span>Improves performance.</span>
            </li>
            <li className="mb-3 pr- flex gap-2 items-center justify-center">
              <BsChevronDoubleRight />
              <span>Low cost.</span>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default Virtualdom;
