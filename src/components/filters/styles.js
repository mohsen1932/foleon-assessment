import styled from "styled-components";

export const FilterBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  > div {
    padding-right: 20px;
  }
  ul {
    display: inline-flex;
    flex-wrap: wrap;
    flex: 1;
    margin: 0;
    li {
      display: inline-block;
      padding: 10px 15px;
      border-radius: 5px;
      background: #a5fefe;
      color: #057771;
      cursor: pointer;
      font-size: 13px;
      margin: 0 5px 5px 0;
      &:hover,
      &.active {
        background: #00cec9;
        color: white;
      }
    }
  }
`;
