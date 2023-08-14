import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;

  font-weight: 500;

  border: 1px solid #e0e5ea;
  border-radius: 4px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.12),
    2px 2px 2px 2px rgba(0, 0, 0, 0.06), 4px 4px 6px rgba(0, 0, 0, 0.16);

  transform: scale(1);
  transition: background-color 250ms ease, border 250ms ease,
    transform 250ms ease;

  &:hover {
    background-color: #ebf9ec;
    border: 1px solid #3ecba7;

    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    gap: 0;
    padding: 10px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-basis: 20%;
  }
`;

export const Title = styled.span`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

// export const Text = styled.div``;

// export const Item = styled.li`
//   display: flex;
//   align-items: center;
//   padding: 15px;

//   font-weight: 500;

//   border: 1px solid #e0e5ea;
//   border-radius: 4px;

//   transform: scale(1);
//   transition: all 250ms ease;

//   &:hover {
//     background-color: #ebf9ec;
//     border: 1px solid #3ecba7;

//     transform: scale(1.03);
//   }

//   @media screen and (min-width: 768px) {
//     padding: 20px 30px;
//   }
// `;
