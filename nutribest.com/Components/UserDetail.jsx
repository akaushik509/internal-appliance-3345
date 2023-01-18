import { Heading, Box, Text, Button, Flex, FormControl,
    FormLabel, Input,
    FormErrorMessage,
    FormHelperText, } from '@chakra-ui/react';
import axios from 'axios';
import React,{ useState, useEffect } from 'react'




const UserDetail = () => {


    const [user, setUser] = useState([]);
    const getData = () => {
        return axios.get(`http://localhost:8080/User-Details`)
    }
    useEffect(() => {
        getData().then((res) => {
            console.log(res.data[0])
            setUser(res.data[0])});
    }, []); 

  return (
    <div>
        <Box>
            <Box>
                <Heading>Personal Information</Heading>
                <Box>
                    <FormControl>
                        <FormLabel>User Name</FormLabel>
                        <Input placeholder={user.Name} disabled={true} />
                        <FormLabel>Email Id</FormLabel>
                        <Input type='email' placeholder={user.Email} disabled={true} />
                        <FormLabel>Address</FormLabel>
                        <Input placeholder={user.Address} />
                        <FormLabel>Mobile</FormLabel>
                        <Input placeholder={user.Phone} />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                </Box>
            </Box>

        </Box>
    </div>
  )
}



export default UserDetail