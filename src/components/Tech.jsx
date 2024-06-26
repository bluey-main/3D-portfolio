import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { div } from "three/examples/jsm/nodes/Nodes.js"
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"
import { styles } from "../styles"

const Tech = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What Toold do I use</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
    <div className="flex flex-wrap flex-row justify-start gap-10 mt-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="text-center">{technology.name}</p>
        </div>
      ))} 
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "technologies")