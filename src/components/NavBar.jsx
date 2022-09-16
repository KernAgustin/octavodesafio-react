import React from 'react'
import CartWidget from './CartWidget'
import {Flex, HStack, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <Flex zIndex="1" as="header" position="fixed" px="80px" py="20px" width="full" bg="white" alignItems="flex-end" justifyContent="space-between">
                <Link to="/">
                    <Image
                        height='1.6rem'
                        objectFit='cover'
                        src= '/assets/se-logotipo-osc-2022.png'
                        alt='logotipo'
                    />
                </Link>
            <Flex alignItems="flex-end">
                <HStack color="#010224" spacing="40px">
                    <Link to="/categoria/libros">
                    <Text fontSize='sm'>Libros</Text>
                    </Link>
                    <Link to="/categoria/ebooks">
                    <Text fontSize='sm'>Ebooks</Text>
                    </Link>
                </HStack>
            </Flex>
            <CartWidget />
        </Flex>
    )
}
