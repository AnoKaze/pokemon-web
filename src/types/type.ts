export enum TypeEnum {
  NORMAL,
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

export class Type {
  private id: TypeEnum;
  private name: string;
  private eff?: Array<number>;
  private res?: Array<number>;

  constructor(id: TypeEnum, name: string, eff?: Array<number>, res?: Array<number>) {
    this.id = id;
    this.name = name;
    this.eff = eff;
    this.res = res;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEff() {
    return this.eff;
  }

  getRes() {
    return this.res;
  }
}
