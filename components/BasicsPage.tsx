"use client";

import { BsChevronDoubleRight } from 'react-icons/bs';

import TransitionPageWrapper from './TransitionPageWrapper';

const BasicsPage = () => {
  return (
    <TransitionPageWrapper>
      <div className="flex flex-col justify-center items-stretch px-72">
        <div className="flexBetween h-fit">
          <section className=" flexCenter p-12">
            <div className="border border-black rounded-2xl p-3 shadow-2xl">
              <iframe
                className="h-[600px]"
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
                <span>Virtual representation</span>
              </li>
              <li className="mb-3 pr- flex gap-2 items-center justify-center">
              <BsChevronDoubleRight />
                <span>
                  Improve performance
                </span>
              </li>
              <li className="mb-3 pr- flex gap-2 items-center justify-center">
              <BsChevronDoubleRight />
                <span>Low cost</span>
              </li>
            </ul>
          </section>
        </div>
        <div className="flexBetween">
          <section className="w-1/2">
            <h3 className="normalHeading text-center mb-5">Props</h3>
            <ul className="text-center textFont">
              <li className="mb-3">
                <span>Props gets passed to the component</span>
              </li>
              <li className="mb-3">
                <span>
                  Props are read only and cannot be changed (immutable)
                </span>
              </li>
              <li className="mb-3">
                <span>Props are read only</span>
              </li>
              <li className="mb-3">
                <span>
                  Props are controlled by whoever renders the components
                </span>
              </li>
              <li className="mb-3">
                <span>Props are used to communicate between components</span>
              </li>
            </ul>
          </section>
          <section className="w-1/2">
            <h3 className="normalHeading text-center mb-5">State</h3>
            <ul className="text-center textFont">
              <li className="mb-3">
                <span>State is managed within the component</span>
              </li>
              <li className="mb-3">
                <span>State can be changed (mutable)</span>
              </li>
              <li className="mb-3">
                <span>State changes can be asynchronous</span>
              </li>
              <li className="mb-3">
                <span>State is controlled by react components</span>
              </li>
              <li className="mb-3">
                <span>
                  State can used to display changes with the component
                </span>
              </li>
            </ul>
          </section>
        </div>
        <div>
          <section>section 1</section>
          <section>section 2</section>
        </div>
        <div>
          <section>section 1</section>
          <section>section 2</section>
        </div>
      </div>
    </TransitionPageWrapper>
  );
};

export default BasicsPage;
