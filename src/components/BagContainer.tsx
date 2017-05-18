import React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'

import { Bag } from './Bag'

export const BagContainer = props => {
    return (
        <View style={styles.bagContainer} >
            <Bag
                cool={false}
            />
            <Bag cool={true} />
        </View>
    )
}
const styles = StyleSheet.create({
    bagContainer: {
        backgroundColor: 'papayawhip',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
    },
})