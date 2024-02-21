import { Box, Container, Heading, Text, Button, VStack, HStack, Image, Link, Icon, useColorModeValue, StackDivider } from "@chakra-ui/react";
import { FaYoutube, FaTwitter, FaTwitch, FaDiscord } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const colorScheme = useColorModeValue("red", "teal");

  return (
    <Container maxW="container.lg" p={5} centerContent>
      <VStack spacing={8} align="stretch" divider={<StackDivider borderColor="gray.200" />}>
        <Box bg={bgColor} borderRadius="lg" p={8} textAlign="center">
          <Heading mb={4} color="red.400">
            Welcome to My Minecraft Channel!
          </Heading>
          <Text fontSize="lg" color="black">
            Join me on my blocky adventures as we explore the vast world of Minecraft!
          </Text>
          <Image src="https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBnYW1lcGxheXxlbnwwfHx8fDE3MDg1MzA3ODV8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" mt={4} alt="Minecraft Gameplay" />
        </Box>

        <Box bg={bgColor} borderRadius="lg" p={8}>
          <Heading mb={4} color="green.500" textAlign="center">
            Latest Videos
          </Heading>
          {/* Thumbnails of latest videos would go here, for now we use placeholders */}
          <HStack justify="center" spacing={4}>
            <Image src="https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjB2aWRlbyUyMHRodW1ibmFpbHxlbnwwfHx8fDE3MDg1MzA3ODV8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" boxSize="150px" alt="Latest Video Thumbnail" />
            <Image src="https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtaW5lY3JhZnQlMjB2aWRlbyUyMHRodW1ibmFpbHxlbnwwfHx8fDE3MDg1MzA3ODV8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" boxSize="150px" alt="Latest Video Thumbnail" />
            <Image src="https://images.unsplash.com/photo-1459184070881-58235578f004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxtaW5lY3JhZnQlMjB2aWRlbyUyMHRodW1ibmFpbHxlbnwwfHx8fDE3MDg1MzA3ODV8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" boxSize="150px" alt="Latest Video Thumbnail" />
          </HStack>
        </Box>

        <Box bg={bgColor} borderRadius="lg" p={8}>
          <Heading mb={4} color="black" textAlign="center">
            Connect with Me
          </Heading>
          <HStack justifyContent="center">
            <Link href="https://youtube.com/" isExternal>
              <Button colorScheme={colorScheme} leftIcon={<Icon as={FaYoutube} />}>
                YouTube
              </Button>
            </Link>
            <Link href="https://twitter.com/" isExternal>
              <Button colorScheme="twitter" leftIcon={<Icon as={FaTwitter} />}>
                Twitter
              </Button>
            </Link>
            <Link href="https://twitch.tv/" isExternal>
              <Button colorScheme="purple" leftIcon={<Icon as={FaTwitch} />}>
                Twitch
              </Button>
            </Link>
            <Link href="https://discord.com/" isExternal>
              <Button colorScheme="blue" leftIcon={<Icon as={FaDiscord} />}>
                Discord
              </Button>
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
