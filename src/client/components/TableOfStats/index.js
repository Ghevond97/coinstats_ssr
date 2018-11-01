import React, { Component } from 'react';

class TableOfStats extends Component {
  componentDidMount() {
    const { getStats } = this.props;
    getStats();
  }
  render() {
    const { stats } = this.props;
    
    
    return stats.length === 0 ? (
      <h1> Loadng!!</h1>
    ) : (
      <div>
        { stats.map(el => <h1>{el.name}</h1>)}
      </div>
    );
  }
}

export default TableOfStats;
