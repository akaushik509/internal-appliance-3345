// import Carousel from 'Components/Carousel/Carousel';
import Navbar from '../../Components/Navbar/Navbar';
// import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return <><ChakraProvider>
    <Navbar /> 
    <Component {...pageProps} />
    </ChakraProvider>
  </>
}
