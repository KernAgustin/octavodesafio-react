import { Container, Heading, HStack, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Item from './Item'

export default function ItemList({ items }) {

  console.log(items)
  return (
    <SimpleGrid columns={3} spacing={10}>
      
      {items.map((item) => (<Item key={item.id} item={item} />))}
      </SimpleGrid>
  )
}
