import React from "react";
import CartLogo from "../../assets/cart.png"
import { Container, CartImg ,Wrapper} from "./styles";

import {CartItems , CartResume} from "../../components";


export function Cart(){
   return (
    <Container>
        <CartImg src={CartLogo} alt="cart-logo"/>
        <Wrapper>
        <CartItems></CartItems>
        <CartResume/>
        </Wrapper>
       
       


    </Container>
   )
}


