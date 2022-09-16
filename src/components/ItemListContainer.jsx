import { Center, Container, Flex, Progress, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { data } from '../mocks/mockData'
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true)
    data.then((res) => {
      if (category) {
        setItems(res.filter((item) => item.category === category));
      } else {
        setItems(res);
      }
    })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

  }, [category])

  return (
    <Container maxW="full" maxH="full" py="6rem">
      {/* Luego se puede cambiar la carga por shimmer loader */}

      {loading
        ? <Center h='20rem'><Spinner alignSelf='center' size='xl' /></Center>
        : <ItemList items={items}
        />}
    </Container>
  )
}
