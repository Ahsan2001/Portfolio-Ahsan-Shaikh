"use client"

import React from 'react';
import { Container, Grid,Box } from '@mui/material';
import style from "@/app/about/style.module.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';



function About() {
  return (
    <Container maxWidth="lg">
            <section className={style.aboutMe}>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
                    <Grid item lg={4} md={4} xs={12} >
                      <div className={`${style.leftSideContent} bg-theme`}>
                      <Image src="/avatar.png" alt="my image" width={200} height={180} className={style.logo} />                     
                        <h3>Ahsan Shaikh 
                          <span>Full Stack Developer</span>
                        </h3>
                  
                        <Box className={`${style.followOn} inner-theme`}>
                              <a target="_blank" href="https://www.linkedin.com/in/muhammad-ahsan-shaikh-3aa018226" rel="noopener noreferrer">
                                  <LinkedInIcon  /> Follow on LinkedIn
                              </a>
                              <a target="_blank" href="https://github.com/Ahsan2001" rel="noopener noreferrer">
                                  <GitHubIcon /> Follow on Github
                              </a>
                              <a target="_blank" href="https://twitter.com/ahsan_wins" rel="noopener noreferrer">
                                  <TwitterIcon /> Follow on Twitter
                              </a> 
                              <a target="_blank" href="https://www.instagram.com/ahsan_wins" rel="noopener noreferrer">
                                  <InstagramIcon /> Follow on Instagram
                              </a>
                          </Box>
                        </div>
                     
                    </Grid>

                    <Grid item lg={8} md={8} xs={12} >
                        <div className={`${style.rightSideContent}  bg-theme`}>
                          <h3 className="heading">About Me </h3>
                        </div>
                    </Grid>
                </Grid>
            </section>
      </Container>
  )
}


export default  About