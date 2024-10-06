import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
       <Box 
       sx={{
        my:15,
        textAlign: "center",
        p:2,
        "& h4" :{
          fontWeight:"bold",
          my:2,
          fontSize:'2rem'

        },
        "& p":{
          textAlign:"justify",

        },
        "@media (max-width:600px)":{
          mt:0,
          "& h4":{
          fontSize: "1.5rem",
          }
        }

       }}
       >
          <Typography variant='h4'>
            Welcome To My Restaurent
          </Typography>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil libero modi aliquid? Sequi aspernatur laborum dolorem mollitia esse libero exercitationem iure sunt minus quasi impedit, maxime iste perspiciatis inventore pariatur laboriosam at repellendus nesciunt eos fugit. Odit ea eum facilis at maxime magnam, itaque autem dolorum similique aliquid iure esse quasi exercitationem. Quasi laudantium veritatis suscipit culpa, facere repudiandae velit nostrum fuga deserunt, ratione blanditiis doloremque voluptates? Qui sed deserunt ab doloremque earum? Ratione voluptatibus deserunt corrupti cum tempore iure obcaecati harum voluptas sunt similique beatae doloribus, sint ad! Doloremque distinctio itaque amet autem odio. Obcaecati laboriosam dolorum ut debitis.</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus dolor perspiciatis necessitatibus optio modi quos atque recusandae, temporibus saepe rerum fugit. Iure ab odit excepturi vitae suscipit, error veritatis doloribus distinctio eligendi porro iusto accusamus maxime exercitationem quod quam! Alias, velit cum? Voluptatibus fugit ratione, repellat ipsum quod dolor impedit corrupti, quaerat voluptas a quisquam eius sed? Cumque possimus fugiat eligendi iusto aperiam, beatae necessitatibus placeat sit nam, sunt velit? Dolores, illo voluptatum nemo nulla dolorum odio est facilis ex harum laborum eum dicta doloribus beatae. Totam quod, aut iure amet nemo tempora eius, temporibus tempore pariatur, provident similique.</p>

       </Box>
    </Layout>
  )
}

export default About
