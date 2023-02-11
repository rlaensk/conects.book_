// slider

// $(function(){
//     $('.hidden>ul>li').on('hover',function(){
//         let ho_li=$(this).index();
//         $(this).


//     })
// });


// slider

let search2;
search2 = ['수험서', '참고서', '외국어', '대학교재', '에세이', '자기계발', '종교']
for(let i = 0; i < search2.length; i++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: search2[i] },
        async: false,
        headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
    })
        .done(function (msg) {


            // for문 (8개)
            var sli = document.getElementsByClassName('sim'+i);


            for (var j = 0; j < sli.length; j++) {


                // let tit = msg.documents[j].publisher;
                // let tit2 = tit.substring(0, 29);

                let con = msg.documents[j].contents;
                let con2 = con.substring(0, 30);

                $('.sim' + i).eq(j).append("<h6>" + msg.documents[j].authors + " <br/> " + "<strong>" + con2 + "...</strong> </h6>");
                $('.sim' + i).eq(j).append("<img src='" + msg.documents[j].thumbnail + "'/>");


            }

        });

};

$('.all1').on('click',function(){
    $('.all_box').css("display","block");
});

$('.close').click(function(){
    $('.all_box').css("display","none");
});


    let li2=$('.list2>li').index();
    for (i = 0; i < li2.length; i++) {
        $('.list2>li').hover(function () {
            let j= $('this').index();
                $('.slider_img>ul[j+1]').css("display","block");
       

        },function(){
            
            $('.slider_img>ul[j+1]').css("display","none");
    
        });

    }

// today


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "행정" },
    async: false,
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})
    .done(function (msg) {


        // for문 (8개)
        var divs = document.getElementsByClassName('to');


        for (var j = 0; j < divs.length; j++) {




            $('.to').eq(j).append("<img src='" + msg.documents[j].thumbnail + "'/>");


            let tit = msg.documents[j].publisher;
            let tit2 = tit.substring(0, 29);

            var str = msg.documents[j].contents;
            var str2 = str.substring(0, 35);

            $(".to1").eq(j).append("<p>" + str2 + "...</p>");

            $('.to1').eq(j).append("<h3>" + tit2 + "</h3>");
            $('.to1').eq(j).append("<h6>" + msg.documents[j].authors + " | " + msg.documents[j].publisher + "</h6>");


        }

    });



// 
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "추론형" },
    async: false,
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})
    .done(function (msg) {


        // for문 (8개)
        var divs = document.getElementsByClassName('pr');


        for (var j = 0; j < divs.length; j++) {




            $('.pr').eq(j).append("<img src='" + msg.documents[j].thumbnail + "'/>");


            let tit = msg.documents[j].publisher;
            let tit2 = tit.substring(0, 29);

            var str = msg.documents[j].contents;
            var str2 = str.substring(0, 37);

            $(".pr1").eq(j).append("<p>" + str2 + "...</p>");

            $('.pr1').eq(j).append("<h3>" + tit2 + "</h3>");
            $('.pr1').eq(j).append("<h6>" + msg.documents[j].authors + " | " + msg.documents[j].publisher + "</h6>");


        }

    });





var search;
search = ["셀러", "자격증", "경제/경영", "성공", "심리", "문학", "어린이"];
for (i = 0; i < search.length; i++) {

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: search[i] },
        async: false,
        headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
    })
        .done(function (msg) {

            console.log(msg);

            // for문 (8개)
            var divs = document.getElementsByClassName('box' + i);


            for (var j = 0; j < divs.length; j++) {




                $('.box' + i).eq(j).append("<a href=#>" + "<img src='" + msg.documents[j].thumbnail + "'/>" + "</a>");
                $('.box' + i).eq(j).append("<h6>" + msg.documents[j].publisher + "</h6>");

                let tit = msg.documents[j].publisher;
                let tit2 = tit.substring(0, 29);

                $('.box' + i).eq(j).append("<h3>" + tit2 + "</h3>");
                $('.box' + i).eq(j).append("<h6>" + msg.documents[j].authors + "</h6>");




            }



        });

}

$(function () {

    $('.books>div').not('div.best').hide();
});


$(function () {

    $('.book_list li').on('click', function () {


        $('.book_list li').removeClass('action');
        $(this).addClass('action');

        $('.books>div').hide();
        let i = $(this).index();

        $('.books>div').eq(i).show();
    });

});


// kind


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "행정" },
    async: false,
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})
    .done(function (msg) {


        // for문 (8개)
        var divs = document.getElementsByClassName('ki');


        for (var j = 0; j < divs.length; j++) {




            $('.ki').eq(j).append("<img src='" + msg.documents[j].thumbnail + "'/>");


            let tit = msg.documents[j].publisher;
            let tit2 = tit.substring(0, 29);



            $('.ki1').eq(j).append("<h3>" + tit2 + "</h3>");
            $('.ki1').eq(j).append("<h6>" + msg.documents[j].authors + " | " + msg.documents[j].publisher + "</h6>");


        }

    });




// new


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "new", sort: " latest" },
    async: false,
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})
    .done(function (msg) {


        // for문 (8개)
        var divs = document.getElementsByClassName('new');


        for (var j = 0; j < divs.length; j++) {




            $('.new').eq(j).append("<img src='" + msg.documents[j].thumbnail + "'/>");


            let tit = msg.documents[j].publisher;
            let tit2 = tit.substring(0, 29);



            $('.new1').eq(j).append("<h3>" + tit2 + "</h3>");
            $('.new1').eq(j).append("<h6>" + msg.documents[j].authors + " | " + msg.documents[j].publisher + "</h6>");


        }

    });


// key_menu

$(function () {
    $('.prev_').on('click', function () {
        $('.key_ul li:last').prependTo('.key_ul');
        $('.key_ul').css('margin-left', -1903);
        $('.key_ul').stop().animate({ marginLeft: 0 }, 1500);


    });

    $('.next_').on('click', function () {
        $('.key_ul').stop().animate({ marginLeft: '-1903px' }, 1500, function () {
            $('.key_ul li:first').appendTo('.key_ul');
            $('.key_ul').css('margin-left', '0');
        });

    });
});

