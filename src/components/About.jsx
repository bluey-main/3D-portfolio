import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({index,title,icon}) => {
  return(
    <p>{title}</p>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview.</p>
      </motion.div>
      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" variants={fadeIn("", "", 0.1, 1)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        cumque corrupti sapiente eaque eum iusto suscipit accusamus alias
        consequatur, vitae laboriosam, at, perspiciatis nam molestias dolor
        repellat cum quas qui optio provident? Accusantium sunt nam excepturi
        rerum doloribus quaerat facere. Ullam perspiciatis natus accusamus
        molestias explicabo error soluta culpa reiciendis.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default About;
