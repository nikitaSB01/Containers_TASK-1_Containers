// прописать import все файлы JS
import Character from '../Character';
import Team from '../set';
// начать тесты
const player = new Character('Niki');
test('class Character', () => {
  expect(player).toEqual({
    name: 'Niki',
    level: 1,
    health: 100,
  });
});
test('Неверное имя', () => {
  expect(() => new Character('R', 'Undead')).toThrow();
});

const newTeam = new Team('KTM');
test('Создание новой команды Team', () => {
  const result = { name: 'KTM', members: new Set() };
  expect(newTeam).toEqual(result);
});

const team = new Team('Reya');
const unit1 = new Character('warrior');
team.add(unit1);
test('Добавление нового игрока методо add', () => {
  const result = {
    name: 'Reya',
    members: new Set([{
      name: 'warrior',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('Ошибка на добавление нового игрока методом add', () => {
  expect(() => team.add(unit1)).toThrow();
});

test('Добавление нескольких пресонажий', () => {
  const unit2 = new Character('igor');
  const unit3 = new Character('vany');
  team.addAll(unit2, unit3);
  const result = {
    name: 'Reya',
    members: new Set([{
      name: 'warrior',
      level: 1,
      health: 100,
    }, {
      name: 'igor',
      level: 1,
      health: 100,
    }, {
      name: 'vany',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('Вывод инфы о персонажах в масиве', () => {
  const res = [
    {
      name: 'warrior',
      level: 1,
      health: 100,
    }, {
      name: 'igor',
      level: 1,
      health: 100,
    }, {
      name: 'vany',
      level: 1,
      health: 100,
    }];
  expect(team.toArray()).toEqual(res);
});
