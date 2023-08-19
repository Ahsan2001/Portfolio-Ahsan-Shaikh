import React from 'react';
import { Container, Grid } from '@mui/material';
import style from "@/app/projects/style.module.css"
import Link from 'next/link';
import {Project} from "@/types";
import Image from "next/image";
import LinkIcon from '@mui/icons-material/Link';

const projectData : Project[] = [
    {
        name: "Project 1",
        techStack: ["ts.png","next.png"],
        description: "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima."
    },
    {
        name: "Project 2",
        techStack: ["react.png", "mu.png"],
        description: "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima."
    },
    {
        name: "Project 3",
        techStack: ["react.png","tailwind.png"],
        description: "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima."
    },
    {
        name: "Project 4",
        techStack: ["html.png", "css.png", "b.png"],
        description: "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima."
    },
    {
        name: "Project 5",
        techStack: ["js.png", "node.jpg"],
        description: "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima."
    },
]

const Projects = () => {
  return (
    <Container maxWidth="lg">
        <section className={style.projects}>
            <Grid container alignItems="center" rowSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 2,lg: 3  }}>
                {projectData.map((element, index)=> {
                    return (
                        <Grid key={index} item lg={4} md={6} xs={12}>
                            <div className={style.InnerBox}>
                                <ul>
                                    {element.techStack.map((tech, techIndex) => (
                                        <li key={techIndex}>{
                                            <Image src ={ `/skills/${tech} `} alt={element.name} width={30} height={30} />
                                        }</li>
                                    ))}
                                </ul>
                               <h4> {element.name}</h4>
                               <p>{element.description}</p>
                                <Link href={`projects/${element.name}`}> <LinkIcon /> view project</Link>
                            </div>
                        </Grid>
                    )}
                )}
            </Grid>
        </section>
    </Container>
  )
}

export default Projects