import React, { useState } from "react";
import HistorySummary from "../components/HistorySummary";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;

const getData = () => {
	let items = localStorage.getItem("history");

	if (items) {
		return JSON.parse(localStorage.getItem("history"));
	} else {
		return [];
	}
};
const History = () => {
	const [getHistory, setHistory] = useState(getData());

	return (
		<>
			<Navbar />

			<Summary>
				<SummaryTitle>Purchase History</SummaryTitle>
				{getHistory.map((data) => {
					return (
						<HistorySummary
							title={data.title}
							price={data.price}
							key={data.id}
						/>
					);
				})}
			</Summary>
		</>
	);
};

export default History;
