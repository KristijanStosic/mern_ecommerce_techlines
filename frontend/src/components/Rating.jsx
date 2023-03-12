import { useState } from 'react'
import { Flex, HStack, Text } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'


const Rating = ({ rating, numberOfReviews }) => {
    const { iconSize } = useState('16px');
    return (
      <Flex>
        <HStack spacing='2px'>
        <StarIcon size={iconSize} w='14px' color='orange.500' />
        <StarIcon size={iconSize} w='14px' color={rating >= 2 ? 'orange.500' : 'gray.200'} />
        <StarIcon size={iconSize} w='14px' color={rating >= 3 ? 'orange.500' : 'gray.200'} />
        <StarIcon size={iconSize} w='14px' color={rating >= 4 ? 'orange.500' : 'gray.200'} />
        <StarIcon size={iconSize} w='14px' color={rating >= 5 ? 'orange.500' : 'gray.200'} />
        </HStack>
        <Text fontSize='md' fontWeight='bold' ml='4px'>
          {`${numberOfReviews} ${numberOfReviews === 1 ? 'Review' : 'Reviews'}`}
        </Text>
      </Flex>
    );
  }

export default Rating