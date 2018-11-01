type account = {
  money: number,
  deposit: (value: number) => void,
}

type user = {
  name: string,
  bankAccount: account,
  hobbies: string[],
}

let bankAccount: account = {
  money: 2000,
  deposit(value: number): void {
    this.money += value
  },
}

let myself: user = {
  name: 'Max',
  bankAccount,
  hobbies: ["Sports", "Cooking"],
}

myself.bankAccount.deposit(3000);
console.log(myself);