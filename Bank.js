class Bank {



    constructor(bankName) {

        this._bankName = bankName;
        this.allCustomers = [];


    }

    newCustomer(customer) {

        const currCustomer = this.allCustomers.find((a) => { return a.firstName === customer.firstName && a.lastName === customer.lastName });

        if (currCustomer) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        } else {

            this.allCustomers.push(customer);

        }

        return customer//`{ firstName: ${customer.firstName}, lastName: ${customer.lastName}, personalId: ${customer.personalId}} `
    }

    depositMoney(personalId, amount) {


        let currCustomer = this.allCustomers.find((a) => { return a.personalId === personalId });

        if (!currCustomer) {
            throw new Error(`We have no customer with this ID!`)
        } else {

            if (isNaN(currCustomer.totalMoney)) {
                currCustomer.totalMoney = amount;
            } else {
                currCustomer.totalMoney += amount;
            }
            if (!Array.isArray(currCustomer.transactions)) {
                currCustomer.transactions = [];
            }
            currCustomer.transactions.push(`${currCustomer.transactions.length + 1}. ${currCustomer.firstName} ${currCustomer.lastName} made deposit of ${amount}$!`);


            return currCustomer.totalMoney + `$`
        }
    }

    withdrawMoney(personalId, amount) {

        let currCustomer = this.allCustomers.find((a) => { return a.personalId === personalId });

        if (!currCustomer) {
            throw new Error(`We have no customer with this ID!`)
        } else {




            if (isNaN(currCustomer.totalMoney)) {
                currCustomer.totalMoney = amount;
            }
            if (!Array.isArray(currCustomer.transactionInfos)) {
                currCustomer.transactionInfos = [];
            }
            if (currCustomer.totalMoney < amount) {
                throw new Error(`${currCustomer.firstName} ${currCustomer.lastName} does not have enough money to withdraw that amount!`);
            } else {
                currCustomer.totalMoney -= amount;



                currCustomer.transactions.push(`${currCustomer.transactions.length + 1}. ${currCustomer.firstName} ${currCustomer.lastName} withdrew ${amount}$!`);




                return currCustomer.totalMoney + `$`;
            }
        }
    }


    customerInfo(personalId) {
        let currCustomer = this.allCustomers.find((a) => { return a.personalId === personalId });

        if (!currCustomer) {
            throw new Error(`We have no customer with this ID!`)
        } else {


            let result = `Bank name: ${this._bankName}\n`;
            result += `Customer name: ${currCustomer.firstName} ${currCustomer.lastName}\n`;
            result += `Customer ID: ${currCustomer.personalId}\n`;
            result += `Total Money: ${currCustomer.totalMoney}$\n`;
            result += `Transactions:\n`

            let reversedTransactions = currCustomer.transactions.reverse();
            reversedTransactions.map(t => result += `${t}\n`);
            return result.trim();

        }
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));
//console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
