import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Carousel from 'Components/Carousel/Carousel'
import Advertise1 from 'Components/Advertise/Advertise1'
import Footer1 from 'Components/Footer/Footer1'
import Footer2 from 'Components/Footer/Footer2'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NutriBest</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main >
      {/* className={styles.main} */}
      <Carousel />
      <Advertise1 />
      <Footer1 />
      <Footer2 />
      </main>
    </>
  )
}


 