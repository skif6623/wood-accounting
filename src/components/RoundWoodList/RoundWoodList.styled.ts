import styled from "styled-components";

export const RoundWoodItem = styled.li`
	display: flex;
	padding: 15px;

	border: 1px solid #e0e5ea;
	border-radius: 4px;

	transform: scale(1);
	transition: all 250ms ease;

	&:hover {
		background-color: #ebf9ec;
		border: 1px solid #3ecba7;

		transform: scale(1.03);
	}
`;

export const RoundWoodText = styled.p`
	flex-basis: 20%;
`;
