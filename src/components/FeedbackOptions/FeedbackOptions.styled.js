import styled from 'styled-components';

export const StyledUl = styled.ul`
  display: flex;
  padding-left: 0;
  /* justify-content: flex-start; */
  gap: 12px;
`;

export const StyledLi = styled.li`
  list-style: none;

  & button {
    width: 80px;
    height: 30px;

    font-size: 16px;

    &:hover {
      background-color: #c7dcff;
      border-radius: 3px;
    }
  }
`;
