import React from 'react';
import MainContext from './mainContext';

interface IProps {
	//filterText: string;
	//inStockOnly: boolean;
	//onFilterTextChange: (val: string) => void;
	onInStockChange: (isStocked: boolean) => void
}

export default class SearchBar extends React.Component<IProps> {
	
	static contextType = MainContext;

	constructor(props: any) {
		super(props);
		//this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleInStockChange = this.handleInStockChange.bind(this);
	}

	/*handleFilterTextChange(e: React.FormEvent<HTMLInputElement>) {
		this.props.onFilterTextChange(e.currentTarget.value);
	}*/

	handleInStockChange(e: React.FormEvent<HTMLInputElement>) {
		this.props.onInStockChange(e.currentTarget.checked);
	}

	render() {
		let filterParams = this.context
		//console.log(filterParams)
		let { filterText, inStockOnly, filterTextChange } = this.context
		//const { filterText, inStockOnly } = this.props;

		return (
			<form>
				<input
					type="text"
					placeholder="Search..."
					value={filterText}
					onChange={(e) => {filterTextChange(e.currentTarget.value)}}
				/>
				<p>
					<input
						type="checkbox"
						checked={inStockOnly}
						onChange={this.handleInStockChange}
					/>Only show products in stock
				</p>
			</form>
		)
	}
}
//SearchBar.contextType = MainContext;
