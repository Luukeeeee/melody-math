/* eslint-disable eqeqeq */
import { useState, useEffect } from 'react';

const DecimalArr = (number, method, round, click) => {
	const [ arr, setArr ] = useState([]);

	useEffect(
		() => {
			if (click) {
				let getNumber = () => {
					let n = 0;
					while(n.toString()[n.toString().length - 1] === "0" || n.toString()[0] === "0"){
						const randomOne = [100, 1000, 10000][Math.floor(Math.random() * 3)];
						const randomTwo = [10, 100, 1000][Math.floor(Math.random() * 3)];
						n = Math.round(Math.random() * randomOne) / randomTwo;
					}
					return n;
				}
				let i = 0;
				while (i < number) {
					const methods = [ '+', '-', '*', '/' ];
					let pickedMethod;
					if (method === 'mix') {
						pickedMethod = methods[Math.round(Math.random() * 3)];
					} else {
						pickedMethod = method;
					}
					const one = getNumber();
					const two = getNumber();
					// eslint-disable-next-line no-eval
					let result = Math.round(eval(`${one}` + pickedMethod + `${two}`) * round) / round;
					// eslint-disable-next-line no-loop-func
					setArr((previouseArr) => {
						return [
							...previouseArr,
							{
								one,
								two,
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

export default DecimalArr;
