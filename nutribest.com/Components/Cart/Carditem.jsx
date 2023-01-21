import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, Image,CardBody, CardFooter, Heading, Stack, Text, Card, Box, HStack, TagLabel, VStack } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'

export default function Carditem({id,img,name,price,handlequantity,quantity,handleDelete }) {
    
    const [amount,setPrice] = useState(price)
//    console.log(handlequantity)
//    console.log('quantity ',quantity )
   
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

            <Stack w='99%' m='auto'>
                <VStack border='0px' alignItems={'left'} >
                <Heading size='md'>The perfect latte</Heading>

                <Text py='2'>
                    {name}
                </Text>

                <Text>₹{price*quantity}</Text>
                </VStack>

                <Stack border='0px' direction={{ base: 'column', sm: 'row' }} p='5px'  justifyContent={'space-between'} alignItems={'center'}>
                    <Box border='0px' >
                        <Button size='sm' colorScheme={'teal'} variant='outline' isDisabled={quantity==1} onClick={()=>{handlequantity(id,-1)}}>
                            <MinusIcon/>
                        </Button>
                        <Button m='10px' size='sm'>{quantity}</Button>
                        <Button size='sm' colorScheme={'teal'} variant='outline' isDisabled={quantity==5} onClick={()=>{handlequantity(id,1)}}>
                            <AddIcon/>
                        </Button>
                    </Box>
                    <Box>
                        <Button variant='solid' size='sm' p='20px' colorScheme='red' onClick={()=>{handleDelete(id)}}>
                            Remove
                        </Button>
                    </Box>

                </Stack>
            </Stack>
        </Card>
    </div>
  )
}
