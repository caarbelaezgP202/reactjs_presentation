import { BsChevronDoubleRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const PropsVsState = () => {
  return (
    <motion.div
      className="flexBetween gap-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <section className="">
        <h3 className="normalHeading text-center mb-5">Props</h3>
        <ul className="text-center textFont">
          <li className="flex justify-center items-center gap-3 mb-3">
            <BsChevronDoubleRight />
            <span>Props gets passed to the component</span>
          </li>
          <li className="flex justify-center items-center gap-3 mb-3">
            <BsChevronDoubleRight />
            <span>Props are read only and cannot be changed (immutable)</span>
          </li>
          <li className="flex justify-center items-center gap-3 mb-3">
            <BsChevronDoubleRight />
            <span>Props are read only</span>
          </li>
          <li className="flex justify-center items-center gap-3 mb-3">
            <BsChevronDoubleRight />
            <span>Props are controlled by whoever renders the components</span>
          </li>
          <li className="flex justify-center items-center gap-3 mb-3">
            <BsChevronDoubleRight />
            <span>Props are used to communicate between components</span>
          </li>
        </ul>
      </section>
      <section className="">
        <h3 className="normalHeading text-center mb-5">State</h3>
        <ul className="text-center textFont">
          <li className="flex justify-center items-center gap-3 mb-3">
            <BsChevronDoubleRight />
            <span>State is managed within the component</span>
          </li>
          <li className="flex justify-center items-center gap-3 mb-3">
            <BsChevronDoubleRight />
            <span>State can be changed (mutable)</span>
          </li>
          <li className="flex justify-center items-center gap-3 mb-3">
            <BsChevronDoubleRight />
            <span>State changes can be asynchronous</span>
          </li>
          <li className="flex justify-center items-center gap-3 mb-3">
            <BsChevronDoubleRight />
            <span>State is controlled by react components</span>
          </li>
          <li className="flex justify-center items-center gap-3 mb-3">
            <BsChevronDoubleRight />
            <span>State can used to display changes with the component</span>
          </li>
        </ul>
      </section>
    </motion.div>
  );
};

export default PropsVsState;
