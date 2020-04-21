'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,

    expenses: {
    costItem: prompt("Введите обязательную статью расходов в этом месяце"),
    sumItem: prompt("Какая сума расходов?")
        },

    optionalExpenses: {},
    income: [],
    savings: false
}


alert(`Ваш бюджет ${appData.budget} грн!`);
alert(`Дата рождения ${appData.timeData}`);
alert(`Вы тратите на ${appData.expenses.costItem} : ${appData.expenses.sumItem} грн!`);
alert(`В день это ${appData.expenses.sumItem / 30} грн!`);