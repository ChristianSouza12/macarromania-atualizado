import styled from "styled-components"


export const Container = styled.div`


min-height: calc(100vh - 72px);

`


export const ProductsImg = styled.img`
width: 100%;
height: 450px;

` 

export const CategoriesMenu = styled.div `
display: flex;
justify-content: center;
gap:50px;
margin-top: 20px;


`

export const CategoryButton = styled.button `

    cursor: pointer;
    background: none;
    border:none;
    border-bottom: ${props => props.isActiveCategory &&  " 2px solid #ebc852"};

    color: ${props => (props.isActiveCategory ? "#ebc852" : "grey")};
    font-size: 17px;
    line-height: 20px;
    padding-bottom: 6px;

`

export const ProductsContainer =  styled.div`


    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap:20px;
    padding:40px;
    justify-items: center;
    margin-top: 20px;


`