import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../action-creator/products'
import { getUsage } from '../../action-creator/usage'
import { getInventory } from '../../action-creator/inventory'
import Overview from './overview'

class OverviewContainer extends React.Component {
   

    componentDidMount() { //this will trigger unnecessary renders, ok for small app
        this.props.getProducts()
        this.props.getUsage()
        this.props.getInventory()
    }
    

    render() {
        const { products, usage, inventory } = this.props
        return (
            <div>
                <h1>Display Product Inventory & Usage</h1>
                <Overview products={products} usage={usage} inventory={inventory} />
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(getProducts()),
        getUsage: () => dispatch(getUsage()),
        getInventory: () => dispatch(getInventory())
    };
}

function mapStateToProps(state, ownProps) {
    return {
        products: state.products,
        inventory: state.inventory,
        usage: state.usage
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(OverviewContainer);
