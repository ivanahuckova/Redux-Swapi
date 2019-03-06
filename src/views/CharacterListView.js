import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CharacterList } from '../components';
import { fetchData } from '../actions/index';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.fetching) {
      return <div>Loading...</div>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters,
    fetching: state.fetching,
    error: state.error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch);
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListView);
