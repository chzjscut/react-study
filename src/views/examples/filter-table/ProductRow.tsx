import React from 'react';

interface Product {
	category: string,
	stocked: boolean,
	name: string,
	price: string
}

interface IProps {
	row: Product
}

export default class ProductTable extends React.Component<IProps> {
	
	/*constructor(props: any) {
		super(props)
	}*/

	render() {
		const { category, stocked, name, price } = this.props.row;

		return (
			<tr>
				<td>{category}</td>
				<td style={{color: stocked ? '' : 'red'}}>{name}</td>
				<td>{price}</td>
			</tr>
		)
	}
}

