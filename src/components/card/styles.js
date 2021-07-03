import styled from "styled-components";

export const CardBox = styled.div`
  width: 100%;
  a {
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 250px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    padding: 15px;
    &:hover {
      background-color: #feeedd;
    }
  }
  h3 {
    color: #333;
    font-size: 16px;
  }
  span {
    color: #079992;
    font-size: 14px;
    font-size: 700;
  }
`;
export const CardImage = styled.span`
  width: 100%;
  background-color: #ccc;
  height: 100px;
  display: block;
  border-radius: 3px;
`;
