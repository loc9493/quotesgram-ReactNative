import { Text, StyleSheet, View } from 'react-native'

import React, { Component } from 'react'

export default class QuoteCell extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style= {styles.container}>
                <Text key={this.props.item.ID}>{this.props.item.danhngon}</Text>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
