import { Search, ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { color } from "@mui/system";

const Navbar = () => {
	const Container = styled.div`
		height: 60px;
	`;

	const Wrapper = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
	`;
	const Left = styled.div`
		flex: 1;
		display: flex;
		align-items: center;
	`;

	const Language = styled.span`
		font-size: 14px;
		cursor: pointer;
	`;

	const SearchContainer = styled.div`
		border: 0.5px solid lightgray;
		display: flex;
		align-items: center;
		padding: 5px;
		margin-left: 25px;
	`;

	const Input = styled.input`
		font-size: 14px;
		border: none;
	`;
	const Middle = styled.div`
		flex: 1;
		text-align: center;
	`;

	const Logo = styled.h1`
		font-weight: bold;
	`;

	const Right = styled.div`
		flex: 1;
		display: flex;
		justify-content: flex-end;
	`;

	const MenuItem = styled.div`
		margin-left: 25px;
		font-size: 16px;
		cursor: pointer;
	`;
	return (
		<div>
			<Container>
				<Wrapper>
					<Left>
						<Language>EN</Language>
						<SearchContainer>
							<Input placeholder="search" />
							<Search />
						</SearchContainer>
					</Left>
					<Middle>
						<Logo>Khaja Ghar.</Logo>
					</Middle>
					<Right>
						<MenuItem>
							<Link to="/" style={{ textDecoration: "none" }}>
								Home
							</Link>
						</MenuItem>
						<MenuItem>
							<Link to="/history" style={{ textDecoration: "none" }}>
								History
							</Link>
						</MenuItem>
						<MenuItem>
							<Badge badgeContent={4} color="primary">
								<ShoppingCart color="action" />
							</Badge>
						</MenuItem>
					</Right>
				</Wrapper>
			</Container>
		</div>
	);
};

export default Navbar;
