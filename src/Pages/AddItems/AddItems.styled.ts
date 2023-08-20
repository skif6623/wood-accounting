import styled from 'styled-components';

export const AddingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.12),
    2px 2px 2px 2px rgba(0, 0, 0, 0.06), 4px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const AddingFormLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;

export const AddingFormInput = styled.input`
  width: 175px;
  height: 40px;

  &:focus {
    outline: none;
    border: 2px solid #3ecba7;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

// export const Form = styled.form`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);

//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   padding: 30px;

//   border: 1px solid #e0e5ea;
//   border-radius: 4px;
//   box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.12),
//     2px 2px 2px 2px rgba(0, 0, 0, 0.06), 4px 4px 6px rgba(0, 0, 0, 0.16);

//   @media screen and (min-width: 768px) {
//     width: 500px;
//   }
// `;

// export const Description = styled.p`
//   font-size: 15px;
// `;

// export const Input = styled.input`
//   width: 100%;
//   height: 40px;
//   font-size: 20px;

//   &:focus {
//     outline: none;
//     border: 2px solid #3ecba7;
//   }

//   &::-webkit-outer-spin-button,
//   &::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     appearance: none;
//   }
// `;
