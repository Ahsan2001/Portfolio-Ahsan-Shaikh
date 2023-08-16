import * as React from 'react';
import "./globals.css";
import { Ahsan } from './ahsan/page';
import Navbar from '@/components/header/page';
import Footer from '@/components/footer/page';

export default function App() {
 
  return (
    <>
      <Navbar />
      <Ahsan />


      <Footer />
    </>
  );
}
