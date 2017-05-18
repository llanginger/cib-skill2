import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { Provider } from 'react-redux'
import { store } from './store'
import { words } from './database/words'
import * as a from './actions/actions'


import { BagContainer } from './components/BagContainer'
import { WordContainer } from './components/WordContainer'

export default class CibSkill2 extends Component<any, any> {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        store.dispatch(a.FETCHED_WORDS(words))
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.scoreContainer}>
                    <Text>SCORE: 0</Text>
                </View>
                <WordContainer >
                    <Text style={styles.textStyle}>I'M HAPPY</Text>
                </WordContainer>
                <BagContainer />
            </View>
        )
    }
}

class App extends Component<any, any> {
    render() {
        return (
            <Provider store={store}>
                <CibSkill2 />
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 40,
        paddingTop: 30,
        backgroundColor: '#F5FCFF',
    },
    textStyle: {
        color: 'white',
        fontSize: 30
    },
    scoreContainer: {
        flex: 1,
        backgroundColor: 'papayawhip',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

AppRegistry.registerComponent('cibSkill2', () => App)
