var imgArray = new Array();
imgArray[0] = "images/img1.jpg";
imgArray[1] = "images/img2.jpg";
imgArray[2] = "images/img3.jpg";
imgArray[3] = "images/img4.jpg";


function showImage(){
    var imgNum = Mach.round(Mach.random()*3);
    var objImg = document.getElementById("introImg");
    objImg.src = imgArray [imgNum];
}
//function은 예약어. 아직 보여줄대상물이 아니어서.
//body에 onLoad로 id값을 주고 띄어주면됨. >> 메인배너 랜덤으로 바뀌는 형식임.


//-----------------------------------------------//


// var date = new Date ();
// var days = ["일","월","화","수","목","금","토"];

// document.write("오늘은" + days[date.getDay]+"요일입니다.");

//아래 스위치문은 거의 안쓰고 이런식으로 배열로 자주이용하고 더 편하다고함. 스위치문과 배열은 완전 다름.



// var strKor = "한글";
// var strEng = "abcABC";
// document.write(strKor.length+"<br>"); // 2
// document.write(strEng.length+"<br>"); // 6
// //length는 글자길이 , 수를 의미.



// document.write(Math.min()+ "<br");
// document.write(Math.min(1, 10, -100,-10, 1000, 0) + "<br>");
// document.write(Math.min(1, 1., -100, -10, "-1000", 0) + "<br>");
// document.write(Math.min(1,10,-100,-10, "문자열", 0));



// document.getElementById("demo1").innerHTML = Math.PI;

// document.getElementById("demo2").innerHTML = Math.round(4.4);
// //round는 외워둬야함.

// document.getElementById("demo4").innerHTML = Math.max(1,10,100,1000,10000);

// document.getElementById("demo5").innerHTML=Math.random();




// //인수로 전달받은 값과 같거나 작은 수 중에서 가장 큰 정수
// document.write(Math.floor(10.95)+"<br>"); //10
// document.write(Math.floor(11.01)+"<br>"); // 11
// document.write(Math.floor(-10.95)+"<br>"); //-11
// document.write(Math.floor(-11.01)+"<br>"); //-12

// //인수로 전달받은 값과 같거나 큰 수 중에서 가장 작은 정수
// document.write(Math.ceil(10.95)+"<br>"); //11
// document.write(Math.ceil(11.01)+"<br>"); // 12
// document.write(Math.ceil(11)+"<br>"); // 11
// document.write(Math.ceil(-10.95)+"<br>"); //-10
// document.write(Math.ceil(-11.01)); //-11




// var date = new Date ();
// switch (date.getDay()) { // 현재 요일을 반환함. 스위치문은 많이 사용하지 않긴함.
//     case 0;
//         day = "일";
//         break;
//     case 1;
//         day ="월";
//         break;
//     case 2;
//         day ="화";
//         break;
//     case 3;
//         day ="수";
//         break;
//     case 4;
//         day ="목";
//         break;
//     case 5;
//         day ="금";
//         break;
//     case 6;
//         day ="x토";
//         break;
//     }

//      //요일,월 등 무조건 숫자값으로 반환. 요일 0~6.
    
//     document.write("오늘은"+day+"요일 입니다.");
//     document.getElementById("toDay").innerHTML = day;