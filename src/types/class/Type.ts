import TypeEnum from '@/types/enum/TypeEnum';

export default class Type {
  id: TypeEnum;
  name: string;
  tag: string;
  eff: number[];
  res: number[];

  constructor(id: TypeEnum, name: string, tag: string, eff?: number[], res?: number[]) {
    this.id = id;
    this.name = name;
    this.tag = tag;
    this.eff = eff || [];
    this.res = res || [];
  }
}
