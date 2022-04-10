export {};

//Record<K,T>

type Prefectures = "Tokyo" | "Osaka" | "Kyoto"

type Covid19Infection = {
  kanji_name:string,
  confirmed_case:number
}

const covid19Japan:Record<Prefectures,Covid19Infection> = {
  Tokyo: {kanji_name:"東京",confirmed_case:1960},
  Osaka: {kanji_name:"大阪",confirmed_case:196},
  Kyoto: {kanji_name:"京都",confirmed_case:19},
  // Nara: {kanji_name:"京都",confirmed_case:19},
}