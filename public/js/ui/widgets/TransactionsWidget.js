/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    this.element = element;
    this.registerEvents();

    if (!element) {
      throw new Error('Элемент не был найден!');
    }
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
      const incomeButt = this.element.querySelector('.create-income-button');
      incomeButt.addEventListener('click', () => {
        App.getModal('newIncome').open();
      })

      const expenseButt = this.element.querySelector('.create-expense-button');
      expenseButt.addEventListener('click', () => {
        App.getModal('newExpense').open();
      })
  }
}
