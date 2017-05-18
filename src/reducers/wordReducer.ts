import { MyAction, Word } from '../interfaces/interfaces'

interface wordReducer {
    wordList: Word[]
    currentWord: Word | string
}

const initState: wordReducer = {
    wordList: [],
    currentWord: ''
}

export const wordReducer = (state: wordReducer = initState, action: MyAction) => {
    switch (action.type) {
        case 'FETCHED_WORDS':
            console.log('Payload: ', action.payload.wordList)
            return {
                ...state,
                wordList: action.payload.wordList,
                currentWord: action.payload.wordList[0].words
            }
        case 'CHOOSE_NEW_WORD':
            return {
                ...state,
                currentWord: state.wordList[action.payload.wordIndex]
            }
        default:
            return state
    }
}