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
  Text,
  Card,
  CardItem
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
          <Right style={styles.right}></Right>
        </Header>
        <Content style={styles.content}>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase Card</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  This is a simple card component body text which fills out
                  information under the header included above.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Links</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="logo-googleplus"  style={{color: "red"}} />
              </Left>
              <Body>
                <Text>Google Plus</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="logo-facebook" style={{color: "blue"}} />
              </Left>
              <Body>
                <Text>Facebook</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="logo-dropbox" style={{color: "blue"}} />
              </Left>
              <Body>
                <Text>Dropbox</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="logo-pinterest" style={{color: "red"}} />
              </Left>
              <Body>
                <Text>Pinterest</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="logo-snapchat" style={{color: "yellow"}} />
              </Left>
              <Body>
                <Text>Snapchat</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab style={styles.footer}>
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
  content: {
    paddingHorizontal: 10
  },
  header: {
    paddingTop: 20,
    height: 80,
    backgroundColor: "green"
  },
  body: {
    flex: 2,
    alignItems: "center"
  },
  left: {
    flex: 1
  },
  right: {
    flex: 1
  },
  footer: {
    backgroundColor: "#696969"
  }
});
