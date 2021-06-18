import React, { useState } from 'react';
import DecimalArr from './logic/DecimalArr';
import { motion } from 'framer-motion';

const Decimals = () => {
	const [ number, setNumber ] = useState(20);
	const [ method, setMethod ] = useState('mix');
	const [ round, setRound ] = useState(100);
	const [ click, setClick ] = useState(false);
	const { arr } = DecimalArr(number, method, round, click);
	console.log(arr);

	const formattedMethod = (m) => {
		const methods = [ '+', '-', '*', '/' ];
		const fMethods = [ '＋', '-', '×', '÷' ];
		let n;
		n = methods.indexOf(m);
		return <span>{fMethods[n]}</span>;
	};

	const handleCheck = (id, result) => {
		// eslint-disable-next-line no-eval
		let value = eval(document.getElementById(`dec-input-${id}`).value);
		if (value === result) {
			document.getElementById(`dec-correct-${id}`).classList.remove('hide');
			document.getElementById(`dec-wrong-${id}`).classList.add('hide');
		} else {
			document.getElementById(`dec-correct-${id}`).classList.add('hide');
			document.getElementById(`dec-wrong-${id}`).classList.remove('hide');
		}
	};

	const handleEnter = (e) => {
		if (e.keyCode === 13) {
			const id = e.target.id.slice(10);
			document.getElementById(`dec-btn-${id}`).click();
		}
	};

	return (
		<div className="container">
			<h3 className="purple-text text-darken-2">
				Decimals <span style={{ fontSize: 20, color: 'red' }} className="hide-on-med-and-down">(results round to the nearest {round}th)</span>
			</h3>
			<span style={{ fontSize: 16, color: 'red', marginLeft: 20 }} className="hide-on-large-only">(results round to the nearest {round}th)</span>
			<div className="row control">
				<div className="col l3 m6 s12">
					<div className="choose-title">Choose Numbers</div>
					<div>
						<span
							className="waves-effect orange darken-2 btn z-depth-0"
							onClick={() => {
								setNumber(20);
								setClick(false);
							}}
						>
							20
						</span>
						<span
							className="waves-effect orange darken-2 btn z-depth-0"
							onClick={() => {
								setNumber(50);
								setClick(false);
							}}
						>
							50
						</span>
						<span
							className="waves-effect orange darken-2 btn z-depth-0"
							onClick={() => {
								setNumber(100);
								setClick(false);
							}}
						>
							100
						</span>
					</div>
				</div>
				<div className="col l4 m6 s12">
					<div className="choose-title">Choose Methods</div>
					<div>
						<span
							className="waves-effect blue darken-2 btn z-depth-0 btn-floating"
							onClick={() => {
								setMethod('+');
								setClick(false);
							}}
						>
							+
						</span>
						<span
							className="waves-effect blue darken-2 btn z-depth-0 btn-floating"
							onClick={() => {
								setMethod('-');
								setClick(false);
							}}
						>
							-
						</span>
						<span
							className="waves-effect blue darken-2 btn z-depth-0 btn-floating"
							onClick={() => {
								setMethod('*');
								setClick(false);
							}}
						>
							×
						</span>
						<span
							className="waves-effect blue darken-2 btn z-depth-0 btn-floating"
							onClick={() => {
								setMethod('/');
								setClick(false);
							}}
						>
							÷
						</span>
						<span
							className="waves-effect blue-text text-darken-2 btn btn-flat"
							onClick={() => {
								setMethod('mix');
								setClick(false);
							}}
							style={{ fontSize: 14 }}
						>
							mix
						</span>
					</div>
				</div>
				<div className="col l3 m6 s6">
					<div className="choose-title">Round To</div>
					<div>
						<span
							className="waves-effect red lighten-1 z-depth-0 btn"
							onClick={() => {
								setRound(10);
								setClick(false);
							}}
						>
							10th
						</span>
						<span
							className="waves-effect red lighten-1 z-depth-0 btn"
							onClick={() => {
								setRound(100);
								setClick(false);
							}}
						>
							100th
						</span>
					</div>
				</div>
				<div className="col l2 control-show m6 s6 choose-display">
					<div style={{ marginTop: 5 }}>
						<div>
							<b>Method:</b> {method}
						</div>
						<hr />
						<div>
							<b>Numbers:</b> {number}
						</div>
					</div>

					<span
						className="waves-effect indigo lighten-1 z-depth-0 btn btn-floating pulse"
						onClick={() => setClick(true)}
					>
						<i className="material-icons">restore</i>
					</span>
				</div>
			</div>

			<div className="row">
				{arr.map((doc) => {
					return (
						<motion.div
							className="col s12 m6 l4"
							key={doc.key}
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.98 }}
							transition={{ delay: 0.2 }}
						>
							<div className="card blue-grey darken-1">
								<div className="card-content white-text text">
									<span className="fraction">
										<div>{doc.one}</div>
									</span>
									{formattedMethod(doc.method)}
									<span className="fraction">
										<div>{doc.two}</div>
									</span>
									<span>=</span>
									<span className="input-field">
										<input id={`dec-input-${doc.key}`} type="text" onKeyDown={handleEnter} />
										<label>answer</label>
									</span>
								</div>
								<div className="card-action">
									<div className="row">
										<div className="col s4">
											<span
												id={`dec-btn-${doc.key}`}
												className="btn btn-floating indigo darken-1"
												onClick={() => handleCheck(doc.key, doc.result)}
											>
												<i className="material-icons large">check</i>
											</span>
										</div>
										<div className="col s4 hide correct" id={`dec-correct-${doc.key}`}>
											correct
											<i className="material-icons small" style={{ marginLeft: 20 }}>
												thumb_up
											</i>
										</div>
										<div className="col s4 hide wrong" id={`dec-wrong-${doc.key}`}>
											wrong
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default Decimals;
