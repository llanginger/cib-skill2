import { MyAction, Word } from '../interfaces/interfaces'

export const FETCHED_WORDS: (wordList: Word[]) => MyAction = (wordList: Word[]) => {
    return {
        type: 'FETCHED_WORDS',
        payload: {
            wordList
        }
    }
}

export const CHOOSE_NEW_WORD: (wordIndex: number) => MyAction = (wordIndex: number) => {
    return {
        type: 'CHOOSE_NEW_WORD',
        payload: {
            wordIndex
        }
    }
}

export const INCREMENT_COUNTER: () => MyAction = () => {
    return {
        type: 'INCREMENT_COUNTER'
    }
}

export const DECREMENT_COUNTER: () => MyAction = () => {
    return {
        type: 'DECREMENT_COUNTER'
    }
}