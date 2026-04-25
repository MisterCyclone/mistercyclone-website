import React from "react";
import '../cards/projectCard.css'
import usePlaySoundPitched  from "../../hooks/usePlaySoundPitched";



interface ProjectTagProps {
  label: string;
}

const ProjectTag: React.FC<ProjectTagProps> = ({label}) => {
  const { playPitchByType } = usePlaySoundPitched();

  return (
    <div className="project-tag" onMouseEnter={() => playPitchByType('tag')}>
      <p>{label}</p>
    </div>
  )
}

export default ProjectTag;
