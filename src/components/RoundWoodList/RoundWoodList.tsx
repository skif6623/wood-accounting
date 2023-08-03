import React, { FC, useState } from 'react';
import { RoundWoodItem, RoundWoodText } from './RoundWoodList.styled';

import type { roundWoodItem } from '../../redux/roundWoodSlice';
import { TakeToWorkForm } from '../TakeToWorkForm/TakeToWorkForm';

export const RWoodList: FC<roundWoodItem> = ({
  name,
  diametr,
  code,
  amount,
}) => {
  // const [inWork, setInWork] = useState(0);

  // const handleSubmit = (): void => {
  //   console.log(inWork);
  // };

  return (
    <>
      <RoundWoodItem>
        <RoundWoodText>{name}</RoundWoodText>
        <RoundWoodText>{diametr}</RoundWoodText>
        <RoundWoodText>{amount}</RoundWoodText>
        <RoundWoodText>{code}</RoundWoodText>
        {/* <div>
        <input
        type="number"
        onChange={e => setInWork(Number(e.target.value))}
        />
        <button onClick={() => handleSubmit()}>в роботу</button>
      </div> */}
      </RoundWoodItem>
      <TakeToWorkForm name={name} />
    </>
  );
};
