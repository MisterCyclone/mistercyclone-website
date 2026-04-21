import React from "react";
import useSound from "use-sound";
import '../cards/project-card.css'
import ontagHover from '../../assets/onTagHover.wav'

interface ProjectTagProps {
  label: string;
}

const ProjectTag: React.FC<ProjectTagProps> = ({label}) => {

  const [play] = useSound(ontagHover)

  return (
    <div className="project-tag" onMouseEnter={() => play()}>
      <p>{label}</p>
    </div>
  )
}

export default ProjectTag;
