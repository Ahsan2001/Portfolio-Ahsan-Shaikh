import React from 'react';
import {projectData} from "@/static/projects"





// @ts-ignore
const ProjectDetail = ({params})  => {

    const id = params.id;

    // Find the project data from the projectData array using the project name
    const project = projectData.find(project => project.id == id);


    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1>{project.name}</h1>
            <ul>
                {project.techStack.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                ))}
            </ul>
            <p>{project.description}</p>
            {/* Add any additional project details here */}
        </div>
    );
};

export default ProjectDetail;
