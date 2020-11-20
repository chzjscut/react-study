/**
 * refs实例
 *
 */

import React from 'react';
import MyButton from './MyButton'

interface IState {
	ref: any;
}


export default class FilterTable extends React.Component<any, IState> {
	//handleFilterTextChange: (param: string) => void
	constructor(props: any) {
		super(props);

		this.state = {
			ref: React.createRef()
		}
	}

	componentDidMount() {
		//获取到button元素
		//console.log(this.state.ref)
		this.state.ref.current.style.color = 'red'
	}

	render() {
		const { ref } = this.state;

		return (
			<div>
				<MyButton ref={ref}>点击</MyButton>
			</div>
		)
	}
}
