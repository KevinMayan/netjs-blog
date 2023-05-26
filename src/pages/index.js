import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';
import SiteBar from '../../components/sitebar';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styles from '../../styles/home.module.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home() {
  return (


    <div>

      <Head> 
        
        <title> GameBlog </title> 

        <link  rel = "icon" href = "/icon/favicon.ico" />
        
      </Head>

        <div>


          <ThemeProvider theme = {darkTheme}>

            <CssBaseline />


            <SiteBar title = "GameBlog"/>
    
          </ThemeProvider>

        </div>

        <div className = {styles.postcanvas}>

          <Link  href= "posts/first-post" className={styles.linklabelcolor}>

            <Image src = "/post-images/spider-man.jpg" width = "350" height = "350" alt = "Spider-Man-2-PS5" quality = "100"/> 
            
            <h4> Novo Spiderman ganha trailer de gameplay </h4>
            
          </Link>

        </div>

        <div className = {styles.postcanvas}>

          <Link  href= "posts/second-post" className={styles.linklabelcolor}>

            <Image src = "/post-images/mortal-kombat.png" width = "350" height = "350" alt = "Mortal-Kombat" quality = "100"/> 
            
            <h4> Novo Mortal Kombat ganha trailer de revelação </h4>
            
          </Link>

        </div>

        <div className = {styles.postcanvas}>

          <Link  href= "posts/third-post" className={styles.linklabelcolor}>

            <Image src = "/post-images/metal-gear.jpg" width = "350" height = "350" alt = "Metal-Gear" quality = "100"/> 
            
            <h4> Novo Metal Gear é anunciado </h4>
            
          </Link>

        </div>



    </div>
    




  );
}
