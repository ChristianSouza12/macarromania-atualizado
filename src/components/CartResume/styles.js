import styled from "styled-components"


export const Container = styled.div`

background:  white;
padding: 20px;
border-radius: 20px;
box-shadow: 0px 10px 40px rgba(0,0,0,0.3) ;
display: flex;
flex-direction: column;
justify-content: space-between;


.container-top{
    display: grid;
    grid-gap: 10px 60px;
    grid-template-areas:
    "title title"
    "itens itens-price"
    "tax tax-price"
    ;
   

.title{
    grid-area: title;
    margin-bottom: 20px;
    margin-left: 5%;
}
.itens{
    grid-area: itens;
}

.itens-price{
    grid-area: itens-price;
}

.tax{
    grid-area: tax;
}
.tax-price{
    grid-area: tax-price;
}

}

.container-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 60px;
}



`


export const Button = styled.button`

margin-top: 26px;
background-color: #ebc852;
width: 100%;
border-radius: 8px;
height: 50px;
border:none;
cursor: pointer;
color:white;
font-size: 16px;
text-align: center;
font-weight: normal;
line-height: 100%;


transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

&:hover {
  background-color: transparent;
  color: #ebc852;
  border: 1px solid #ebc852;
}
&:active{
    opacity: .6;
}
`



