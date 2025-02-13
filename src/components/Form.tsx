import { FormEvent, useState } from "react";
import validateCPF from "../lib/validateCPF";


export default function Form() {

  const [cpf, setCpf] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsValid(validateCPF(cpf));
  }

  return (
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            placeholder="Digite o CPF"
        />
        <button type="submit">Validar</button>
        { isValid ? <p>CPF válido</p> : <p>CPF inválido</p> }
      </form>
  )
}
