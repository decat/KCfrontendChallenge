import React from 'react';
import { connect } from 'react-redux';
import { getUsage } from '../../action-creator/usage'
import Usage from './usage'

class UsageContainer extends React.Component {
    

    componentDidMount() {
        this.props.getUsage()
    }
    

    render() {
        const { usage } = this.props
        return (
            <div>
                <h1>Display usage </h1>
                <Usage usage={usage} />
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getUsage: () => dispatch(getUsage()),
    };
}

function mapStateToProps(state, ownProps) {
    return {
        usage: state.usage
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(UsageContainer);
