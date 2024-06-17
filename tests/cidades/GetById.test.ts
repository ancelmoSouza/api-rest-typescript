import { StatusCodes } from "http-status-codes";

import { testServer } from "../jest.setup";
import { describe } from "node:test";


describe('Cidades = GetByid', () => {
  it('Busca Registro por id', async () => {
    const res1 = await testServer.post('/cidades').send({
      nome: 'Quixada',
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer.get(`/cidades/${res1.body}`).send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('nome');
  });

  it('Tenta buscar registro que nao existe', async () => {
    const res1 = await testServer.get('/cidades/99999').send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});