





import styled from "styled-components"
import {Link} from "react-router-dom"

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap:35px;
padding:35px 0 ;


.rec.rec-arrow{
    background-color: #b78a25;
    color:white;
    filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
    &:hover{
        background-color: transparent;
        border:1px solid  #b78a25;
        color: #b78a25;
    }


}
.rec.rec-arrow:disabled{
    border:none;
    background-color:#b5b5b5 ;
    color:#efefef;
}




`


export const CategoryImg = styled.img`


` 

export const Button = styled(Link)`
margin-top: 16px;
background-color: #ebc852;

border-radius: 8px;
height: 50px;
border:none;
cursor: pointer;
color:white;
font-size: 18px;
text-align: center;
font-weight: normal;
line-height: 100%;
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;

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


export const Image = styled.img`
width: 260px;
border-radius: 20px;
height: 200px;


` 

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;



` 

