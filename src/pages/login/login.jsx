import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import InputComponent from "../../components/input.jsx";
import {
  Section,
  Form,
  Button,
  Div,
  Title,
  ButtonBack,
  Loading,
} from "../../assets/style/form";

export default function Login() {
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup
      .string()
      .email("Formato de email incorreto")
      .required("Email obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo de 6 caracteres")
      .max(16, "Máximo de caracteres atingido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const login = async (data) => {
    try {
      const response = await axios.get("http://localhost:3001/v1/user", data);
    } catch (e) {
      console.log(e);
    }
  };

  const goRegitration = (e) => {
    e.preventDefault();
    navigate("/registration");
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit(login)}>
        <Title>Faça seu Login</Title>
        <Div>
          <InputComponent
            register={register}
            name={"Email"}
            type={"email"}
            errors={errors}
          />
          <InputComponent
            register={register}
            name={"Senha"}
            type={"password"}
            errors={errors}
          />
          <Button type="submit">Fazer Login</Button>
          <ButtonBack onClick={goRegitration}>Cadastre-se</ButtonBack>
        </Div>
      </Form>
    </Section>
  );
}
