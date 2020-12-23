import { useState, useEffect } from 'react';

const FractionArr = (number, method, click) => {
	const [ arr, setArr ] = useState([]);

	useEffect(
		() => {
			if (click) {
				let i = 0;
				while (i < number) {
					const methods = [ '+', '-', '*', '/' ];
					let pickedMethod;
					if (method === 'mix') {
						pickedMethod = methods[Math.round(Math.random() * 3)];
					} else {
						pickedMethod = method;
					}
					let one = Math.ceil(Math.random() * 20);
					let two = Math.ceil(Math.random() * 19 + 1);
					let three = Math.ceil(Math.random() * 20);
					let four = Math.ceil(Math.random() * 19 + 1);
					// eslint-disable-next-line no-eval
					let result = Math.floor(eval(`(${one}/${two})` + pickedMethod + `(${three}/${four})`) * 10000000000000) / 10000000000000;
					// eslint-disable-next-line no-loop-func
					setArr((previouseArr) => {
						return [
							...previouseArr,
							{
								one,
								two,
								three,
								four,
								method: pickedMethod,
								result,
								key: Math.random()
							}
						];
					});
					i++;
				}
			} else {
				setArr([]);
			}
		},
		[ click ]
	);

	return { arr };
};

export default FractionArr;
