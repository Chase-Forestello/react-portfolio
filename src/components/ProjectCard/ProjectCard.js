import React from "react";
import ReactDOM from "react-dom";

const ProjectCard = ({ project }) => {
    console.log(project);
    return (
        <div className="card text-center">{project.Title}</div>
    )
}

export default ProjectCard;