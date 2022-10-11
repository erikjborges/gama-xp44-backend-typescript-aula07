import createClientUsecase from "./create.client.usecase";
import { ClientEntity } from "../../entities/clients/client.entity";

test("Teste unitário createClientUsecase", async () => {
    const client: ClientEntity = {
        "cpf": 123456789027,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000"
    };
    expect(await createClientUsecase.execute(client)).toMatchObject(client);
});