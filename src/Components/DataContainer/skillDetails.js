import React from 'react'

const SkillDetails = ({title,description}) => {
    return (
        <div className="skills-details">
            <p className="skills-container">{title}</p>
            <p className="values-container">{description}</p>
        </div>
    )
}

export default SkillDetails
