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
    angular: require('../assets/angular_logo.png'),
    bootstrap: require('../assets/bootstrap_logo.png'),
    swift: require('../assets/swift_logo.png'),
    atom: require('../assets/atom_logo.png'),
    git: require('../assets/git_logo.png'),
    circuit_board: require('../assets/circuit-board.jpg')
};

preloader(images);

const theme = createTheme({primary: "#3498db"});

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
                    <Slide bgImage={images.circuit_board.replace("/", "")} bgDarken={0.6}>
                        <Heading size={1} fit lineHeight={1.5}>Aprenda Informática</Heading>


                        <Heading size={4} textColor="#FFEB3B">&gt; Não aprenda a ferramenta, aprenda o conceito</Heading>
                    </Slide>
                    <Slide bgColor='#4CAF50'>
                        <Heading size={1} textColor='#3E2723' fit>Informática &#8800; Informágica</Heading>
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
                                <Image src={images.react.replace("/", "")}/>
                                <Heading size={5} textColor="white">
                                    React, React Native do Facebook
                                </Heading>
                                <Text textSize="1em" textColor="white">Modified BSD license</Text>
                            </Fill>
                            <Fill>
                                <Image src={images.docker.replace("/", "")}/>
                                <Heading size={5} textColor="white">
                                    Docker da Docker inc.
                                </Heading>
                                <Text textSize="1em" textColor="white">Apache License v2</Text>
                            </Fill>
                            <Fill>
                                <Image src={images.angular.replace("/", "")}/>
                                <Heading size={5} textColor="white">
                                    Angular do Google
                                </Heading>
                                <Text textSize="1em" textColor="white">MIT License</Text>
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide bgColor="#2c3e50">
                        <Layout>
                            <Fill>
                                <Image src={images.bootstrap.replace("/", "")}/>
                                <Heading size={5} textColor="white">
                                    Bootstrap do Twitter
                                </Heading>
                                <Text textSize="1em" textColor="white">MIT License</Text>
                            </Fill>
                            <Fill>
                                <Image src={images.swift.replace("/", "")}/>
                                <Heading size={5} textColor="white">
                                    Swift da Apple
                                </Heading>
                                <Text textSize="1em" textColor="white">Apache License v2</Text>
                            </Fill>
                            <Fill>
                                <Image src={images.atom.replace("/", "")}/>
                                <Heading size={5} textColor="white">
                                    Atom do GitHub
                                </Heading>
                                <Text textSize="1em" textColor="white">MIT License</Text>
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide>
                        <Heading size={1} lineHeight={1.5}>Contribuir com Software Livre</Heading>
                    </Slide>
                    <Slide bgColor="#F5F5F5">
                        <Image src={images.git.replace("/", "")}/>
                        <Heading size={1} textColor="#F03C2E">
                            Linus Torvalds
                        </Heading>
                        <Text>mesmo criador do Linux</Text>
                    </Slide>
                    <Slide>
                        <Heading size={1} lineHeight={1.5}>Pull Request</Heading>
                        <Image src={images.pull_request.replace("/", "")} margin="10px auto 40px" height="300"/>
                        <Text fit>1. Branch, 2. Commits, 3. Pull Request, 4. Discuss, 5. Deploy, 6. Merge</Text>
                    </Slide>
                    <Slide>
                        <Heading size={1} fit lineHeight={1.5}>Obrigado pela atenção!</Heading>
                        <Heading size={2}>Átila Camurça</Heading>
                        <Heading size={2}>@atilacamurca</Heading>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
