import styled from "styled-components"






export const Container = styled.div `

  background:   #fef9d9;
  box-shadow: 0px 30px 60px rgba(57,57,57,0.1);
  border-radius: 30px;

  display: flex;
  gap:12px;
  padding:16px;
  width: max-content;

  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
  }


`

export const Image = styled.img `
width: 180px;
height: 150px;
border-radius: 16px;


`

export const ProductName = styled.p `
font-size: 16px;
font-style: normal;
font-weight: normal;
line-height: 19px;
color:black;

`

export const ProductPrice = styled.p `

font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 21px;
color:black;
margin-top: 30px;

`



export const Button = styled.button`
margin-top: 16px;
background-color: #ebc852;
width: 130px;
border-radius: 8px;
height: 50px;
border:none;
cursor: pointer;
color:white;
font-size: 18px;
text-align: center;
font-weight: normal;
line-height: 100%;


transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease; /* Adicionando transição */

&:hover {
  background-color: transparent;
  color: #ebc852;
  border: 1px solid #ebc852;
}
&:active{
    opacity: .6;
}

` 