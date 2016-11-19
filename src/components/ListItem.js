import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <View 
          style={{ 
              paddingTop: expanded ? 8 : 0, 
              paddingLeft: 10, 
              paddingRight: 10, 
              backgroundColor: '#85C1E9' }}
        >
          <CardSection>
            <Text 
              style={{ 
                  flex: 1, 
                  marginBottom: expanded ? 8 : 0,
                  color: '#F3FFF3' }}
            >
              {library.description}
            </Text>
          </CardSection>
        </View>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    const { expanded } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(expanded ? null : id)}
      >
        <View>
          <CardSection>
            <View style={{ flex: 1, padding: 6, backgroundColor: '#1F618D' }} >
              <Text style={titleStyle}>
                {title}
              </Text>
            </View>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 4
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
