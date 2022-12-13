import Stat from '@/types/stat';
import Type from '@/types/type';

export default class pokemon {
  id: number;
  nationalId: number;
  paldeaId: number | null;
  name: string;
  type1: Type;
  type2: Type;
  base?: Stat;
  ivs?: Stat;
  evs?: Stat;

  constructor(id: number, nationalId: number, paldeaId: number | null, name: string, type1: Type, type2: Type, base?: Stat, ivs?: Stat, evs?: Stat) {
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
