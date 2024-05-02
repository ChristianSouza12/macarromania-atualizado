import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3);
  padding: 10px;
  width: max-content;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;
  p {
    font-size: 16px;
    color: #b5b5b5;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: max-content;
  grid-gap: 10px 15px;
  padding: 10px;
  img {
    border-radius: 10px;
    width: 150px;
  }
  p {
    font-size: 16px;
    color: black;
  }

  .quantity-container{
    display: flex;
    gap:20px;

    button{
        height: 30px;
        background-color: transparent;
        border: none;
        font-size: 22px;
        cursor:pointer;
        &:hover{
        opacity: .7;
    }
    &:active{
        opacity: .5;
    }
    }

    p{
        margin-top: 5px;
    }
  

    

  }
  



`;

export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`;

export const DivCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 110px;
    border-radius: 10px;
  }
  p {
    text-align: center;
    margin-top: 10px;
  }
`;
