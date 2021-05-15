import express from 'express';
import Get from "./apis/get";

const app = express();

app.use(Get);


//서버 시작 숫자는 포트번호(보통 8080) 코드 구현하고 쓰기
app.listen(8080, () => { //성공하면 콜백
    console.log("Start server");
});