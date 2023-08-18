import React from 'react';
import { Container, Grid } from '@mui/material';
import style from "@/app/components/footer/style.module.css"
import Link from 'next/link';



const Projects = () => {
  return (
    <Container maxWidth="lg">
        <section className={style.projects}>
            <Grid container alignItems="center">
                <Grid item lg={4} md={6} xs={12} >
                    <div className={style.InnerBox}>
                        
                    </div>
                </Grid>
            </Grid>
        </section>
    </Container>
  )
}

export default Projects


