import React from 'react'
import {
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native'

interface BagProps {
    cool: boolean
}

export const Bag = (props: BagProps) => {
    return (
        <TouchableHighlight
            onPress={() => console.log('Touched' + (props.cool ? ' good ' : ' bad ') + 'bag')}
        >
            <Image
                resizeMode={'contain'}
                style={styles.image}
                source={props.cool ? require('../elements/cool.png') : require('../elements/hot.png')}
            />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 90
    }
})