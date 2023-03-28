import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Oleksandr!";
const bio1 = "React Native and Unity developer";

const LandingSection = () => (
  <FullScreenSection
    justifyContent='center'
    alignItems='center'
    isDarkBackground
    backgroundColor='#2A4365'
  >
    <VStack spacing={4}>
      <Avatar
        size='2xl'
        name='Levak'
        src='https://avatars.githubusercontent.com/u/54908213?v=4'
      />
      <Heading as='h3' size='md'>
        {greeting}
      </Heading>
      <Heading as='h2' size='2xl'>
        {bio1}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
