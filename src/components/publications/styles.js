import styled from "styled-components";

export const PublicationsList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  gap: 16px;
`;
