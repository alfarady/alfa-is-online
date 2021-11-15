import {
  HStack, VStack, Box, Container, Divider, Center, Heading, Text, Link, Button,
} from '@chakra-ui/react';

const Home = function Home() {
  return (
    <Container maxW="container.lg">
      <VStack align="stretch" spacing="4">
        <HStack as="nav" justify="space-between" mt="4">
          <Box as="h4" fontWeight="600">Alfarady</Box>
          <HStack spacing={[2, 8]}>
            <Box as="span">About</Box>
            <Box as="span">Projects</Box>
            <Box as="span">Blogs</Box>
          </HStack>
        </HStack>
        <Divider />
        <Center py="12" flexDirection="column">
          <Heading textAlign="center">Hello, i&apos;m Alfa. 👋</Heading>
          <Text fontSize="2xl" textAlign="center">
            Currently working as a Senior Programmer at
            <br />
            <Link href="https://ngorder.id" fontWeight="500" isExternal>
              Ngorder.id
            </Link>
          </Text>
        </Center>
        <VStack align="stretch" borderRadius="lg" bg="teal.50" p="8">
          <Heading fontWeight="500">About Me</Heading>
          <Text fontSize="lg">
            I&apos;m a Software Engineer based in
            {' '}
            <b>Malang, ID</b>
            . Currently working as a Senior Programmer at
            {' '}
            <b>Ngorder.id</b>
            {' '}
            and also working on several projects.
          </Text>
          <Box align="right">
            <Button colorScheme="teal">Know me more</Button>
          </Box>
        </VStack>
        <VStack align="stretch" borderRadius="lg" bg="blue.50" p="8" spacing={4}>
          <Heading fontWeight="500">Projects</Heading>
          <VStack align="stretch" borderRadius="lg" bg="blue.800" p="4">
            <Heading fontWeight="500" color="white" fontSize="2xl">Snowball</Heading>
            <Text color="white">An enhanced RabbitMQ client for Go</Text>
            <Text color="white" fontStyle="italic">Open Source</Text>
          </VStack>
          <VStack align="stretch" borderRadius="lg" bg="blue.800" p="4">
            <Heading fontWeight="500" color="white" fontSize="2xl">Tiberius</Heading>
            <Text color="white">An advanced Microservice Pattern for Go</Text>
            <Text color="white" fontStyle="italic">Open Source</Text>
          </VStack>
          <Box align="right">
            <Button colorScheme="blue">Show all</Button>
          </Box>
        </VStack>
        <VStack align="stretch" borderRadius="lg" bg="cyan.50" p="8" spacing={4}>
          <Heading fontWeight="500">Blogs</Heading>
          <VStack align="stretch" borderRadius="lg" bg="cyan.800" p="4">
            <Heading fontWeight="500" color="white" fontSize="2xl">Introducing NestJS</Heading>
            <Text color="white" isTruncated>Node.js brought a new experience for developing applications. Javascript has become the “lingua franca” of the web for both frontend and backend applications. This has given rise to awesome project such as ExpressJS, Fastify, and other frontend/backend framework. ExpressJS is an un-opinionated framework for web backend application. Un-opinionated software design is more like PERL/PHP. It allows the developer and trusts the developer to make the right decisions and puts more control in their hands. This will cause new problems for designing architecture. When we work with many people, every developer has their own opinion to create an architecture. The result is inconsistency architecture.</Text>
            <Text color="white">07 / September / 2021</Text>
          </VStack>
          <Box align="right">
            <Button colorScheme="cyan" color="white">Show all</Button>
          </Box>
        </VStack>
      </VStack>
      <HStack justify="space-between" my="8">
        <VStack align="stretch">
          <Text>Create this website with using</Text>
          <Text>
            <b>Contentful</b>
            ,
            {' '}
            <b>Nextjs</b>
            , and
            {' '}
            <b>Chakra ui</b>
          </Text>
          <Text>
            Created by
            {' '}
            <b>Alfarady Raja Ghanie Hamid Jauhar</b>
          </Text>
        </VStack>
        <VStack align="stretch">
          <Text>Github</Text>
          <Text>LinkedIn</Text>
          <Text>Instagram</Text>
        </VStack>
      </HStack>
    </Container>
  );
};

export default Home;
