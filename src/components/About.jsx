import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services, social } from "../constants";
import { fadeIn, floatingComponent, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { victor } from "../assets";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-x-5 gap-y-10">
      <div className="flex-1 ">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <p className={styles.sectionHeadText}>Overview.</p>
        </motion.div>
        <motion.p
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          Hi, I am a web and mobile developer passionate about
          creating easy to-use, visually appealing applications. I have a keen
          eye for detail and a knack for solving problems. I&apos;m always up
          for a challenge and love bringing my creativity and analytical skills
          to every project. I&apos;m particularly skilled in working with
          WordPress, front-end technologies, and mobile app development. Whether
          it&apos;s a small fix or a large-scale project, I&apos;m committed to
          finding the best solution
        </motion.p>
        {/* 
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}

      <div className="p-y-2 flex flex-wrap bg-red- gap-5 mt-3">
          {social.map((item) => (
            
            <div onClick={() => window.open(item.link, "_blank")} className="py-2 px-4 rounded-3xl flex gap-3 cursor-pointer items-center justify-center bg-[rgba(255,255,255,0.3)] backdrop-blur-lg" key={item.name}>
              <div className="w-5">
              <img src={item.icon} alt={item.name} className="object-contain"/>
              </div>
              <div className="flex-1">
                <p>{item.name}</p>
              </div>
              
            </div>
          ))}
      </div>
      </div>

      <motion.div
        variants={floatingComponent()}
        initial="hidden"
        animate="show"
        whileInView={{
          y: [0, -10, 0],
          transition: {
            duration: 2, // Duration of the entire animation
            ease: "easeInOut", // Easing function
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "loop", // Repeat type
          },
        }}
        viewport={{ once: false, amount: 0.25 }}
        className="sm:w-[20rem] sm:h-[25rem] w-[20rem] h-[20rem] flex justify-center items-center bg-red-500 overflow-hidden rounded-2xl"
        style={{
          backgroundImage: `url(${victor})`,
          backgroundSize: "cover",
        }}
      >
        {/* <img src={victor} alt="victor" className="object-contain" /> */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
