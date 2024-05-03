import styled from "styled-components";


export const Container = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form{
    background:  #565656;
    border-radius: 10px;
    padding:30px;
    display: flex;
    flex-direction: column;
    gap:25px;
  }
`;


export const Label = styled.p`
  font-size: 16px;
  color:white;
  margin-bottom:3px;

 
`;


export const Input = styled.input`
  height: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 14px rgba(0,0,0,0.1);
  background-color: white;
  border: none;
 
  width: 100%;
  min-width: 290px;
  padding-left: 20px;
`;


export const Button = styled.button`

width: 100%;
height: 40.12px;
background: #edce4f;
border-radius: 20px;
border:none;
transition: ease-in-out 0.2s;
color:white;
font-size: 16px;
font-weight: 500;
line-height: 19px;
text-align: center;
margin-top: 25px;



cursor: pointer;
&:hover{
    background-color:transparent ;
    border: 1.6px solid #edce4f;
    transition: ease-in-out 0.2s;
    color:#edce4f;
}
&:active{
    opacity: .3;
}
  
  
`;


export const LabelUpload = styled.label `

cursor:pointer;
display: flex;
align-items: center;
border:1px dashed white;
border-radius: 5px;
padding:10px;

gap:10px;

input{
  opacity: 0;
  width: 1px;
}

`

export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap:10px;
  input{
    width: 20px;
    cursor: pointer;
  }


`;