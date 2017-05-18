import 'react-native'
import React from 'react'
import Index from './index.ios'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const tree = renderer.create(
        <Index />
    )
    expect(tree).toBeDefined()
})
