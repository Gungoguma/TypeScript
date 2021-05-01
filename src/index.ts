//node ./dist/index.js

const a:number = 1; //:뒤에 타입 지정
const b = 1; //타입 추론

//------------------------------------------------------------------

//Record로 object 타입 표현 가능
//Recore<T1, T2>
//T1 = 키 T2 = 값
const c: Record<"a" | "b" | "c", number> = {
    a: 1,
    b: 2,
    c: 3,
};

//------------------------------------------------------------------

//Union Type "a" | "b" | "c"면 abc만 사용 가능
//Type 키워드로 간소화 가능
type ABC = "a" | "b" | "c";

const d: Record<ABC, number> = {
    a: 1,
    b: 2,
    c: 3,
};

//npm install --global ts-node / ts+node느낌 컴파일(빌드)없이 바로 실행할 수 있음

//------------------------------------------------------------------


//interface로 object 구조를 결정할 수 있음
interface Test {
    a : number; //readonly를 붙이면 e.a = 100 같은걸로 못 바꿈
    readonly b : number;
    readonly c : number;
}

const e : Readonly<Test> = { //여기에 Readonly를 넣으면 모든 속성을 readonly로 바꿔줌
    a : 1,
    b : 2,
    c : 3
};

//------------------------------------------------------------------

const f : Omit<Test, "b"> = { //Omit<T, V> 타입을 이용해 원본 타입에서 속성을 없앨 수 있음
    a : 1,
    c : 3
};

//------------------------------------------------------------------

interface TT {
    d? : number; //? 연사자를 통해 해당 속성을 필수가 아닌 선택으로 만들어줌
    e? : number;
}

const g : TT = {
    d : 1
}

//------------------------------------------------------------------

//함수
const func = (a : string) => { //타입에 unknown 사용하면 모든 타입 사용가능
    console.log(a);
}

// func("안녕")

const func2 = (a : string):string => { //반환할게 있으면 파라미터 뒤에 :타입 (반환할게 없으면 void)
    console.log(a);
    return a;
}

// func2("안녕하")

const func3 = (a : unknown | undefined | null):unknown => { //union과 Optional 연산자 사용 가능
    console.log(a);
    return a;
}

// func3(null);

const func4 = (a : unknown):unknown => {
    //인터페이스 해줬으면(사용자가 만든 타입) instanceof
    //원시타입이면 typeof
    if ( a instanceof String) {
        console.log("문자열");
    }
    if ( a instanceof Number) {
        console.log("숫자");
    }
    // if (typeof a === "string") {
    //     console.log("문자열")
    // }
    console.log(a);
    return a;
}

func4("안녕하세");

//------------------------------------------------------------------

const func5 = <T>(a : T) => { //T키워드를 통해 (제네릭이라 함)
    console.log(a);           //함수에서 쓰이는 타입을 사용자가 결정할 수 있음
}                             //선언 후에 쓸때는 func5<T>(형태로 사용)
                              //타입 추론이 가능하면 그냥 해도 됨
                              //반환할때도 <T> 사용 가능
func5<string>("d") 
//extends

const func6 = <T extends string>(a : T) => { //extends 키워드를 통해 제네릭으로 들어오는 타입의 종류를 제한할 수 있음
    console.log(a);
    return a;           
}                             
func6("d")

//------------------------------------------------------------------
interface GenObject<T> { //interface에서도 제네릭 사용 가능(class도 가능)
    readonly name : string;
    readonly about : T;
}

const h: GenObject<boolean> = {
    name : "이름",
    about : true
}

//------------------------------------------------------------------
const i: string[] = ["A", "B", "C"];

const j: GenObject<boolean>[] = [ //배열에 대한 타입은 타입[] 또는 Array<타입>
    {                             //const j: Array<GenObject<boolean>>
        name : "이름",
        about : false
    },
    {
        name : "이름1",
        about : true
    },
]