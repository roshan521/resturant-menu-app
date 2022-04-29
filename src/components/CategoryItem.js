import styled from "styled-components";
import React from "react";

const Container = styled.div`
	flex: 1;
	min-width: 250px;
	height: 350px;
	margin: 5px;
	background-color: #f5fbfd;
`;
const ImageContainer = styled.div`
	height: 80%;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-items: center;
`;
const Title = styled.h2`
	color: black;
	margin-bottom: 5px;
	text-align: center;
`;
const Button = styled.button`
	border: none;
	padding: 5px;
	background-color: gray;
	color: white;
	cursor: pointer;
	font-weight: 600;
`;

const CategoryItem = ({ item, index, handleClick }) => {
	return (
		<Container>
			<ImageContainer>
				<Image src={item.img} />
			</ImageContainer>
			<Info>
				<Title>
					{item.title}: {item.price}
				</Title>
				<Button onClick={() => handleClick(item)}>ORDER NOW</Button>
			</Info>
		</Container>
	);
};

export default CategoryItem;
