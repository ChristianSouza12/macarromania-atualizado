import styled from "styled-components"


export const Container = styled.div`
    height: 72px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    background-color: rgba(231, 209, 123, 0.5); 
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
`;


export const ContainerLeft = styled.div`
    display: flex;
    gap:30px;



`
export const ContainerRight = styled.div`

display: flex;
align-items: center;
gap:20px;



`
export const PageLink= styled.a`

cursor: pointer;
text-decoration: none;
color: ${props=> (props.isActive ? "#b78a25" : " #555555")};
font-size: 16px;
line-height: 19px;
font-weight: ${props=> (props.isActive ? "bold" : "normal")};



img{
    width: 30px;

    &:hover{
    transform: scale(1.08);
    transition: all .4s;
}
}







`
export const ContainerText= styled.div`

    p{
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 16px;
      
        color:#555555;
    }



`

export const Line= styled.div`

height: 40px;
border-right: 1px solid #bababa ;

`

export const PageLinkExit= styled.a`

    font-weight: bold;
    font-style: normal;
    font-size: 16px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #b78a25;
    cursor: pointer;
    margin-top: 5px;


`
