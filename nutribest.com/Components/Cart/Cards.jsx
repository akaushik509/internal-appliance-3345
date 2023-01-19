import { VStack } from '@chakra-ui/react'
import React from 'react'
import Carditem from './Carditem'

export default function Cards({data=[]}) {
  return (
    <div>
        <VStack>
            {
                data.map((el)=>(<Carditem {...el}/>))
            }

        </VStack>
    </div>
  )
}
