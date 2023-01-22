import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import ChatBot from 'react-simple-chatbot';
 
const steps = [

    {

      id: "Greet",

      message: "Welcome to HealthKart. How can I help you today?",

      trigger: "Done",

    },

    {

      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",

    },

    {

      id: "waiting1",

      user: true,

      trigger: "Name",

    },

    {

      id: "Name",

      message: "Hi {previousValue}, Please select your issue",

      trigger: "issues",

    },

    {

      id: "issues",

      options: [

        {
          value: "Ordering Products",
          label: "Ordering Products",
          trigger: "Ordering Products",
        },

        { 
            value: "Want to return a Product",
            label: "Want to return a Product",
            trigger: "Want to return a Product" 
            },
      ],
    },
    {
      id: "Ordering Products",
      message:"Thanks for letting your Ordering Products issue, Our team will resolve your issue ASAP",
      end: true,
    },
    {
      id: "Want to return a Product",
      message:"Thanks for letting your product issue, Our team will help you to return the Product",
      end: true,
    },
  ]; 


const Chat = () => {
  return (  
    <Flex width="100%"   >
      {/* marginTop="15px" justifyContent='center'*/}
        <ChatBot steps={steps} />
    </Flex>
  )
}

export default Chat