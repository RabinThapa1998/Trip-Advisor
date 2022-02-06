import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AppBar, Typography, Box, CssBaseline, Grid, Paper, Item, Card, CardContent, Divider, Avatar, Stack, Container, Button, Hidden } from "@mui/material";
import BedIcon from '@mui/icons-material/Bed';
import HomeIcon from '@mui/icons-material/Home';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ForumIcon from '@mui/icons-material/Forum';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { More } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import data from '../db.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade, EffectCards } from 'swiper';
import { typography } from '@mui/system';

export default function Home() {
  return (
    <>
      <Head>
        <title>Trip Advisor</title>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>

      <Container maxWidth='lg' sx={{ mt: 5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button variant='outlined' size="large" color={'primary'} sx={{
            ':hover': {
              bgcolor: '#000',
              color: '#fff',
            },
            height: '70px'
          }}
            endIcon={<BedIcon></BedIcon>}
          >
            <Typography sx={{ fontWeight: 700 }}>Hotels </Typography>
          </Button>

          <Button variant='outlined' sx={{
            ':hover': {
              bgcolor: '#000',
              color: '#fff',
            },
            height: '70px'
          }}
            endIcon={<HomeIcon></HomeIcon>}> <Typography sx={{ fontWeight: 700 }}>Vacation Rentals</Typography>
          </Button>

          <Button variant='outlined' sx={{
            ':hover': {
              bgcolor: '#000',
              color: '#fff',
            },
            height: '70px'
          }}
            endIcon={<ConfirmationNumberIcon></ConfirmationNumberIcon>}> <Typography sx={{ fontWeight: 700 }}>Things to Do</Typography> </Button>
          <Button variant='outlined' sx={{
            ':hover': {
              bgcolor: '#000',
              color: '#fff',
            },
            height: '70px'
          }}
            endIcon={<RestaurantIcon></RestaurantIcon>}> <Typography sx={{ fontWeight: 700 }}>Restaurants</Typography> </Button>
          <Button variant='outlined' sx={{
            ':hover': {
              bgcolor: '#000',
              color: '#fff',
            },
            height: '70px'
          }}
            endIcon={<ForumIcon></ForumIcon>}> <Typography sx={{ fontWeight: 700 }}>Travel Forums</Typography></Button>
          <Button variant='outlined' sx={{
            ':hover': {
              bgcolor: '#000',
              color: '#fff',
            },
            height: '70px'
          }}
            endIcon={<MoreHorizIcon></MoreHorizIcon>}> <Typography sx={{ fontWeight: 700 }}>More</Typography></Button>
        </Box>
        <Box sx={{ height: 350, width: 'auto', position: 'relative', mt: 3 }} >

          <Image src='/wallpaper1.jpg' alt='wallpaper1' width={4000} height={3000} layout='fill' objectFit="cover" />

          <Paper component="form" elevation={1}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, flexDirection: 'row', position: 'relative', top: '50%', left: '50%' }} className={styles.searchbar}>
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google Maps"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
          </Paper>
        </Box>

        <Box sx={{ mt: 5, mb: 5 }}>
          <Typography variant='h6' sx={{ fontWeight: '700' }}>Ways to tour Kathmandu Valley</Typography>
          <Typography variant='body1' sx={{ fontWeight: '400' }} color='text.secondary'>Book these experiences for a close-up look at Kathmandu Valley.</Typography>
          <Box sx={{ mt: 2 }}>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView="1"
              navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}

              breakpoints={
                { // when window width is >= 320px
                  425: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  650: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  // when window width is >= 640px
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 10
                  }
                }
              }
            >
              <SwiperSlide style={{ maxWidth: '275px' }}>
                <Paper elevation={0} sx={{ pb: 2 }} >
                  <Box  >
                    <Image src='/ktm2.jpg' height={275} width={275} alt='ktm2' objectFit='cover' ></Image>
                  </Box>
                  <Typography variant={'h6'} sx={{ fontWeight: '700' }}>Swyanbhunath</Typography>
                  <Typography variant={'body1'} sx={{ fontWeight: '700' }}>from $1000 per adult</Typography>
                </Paper>
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: '275px' }}>
                <Paper elevation={0} sx={{ pb: 2 }} >
                  <Box  >
                    <Image src='/ktm3.jpg' height={275} width={275} alt='ktm2' objectFit='cover' ></Image>
                  </Box>
                  <Typography variant={'h6'} sx={{ fontWeight: '700' }}>Swyanbhunath</Typography>
                  <Typography variant={'body1'} sx={{ fontWeight: '700' }}>from $1000 per adult</Typography>
                </Paper>
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: '275px' }}>
                <Paper elevation={0} sx={{ pb: 2 }} >
                  <Box  >
                    <Image src='/ktm4.jpg' height={275} width={275} alt='ktm2' objectFit='cover' ></Image>
                  </Box>
                  <Typography variant={'h6'} sx={{ fontWeight: '700' }}>Swyanbhunath</Typography>
                  <Typography variant={'body1'} sx={{ fontWeight: '700' }}>from $1000 per adult</Typography>
                </Paper>
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: '275px' }}>
                <Paper elevation={0} sx={{ pb: 2 }} >
                  <Box  >
                    <Image src='/ktm5.jpg' height={275} width={275} alt='ktm2' objectFit='cover' ></Image>
                  </Box>
                  <Typography variant={'h6'} sx={{ fontWeight: '700' }}>Swyanbhunath</Typography>
                  <Typography variant={'body1'} sx={{ fontWeight: '700' }}>from $1000 per adult</Typography>
                </Paper>
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: '275px' }}>
                <Paper elevation={0} sx={{ pb: 2 }} >
                  <Box  >
                    <Image src='/ktm6.jpg' height={275} width={275} alt='ktm2' objectFit='cover' ></Image>
                  </Box>
                  <Typography variant={'h6'} sx={{ fontWeight: '700' }}>Swyanbhunath</Typography>
                  <Typography variant={'body1'} sx={{ fontWeight: '700' }}>from $1000 per adult</Typography>
                </Paper>
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: '275px' }}>
                <Paper elevation={0} sx={{ pb: 2 }} >
                  <Box  >
                    <Image src='/ktm7.jpg' height={275} width={275} alt='ktm2' objectFit='cover' ></Image>
                  </Box>
                  <Typography variant={'h6'} sx={{ fontWeight: '700' }}>Swyanbhunath</Typography>
                  <Typography variant={'body1'} sx={{ fontWeight: '700' }}>from $1000 per adult</Typography>
                </Paper>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>

      </Container>
      <Box sx={{ mt: 5, mb: 5, bgcolor: '#FBF0ED', pb: 3, pt: 3 }} >
        <Container maxWidth='lg'>
          <Typography variant='h6' sx={{ fontWeight: '700' }}>More to explore</Typography>
          <Box sx={{ mt: 2 }}>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView="1"
              navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}

              breakpoints={
                { // when window width is >= 320px
                  425: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  650: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  // when window width is >= 640px
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10
                  }
                }
              }
            >
              <SwiperSlide style={{ maxWidth: '370px' }}>
                <Paper elevation={0} >
                  <Box  >
                    <Image src='/ch1.jpg' height={240} width={370} alt='ktm2' objectFit='cover' ></Image>
                  </Box>
                  <Box sx={{ pt: 3, pb: 3 }}>
                    <Typography variant={'body1'} sx={{ fontWeight: '700', textAlign: 'center' }}>From Tripadvisor</Typography>
                    <Typography variant={'h6'} sx={{ fontWeight: '700', textAlign: 'center' }}>10 places to visit in Nepal</Typography>
                  </Box>
                </Paper>
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: '370px' }}>
                <Paper elevation={0} >
                  <Box  >
                    <Image src='/ph1.jpg' height={240} width={370} alt='ktm2' objectFit='cover' ></Image>
                  </Box>
                  <Box sx={{ pt: 3, pb: 3 }}>
                    <Typography variant={'body1'} sx={{ fontWeight: '700', textAlign: 'center' }}>From Tripadvisor</Typography>
                    <Typography variant={'h6'} sx={{ fontWeight: '700', textAlign: 'center' }}>10 places to visit in Nepal</Typography>
                  </Box>
                </Paper>
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: '370px' }}>
                <Paper elevation={0} >
                  <Box  >
                    <Image src='/ph2.jpg' height={240} width={370} alt='ktm2' objectFit='cover' ></Image>
                  </Box>
                  <Box sx={{ pt: 3, pb: 3 }}>
                    <Typography variant={'body1'} sx={{ fontWeight: '700', textAlign: 'center' }}>From Tripadvisor</Typography>
                    <Typography variant={'h6'} sx={{ fontWeight: '700', textAlign: 'center' }}>10 places to visit in Nepal</Typography>
                  </Box>
                </Paper>
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: '370px' }}>
                <Paper elevation={0} >
                  <Box  >
                    <Image src='/ktm2.jpg' height={240} width={370} alt='ktm2' objectFit='cover' ></Image>
                  </Box>
                  <Box sx={{ pt: 3, pb: 3 }}>
                    <Typography variant={'body1'} sx={{ fontWeight: '700', textAlign: 'center' }}>From Tripadvisor</Typography>
                    <Typography variant={'h6'} sx={{ fontWeight: '700', textAlign: 'center' }}>10 places to visit in Nepal</Typography>
                  </Box>
                </Paper>
              </SwiperSlide>

            </Swiper>
          </Box>
        </Container>
      </Box>

      <Container maxWidth='lg' sx={{ mt: 15 }}>
        <Box sx={{ mt: 5, mb: 5 }}>
          <Typography variant='h6' sx={{ fontWeight: '700' }}>Top Destination for Hikers and Trekkers</Typography>
          <Typography variant='body1' sx={{ fontWeight: '400' }} color='text.secondary'>Recommended based on your activity </Typography>
          <Box sx={{ mt: 2 }}>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView="1"
              navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}

              breakpoints={
                { // when window width is >= 320px
                  425: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  650: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  // when window width is >= 640px
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 10
                  }
                }
              }
            >
              <SwiperSlide style={{ maxWidth: '275px' }}>
                <Paper elevation={1} sx={{ position: 'relative', zIndex: -1, height: '275px' }} >
                  <Box sx={{ position: 'absolute', top: '10' }}>
                    <Image src='/np1.jpg' height={275} width={275} alt='ktm2' objectFit='cover' className='imagedim' ></Image>
                  </Box>
                  <Box sx={{ position: 'absolute', bottom: 50, zIndex: 999999, width: '100%' }}>
                    <Typography variant={'h5'} sx={{ fontWeight: '900', color: 'white', textAlign: 'center' }}>Mt.Everest</Typography>
                  </Box>
                </Paper>
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: '275px' }}>
                <Paper elevation={1} sx={{ position: 'relative', zIndex: -1, height: '275px' }} >
                  <Box sx={{ position: 'absolute', top: '10' }}>
                    <Image src='/np2.jpg' height={275} width={275} alt='ktm2' objectFit='cover' className='imagedim' ></Image>
                  </Box>
                  <Box sx={{ position: 'absolute', bottom: 50, zIndex: 999999, width: '100%' }}>
                    <Typography variant={'h5'} sx={{ fontWeight: '900', color: 'white', textAlign: 'center' }}>Mt.Everest</Typography>
                  </Box>
                </Paper>
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: '275px' }}>
                <Paper elevation={1} sx={{ position: 'relative', zIndex: -1, height: '275px' }} >
                  <Box sx={{ position: 'absolute', top: '10' }}>
                    <Image src='/np3.jpg' height={275} width={275} alt='ktm2' objectFit='cover' className='imagedim' ></Image>
                  </Box>
                  <Box sx={{ position: 'absolute', bottom: 50, zIndex: 999999, width: '100%' }}>
                    <Typography variant={'h5'} sx={{ fontWeight: '900', color: 'white', textAlign: 'center' }}>Mt.Everest</Typography>
                  </Box>
                </Paper>
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: '275px' }}>
                <Paper elevation={1} sx={{ position: 'relative', zIndex: -1, height: '275px' }} >
                  <Box sx={{ position: 'absolute', top: '10' }}>
                    <Image src='/np4.jpg' height={275} width={275} alt='ktm2' objectFit='cover' className='imagedim' ></Image>
                  </Box>
                  <Box sx={{ position: 'absolute', bottom: 50, zIndex: 999999, width: '100%' }}>
                    <Typography variant={'h5'} sx={{ fontWeight: '900', color: 'white', textAlign: 'center' }}>Mt.Everest</Typography>
                  </Box>
                </Paper>
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: '275px' }}>
                <Paper elevation={1} sx={{ position: 'relative', zIndex: -1, height: '275px' }} >
                  <Box sx={{ position: 'absolute', top: '10' }}>
                    <Image src='/np5.jpg' height={275} width={275} alt='ktm2' objectFit='cover' className='imagedim' ></Image>
                  </Box>
                  <Box sx={{ position: 'absolute', bottom: 50, zIndex: 999999, width: '100%' }}>
                    <Typography variant={'h5'} sx={{ fontWeight: '900', color: 'white', textAlign: 'center' }}>Mt.Everest</Typography>
                  </Box>
                </Paper>
              </SwiperSlide>

            </Swiper>
          </Box>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Stack direction={'row'} sx={{ justifyContent: 'space-around' }}>
            <Stack direction={'column'}>
              <Typography variant={'body1'} sx={{ fontWeight: '400', color: 'text.secondary' }}>Top hotels
              </Typography>
              {data.tophotels.map(eachdata => {
                return (
                  <Typography variant={'body1'} sx={{ fontWeight: '700', color: 'text.primary' }}>{eachdata}
                  </Typography>
                )
              })}
            </Stack>
            <Stack direction={'column'}>
              <Typography variant={'body1'} sx={{ fontWeight: '400', color: 'text.secondary' }}>Top Things to do in Nepal
              </Typography>
              {data.topthings.map(eachdata => {
                return (
                  <Typography variant={'body1'} sx={{ fontWeight: '700', color: 'text.primary' }}>{eachdata}
                  </Typography>
                )
              })}
            </Stack>
          </Stack>
        </Box>

      </Container>
      <Box sx={{ mt: 5, bgcolor: '#FBF0ED', pb: 3, pt: 3 }} >
        <Container maxWidth='lg'>
          <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>

            <Stack direction={'column'} spacing={2}>
              <Stack direction={'row'} spacing={5}>
                <Stack direction={'column'}>
                  <Typography variant={'body1'} sx={{ fontWeight: '400', color: 'text.secondary' }}>About Tripadvisor
                  </Typography>
                  {data.abouttripadvisor.map(eachdata => {
                    return (
                      <Typography variant={'body1'} sx={{ fontWeight: '700', color: 'text.primary' ,fontSize:'0.90rem'}}>{eachdata}
                      </Typography>
                    )
                  })}
                </Stack>
                <Stack direction={'column'}>
                  <Typography variant={'body1'} sx={{ fontWeight: '400', color: 'text.secondary' }}>Explore
                  </Typography>
                  {data.explore.map(eachdata => {
                    return (
                      <Typography variant={'body1'} sx={{ fontWeight: '700', color: 'text.primary' ,fontSize:'0.90rem'}}>{eachdata}
                      </Typography>
                    )
                  })}
                </Stack>
                <Stack direction={'column'}>
                  <Typography variant={'body1'} sx={{ fontWeight: '400', color: 'text.secondary' }}>Do Business With Us
                  </Typography>
                  {data.dobusiness.map(eachdata => {
                    return (
                      <Typography variant={'body1'} sx={{ fontWeight: '700', color: 'text.primary',fontSize:'0.90rem' }}>{eachdata}
                      </Typography>
                    )
                  })}
                  <Box sx={{ mt: 3 }}>
                    <Typography variant={'body1'} sx={{ fontWeight: '400', color: 'text.secondary' }}>Get The App
                    </Typography>
                    <Typography variant={'body1'} sx={{ fontWeight: '700', color: 'text.primary',fontSize:'0.90rem' }}>iPhone App
                    </Typography>
                    <Typography variant={'body1'} sx={{ fontWeight: '700', color: 'text.primary' ,fontSize:'0.90rem'}}>Android App
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
              <Stack direction={'row'} spacing={2}>
                <Stack>
                  <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt="logo" height={'40'} width={'40'} />
                </Stack>
                <Stack direction={'column'}>
                  <Typography variant={'body1'} sx={{ fontWeight: '400', color: 'text.primary', fontSize: '0.8rem' }}> &#169;2022 TripAdvisor LLC All rights reserved.</Typography>
                  <Stack direction={'row'} spacing={1}>

                    {data.terms.map(eachdata => {
                      return (
                        <a href="#" style={{ color: 'black' }}>
                          <Typography variant={'body1'} sx={{ fontWeight: '700', color: 'text.primary', fontSize: '0.9rem' }}>{eachdata}
                          </Typography>
                        </a>
                      )
                    })}
                  </Stack>
                </Stack>
              </Stack>
              <Typography varinat={'body1'} sx={{fontSize:'0.8rem', fontWeight:'400'}}>
              This is the version of our website addressed to speakers of English in the United States. If you are a resident of another <br /> country or region,  please select the appropriate version of Tripadvisor for your country or region in the drop-down menu. more
              </Typography>
            </Stack>

            <Stack direction={'column'}>
              {data.tripadvisorsites.map(eachdata => {
                return (
                  <Typography variant={'body1'} sx={{ fontWeight: '400', color: 'text.primary' ,fontSize:'0.90rem'}}>{eachdata}
                  </Typography>
                )
              })}

            </Stack>
          </Stack>


        </Container>
      </Box>

    </>
  )
}
