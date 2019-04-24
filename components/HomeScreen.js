import React from 'react'
import { Button, FlatList, Text, StyleSheet } from 'react-native'
import QuoteCell from './QuoteCell'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [], error: false,
            hasMore: true,
            isLoading: false,
            page: 0
        }
    }
    static navigationOptions = {
        title: 'Quotesgram',
        headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
    };

    fetchQuotes() {
        var url = 'https://lit-sierra-45961.herokuapp.com/quote?page=' + this.state.page
        console.log('Request: ' + url)
        fetch(url)
            .then(result => {
                return result.json()
            }).then(data => {
                console.log("Quotes1 " + data)

                this.setState({ list: [...this.state.list, ...data] })
            })
    }

    componentDidMount() {
        this.fetchQuotes()
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <FlatList
                style={styles.container}
                data={this.state.list}
                keyExtractor={(item) => item.ID.toString()}
                renderItem={({ item }) => <QuoteCell item={item} key={item.ID}></QuoteCell>}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000"
    }
  })