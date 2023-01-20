import { Heading, Box, Text, Button, Flex, FormControl,
    FormLabel, Input,
    FormErrorMessage,
    FormHelperText, } from '@chakra-ui/react';
import axios from 'axios';
import React,{ useState, useEffect } from 'react'




  const toggleUserData = (id, formData) => {
    return fetch(
      `http://localhost:8080/User-Details/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ Phone: formData.phone, Address: formData.address })
      }
    ).then((res) => res.json());
  };

const UserDetail = () => {
    const [user, setUser] = useState([]);
    const [formData, setFormData] = useState({address:user.Address, phone:user.Phone});

    const getData = () => {
        return axios.get(`http://localhost:8080/User-Details`)
    }
    useEffect(() => {
        getData().then((res) => {
            console.log(res.data[0])
            setUser(res.data[0])}); 
    }, []);  

    const handleChange = (e) => {
        const { value, name } = e.target;    
        setFormData({ ...formData, [name]: value });
      };
    const handleToggle = (id) => {
        toggleUserData(id, formData)
          .then((res) => {
            getData();
          })
          .catch((err) => {
            console.log("error")
          });
      };

    const {address, phone} = formData;
  return (
    <div>
        <Box id="main">
            <Heading id="pf">Personal Information</Heading>
            <Box id="userdetailbox1">
                <Box id="userdetailbox2">
                    <FormControl id="form">
                        <FormLabel margin="10px 0px 10px 0px">User Name</FormLabel>
                        <Input  placeholder={user.Name} disabled={true} />
                        <FormLabel margin="10px 0px 10px 0px">Email Id</FormLabel>
                        <Input type='email' placeholder={user.Email} disabled={true} />
                        <FormLabel margin="10px 0px 10px 0px">Address</FormLabel>
                        <Input placeholder={user.Address} name="address" type="text" value={address} onChange={handleChange} />
                        <FormLabel margin="10px 0px 10px 0px">Mobile</FormLabel>
                        <Input placeholder={user.Phone} type="number" name="phone" value={phone} onChange={handleChange} />
                        <Button colorScheme='teal' margin="20px 0px 10px 0px" onClick={handleToggle(user.id)}>Apply Changes</Button>
                        <FormHelperText>We'll never share your Address, Email, Phone Number.</FormHelperText>
                    </FormControl>
                    
                </Box>
                <Box id="userdetailbox3">
                    <Box w="30%">
                        <img src={user.Image} alt="Error" />
                    </Box>
                    <Box>
                        <h3>Hello,</h3>
                        <Heading size={"md"}>{user.Name}</Heading>
                    </Box>
                </Box>
            </Box>
            <br />
            <hr />
            <Box>
                <Heading margin="20px 0px 10px 0px" id="pf">FAQs</Heading>
                <Heading size={"sl"}>What happens when I update my email address (or mobile number)?</Heading>
                <Text>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</Text>

                <Heading size={"sl"}>When will my NutriBest account be updated with the new email address (or mobile number)?</Heading>
                <Text>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</Text>

                <Heading size={"sl"}>What happens to my existing NutriBest account when I update my email address (or mobile number)?</Heading>
                <Text>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</Text>

                <Heading size={"sl"}>Does my Seller account get affected when I update my email address?</Heading>
                <Text>NutriBest has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</Text>
            </Box>
            <Box>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png" width={"100%"} alt="" />
            </Box>

        </Box>
    </div>
  )
}





export default UserDetail