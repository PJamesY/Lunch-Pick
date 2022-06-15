export interface IExtractedRestArea {
  routeCode: string;
  routeName: string;
  restAreaName: string;
  restAreaCode: string;
  directionCode: '0' | '1';
}

export interface IRestArea {
  routeCd: string;
  svarAddr: string;
  routeNm: string;
  svarCd: string;
  svarNm: string;
  hdqrCd: string;
  hdqrNm: string;
  mtnofCd: string;
  mtnofNm: string;
  svarGsstClssCd: string;
  svarGsstClssNm: string;
  gudClssCd: string;
  gudClssNm: string;
  pstnoCd: string;
  cocrPrkgTrcn: string;
  fscarPrkgTrcn: string;
  dspnPrkgTrcn: string;
  bsopAdtnlFcltCd: string;
  rprsTelNo: string;
}

export interface IExtractedFood {
  foodName: string;
  isRecommend: 'N' | 'Y';
  isBest: 'N' | 'Y';
  isPremium: 'N' | 'Y';
  price: string;
}

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
