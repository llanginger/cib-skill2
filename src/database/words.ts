const coolWords = [
    {
        words: 'I am happy',
        cool: true
    },
    {
        words: 'Things are Good',
        cool: true
    },
    {
        words: 'I like my life',
        cool: true
    },
    {
        words: 'I like my friends',
        cool: true
    }
]

const hotWords = [
    {
        words: 'I am sad',
        cool: false
    },
    {
        words: 'I do not like school',
        cool: false
    },
    {
        words: 'Tom is stupid',
        cool: false
    },
    {
        words: 'I hate the rain',
        cool: false
    },
]

export const words = [...coolWords, ...hotWords]
