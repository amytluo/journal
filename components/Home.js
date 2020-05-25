import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import Entry from './Entry.js';
import EntryScreen from './EntryScreen.js'

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerShown: false,
    };

    state = {
        entryArray: [],
    }

    receivedValue = (value) => {
        this.setState({value})
    }

    render() {
        const { navigate } = this.props.navigation;


        let entries = this.state.entryArray.map((val, key) => {
            return <Entry key={key} keyval={key} val={val}
                deleteMethod={() => this.deleteEntry(key)} />
        });


        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> JOURNAL </Text>
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('EntryScreen', {
                    entryArray: this.state.entryArray,
                    receivedValue: this.receivedValue
                })} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>

                <ScrollView style={styles.scrollContainer}>
                    {entries}
                </ScrollView>
            </View>
        );
    }

    deleteEntry(key) {
        this.state.entryArray.splice(key, 1);
        this.setState({ entryArray: this.state.entryArray })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#97D3BF',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderBottomColor: '#AECCC2',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 20,
        backgroundColor: '#97D3BF',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
});
