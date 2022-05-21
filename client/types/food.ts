export interface IFood {
  pageNo: number | null;
  numOfRows: number | null;
  stdRestCd: string;
  stdRestNm: string;
  lsttmAltrUser: string;
  lsttmAltrDttm: string;
  svarAddr: string;
  routeCd: string;
  routeNm: string;
  seq: string;
  foodNm: string;
  foodCost: string;
  etc: string;
  recommendyn: 'Y' | 'N';
  seasonMenu: '4';
  bestfoodyn: 'Y' | 'N';
  premiumyn: 'Y' | 'N';
  app: 'Y' | 'N';
  restCd: string;
  foodMaterial: string | null;
  lastId: string;
  lastDtime: string;
}
