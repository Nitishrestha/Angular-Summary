function doSomething(){
    for(var i = 0;i < 5; i++){
        console.log(i);
    }
    console.log("Finally i : "+i);
}
doSomething();

let a : String;
let b : Number;
let c : any;
let d : number[] = [1,2,3];

enum Color { RED, GREEN, BLUE}
let backGroundColor : Color;
backGroundColor = Color.BLUE;

let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');
