import React from 'react';
import ProductRow from './ProductRow';

interface IProps {
	products: any[],
	filterText: string,
	inStockOnly: boolean
}

export default class ProductTable extends React.Component<IProps> {
	
	/*constructor(props: any) {
		super(props)
	}*/

	render() {
		const { products, filterText, inStockOnly } = this.props;
		let filterProducts = products.filter(product => product.name.includes(filterText) && (inStockOnly ? product.stocked : true))

		return (
			<table>
				<thead>
					<tr>
						<th>Category</th>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{ filterProducts.map(item => 
						<ProductRow key={item.name} row={item} />
					)}
				</tbody>
			</table>
		)
	}
}

