import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getStats } from '../../actions';
import TableOfStats from '../../components/TableOfStats';

const mapStateToProps = state => ({
  stats: state.stats
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getStats
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableOfStats);
