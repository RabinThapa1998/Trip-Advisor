import { AppBar, Typography, Box, CssBaseline, Grid, Paper, Item, Card, CardContent, Divider, Avatar, Stack, Container, Button, Hidden } from "@mui/material";

const Header = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Stack direction='row' sx={{ justifyContent: 'space-between',mt:2 }}>
          <Stack direction='row' spacing={1} sx={{ alignItems: 'center' }}>
            <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt="logo" height={'40'} width={'40'} />
            <Typography variant='h5' sx={{ fontWeight: 900,fontSize:'1.8rem' }}>Trip advisor</Typography>
          </Stack>

          <Stack direction='row' spacing={2}>
            <Typography variant='h6' sx={{ fontWeight: 700 }}>Review</Typography>
            <Typography variant='h6' sx={{ fontWeight: 700 }}>Trips</Typography>
            <Typography variant='h6' sx={{ fontWeight: 700 }}>Alerts</Typography>
            <Button variant='contained' disableElevation size="small" color='primary' sx={{
              ':hover': {
                bgcolor: '#fff',
                color: '#000',
              },
            }}>
              <Typography variant='span' sx={{ fontWeight: 700 }}> Sign in</Typography></Button>
          </Stack>
        </Stack>

      </Container>


    </>
  );
}

export default Header;