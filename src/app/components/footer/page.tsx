import React from 'react';
import { Container, Grid } from '@mui/material';
import style from "./style.module.css"
import Link from 'next/link';

const Footer = () => {
    return (
        <Container  maxWidth="lg">
            <footer className={style.footer}>
                <Grid container alignItems="center">
                    <Grid item lg={6} md={6} xs={12} >
                        <nav className={style.footer_menu}>
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/projects">Projects</Link>
                            <Link href="/contact">Contact</Link>
                        </nav>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12} >
                        <div className={style.footer_copywrite}>© 2022 Ahsan Shaikh. All Rights Reserved.</div>
                    </Grid>
                </Grid>
            </footer>
        </Container>
    )
}

export default Footer;