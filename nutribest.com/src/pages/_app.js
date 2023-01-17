import Carousel from 'Components/Carousel/Carousel';
import Navbar from '../../Components/Navbar';
// import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Carousel />
    <Component {...pageProps} />
  </>
}
