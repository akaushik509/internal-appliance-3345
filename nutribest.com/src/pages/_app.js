// import Carousel from 'Components/Carousel/Carousel';
import Navbar from '../../Components/Navbar/Navbar';
import { ChakraProvider } from '@chakra-ui/react'
// import '@/styles/globals.css'


export default function App({ Component, pageProps }) {

return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )

}
