class Team {
  constructor(name) {
    this.name = name;
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error(`Персонаж '${member}' уже существует`);
    }
    this.members.add(member);
  }

  addAll(...member) {
    member.forEach((mem) => this.members.add(mem));
  }

  toArray() {
    return Array.from(this.members);
  }
}

export default Team;
