import { MyAction } from '../interfaces/interfaces'

export interface scoreReducer {
    currentScore: number
}

const initState: scoreReducer = {
    currentScore: 0
}

export const scoreReducer = (state: scoreReducer = initState, action: MyAction) => {
    switch (action.type) {
        case 'INCREMENT_SCORE':
            return { ...state, currentScore: ++state.currentScore }
        case 'DECREMENT_SCORE':
            return { ...state, currentScore: --state.currentScore }
        default:
            return state
    }
}