interface ExperienceCardProps {
  role?: string;
  place?: string;
  timeframe?: string;
  description?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({role, place, timeframe, description}) => {

  return (
    <div className="experience-card">
      <h2>{role}</h2>
      <h3 className="experience-card-titles">{place}</h3>
      <p className="experience-card-titles" style={{fontStyle: "italic"}}>{timeframe}</p>
      <p>{description}</p>
    </div>
  )
}

export default ExperienceCard