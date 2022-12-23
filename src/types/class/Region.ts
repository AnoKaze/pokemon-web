import RegionEnum from '@/types/enum/RegionEnum';

export default class Region {
  id: RegionEnum;
  name: string;
  tag: string;

  constructor(id: RegionEnum, name: string, tag: string) {
    this.id = id;
    this.name = name;
    this.tag = tag;
  }
}
