import { Button, HStack, Image} from "@chakra-ui/react"

import logo from '../../../assets/logo.webp'
import { ColorModeButton } from "@/components/ui/color-mode"

const Nav = () => {
    return (
        <HStack justifyContent="space-between">
            <Image src={logo} boxSize="60px" />
            <HStack gap="10px">
            <ColorModeButton />
            <Button>Click Me</Button>
            </HStack>
            
        </HStack>
    )
}

export default Nav