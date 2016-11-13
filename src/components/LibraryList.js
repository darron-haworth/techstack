import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.libraries[0].title}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({ libraries: state.libraries });
export default connect(mapStateToProps)(LibraryList);
