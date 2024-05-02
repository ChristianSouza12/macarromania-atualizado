import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fad026;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterImage = styled.img`
  height: 90%;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px 0 0 10px;
`;

export const ContainerItens = styled.div`
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 0 10px 10px 0;
  height: 90%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-style: bold;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: white;
    text-align: center;
    margin-top: -5%;
    
  }
  img{
    width: 310px;
    margin-left: 15%;
   
    
  
  }
`;

export const Label = styled.p`
  font-style: bold;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: white;
  margin-top: ${props => (props.error? "11px" : "28px")} ;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: white;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border:${props => (props.error? "1.5px solid red" : "none")} ;
  padding-left: 20px;
  

`;

export const Button = styled.button`

width: 200.81px;
height: 40.12px;
background:#ac261d;
border-radius: 20px;
border:none;
transition: ease-in-out 0.2s;
color:white;
font-size: 16px;
font-weight: 500;
line-height: 19px;
text-align: center;
margin-top: 75px;
margin-bottom: 15px;
margin-left: 30%;
box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);

cursor: pointer;
&:hover{
    background-color:transparent ;
    border: 1.6px solid #ac261d;
    transition: ease-in-out 0.2s;
    color:#ac261d;
}
&:active{
    opacity: .3;
}


`;

export const SignInLink = styled.p`

font-weight: 400;
font-size: 14px;
line-height: 16px;
color:#010455;

a{
    cursor: pointer;
    text-decoration: underline;
}

`;


