import React, {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {boardSelector, roundWoodSelector} from "../../redux/selectors";
import {getRoundWood, getBoard} from "../../redux/operations";

import {StorageDesc, StorageItem} from "./WoodStorage.styled";

export const WoodStorage: FC = () => {
	const dispatch = useAppDispatch();
	const roundWood = useAppSelector(roundWoodSelector);
	// const board = useAppSelector(boardSelector);
	console.log(roundWood);

	useEffect(() => {
		dispatch(getRoundWood());
		dispatch(getBoard());
	}, [dispatch]);

	return (
		<>
			<StorageDesc>
				<StorageItem>Name</StorageItem>
				<StorageItem>Diametr</StorageItem>
				<StorageItem>Amount</StorageItem>
				<StorageItem>Code</StorageItem>
			</StorageDesc>

			<ul>
				{roundWood.map(item => {
					return (
						<li key={item.id}>
							<p>{item.name}</p>
							<p>{item.name}</p>
							<p>{item.name}</p>
							<p>{item.name}</p>
							<p>{item.name}</p>
						</li>
					);
				})}
			</ul>
		</>
	);
};
