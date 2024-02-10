export default class Character {
  constructor(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка. Допускаются только имена длиной от 2 символов и не более 10');
    }
    this.name = name;
    this.level = 1;
    this.health = 100;
  }
}
