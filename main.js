/* funçao global
dentro de uma funçao arrow
 */
(()=>{

  /* ul que vai receber as li
  filhas que vai ficar os valores
   */
  const trasactionUl = document.querySelector('#transactions')
  

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
      name: 'violao',
      amount: 150
    },
  ]

  const addTrasactionIntoDom = (transaction) => {
    const operator = transaction.amount < 0 ? '-' : '+';
    
    const classCss = transaction.amount < 0 ? 'minus' : 'plus';
    
    const cssClass = transaction.amount < 0 ? 'minus' : 'plus';

    const classPlus = transaction.amount > 0 ? 'plus' : "minus";

    const amountWidthOutOperator = Math.abs(transaction.amount)

    const li = document.createElement('li')

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
    
    const transactionsAmount = dummyTransactions
            .map(transaction => transaction.amount)
    
    const total = transactionsAmount
            .reduce( (accumulator, transaction)=> accumulator + transaction, 0 )
                      .toFixed(2) 
  
    const income = transactionsAmount
            .filter(value => value > 0)
                  .reduce((accumulator, value)=> accumulator + value, 0)

    console.log(income);
  }

  /* funçao que invoca as demais
  com um loop feito no foreach
   */
  const init = () =>{
    dummyTransactions.forEach(addTrasactionIntoDom )
    updateBalancesValues()
  }
  init()

})()  /* fim da funçao global */