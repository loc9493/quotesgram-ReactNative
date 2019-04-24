import { Text, StyleSheet, View } from 'react-native'

import React, { Component } from 'react'

export default class QuoteCell extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style= {styles.container}>
                <Text style={styles.danhngon} key={this.props.item.ID}>{this.props.item.danhngon}</Text>
                <Text style={styles.tacgia}>{this.props.item.tacgia}</Text>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#1f1f1f',
        paddingBottom: 5
    },
    danhngon: {
        color: '#ffffff'
    },
    tacgia: {
        textAlign: 'center',
        color: '#ffffff',
        marginTop: 10
    }
})
