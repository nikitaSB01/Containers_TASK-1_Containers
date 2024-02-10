// прописать import все файлы JS
import Character from '../Character';
import Team from '../set';
// начать тесты

test('Создание новой команды Team', () => {
  const newTeam = new Team('KTM');
  const result = { name: 'KTM', members: new Set() };
  expect(newTeam).toEqual(result);
});

