import { Box, Heading, Container, Text, Stack, Link, useColorModeValue } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import useTitle from '../hooks/useTitle'

const HomePage = () => {
  useTitle('Welcome to Tech Lines!')
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 6, md: 12 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Make money from <br />
            <Text as={'span'} color={'orange.400'}>
              your audience
            </Text>
          </Heading>
          <Text fontWeight={500} color={useColorModeValue('gray.700', 'gray.100')}>
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Link
              as={ReactLink}
              to='/products'
              rounded={'full'}
              px={6}
              py={3}
              fontWeight={500}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{
                bg: 'orange.500',
                color: 'black',
              }}
            >
              Shop Now!
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export default HomePage
