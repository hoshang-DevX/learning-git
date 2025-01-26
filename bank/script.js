         // Creating a Bank Class    with deposit()  and  eithdraw() mehtods

         class Bank {
            constructor( balance){
                this.balance = balance
            }
        
            deposit(amount){
                this.balance += amount
                console.log (` After depositing Rs.${amount} total Balance is Rs.${this.balance}`)
            }
        
            withdraw(amount){
                if(this.balance <= 0){
                    this.balance -= 0
                    console.log( 'insufficient Balance !!')
                }
                else{
                this.balance -= amount
                console.log(` After withdrawing Rs. ${amount} Total Balance is Rs.${this.balance}`)
                }
            }
        
            showBalance(account){
                console.log( `Balance of ${account} is : ${this.balance}`)
            }
        
        }
        
        const account_1 = new Bank (2000)
        const account_2 = new Bank (4000)
      
        
        const depositButton = document.getElementById('deposit')
        const withdrawButton = document.getElementById('withdraw')
        const amountInput = document.getElementById('amountInput')
        const balanceDiv = document.getElementById('balance')

        depositButton.onclick =() => {
            account_1.deposit(Number(amountInput.value))
            balanceDiv.innerText = `Balance : ${account_1.balance}`
            console.log(amountInput.value)
        }

        withdrawButton.onclick = () => {
            account_1.withdraw(Number(amountInput.value))
            balanceDiv.innerText = `Balance : ${account_1.balance}`
        }