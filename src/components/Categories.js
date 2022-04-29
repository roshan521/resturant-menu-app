import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import TotalBill from "./TotalBill";
const Container = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const BillContainer = styled.div`
	margin: 20px;
`;
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

const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
`;

const getData = () => {
	let items = localStorage.getItem("items");

	if (items) {
		return JSON.parse(localStorage.getItem("items"));
	} else {
		return [];
	}
};
//for history storage
const getHistory = () => {
	let history = localStorage.getItem("history");

	if (history) {
		return JSON.parse(localStorage.getItem("history"));
	} else {
		return [];
	}
};
const Categories = () => {
	const [purchasedItem, saveItem] = useState(getData());
	const [purchaseHistory, saveHistory] = useState(getHistory());

	const handleClick = (data) => {
		saveItem([...purchasedItem, data]);
	};
	//checking out with payment
	const checkOut = () => {
		//maintaing the history
		console.log(purchaseHistory);
		console.log(purchasedItem);
		let combinedArr = [...purchaseHistory, ...purchasedItem];
		saveHistory(combinedArr);
		localStorage.setItem("history", JSON.stringify(combinedArr));

		//clearing the data stored in local storage
		localStorage.removeItem("items");
		alert("You have successfully done your payment");

		//clearing the record in current window
		saveItem([]);
	};

	// Find the total price of all items
	const getTotal = () => {
		let sum = 0;
		purchasedItem.forEach((data) => {
			sum = sum + data.price;
		});
		return sum;
	};

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(purchasedItem));
	}, [purchasedItem]);

	return (
		<>
			<Container>
				{categories.map((item, index) => (
					<CategoryItem item={item} key={index} handleClick={handleClick} />
				))}
			</Container>

			{/* billing section */}
			<BillContainer>
				<Summary>
					<SummaryTitle>Order Summary</SummaryTitle>
					{purchasedItem.map((data) => (
						<TotalBill key={data.id} title={data.title} price={data.price} />
					))}
					<SummaryItem type="total">
						<SummaryItemText>Total</SummaryItemText>
						<SummaryItemPrice>
							Rs. {getTotal() > 0 ? getTotal() : "000"}
						</SummaryItemPrice>
					</SummaryItem>
					<Button onClick={checkOut}>CHECKOUT NOW</Button>
				</Summary>
			</BillContainer>
		</>
	);
};

export default Categories;
