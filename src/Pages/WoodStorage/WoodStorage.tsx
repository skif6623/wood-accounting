import React, {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {boardSelector, roundWoodSelector} from "../../redux/selectors";
import {getRoundWood, getBoard} from "../../redux/operations";

import {Button} from "../../components/Button/Button";

import {
	StorageTable,
	DesctiptionList,
	DesctiptionItem,
	RoundWoodList,
	RoundWoodItem,
	RoundWoodText,
} from "./WoodStorage.styled";

export const WoodStorage: FC = () => {
	const dispatch = useAppDispatch();
	const roundWood = useAppSelector(roundWoodSelector);
	const desctiption = ["Назва", "Діаметр", "Кількість", "Штрихкод"];
	// const board = useAppSelector(boardSelector);

	useEffect(() => {
		dispatch(getRoundWood());
		dispatch(getBoard());
	}, [dispatch]);

	return (
		<>
			<StorageTable>
				<Button to="round">Кругляк</Button>
				<Button to="board">Дошка</Button>
				<Button to="pallets">Палети</Button>
				<DesctiptionList>
					{desctiption.map((el, index) => {
						return <DesctiptionItem key={index}>{el}</DesctiptionItem>;
					})}
				</DesctiptionList>
				<RoundWoodList>
					{roundWood.map(({name, diametr, code, amount, id}) => {
						return (
							<RoundWoodItem key={id}>
								<RoundWoodText>{name}</RoundWoodText>
								<RoundWoodText>{diametr}</RoundWoodText>
								<RoundWoodText>{amount}</RoundWoodText>
								<RoundWoodText>{code}</RoundWoodText>
							</RoundWoodItem>
						);
					})}
				</RoundWoodList>
			</StorageTable>
		</>
	);
};
