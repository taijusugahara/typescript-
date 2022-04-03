import axios from 'axios';

export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function(response) {

  interface Article{
    id : number;
    title:string;
    description: string;
  }
  // 外部から取ってくるデータは型から外れていてもエラーにはならないみたい。
  let data: Article[];
  
  data = response.data;
  // data = [
  //   {
  //     id: 10,
  //     title: 'Title for article #10!',
  //     description: 100
  //   }
  // ]
  console.log(data[0].id);
});