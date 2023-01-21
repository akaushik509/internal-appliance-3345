import { VStack } from '@chakra-ui/react'
import React from 'react'
import Carditem from './Carditem'

export default function Cards({data=[],handlequantity,handleDelete}) {
  return (
    <div>
        <VStack >
            {
                data.map((el)=>el.cart?(<Carditem key={el.id} {...el} handlequantity={handlequantity} handleDelete={handleDelete} />):false)
            }

        </VStack>
    </div>
  )
}
