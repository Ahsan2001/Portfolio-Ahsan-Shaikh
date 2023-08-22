"use client"

import React from 'react';
import { Container, Grid,Box } from '@mui/material';
import style from "@/app/components/banner/style.module.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const HomeBanner = () => {
    return (
        <Container maxWidth="lg" >
            <section className={style.banner}>
                <Grid container alignItems="center">
                    <Grid item lg={6} md={6} xs={12} >
                        <Box className={style.bannerContent}>
                            <h1>Modern Full Stack Cloud Developer and Architect</h1>
                            <p>I am a Full stack developer with expertise in Javascript development. 
                            I have experience in building scalable, secure and reliable web applications using various frameworks 
                            and technologies. I enjoy solving complex problems and learning new skills. 
                            I am passionate about creating high-quality code that follows best practices and industry standards. 
                            I am always looking for new challenges and opportunities to grow as a developer.</p>
                       
                            <Box className={style.icons}>
                                <a target="_blank" href="https://www.linkedin.com/in/muhammad-ahsan-shaikh-3aa018226" rel="noopener noreferrer">
                                    <LinkedInIcon  />
                                </a>
                                <a target="_blank" href="https://github.com/Ahsan2001" rel="noopener noreferrer">
                                    <GitHubIcon />
                                </a>
                                <a target="_blank" href="https://twitter.com/ahsan_wins" rel="noopener noreferrer">
                                    <TwitterIcon />
                                </a>
                                <a target="_blank" href="https://www.instagram.com/ahsan_wins" rel="noopener noreferrer">
                                    <InstagramIcon />
                                </a>
                            </Box>
                       
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12} >
                        <div className={style.banner_img}>
                            <img src={"/banner.webp"} alt="my logo image"  style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </Grid>
                </Grid>
            </section>
        </Container>
    )
}

export default HomeBanner;