import React from 'react';
import { connect } from 'react-redux';
import Navbar from "./Navbar"
import { getChildren } from '../../action-creator/children'

class NavbarContainer extends React.Component {
    
    componentDidMount() {
        this.props.getChildren()
    }
    

    render() {
        const { children } = this.props
        return (
            <Navbar children={children}/>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getChildren: () => dispatch(getChildren()),
    };
}


function mapStateToProps(state, ownProps) {
    return {
        children: state.children
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
