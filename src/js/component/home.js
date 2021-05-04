import React, { useState } from "react";

//include images into your bundle

//create your first component
export function Home() {
	const [tablero, setTablero] = useState([
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	]);
	const marcar = index => {
		let tableroauxiliar = [...tablero];
		tableroauxiliar[index] = turnoactual;
		setTablero(tableroauxiliar);
		cambiarturno();
	};
	const [turnoactual, setTurnoactual] = useState("X");
	const cambiarturno = () => {
		if (turnoactual === "X") {
			setTurnoactual("O");
		} else if (turnoactual === "O") {
			setTurnoactual("X");
		}
	};
	return (
		<div className="fondo">
			<h1>Tic Tac Toe</h1>
			<h2>It is X tourn</h2>
			<div className="flex-container">
				{tablero.map((item, index) => {
					return (
						<div
							key={index}
							onClick={() => {
								marcar(index);
							}}
							className="mosaico">
							<h1>{item}</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
}
