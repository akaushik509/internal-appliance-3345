import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, Image,CardBody, CardFooter, Heading, Stack, Text, Card, Box, HStack, TagLabel, VStack } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'

export default function Carditem({id,img,name,price}) {
    const [count,setCount] = useState(1)
    const [amount,setPrice] = useState(price)
   
  
   
  return (
    <div>
        <Card
        direction={{ base: 'column', sm: 'row' }}
        // overflow='hidden'
        // variant='outline'
        p='20px'
        gap={'30px'}
        
        
        > 
            <Box w='25%'m='auto'>

                <Image
                    objectFit='cover'
                    
                    w='100%'
                    src={img}
                    alt='Caffe Latte'
                />
            </Box>

            <Stack w='90%' m='auto'>
                <VStack border='0px' alignItems={'left'} >
                <Heading size='md'>The perfect latte</Heading>

                <Text py='2'>
                    {name}
                </Text>

                <Text>₹{price*count}</Text>
                </VStack>

                <HStack border='0px' p='5px' justifyContent={'space-between'}>
                    <Box>
                        <Button size='sm' isDisabled={count==1} onClick={()=>{setCount(count-1)}}>
                            <MinusIcon/>
                        </Button>
                        <Button size='sm'>{count}</Button>
                        <Button size='sm'isDisabled={count==5} onClick={()=>{setCount(count+1)}}>
                            <AddIcon/>
                        </Button>
                    </Box>
                    <Box>
                        <Button variant='solid' size='sm' colorScheme='red'>
                            Remove
                        </Button>
                    </Box>

                </HStack>
            </Stack>
        </Card>
    </div>
  )
}
