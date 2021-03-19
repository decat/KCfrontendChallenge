import React from 'react';
import { connect } from 'react-redux';
import { getChildren } from '../../action-creator/children'
import { getProducts } from '../../action-creator/products'
import Children from './children'

class ChildrenContainer extends React.Component {
  

    componentDidMount() {
        this.props.getProducts()
        this.props.getChildren()
    }
    

    render() {
        const { children, products } = this.props
        return (
            <div>
                <h1>Display Children </h1>
                <Children children={children} products={products}/>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(getProducts()),
        getChildren: () => dispatch(getChildren()),
    };
}

function mapStateToProps(state, ownProps) {
    return {
        products: state.products,
        children: state.children
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ChildrenContainer);
