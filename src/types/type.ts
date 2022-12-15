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

export const TypeList = new Map([
  [TypeEnum.NORMAL, new Type(TypeEnum.NORMAL, '一般', 'normal')],
  [TypeEnum.FIRE, new Type(TypeEnum.FIRE, '火', 'fire')],
  [TypeEnum.WATER, new Type(TypeEnum.WATER, '水', 'water')],
  [TypeEnum.ELECTRIC, new Type(TypeEnum.ELECTRIC, '电', 'electric')],
  [TypeEnum.GRASS, new Type(TypeEnum.GRASS, '草', 'grass')],
  [TypeEnum.ICE, new Type(TypeEnum.ICE, '冰', 'ice')],
  [TypeEnum.FIGHTING, new Type(TypeEnum.FIGHTING, '格斗', 'fighting')],
  [TypeEnum.POISON, new Type(TypeEnum.POISON, '毒', 'poison')],
  [TypeEnum.GROUND, new Type(TypeEnum.GROUND, '地面', 'ground')],
  [TypeEnum.FLYING, new Type(TypeEnum.FLYING, '飞行', 'flying')],
  [TypeEnum.PSYCHIC, new Type(TypeEnum.PSYCHIC, '超能力', 'psychic')],
  [TypeEnum.BUG, new Type(TypeEnum.BUG, '虫', 'bug')],
  [TypeEnum.ROCK, new Type(TypeEnum.ROCK, '岩石', 'rock')],
  [TypeEnum.GHOST, new Type(TypeEnum.GHOST, '鬼', 'ghost')],
  [TypeEnum.DRAGON, new Type(TypeEnum.DRAGON, '龙', 'dragon')],
  [TypeEnum.DARK, new Type(TypeEnum.DARK, '恶', 'dark')],
  [TypeEnum.STEEL, new Type(TypeEnum.STEEL, '钢', 'steel')],
  [TypeEnum.FAIRY, new Type(TypeEnum.FAIRY, '妖精', 'fairy')],
]);
