import { Button, Container, Divider, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useCart } from '../context/CartContext';
import ItemCount from './ItemCount';

export default function ItemDetail({ itemDetail }) {

  const { name, description, category, price, stock, imgUrl, id } = itemDetail;
  const [count, setCount] = useState(1);
  const [comprar, setComprar] = useState(false);
  const {addItem} = useCart()

  const onAdd = () => {
    /* SE DEFINE LA COMPRA Y SE AGREGAN LOS PRODUCTOS AL CARRITO */
    let purchase ={
      id,
      name,
      price,
      stock,
      imgUrl,
      quantity: count,
    }
    addItem(purchase)
    setComprar(true);
  }

  return (
    <Container maxW={"full"} py={"4px"} my={"1rem"} >
      <HStack mx="4rem">
        <Image
          height='600px'
          objectFit='cover'
          src={imgUrl}
        />
        <VStack alignItems="start">
          <HStack alignItems="start" justifyContent="space-between" w="100%">
            <VStack alignItems="start">
              <Heading as='h1' size='md'>{name}</Heading>
              <Heading as='h2' size='xs' color={"blackAlpha.500"} my={"6px"}>{category}</Heading>
            </VStack>
            <Heading color="blackAlpha.800" fontWeight="normal" size='md'>$ {price}</Heading>
          </HStack>
          <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount} />
          <Divider />
          <Heading color="blackAlpha.500" size='dm'>Descripción</Heading>
          <Text>{description}</Text>
        </VStack>
      </HStack>
    </Container>
  )
}
