import TypeEnum from '@/types/enum/TypeEnum';
import Type from '@/types/class/Type';

const TypeMap = new Map([
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
  [TypeEnum.GHOST, new Type(TypeEnum.GHOST, '幽灵', 'ghost')],
  [TypeEnum.DRAGON, new Type(TypeEnum.DRAGON, '龙', 'dragon')],
  [TypeEnum.DARK, new Type(TypeEnum.DARK, '恶', 'dark')],
  [TypeEnum.STEEL, new Type(TypeEnum.STEEL, '钢', 'steel')],
  [TypeEnum.FAIRY, new Type(TypeEnum.FAIRY, '妖精', 'fairy')],
]);

export default TypeMap;
