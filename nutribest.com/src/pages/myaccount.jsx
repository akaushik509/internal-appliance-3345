import MyOrder from 'Components/MyOrder';
import UserDetail from 'Components/UserDetail';
import { Box, Flex, Button, Heading, Text } from '@chakra-ui/react';

import React,{useState} from 'react';

const workflow =[
  {title:"User Details", page:<UserDetail/>},{ title:"My Orders", page:<MyOrder/>}
]

const MyAccount = () => {

  const [dataWorkflow, setDataWorkFlow] = useState(workflow[0]);
  const handleChangeWorkflow=(value)=>{
    workflow.map((el)=>{
     if(el.title===value){

        setDataWorkFlow(el)
       
     }
    })
   }

  return (
    <div>
        <Box id="avibox1" border={"1px solid red"} height="500px">
            <Flex w={"80%"} border="1 px solid black" margin={"auto"} gap="30px">
                <img src="https://i.ibb.co/hRcRVbR/logo.jpg" width={"120px"} height={"30px"} style={{padding:"-30px"}}/>
                <Button>Home</Button> 
                <Button>Go Back</Button>      
            </Flex>
            <Box>
              <Heading>Accounts</Heading>
            </Box>
            <Box>
              <Box>
                <Flex>
                  {
                    workflow.map((el) => {
                      return (
                          <Button id="btnwork"
                          onClick={()=>{handleChangeWorkflow(el.title)}}
                          borderBottom={
                              dataWorkflow.title === el.title ? "4px solid #5034ff" : ""
                          }
                          
                          width="100%"
                          height="100%"
                          color="grey"
                          p="15px"
                          
                          bg="white"
                          >
                          <Text>{el.title}</Text>
                          </Button>
                      );
                      })
                  }
                </Flex>
              </Box>
              <Box>
                {
                  dataWorkflow.title=="User Details" ? dataWorkflow.page : dataWorkflow.page
                }
              </Box>
            </Box>
        </Box>
    </div>
  )
}

export default MyAccount