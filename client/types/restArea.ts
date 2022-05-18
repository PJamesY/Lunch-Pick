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
