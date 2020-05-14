var question1 = +prompt('Ваш бюджет?');
var question2 = prompt('Название вашего магазина?');
var question3 = prompt('Какой тип товаров будем продавать?');
var question4 = prompt('Какой тип товаров будем продавать?');
var question5 = prompt('Какой тип товаров будем продавать?');
var mainList = {
    budget: question1,
    storeName: question1,
    shopGoods: [question3, question4, question5],
    employers: {
        worker1: 'Сonsultant',
        worker2: 'Seller'
    }
}
console.log(mainList.shopGoods)
alert(mainList.budget / 30)