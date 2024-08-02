import express from "express";
const servidor = express()


  servidor.get('/calcular/soma/:n1/:n2', (req, resp) => { 
      let n1 = Number(req.params.n1);
      let n2 = Number(req.params.n2);

      let resul = n1 * n2

      resp.send('a soma é '+ resul)
  })

  servidor.listen(5050,()=> console.log('o servidor subiu na porta 5050 '))

