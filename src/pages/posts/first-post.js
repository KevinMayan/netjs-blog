import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import SiteBar from '../../../components/sitebar';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styles from '../../../styles/posts.module.css';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function FirstPost() {
  return (


    <div>

      <Head> <title> GameBlog </title> </Head>

        <div>


          <ThemeProvider theme = {darkTheme}>

            <CssBaseline />


            <SiteBar title = "GameBlog"/>
    
          </ThemeProvider>

          
        </div>


        <div className={styles.postimage}>

            <div className={styles.authorlabel}>

                <h6> Peter Alan - 19/05/2023 - 1 min leitura </h6>

            </div>

            <h1> Novo Spiderman ganha trailer de gameplay </h1>

            <Image src = "/post-images/spider-man.jpg" width = "550" height = "450" alt = "Spider-Man-2-PS5" quality = "100"/>

            
        </div>

        <div className = {styles.posttext}>

            <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis libero hendrerit, varius arcu ac, mollis magna. Nam sed felis porttitor,           
                <p></p>
                bibendum lectus eget, interdum lectus. Sed a quam sem. In vitae purus justo. Cras nec dolor a risus elementum malesuada. Vivamus 
                <p></p>
                rhoncus, ligula sit amet pharetra pellentesque, neque massa eleifend orci, posuere mollis nibh dolor molestie mi. Donec id dui justo. Nulla 


            </p>
 
        </div>

        <div className={styles.backtolabelhome}>

            <Link  href= "/" className = {styles.backtolabelhomecolor}> Voltar para Home </Link>


        </div>

    </div>
    




    );
  }
  