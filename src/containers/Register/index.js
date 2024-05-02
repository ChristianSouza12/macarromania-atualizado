import React from "react";
import { Container, RegisterImage, ContainerItens, Label, Input, Button, SignInLink } from "./styles";
import { useForm } from "react-hook-form";
import RegisterImg from "../../assets/register.jpg"
import Logo from "../../assets/logo.png"
import * as Yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { toast } from "react-toastify";
import api from "../../services/api"
import { Link } from "react-router-dom";
import  {ErrorMessage}  from "../../components";




export function Register() {
    const schema = Yup.object().shape({
        name:Yup.string("Digite seu nome").required("O nome é obrigatório."),
        email: Yup.string().email("Digite um Email válido.").required("O email é obrigatório."),
        password: Yup.string().required("A senha é obrigatória.").min(6,"Sua senha deve conter pelo menos 6 digítos."),
        confirmPassword: Yup.string().required("Confirme sua senha.").min(6,"Sua senha deve conter pelo menos 6 digítos.").oneOf([Yup.ref("password")],"As senhas devem ser iguais.")
    })
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    });

    

    const onSubmit =  async clientData => {

        try{
          
            const {status} =    await api.post("users",{
                name:clientData.name,
                email: clientData.email,
                password: clientData.password
            },{
                validateStatus:() => true}
            )

                if(status === 201 || status ===200){
                    toast.success("Cadastrado com sucesso!")
                } 
                else if(status === 409){
                    toast.error("O email ja está em uso! Faça seu login para continuar.")
                }else{
                    throw new Error()
                }

            

            


        } catch(err){
            toast.error("Falha no sistema! Tente novamente.")
        }


       

       



    }
    return (
        <Container>
            <RegisterImage  src = {RegisterImg} alt = "Register-Image"/>
            <ContainerItens>
                <img src={Logo} alt="Logo" />
                <h1>Cadastre-se</h1>
                <form noValidate  onSubmit={handleSubmit(onSubmit)}>




                <Label error={errors.name?.message}>Nome</Label>
                <Input type="text" 
                {...register("name")} 
                error={errors.name?.message} 
                />
                <ErrorMessage>{errors.name?.message}</ErrorMessage>

                <Label error={errors.email?.message} >Email</Label>
                <Input type="email" 
                {...register("email")} 
                error={errors.email?.message} 
                />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>

                
             

                <Label  error={errors.password?.message} >Senha</Label>

                <Input type="password" {...register("password")} error={errors.password?.message} />
                <ErrorMessage>{errors.password?.message}</ErrorMessage>

                <Label error={errors.confirmPassword?.message} >Confirme a senha</Label>
                <Input type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
                <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                <Button type="submit">Registrar</Button>
                </form>
                <SignInLink>Já possui conta? <Link to="/login">Sign in</Link></SignInLink>
            </ContainerItens>
        </Container>
    );
}


