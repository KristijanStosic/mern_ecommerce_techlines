import { Container, Heading, Stack, Text, Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <Container maxW={'3xl'}>
      <Stack
        textAlign='center'
        align='center'
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
          lineHeight={'110%'}
        ></Heading>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          <Text as={'span'}>Page not found!</Text>
        </Heading>
        <Stack spacing={6} direction={'row'}>
          <Link
            as={ReactLink}
            to='/'
            rounded={'full'}
            px={6}
            py={3}
            fontWeight={500}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{
              bg: 'orange.500',
              color: 'black'
            }}
          >
            Go Home
          </Link>
        </Stack>
      </Stack>
    </Container>
  )
}

export default NotFoundPage
