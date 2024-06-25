import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { div } from "three/examples/jsm/nodes/Nodes.js"

const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="text-center">{technology.name}</p>
        </div>
      ))} 
    </div>
   
  )
}

export default SectionWrapper(Tech, "")