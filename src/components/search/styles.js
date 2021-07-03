import styled from "styled-components";

export const SearchBox = styled.div`
  display: block;
  width: 100%;
  margin: 10px 0;
  form {
    width: 100%;
    display: flex;
    justify-content: stretch;
  }
`;
export const Btn = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid #bbb;
  padding: 0.35rem 15px;
  font-size: 0.9rem;
  line-height: 1.25;
  border-radius: 0.25rem;
  color: #333;
  background-color: #fff;
  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out,
    border-color 0.5s ease-in-out;
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  &:not(:disabled):not(.disabled):hover {
    color: #111;
    background-color: #f7f7f7;
    border-color: #999;
  }
  &:focus {
    outline: none;
  }
  &.disabled,
  &:disabled {
    opacity: 0.65;
  }
`;

export const Input = styled.input`
  display: block;
  flex: 1;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color 0.5s ease-in-out;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #009688;
    outline: 0;
  }
`;
