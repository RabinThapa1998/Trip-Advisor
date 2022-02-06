import '../styles/globals.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Layout  from '../comps/layout';

function MyApp({ Component, pageProps }) {
  const theme = createTheme(
    {
      typography: {
        fontFamily: [
          'Mulish', 'sans-serif'
        ].join(','),
      },
      palette: {
        primary: {
          main: '#000000',
          darker: '#053e85',
        }
      }
    //   button: {
    //     backgroundColor: '#ffffff',
    //     color: '#000000',
    //     '&:hover': {
    //       backgroundColor: '#000',
    //       color: '#fff',
    //   }
    // }
    }
  );
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
