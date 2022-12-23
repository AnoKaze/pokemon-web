import RegionEnum from '@/types/enum/RegionEnum';
import Region from '@/types/class/Region';

const RegionMap = new Map([
  [RegionEnum.KANTO, new Region(RegionEnum.KANTO, '关都', 'Kanto')],
  [RegionEnum.JOHTO, new Region(RegionEnum.JOHTO, '城都', 'Johto')],
  [RegionEnum.HOENN, new Region(RegionEnum.HOENN, '丰缘', 'Hoenn')],
  [RegionEnum.SINNOH, new Region(RegionEnum.SINNOH, '神奥', 'Sinnoh')],
  [RegionEnum.UNOVA, new Region(RegionEnum.UNOVA, '合众', 'Unova')],
  [RegionEnum.KALOS, new Region(RegionEnum.KALOS, '卡洛斯', 'Kalos')],
  [RegionEnum.ALOLA, new Region(RegionEnum.ALOLA, '阿罗拉', 'Alola')],
  [RegionEnum.GALAR, new Region(RegionEnum.GALAR, '伽勒尔', 'Galar')],
  [RegionEnum.HISUI, new Region(RegionEnum.HISUI, '洗翠', 'Hisui')],
  [RegionEnum.PALDEA, new Region(RegionEnum.PALDEA, '帕底亚', 'Paldea')],
]);

export default RegionMap;
