
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
  MenuButton,
  MenuDivider,
  Menu,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { CgProfile } from 'react-icons/cg';
import { MdLocalShipping, MdLogout, MdOutlineAdminPanelSettings } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi'
import { GiTechnoHeart } from 'react-icons/gi';

const ShoppingCartIcon = () => {
  return (
    <Flex>
      <Text as='sub' fontSize='xs'>
        2
      </Text>
      <Icon ml='-1.5' as={FiShoppingCart} h='4' w='7' alignSelf='center' />
      Cart
    </Flex>
  )
}

const links = [
  { linkName: 'Products', path: '/products' },
  { linkName: <ShoppingCartIcon />, path: '/cart' },
];

const NavLink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    rounded='md'
    _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}>
    {children}
  </Link>
)

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={24} alignItems='center' justifyContent='space-between'>
        <IconButton size='md' icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
        <HStack>
          <Link as={ReactLink} to='/'>
            <Flex alignItems='center'>
              <Icon as={GiTechnoHeart} h={6} w={6} color='orange.400' />
              <Text fontWeight='extrabold'>Tech Lines</Text>
            </Flex>
          </Link>
          <HStack as='nav' spacing={4} display={{ base: 'none', md: 'flex' }}>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems='center'>
          <Icon
            cursor='pointer'
            mr={3}
            as={colorMode === 'light' ? MoonIcon : SunIcon}
            alignSelf='center'
            onClick={() => toggleColorMode()}
          />
            <Menu>
              <MenuButton px='4' py='2' transition='all 0.5s' as={Button}>
                Kristijan Stosic <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem as={ReactLink} to='/profile'>
                  <CgProfile />
                  <Text ml='2'>Profile</Text>
                </MenuItem>
                <MenuItem as={ReactLink} to='/my-orders'>
                  <MdLocalShipping />
                  <Text ml='2'>My Orders</Text>
                </MenuItem>
                  <>
                    <MenuDivider />
                    <MenuItem as={ReactLink} to={'/admin-console'}>
                      <MdOutlineAdminPanelSettings />
                      <Text ml='2'>Admin Console</Text>
                    </MenuItem>
                  </>
                <MenuDivider />
                <MenuItem>
                  <MdLogout />
                  <Text ml='2'>Logout</Text>
                </MenuItem>
              </MenuList>
            </Menu>
            <>
            <Button
                as={ReactLink}
                to='/login'
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize='sm'
                fontWeight={600}
                _hover={{ bg: 'orange.400' }}
                bg='orange.500'
                color='white'
                m={2}
                >
                Login
              </Button>
              <Button
                as={ReactLink}
                to='/register'
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize='sm'
                fontWeight={600}
                _hover={{ bg: 'orange.400' }}
                bg='orange.500'
                color='white'
                m={2}
                >
                Register
              </Button>
            </>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as='nav' spacing={4}>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
            <NavLink key='register' path='/register'>
              Register
            </NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Header