import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";



describe('Cidades - Create', () => {

  it('Cria registro', async () => {

    const res1 = await testServer
      .post('/cidades/')
      .send({ nome: 'Quixada' });


    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

  });
});