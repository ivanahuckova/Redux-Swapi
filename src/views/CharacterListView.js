import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
import { fetchData } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return <div />;
    // if (this.props.fetching) {
    //   // return something here to indicate that you are fetching data
    // }
    // return (
    //   <div className="CharactersList_wrapper">
    //     <CharacterList characters={this.props.characters} />
    //   </div>
    // );
  }
}

// our mapStateToProps needs to have two properties inherited from state

function mapStateToProps(state) {
  return {
    characters: state.characters,
    fetching: state.fetching,
    error: state.error
  };
}

// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchData
  }
)(CharacterListView);
