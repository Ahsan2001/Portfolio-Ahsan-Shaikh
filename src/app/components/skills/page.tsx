import React from 'react';
import { Container, Grid } from '@mui/material';
import style from "@/app/components/skills/style.module.css"
import { Technology } from '@/types';
import Image from 'next/image';


const Data : Technology[] =  [
    {
        name: "Html",
        img: "html.png"
    },

    {
        name: "Css",
        img: "css.png"
    },

    {
        name: "Javascript",
        img: "js.png"
    },

    {
        name: "React",
        img: "react.png"
    },

    {
        name: "Typescript",
        img: "ts.png"
    },

    {
        name: "Next",
        img: "next.png"
    },
    {
        name: "Sass",
        img: "sass.png"
    },
    {
        name: "Material UI",
        img: "mu.png"
    },
    {
        name: "Chakra UI",
        img: "chakra.png"
    },
    {
        name: "Bootstrap",
        img: "b.png"
    },

    {
        name: "Tailwind Css",
        img: "tailwind.png"
    },
    {
        name: "Docker",
        img: "docker.png"
    },
    // {
    //     name: "Kubernetes",
    //     img: "k8s.png"
    // },
    {
        name: "Figma",
        img: "figma.png"
    },
    {
        name: "Adobe XD",
        img: "xd.png"
    },
    {
        name: "Photoshop",
        img: "ps.png"
    },

    {
        name: "Node",
        img: "node.jpg"
    },

    // {
    //     name: "Illustrator",
    //     img: "ai.png"
    // },
    {
        name: "Prisma",
        img: "prisma.png"
    },


    {
        name: "Github",
        img: "github.png"
    },

    {
        name: "Contentful",
        img: "contentful.png"
    },

    {
        name: "Gatsby",
        img: "gatsby.png"
    },
    {
        name: "Aws",
        img: "aws.png"
    },
    {
        name: "MongoDb",
        img: "mongo.png"
    },
    {
        name: "Firebase",
        img: "firebase.png"
    },
    {
        name: "Sql",
        img: "mysql.png"
    },


]

const Skills = () => {
  return (
    <Container maxWidth="lg">
        <section className={style.skills}>
            <Grid container alignItems="center" rowSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 2,lg: 3  }}>
                <Grid item lg={12} md={12} xs={12} >
                    <h3 className="heading"><span>Technologies</span> that I use to </h3>
                </Grid>
                    {
                        Data.map((element, index)=>{
                            return (
                                <Grid key={index} item lg={1} md={2} xs={3} >
                                    <div className={style.skillBox}> 
                                        <Image src ={ `/${element.img} `} alt={element.name} width={30} height={30} />
                                        <h6>{element.name}</h6> 
                                    </div> 
                                </Grid>
                            )
                        })
                    }
            </Grid>
        </section>
    </Container>
  )
}

export default Skills