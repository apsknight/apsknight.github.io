import { useState } from "react";
import {
  Text,
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
  IconMail,
} from "@tabler/icons";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
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
            margin: "60px auto",
          }}
        >
          <Center>
            <Stack>
              {/* <Avatar
                color="cyan"
                radius="xl"
                size="xl"
                variant="outline"
                sx={{ margin: "auto" }}
              >
                APS
              </Avatar> */}
              <Title sx={{ margin: "auto" }} order={1}>
                Aman Pratap Singh
              </Title>
              <Text mt="md">
                👋 Hello there! Welcome to my personal space on Internet! My
                name is Aman and I work at Amazon in the Seller Fulfillment Tech
                org as a{" "}
                <Tooltip inline label="Software Development Engineer">
                  <Code>SDE-2</Code>
                </Tooltip>
                . I joined Amazon in July 2020 as a SDE-1 and was later promoted
                to this role. In my day-to-day work, I focus on developing and
                maintaining microservices using internal frameworks and
                serverless AWS technologies, participating in code and design
                reviews, and working on operational excellence tasks such as
                on-call duty 🚨.
              </Text>
              <Text>
                {" "}
                I graduated from the{" "}
                <Anchor
                  href="https://www.iitbbs.ac.in"
                  target="_blank"
                  underline
                  variant="text"
                >
                  Indian Institute of Technology, Bhubaneswar
                </Anchor>{" "}
                in 2020 with a B.Tech in Computer Science and Engineering.
                During my time in college, I was fortunate to participate in a
                number of exciting projects and competitions. One of my most
                notable experiences was being selected as a Google Summer of
                Code student in 2018 and working on a project for CERN-HSF on{" "}
                <Anchor
                  href="https://summerofcode.withgoogle.com/archive/2018/projects/4671150864990208"
                  target="_blank"
                  underline
                  variant="text"
                >
                  Large Scale Batch Computing Orchestration and Visualization
                  through Jupyter Notebook
                </Anchor>
                . Additionally, I and{" "}
                <Anchor
                  href="https://twitter.com/apsknight_/status/1102099261716520960?s=20"
                  target="_blank"
                  underline
                  variant="text"
                >
                  my team
                </Anchor>{" "}
                participated in and won the Smart India Hackathon (first prize)
                and the Inter IIT Tech Meet (third prize).
              </Text>
              <Text>
                My interests lie primarily in the areas of distributed systems
                and serverless technologies. I am also currently working on
                learning Rust, TypeScript, React and other frontend
                technologies. In my spare time, I enjoy playing badminton, going
                on bike rides and watching cricket. I am also training to
                complete the C25K challenge with the goal of participating in a
                marathon someday. I am originally from Shikohabad, a town near
                Agra in Uttar Pradesh, but currently live and work in Bangalore,
                Karnataka. For more, you may follow me on
              </Text>
              <SimpleGrid
                cols={5}
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
              </SimpleGrid>
            </Stack>
          </Center>
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
