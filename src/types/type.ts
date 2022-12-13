export enum TypeEnum {
  NORMAL = 1,
  FIRE,
  WATER,
  ELECTRIC,
  GRASS,
  ICE,
  FIGHTING,
  POISON,
  GROUND,
  FLYING,
  PSYCHIC,
  BUG,
  ROCK,
  GHOST,
  DRAGON,
  DARK,
  STEEL,
  FAIRY,
}

export default class Type {
  id: TypeEnum;
  name: string;
  tag: string;
  eff?: number[];
  res?: number[];

  constructor(id: TypeEnum, name: string, tag: string, eff?: number[], res?: number[]) {
    this.id = id;
    this.name = name;
    this.tag = tag;
    this.eff = eff;
    this.res = res;
  }
}
