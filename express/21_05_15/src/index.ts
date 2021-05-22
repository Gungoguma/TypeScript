import express from 'express';
import NameApi from "./apis/name";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : false })); //해석 라이브러리 내장 : flase 외장 : true
app.use(NameApi);


//서버 시작 숫자는 포트번호(보통 8080) 코드 구현하고 쓰기
app.listen(8080, () => { //성공하면 콜백
    console.log("Start server");
});