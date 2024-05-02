

import React from "react";

import PropTypes from "prop-types"
import { useCart } from "../../hooks/CardContext";

import { useHistory } from "react-router-dom";

import { Container,Image ,ProductName,ProductPrice, Button  } from "./styles";

export function CardProduct({product}){

    const {putProductsInCart} = useCart()

    const {push} = useHistory()


return (
    <Container>

        <Image src={product.url} alt="imagem-produto" /> 
        <div>
        <ProductName >{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={() => {
                                putProductsInCart(product);
                                push("/carrinho");
                            }}  >Adicionar</Button>
        </div>
    </Container>
   
)
}




CardProduct.propTypes = {
    product : PropTypes.object
}