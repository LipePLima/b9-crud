import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
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
} from "../../assets/style/form.jsx";

export default function Registratio() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required("Nome de usuário obrigatório"),
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

  const submit = (data) => {
    try {
      setLoading(true);
      axios.post("http://localhost:3001/v1/user", data);
      toast.success("Cadastro realizado com sucesso");
    } catch (e) {
      toast.error("Cadastro mal sucessido");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };


  const backToLogin = (e) => {
    e.preventDefault()
    navigate("/");
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit(submit)}>
        {loading && <Loading>Carregando...</Loading>}
        {!loading && (
          <>
            <Title>Faça seu Cadastro</Title>
            <Div>
              <InputComponent
                register={register}
                name={"Usuário"}
                type={"name"}
                errors={errors}
              />
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

              <Button type="submit">Cadastre-se</Button>
              <ButtonBack onClick={backToLogin}>Fazer Login</ButtonBack>
            </Div>
          </>
        )}
      </Form>
    </Section>
  );
}
