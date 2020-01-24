import React from "react";
import { View, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={styles.body}>
            <Title>First NativeBase App</Title>
          </Body>
          <Right style={styles.right}>
            <Text>Blurb</Text>
          </Right>
        </Header>
        <Content>
          <Text>This is Content Section</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Mark Allen</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    height: 80
  },
  body: {
    flex: 2,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center"
  }
});
