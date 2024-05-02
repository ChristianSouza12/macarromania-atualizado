import React from "react";
import Icon from "../../assets/icon.png";
import Cart from "../../assets/cart2.png";
import { Container, ContainerLeft, ContainerRight, ContainerText, PageLink, Line, PageLinkExit } from "./styles";
import { useUser } from "../../hooks/UserContext";
import { useHistory } from "react-router-dom";

export function Header() {
    const { logout , userData } = useUser();
    const { push, location: { pathname } } = useHistory();

    const logoutUser = () => {
        const confirmLogout = window.confirm("Tem certeza que deseja sair? 🥹");
        if (confirmLogout) {
            logout();
            push("/login");
        }
    };

    return (
        <Container>
            <ContainerLeft>
                <PageLink onClick={() => push("/")} isActive={pathname === "/"} >
                    Home
                </PageLink>
                <PageLink onClick={() => push("/produtos")} isActive={pathname.includes("/produtos")}>
                    Ver Produtos
                </PageLink>
            </ContainerLeft>
            <ContainerRight>
                <PageLink onClick={() => push("/carrinho")} >
                    <img src={Cart} alt="carrinho" />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={Icon} alt="Person" />
                </PageLink>
                <ContainerText>
                    <p>Olá, {userData.name} </p>
                    <PageLinkExit onClick={logoutUser}>
                        Sair
                    </PageLinkExit>
                </ContainerText>
            </ContainerRight>
        </Container>
    );
}
