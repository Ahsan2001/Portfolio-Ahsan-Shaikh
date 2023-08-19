"use client"

import React from 'react';
import { Container, Grid,Box } from '@mui/material';
import style from "@/app/about/style.module.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Link from 'next/link';



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
                                  <LinkedInIcon  /> Follow on linkedIn
                              </a>
                              <a target="_blank" href="https://github.com/Ahsan2001" rel="noopener noreferrer">
                                  <GitHubIcon /> Follow on github
                              </a>
                              <a target="_blank" href="https://twitter.com/ahsan_wins" rel="noopener noreferrer">
                                  <TwitterIcon /> Follow on twitter
                              </a> 
                              <a target="_blank" href="https://www.instagram.com/ahsan_wins" rel="noopener noreferrer">
                                  <InstagramIcon /> Follow on instagram
                              </a>

                            <a target="_blank" href="mailto:mail@ahsanshaikh.com" rel="noopener noreferrer">
                                <MailOutlineIcon /> mail@ahsanshaikh.com
                            </a>
                          </Box>

                          <div className={style.downloadCv}>
                              <button className="inner-theme"><SaveAltIcon /> Download CV</button>
                          </div>

                        </div>
                    </Grid>

                    <Grid item lg={8} md={8} xs={12} >
                        <div className={`${style.rightSideContent}  bg-theme`}>
                          <h3 className="heading">About Me</h3>
                            <p>I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.</p>
                            <p>Passionate Full Stack JavaScript Developer with a knack for building secure, scalable web applications. Proficient in Javascript development. Committed to crafting high-quality code that adheres to industry standards. Enjoys solving complex problems and embracing new challenges.  </p>
                            <p> Let's create exceptional web experiences together. </p>
                            <Link href="/contact" className={style.contactMe}>
                                <button className="inner-theme">Contact me</button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </section>
      </Container>
  )
}


export default  About