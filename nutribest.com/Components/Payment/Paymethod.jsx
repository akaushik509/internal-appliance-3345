import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import Payafter from './Payafter'
import Upi from './Upi'

export default function Paymethod({handleDelete}) {
  return (
    <div>
        <Tabs isFitted variant='enclosed' p='10px'>
            <TabList mb='1em'>
                <Tab  _selected={{ color: 'white', bg: 'teal.400' }}>Pay Using UPI</Tab>
                <Tab _selected={{ color: 'white', bg: 'teal.400' }}>Pay After Delivery</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Upi/>
                </TabPanel>
                <TabPanel>
                    <Payafter handleDelete={handleDelete}/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
  )
}
