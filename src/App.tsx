import { useState } from "react";
import {
  Text,
  Avatar,
  Button,
  Center,
  ColorScheme,
  ColorSchemeProvider,
  Container,
  Group,
  MantineProvider,
  Stack,
  Switch,
  Title,
  useMantineTheme,
  Tooltip,
  Anchor,
  Code,
  SimpleGrid,
} from "@mantine/core";
import {
  IconSun,
  IconMoonStars,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandMedium,
  IconBrandGithub,
  IconCalendarEvent,
  IconMail,
} from "@tabler/icons";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const theme = useMantineTheme();

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Group position="right" mr={20}>
          <Switch
            checked={colorScheme === "dark"}
            onChange={() => toggleColorScheme()}
            size="lg"
            onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
            offLabel={
              <IconMoonStars
                color={theme.colors.gray[6]}
                size={20}
                stroke={1.5}
              />
            }
          />
        </Group>
        <Container
          sx={{
            margin: "0px auto",
          }}
        >
          <Center>
            <Stack>
              <Avatar
                color="cyan"
                radius="xl"
                size="xl"
                variant="outline"
                sx={{ margin: "auto" }}
              >
                APS
              </Avatar>
              <Title sx={{ margin: "auto" }} order={1}>
                Aman Pratap Singh
              </Title>
              <Text mt="md">
                👋 Hello there! I am currently working at Amazon in Seller
                Fulfillment Tech org as a{" "}
                <Tooltip inline label="Software Development Engineer">
                  <Code>SDE-2</Code>
                </Tooltip>
                . At work, on a typical day, I mostly work on developing /
                maintaining microservices (using internal frameworks and
                serverless AWS technologies), Code and Design Reviews and
                Operational Excellence (oncalls 🚨).
              </Text>
              <Text>
                {" "}
                I graduated from{" "}
                <Anchor
                  href="https://www.iitbbs.ac.in"
                  target="_blank"
                  underline
                  variant="text"
                >
                  Indian Institute of Technology, Bhubaneswar
                </Anchor>{" "}
                with a B.Tech degree in Computer Science and Engineering in
                2020. I successfully completed a project for CERN-HSF on{" "}
                <Anchor
                  href="https://summerofcode.withgoogle.com/archive/2018/projects/4671150864990208"
                  target="_blank"
                  underline
                  variant="text"
                >
                  Large Scale Batch Computing Orchestration and Visualization
                  through Jupyter Notebook
                </Anchor>{" "}
                as a Google Summer of Code student in 2018. During college, I
                along with my amazing team, participated and won at{" "}
                <Anchor
                  href="https://www.sih.gov.in/"
                  target="_blank"
                  underline
                  variant="text"
                >
                  Smart India Hackathon
                </Anchor>
                {"(first prize) "}
                and Inter IIT Tech Meet(third prize).
              </Text>
              <Text>
                I am interested in distributed systems and serverless
                technologies. Recently, I am also learning Rust, TypeScript,
                React and few other frontend things. I like playing badminton,
                bikeriding and watching cricket in my leisure time. I am also
                training to complete C25K challenge and want to participate in a
                marathon someday. My hometown is at a town called Shikohabad
                which is near Agra in Uttar Pradesh. However, I currently live
                and work at Bangalore, Karnataka. For more, you may follow me on
              </Text>
              <SimpleGrid
                cols={6}
                breakpoints={[
                  { maxWidth: 980, cols: 3, spacing: "md" },
                  { maxWidth: 755, cols: 2, spacing: "sm" },
                  { maxWidth: 600, cols: 1, spacing: "sm" },
                ]}
              >
                <Button
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/apsknight_"
                  variant="default"
                  leftIcon={<IconBrandTwitter />}
                >
                  Twitter
                </Button>
                <Button
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/apsknight"
                  variant="default"
                  leftIcon={<IconBrandGithub />}
                >
                  GitHub
                </Button>
                <Button
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/amanprsingh/"
                  variant="default"
                  leftIcon={<IconBrandLinkedin />}
                >
                  Linkedin
                </Button>
                <Button
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/@amanpratapsingh"
                  variant="default"
                  leftIcon={<IconBrandMedium />}
                >
                  Medium
                </Button>
                <Button
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:amanpratapsingh@outlook.com"
                  variant="default"
                  leftIcon={<IconMail />}
                >
                  Email me!
                </Button>
                <Button
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://calendly.com/amanpratapsingh/30min"
                  variant="default"
                  leftIcon={<IconCalendarEvent />}
                >
                  Calendly
                </Button>
              </SimpleGrid>
            </Stack>
          </Center>
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
