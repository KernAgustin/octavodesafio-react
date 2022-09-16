import { Center, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Center as="footer" px="80px" py="20px" width="full" bg="#f3f3f3">
      <Text w="full" textAlign="center" fontSize='xs'>&copy; 2022 Ser Eucaristía</Text>
    </Center>
  )
}
