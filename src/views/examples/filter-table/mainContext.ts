import React from 'react';

interface IMainContext {
	filterText: string;
	inStockOnly: boolean;
	filterTextChange: (text: string) => void;
}

export default React.createContext<IMainContext>({
	filterText: '',
	inStockOnly: false,
	filterTextChange: () => {}
});