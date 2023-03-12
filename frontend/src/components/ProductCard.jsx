import { useState } from 'react'
import { Flex, Circle, Box, Image, Badge, Icon, Button, Tooltip, Stack, HStack, Link, Text, useColorModeValue } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'
import { Link as ReactLink } from 'react-router-dom'
import Rating from './Rating'

const ProductCard = ({ product }) => {
  return (
    <Stack p='2' spacing='3px' bg={useColorModeValue('white', 'gray.800')} minWidth='240px' h='450px' borderWidth='1px' rounded='lg' shadow='lg' position='relative'>
      {product.isNew && <Circle size='10px' position='absolute' top={2} right={2} bg='green.300' />}
      <Image src={product.image} alt={product.name} roundedTop='lg' />
      <Box flex={2} maxH='5' alignItems='baseline'>
        {product.countInStock > 0 ?
          <Badge px={2} fontSize='0.8em' colorScheme='green'>In stock: {product.countInStock}</Badge> : <Badge px={2} fontSize='0.8em' colorScheme='red'>Out of stock</Badge>
        }
        {product.isNew && (
          <Badge px={3} fontSize='0.8em' ml={1} colorScheme='green'>New</Badge>
        )}
      </Box>
      <Flex mt={1} justifyContent='space-between' alignContent='center'>
        <Link as={ReactLink} to={`/product/${product._id}`} pt={2} cursor='pointer'>
          <Box fontSize='2xl' fontWeight='semibold' lineHeight='tight'>
            {product.name}
          </Box>
        </Link>
      </Flex>
      <Flex justifyContent='space-between' alignContent='center' py='2'>
        <Rating rating={product.averageRating} numberOfReviews={product.numberOfReviews} />
      </Flex>
      <Flex justifyContent='space-between'>
        <Box fontSize='2xl' color={useColorModeValue('gray.800', 'white')}>
          <Box as='span' color='gray.900' fontSize='lg'>
            $
          </Box>
          {product.price.toFixed(2)}
        </Box>
        <Tooltip label='Add to cart' bg='white' placement='top' color='gray.800' fontSize='1.2em'>
          <Button variant='ghost' display='flex' isDisabled={product.countInStock <= 0}>
            <Icon as={FiShoppingCart} h={7} w={7} alignSelf='center' />
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  )
}

export default ProductCard