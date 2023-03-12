import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import useTitle from '../hooks/useTitle'

const RegisterPage = () => {
  useTitle('Register Page')
  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Box
        borderWidth='1px'
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
      >
        <Stack spacing={4}>
          <Heading fontSize={'4xl'} alignSelf='center'>
            REGISTER
          </Heading>
          <FormControl id='name'>
            <FormLabel>Name</FormLabel>
            <Input type='name' />
          </FormControl>
          <FormControl id='email'>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>Password</FormLabel>
            <Input type='password' />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              alignItems={'end'}
              justifyContent='center'
            >
              <Text as={'span'}>Already have an account?</Text>
              <Link as={ReactLink} to='/login' color={'orange.400'}>
                Login Now
              </Link>
            </Stack>
            <Button
              bg={'orange.500'}
              color={'white'}
              _hover={{
                bg: 'orange.400',
              }}
            >
              REGISTER
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}

export default RegisterPage
