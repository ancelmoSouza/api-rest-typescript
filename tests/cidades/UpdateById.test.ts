import { StatusCodes } from "http-status-codes";

import { testServer } from "../jest.setup";


describe('Cidades - UpdateById', () => {
  it('Atualiza registro existente', async () => {
    const res1 = await testServer.post('/cidades').send({ nome: 'Quixada' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resAtualizada = await testServer.put(`/cidades/${res1.body}`).send({ nome: 'Madalena' });

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  })
  it('Atualiza registro que nao existe', async () => {
    const resAtualizada = await testServer.put(`/cidades/99999`).send({ nome: 'Madalena' });

    expect(resAtualizada.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
  })
});