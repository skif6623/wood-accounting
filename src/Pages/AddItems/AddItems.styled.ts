import styled from 'styled-components';

interface FormTypes {
  $empty: 'show' | 'hide';
}

export const AddingForm = styled.form<FormTypes>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.12),
    2px 2px 2px 2px rgba(0, 0, 0, 0.06), 4px 4px 6px rgba(0, 0, 0, 0.16);
  transform: ${({ $empty }) =>
    $empty === 'hide' ? 'translateY(25%)' : 'translateY(0%)'};
  transition: transform 250ms ease;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
    padding: 20px;

    transform: none;
  }

  @media screen and (min-width: 1200px) {
    flex-wrap: nowrap;
    gap: 10px;
  }
`;

export const AddingFormLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 40px) / 2);
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    flex-basis: 100%;
  }
`;

export const AddingFormText = styled.p`
  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 10px;
  }
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
