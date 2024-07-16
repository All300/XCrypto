import { Button, HStack, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
// import { useColorMode } from '@chakra-ui/react'

function Header() {
  const {colorMode} = useColorMode()
  return (
    <HStack p={"4"} spacing={"4"} shadow={"base"} bgColor={colorMode === "light"? "blackAlpha.900" : "skyblue"}>
        <Button variant={"unstyled"} color={colorMode === "light"?"white":"black"}>
            <Link to="/">Home</Link>
        </Button>
        <Button variant={"unstyled"} color={colorMode === "light"?"white":"black"}>
            <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={colorMode === "light"?"white":"black"}>
            <Link to="/coins">Coins</Link>
        </Button>
    </HStack>
  )
}

export default Header
