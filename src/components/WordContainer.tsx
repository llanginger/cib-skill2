import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { CHOOSE_NEW_WORD } from '../actions/actions'
import Interactable from 'react-native-interactable'
import { ranNum } from '../helpers/ranNum'


const _WordContainer = props => {
    console.log('Props: ', props)
    console.log('Random number: ', ranNum(0, 5))

    const newWordIndex = () => {
        return ranNum(1, props.wordList.length)
    }
    return (
        <View style={styles.textContainer}>
            <Interactable.View
                snapPoints={[
                    { x: 0, y: -150 },
                    { x: 100, y: 150 },
                    { x: -100, y: 150 },
                ]}
                initialPosition={{ x: 0, y: -150 }}
                onSnap={(event) => {
                    console.log('Snapped to: ', event.nativeEvent.index)
                    props.newWord(newWordIndex())
                }}
            >
                <Text style={{ backgroundColor: 'white', padding: 10 }}>{props.currentWord}</Text>
            </Interactable.View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        wordList: state.wordReducer.wordList,
        currentWord: state.wordReducer.currentWord.words
    }
}

export const WordContainer = connect(mapStateToProps, { newWord: CHOOSE_NEW_WORD })(_WordContainer)


const styles = StyleSheet.create({
    textContainer: {
        flex: 5,
        backgroundColor: 'palevioletred',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60,
    },
    dummyView: {
        height: 100,
        width: 100,
        backgroundColor: 'papayawhip'
    }
})