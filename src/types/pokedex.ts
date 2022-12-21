import Type from './type';

export default interface Pokedex {
  regionalId: number;
  nationalId: number;
  formId: string;
  name: string;
  subName: string;
  type1: Type;
  type2?: Type;
}
