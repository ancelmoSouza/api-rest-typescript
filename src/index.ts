import { server } from './server/Server';


server.listen(process.env.PORT || 3333, () => {
  console.log(`Server Rodando na pota ${process.env.PORT || 3333}`)
});