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
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <View style={{ backgroundColor: 'tan' }}>
          <CardSection>
            <Text style={{ flex: 1, marginBottom: this.props.expanded ? 8 : 0 }}>
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

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(this.props.expanded ? null : id)}
        >
        <View>
          <CardSection>
            <View style={{ flex: 1, backgroundColor: '#1F618D' }} >
              <Text style={titleStyle}>
                {title}
              </Text>
            </View>
          </CardSection>
          <View style={{ paddingTop: this.props.expanded ? 5 : 0, paddingLeft: 12, paddingRight: 12 }}>
            {this.renderDescription()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
