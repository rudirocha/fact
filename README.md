# fact

> An electron-vue project

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


# lint all JS/Vue component files in `src/`
npm run lint

```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).


```
referência (numero interno da fatura),
data de emissão,
 data de pagamento,
 responsável,
  tipo de movimento (caixa, tb, cartão ou por pagar),
  entidade,
  descrição,
   entrada e saída,
    codigo da demonstraçao de resultados,
     codigo do cash flow,
      codigo do mes (automaticamente definido pelo mes da data de emissao),
      saldo e notas
```
