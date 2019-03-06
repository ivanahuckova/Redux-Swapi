import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CharacterList } from '../components';
import { fetchData } from '../actions';
// import actions

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.fetching) {
      return <div>Loading...</div>;
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state

function mapStateToProps(state) {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchData
    },
    dispatch
  );
}

// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListView);
