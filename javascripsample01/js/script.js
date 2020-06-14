// function abc () {
//     document.getElementById("dome").innerHTML = Boolean (10>9);

//true값은 반환해줌.





// $(function() {
//     $('.text').css("color","red");
// });
// $(function() {
//     $('.text').click("color","red");
// });   //글씨를 클릭했을때 글씨가 레드로 바뀜.
// $(function() {
//     $('.text').click("color","red").css('fontsize','50px');
// }); 

// jquery는 $로 시작함.



// $(function () {
//     var items = $("li");
//     // <li> 요소를 모두 선택하여 변수 items에 저장함.
//     $("button").on("click", function () {
//         $('len').text("저장된 <li>요소의 총 개수는" + items.length + "개입니다.");
//     });
// });
 //  >> 위 소스는 이런게있구나 알고만 있으면됨.



//  $(function () {
//      var abc= $("li");
//      $('button').click(function() {
//          $('#len').text("저장된 li 요소의 총 개수는"+abc,length+"개입니다.");
//      });
//  });
//  //function이라는 안에서만 작동하는 소스임.



// $(function () {
//     var abc= $ ("li");
//     $('button').click(function(){
//         $('#len').append("추가해주세요<br>");
//     });
// });


// $(function () {
//     $('button').click(function(){
//         $('#list').append("<li>li요소를 추가하겠습니다.");
//     });
// });
        // //append >> 추가하는것
        // //prepend >> 기준점을 앞에두고 앞에 추가하는것








        // -----여기서부터는 html/css 작성한 작업물------

        //  -----sample 02-------

        // $(function () {
        //     $('button').on("click", function() {
        //         $("#firstRow".before("<tr><td>새로운행이에요!</tr></td>");
        //     });
        // });


        // $(function () {
        //     $('button').on("click", function() {
        //         $("#firstRow".after("<tr><td>새로운행이에요!</tr></td>");
        //     });
        // });


        // $(function () {
        //     $('button').on("click", function() {
        //         $("<td>새로운 셀이에요!</td>").inserBefore('#target');
        //     });
        // });
        
        // before 바로 앞
        // after 바로 뒤
        //insetBefore 지정방식
        //inserAfter




        //  -----sample 03-------

        // $ (function () {
        //     $("button").on("click", function() {
        //         // class가 "contant"인 각 요소를 포함하는 새로운 요소를 추가함.
        //         $(".contant").wrap("<div class='wrapper'></div>");
        //     });
        // });





        //  -----sample 04-------

        $(function(){
            $('#btn01').click(function(){
                $('#wrap').fadeOut('fast');
            });
            $('#btn02').click(function(){
                $("#wrap").stop().fadeIn(3000);
            });
        });

        // 3000은 3초. 그러나 빠른걸 선호하기때문데 초값은 대부분 사용하지않음.
        // fast/slow 넣을시 속도감 달라짐.
        //.stop을 fadeIn 등의 앞에 붙이면 여러번작업되지않고 한번만됨. 중복작업방어함.


        // 1 .fadeIn()   >> 버튼누를 시 나타남.
        // 2 .fadeOut()  >> 버튼누를 시 사라짐.
        // 3 .fadeTo()
        // 4 .fadeToggle()


        // $(function () {
        //     $('#btn01').click(function() {
        //         $('#wrap').css("left","200px");
        //});
        //     $("#btn02").click(function() {
        //         $('#wrap').css("top","200px");
        // });
        // });


        $(function () {
            $('#btn01').click(function() {
                $('#wrap').slidUp();
            });
            $("#btn02").click(function() {
                $('#wrap').slidDown();
            });
        });