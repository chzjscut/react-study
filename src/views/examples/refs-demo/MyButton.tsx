import React from 'react';
//import './MyButton.less';

interface IProps {
	children: any;
}

const MyButton = React.forwardRef((props: IProps, ref: any) => (
	<button ref={ref} className="MyButton">
		{props.children}
	</button>
))

export default MyButton;