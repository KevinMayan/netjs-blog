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

export default function SecondPost(){
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

                    <h6> Denis Richard - 19/05/2023 - 2 min leitura </h6>

                </div>

                <h1> Novo Mortal Kombat ganha trailer de revelação </h1>

                <Image src = "/post-images/mortal-kombat.png" width = "550" height = "450" alt = "Mortal-Kombat" quality = "100"/>

                
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