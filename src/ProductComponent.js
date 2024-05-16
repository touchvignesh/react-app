import React from 'react';
import ProductService from './ProductService';

class ProductComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }

    componentDidMount(){
        ProductService.getProducts().then((response) => {
            this.setState({ products: response.data})
        });
    }

    render (){
    return (
    <div>
    <h1 className = "text-center"> products List</h1>
    <table className = "table table-striped">
    <thead>
    <tr>

    <td> Id</td>
    <td> Name</td>
    <td> Description</td>
    <td> Price</td>
    <td> Created At</td>
    </tr>

    </thead>
    <tbody>
    {
        this.state.products.map(
    product =>
    <tr key = {product.id}>
<td> {product.id}</td>
<td> {product.name}</td>
<td> {product.description}</td>
<td> {product.price}</td>
<td> {product.created_at}</td>
</tr>
)
}

</tbody>
</table>

</div>

)
}
}

export default ProductComponent