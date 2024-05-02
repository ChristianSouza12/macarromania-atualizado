import React, { useEffect, useState } from "react";
import Offers from "../../assets/ofertas.png";
import { Container, CategoryImg, Button, ContainerItems, Image } from "./styles";
import api from "../../services/api";
import Carousel from "react-elastic-carousel";
import { useCart } from "../../hooks/CardContext";
import formatCurrency from "../../utils/formatCurrency";
import { useHistory } from "react-router-dom";

export function OffersCarousel() {
    const [offers, setOffers] = useState([]);
    const { putProductsInCart } = useCart();
    const { push } = useHistory();

    useEffect(() => {
        async function loadOffers() {
            try {
                const { data } = await api.get("products");

                const onlyOffers = data.filter(product => product.offer).map(product => {
                    return { ...product, formatedPrice: formatCurrency(product.price) };
                });

                setOffers(onlyOffers);
            } catch (error) {
                console.error("Error loading offers:", error);
            }
        }

        loadOffers();
    }, []);

    return (
        <Container>
            <CategoryImg src={Offers} alt="logo-oferta" />

            <Carousel itemsToShow={4} style={{ width: "90%" }}>
                {offers.map(product => (
                    <ContainerItems key={product.id}>
                        <Image src={product.url} alt="foto-produto" />
                        <p>{product.name}</p>
                        <p>{product.formatedPrice}</p>
                        <Button
                            onClick={() => {
                                putProductsInCart(product);
                                push("/carrinho");
                            }}
                        >
                            Peça já!
                        </Button>
                    </ContainerItems>
                ))}
            </Carousel>
        </Container>
    );
}
