import { Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../mocks/mockData';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

  const [itemDetail, setItemDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    data.then((res) => {
      setItemDetail(res.find((item) => item.id === JSON.parse(id)))
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));

  }, [])

  return (
    <Container maxW={"full"} py="1rem">
      {loading ? 'cargando detalle del producto...' : <ItemDetail itemDetail={itemDetail}/>}
    </Container>
  )
}
