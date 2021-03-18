import React from 'react';
import { connect } from 'react-redux';
import { getInventory } from '../../action-creator/inventory'
import { getProducts } from '../../action-creator/products'
import Inventory from './inventory'

class InventoryUsageContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        
    }

    componentDidMount() {
        this.props.getInventory()
    }
    

    render() {
        const { inventory, products } = this.props
        console.log("inventory is here : ", inventory)
        return (
            <div>
                <h1>Display Inventory & Usage</h1>
                <Inventory inventory={inventory} products={products} />
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getInventory: () => dispatch(getInventory()),
        getProducts: () => dispatch(getProducts()),
    };
}

function mapStateToProps(state, ownProps) {
    return {
        inventory: state.inventory,
        products: state.products
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(InventoryUsageContainer);
