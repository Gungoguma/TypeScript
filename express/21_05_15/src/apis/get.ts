import express from 'express';

const router = express.Router(); //API를 분리할 수 있음

router.get('/', (req, res) => { 
    //req는 브라우저가 서버에 요청했을 때 그 정보 res는 서버가 브라우저에 응답할 때 정보
    //res는 서버가 브라우저에 응답할 때 정보
    //ex 사용자 ip 같은걸 얻으려면 req 서버가 결과를 알려줄 때 res
    
    //200 : 성공 / 404 : 찾을 수 있음 / 401 : 권한 없음 / 400 : API 사용방법이 잘못됨 / 500 : 서버 오류
        res.sendStatus(500);
    });
    
router.get("/name", (req, res) => {
    res.status(200).json({
        name : "사람이다",
    });
});

router.get("/name/:nickname", (req, res) => {
const { nickname } = req.params;
    res.status(200).json({
        name : nickname,
    });
});

router.get("/age", (req, res) => {
    const { age } = req.query;

    const inputAge = age ? age.toString() : "";
    //toString를 해야 완벽한 srting가 됨
    
        res.status(200).json({
            age: parseInt(inputAge) || "잘못된 형식",
        });
    });
    

export default router;