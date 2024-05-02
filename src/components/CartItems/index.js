import React from "react";
import { Container, Header, Body, EmptyCart, DivCart } from "./styles";
import EmptyImg from "../../assets/empty.png";
import { useCart } from "../../hooks/CardContext";
import formatCurrency from "../../utils/formatCurrency";

export function CartItems() {
  const { cardProducts , insertNewItem  , decreaseProducts } = useCart();

  console.log(cardProducts);

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 40 }}>Quantidade</p>
        <p>Total</p>
      </Header>

      {cardProducts && cardProducts.length > 0 ? (
        cardProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} alt="product-img" />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}  >-</button>
            <p>{product.quantity}</p>
            <button onClick={() => insertNewItem(product.id)} >+</button>
            </div>
           
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
      ) : (
        <DivCart>
          <EmptyCart>Adicione um item no carrinho.</EmptyCart>
          <img src={EmptyImg} alt="cart-empty" />
        </DivCart>
      )}
    </Container>
  );
}
