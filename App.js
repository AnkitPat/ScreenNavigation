import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class App extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Chat')}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: { screen: App },
    Chat: { screen: ChatScreen },
});

export default SimpleApp;