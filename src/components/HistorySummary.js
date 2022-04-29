import React from "react";
import styled from "styled-components";

const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const HistorySummary = ({ title, price }) => {
	return (
		<SummaryItem>
			<SummaryItemText>{title}</SummaryItemText>
			<SummaryItemPrice>Rs. {price}</SummaryItemPrice>
		</SummaryItem>
	);
};

export default HistorySummary;
