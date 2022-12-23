import Stat from '@/types/class/Stat';
import Type from '@/types/class/Type';

export default class Pokemon {
  id: number;
  nationalId: string;
  paldeaId: string | null;
  name: string;
  type1: Type;
  type2?: Type;
  base?: Stat;
  ivs?: Stat;
  evs?: Stat;

  constructor(id: number, nationalId: string, paldeaId: string | null, name: string, type1: Type, type2?: Type, base?: Stat, ivs?: Stat, evs?: Stat) {
    this.id = id;
    this.nationalId = nationalId;
    this.paldeaId = paldeaId;
    this.name = name;
    this.type1 = type1;
    this.type2 = type2;
    this.base = base;
    this.ivs = ivs;
    this.evs = evs;
  }
}
