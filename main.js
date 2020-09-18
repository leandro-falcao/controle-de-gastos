/* funçao global
dentro de uma funçao arrow
 */
(()=>{

  /* ul que vai receber as li
  filhas que vai ficar os valores
   */
  const trasactionUl = document.querySelector('#transactions')
  
  /* paragrafo pra valor total dos
  recebimentos da renda 
  */
  const incomeDislay = document.querySelector("#money-plus")

  /* paragrafo inseria valor total despesas
   */
  const expenseDislay = document.querySelector("#money-minus")
  
  /* h2 com valor de balanço 
  ou seja o saldo 
  */
  const balanceDislay = document.querySelector("#balance")

  /* pegando o form */
  const form = document.querySelector('#form')
  
  const inputTransactionName = document.querySelector('#text')
  const inputTransactionAmout = document.querySelector('#amount')



  const dummyTransactions = [
    {
      id: 1,
      name: 'bolo',
      amount: -20
    },
    {
      id: 2,
      name: 'salario',
      amount: 300
    },
    {
      id: 1,
      name: 'torta de frango',
      amount: -10
    },
    {
      id: 1,
      name: 'freelas',
      amount: 150
    },
  ]

  const addTrasactionIntoDom = (transaction) => {
    const operator = transaction.amount < 0 ? '-' : '+';
    
    const classCss = transaction.amount < 0 ? 'minus' : 'plus';
    
    const cssClass = transaction.amount < 0 ? 'minus' : 'plus';

    const classPlus = transaction.amount > 0 ? 'plus' : "minus";

    const amountWidthOutOperator = Math.abs(transaction.amount)

    /* li que vai tras os itens
    de receita ou de gastos
     */
    const li = document.createElement('li')

    /* adicionando um classe de acordo  sem é renda
    ou se despesas
     */
    li.classList.add(classCss)
  
    /*  li.innerHTML = `
      ${transaction.name} <span>${operator} R$ ${amountWidthOutOperator}</span><button class="delete-btn">x</button>
      ` */

    li.insertAdjacentHTML("beforeend", `
        ${transaction.name} 
        <span>
          ${operator} 
          R$ 
          ${amountWidthOutOperator}
        </span>
        
        <button class="delete-btn">x</button>
        `
    )

    trasactionUl.append(li)

    {/* <li class="minus">
    Salário <span>-$400</span><button class="delete-btn">x</button>
  </li> */}
  }

  const updateBalancesValues = () =>{

    /* variavel vai usar o map
    para pegar o valor da transacao
    seja uma renda ou um gasto */
    const transactionsAmount = dummyTransactions
        .map(transaction => transaction.amount)
    
    /* operaçao com gastos e renda
    ou seja o valor do saldo 
    */
    const total = transactionsAmount
        .reduce( (accumulator, transaction) => (
                accumulator + transaction), 0 )
        .toFixed(2) 

    /* soma toda renda acumulada */
    const income = transactionsAmount
        .filter(value => value > 0)
        .reduce((accumulator, value)=> accumulator + value, 0)
  

    /* somar todas as despesas acumuladas */
    const expense = Math.abs(transactionsAmount
        .filter(value => value < 0)
        .reduce((acumulador, valorPorIndice)=>(
          acumulador + valorPorIndice ), 0))
        .toFixed(2) 

    
    
  balanceDislay.textContent = `R$ ${total}`

  incomeDislay.textContent = `R$ ${income}`
  
  expenseDislay.textContent = `R$ ${expense}`    

  }

  /* funçao que invoca as demais
  com um loop feito no foreach
   */
  const init = () =>{
    dummyTransactions.forEach(addTrasactionIntoDom )
    updateBalancesValues()
  }
  init()


  const generateID = () => Math.round(Math.random() * 1000)


  form.addEventListener('submit', event => {
    event.preventDefault()
    
    const transactionName = inputTransactionName.value.trim()
    const transactionAmount = inputTransactionAmout.value.trim()
    
    console.log(inputTransactionName);
    
    if (transactionName === '' || transactionAmount === '') {
      
      console.log('prewnxha o cvalor do inputa');
      // alert('por favor prencha os inputs')
      return
    }
    
    
    const transanction = {id: generateID(), name: transactionName, amount: transactionAmount}
    
    console.log(transanction);
  } )


  
  
  const funText = () => {

    const transactionName = inputTransactionName.value.trim()
    const transactionAmount = inputTransactionAmout.value.trim()
    
    // console.log('deu certo')
 
    if (transactionName === '') {

      
      const formControleName = document.querySelector('.form-control label')
        formControleName.insertAdjacentHTML('afterend', 
          `<p class="prencha-corretamente"> 
            **campo obrigatorio prencha por favor todos os campos obrigatórios**
          </p>
          `
        )
      return
    }
  }  




  let textNode = "Water agua"

  const botaoAdd = document.querySelector('#pai-btn') 
      .children[0];

  const filhoBotao = botaoAdd;
  
  // const addClickButton = filhoBotao.addEventListener('click', funText)
  const addClickButton = botaoAdd.addEventListener('click', funText)

  // const textoFilhoButton = filhoBotao.textContent
  const textoFilhoButton = botaoAdd.textContent
  // textoFilhoButton = textNode

    // console.log(textoFilhoButton);
    

})()  /* fim da funçao global */