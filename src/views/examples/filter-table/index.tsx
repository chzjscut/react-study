import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import MainContext from './mainContext';

interface IState {
	filterText: string;
	inStockOnly: boolean;
	filterTextChange: (param: string) => void;
}


export default class FilterTable extends React.Component<any, IState> {
	//handleFilterTextChange: (param: string) => void
	constructor(props: any) {
		super(props);

		/*this.handleFilterTextChange = (filterText: string) => {
			this.setState({
				filterText
			})
		}*/

		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleInStockChange = this.handleInStockChange.bind(this);

		this.state = {
			filterText: '',
			inStockOnly: false,
			filterTextChange: this.handleFilterTextChange
		}
	}

	//搜索框内容改变时触发
	handleFilterTextChange(filterText: string) {
		this.setState(state => ({
			filterText
		}))
	}

	handleInStockChange(inStockOnly: boolean) {
		this.setState({
			inStockOnly
		})
	}

	render() {
		let data = [
		  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
		  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
		  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
		  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
		  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
		  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
		];

		const { filterText, inStockOnly } = this.state;

		return (
			<MainContext.Provider value={this.state}>
				<div style={{border: '1px solid #ccc', margin: 20, padding: 15}}>
					<SearchBar
						//filterText={filterText}
						//inStockOnly={inStockOnly}
						//onFilterTextChange={this.handleFilterTextChange}
						onInStockChange={this.handleInStockChange}
					/>
					<ProductTable
						products={data}
						filterText={filterText}
						inStockOnly={inStockOnly}
					/>
				</div>
			</MainContext.Provider>
		)
	}
}
