// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  pull_request: require('../assets/pull-request.png'),
  git_tree: require('../assets/git-tree.png'),
  react: require('../assets/react_logo.png'),
  docker: require('../assets/docker_logo.png'),
  angular: require('../assets/angular_logo.png')
};

preloader(images);

const theme = createTheme({
  primary: "#3498db"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
            <Slide>
                <Heading size={1}>Software Livre</Heading>
                <Heading size={2}>Além da Filosofia</Heading>
                <Text textSize="2em" margin="20px 0px 0px" bold>Átila Camurça</Text>
            </Slide>
            <Slide>
                <Heading size={1} fit lineHeight={1.5}>Aprenda Informática</Heading>

                <Heading size={4}>&gt; Informática != Informágica</Heading>
                <Heading size={4}>&gt; Não aprenda a ferramenta, aprenda o conceito</Heading>
            </Slide>
            <Slide>
                <Appear fid="1">
                    <Heading size={1} fit lineHeight={1.5}>Iniciar uma Empresa</Heading>
                </Appear>
                <Appear fid="2">
                    <Heading size={4}>
                        Custo inicial com software = R$ 0,00
                    </Heading>
                </Appear>
                <Appear fid="2">
                    <Heading size={4}>
                        Desenvolvimento de sistemas web: Nginx, PHP, PostgreSQL
                    </Heading>
                </Appear>
            </Slide>
            <Slide>
                <Heading size={1} fit lineHeight={1.5}>Mercado de Trabalho</Heading>
                <Heading size={4}>
                    Praticamente toda empresa usa
                </Heading>
            </Slide>
            <Slide>
                <Heading size={1} lineHeight={1.5}>Software Livre saindo das Empresas</Heading>
            </Slide>
            <Slide bgColor="#2c3e50">
                <Layout>
                    <Fill>
                        <Image src={images.react.replace("/", "")} />
                        <Heading size={4} textColor="white">
                            React, React Native do Facebook
                        </Heading>
                    </Fill>
                    <Fill>
                        <Image src={images.docker.replace("/", "")} />
                        <Heading size={4} textColor="white">
                            Docker da Docker inc.
                        </Heading>
                    </Fill>
                    <Fill>
                        <Image src={images.angular.replace("/", "")} />
                        <Heading size={4} textColor="white">
                            Angular do Google
                        </Heading>
                    </Fill>
                </Layout>
            </Slide>
            <Slide>
                <Layout>
                    <Fill>
                        <Heading size={4}>
                            Bootstrap do Twitter
                        </Heading>
                    </Fill>
                    <Fill>
                        <Heading size={4}>
                            Swift da Apple
                        </Heading>
                    </Fill>
                    <Fill>
                        <Heading size={4}>
                            Atom do GitHub
                        </Heading>
                    </Fill>
                </Layout>
            </Slide>
            <Slide>
                <Heading size={1} lineHeight={1.5}>Contribuir com Software Livre</Heading>
            </Slide>
            <Slide>
                <Heading size={1}>
                    Git - Linus Torvalds
                </Heading>
                <Heading size={2}>
                    GitHub, Bitbucket
                </Heading>
            </Slide>
            <Slide>
                <Heading size={1} lineHeight={1.5}>Pull Request</Heading>
                <Image src={images.pull_request.replace("/", "")} margin="10px auto 40px" height="300"/>
                <Text fit>1. Branch, 2. Commits, 3. Pull Request, 4. Discuss, 5. Deploy, 6. Merge</Text>
            </Slide>
            <Slide>
                <Heading size={1} lineHeight={1.5}>Grafos e Git</Heading>
                <Layout>
                    <Fill>
                        <Heading size={4} margin={10}>
                            Git is implemented as a directed acyclic graph.
                        </Heading>
                    </Fill>
                    <Fill>
                        <Image src={images.git_tree.replace("/", "")} margin="10px auto 40px" height="400"/>
                    </Fill>
                </Layout>
            </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

/**
 * Software Livre no mercado de trabalho
 * Iniciar uma empresa
 * Aprender informática
 * Empresas estão apostando em SL
 * Facilidade em contribuir aumentou
 */
