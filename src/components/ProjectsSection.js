import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: 'Tenzies Game',
    description:
      "It's my React-based game that I built while learning React @ Scrimba. It's One of the world's Fastest Dice Game!",
    getImageSrc: () => require('../images/tenzies.png'),
  },
  {
    title: 'Reactive Express',
    description:
      "Reactive Express is an E-Commerce website that I built using MERN Stack (MongoDB, Express, React, Node.js). It's a full-stack application that allows users to buy and sell products.",
    getImageSrc: () => require('../images/reactivexpress.png'),
  },
  {
    title: 'Hair Day',
    description:
      'A single page web application for a hair salon to showcase their services and contact information (assigned in Meta - HTML CSS in Depth course) specifically focused on the use of HTML and CSS.',
    getImageSrc: () => require('../images/hairday.png'),
  },
  {
    title: 'Golds Gym Exercises',
    description:
      'An external API that allows users to search for a specific exercise on the basis of their body part. Built using React and Material UI. ',
    getImageSrc: () => require('../images/gymexercises.png'),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
