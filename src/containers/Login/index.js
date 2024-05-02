import React from "react";
import { Container, LoginImage, ContainerItens, Label, Input, Button, SignInLink } from "./styles";
import { useForm } from "react-hook-form";
import LoginImg from "../../assets/Login.jpg";
import Logo from "../../assets/logo.png";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link , useHistory} from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import  {ErrorMessage}  from "../../components/ErrorMessage";
import api from "../../services/api";

export function Login() {
  const history = useHistory()

  const {putUserData}= useUser()

  



  

  const schema = Yup.object().shape({
    email: Yup.string().email("Digite um Email válido.").required("O email é obrigatório."),
    password: Yup.string().required("A senha é obrigatória.").min(6, "Sua senha deve conter pelo menos 6 dígitos.")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async clientData => {
    try {
      const {data} = await toast.promise(
        api.post("sessions", {
          email: clientData.email,
          password: clientData.password
        }), {
        pending: "Verificando dados...",
        success: "Seja bem vindo(a)",
        error: "Verifique email e senha!"
      }
      );


    putUserData(data)
        

      setTimeout(() => {

          if(data.admin){
            history.push("/pedidos")
          }else{
            history.push("/")

          }


      
        
      }, 1000);

   
    

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Login-Image" />
      <ContainerItens>
        <img src={Logo} alt="Logo" />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input type="password" {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit">Entrar</Button>
        </form>
        <SignInLink>Não possui conta? <Link to="/cadastro">Sign Up</Link></SignInLink>
      </ContainerItens>
    </Container>
  );
}

