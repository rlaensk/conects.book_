//  hidden_nav
$('.hid').click(function () {
    $(this).find('span').css({ backgroundColor: '#fff', color: '#222' });

    $(this).find('span').css({ backgroundColor: '#182c8d', color: '#eee' });
    $(this).siblings().find('span').css({ backgroundColor: '#fff', color: '#222' });

    $('.none').stop().slideUp();
    $(this).find('.none').stop().slideToggle();

});

$('.cli').click(function () {

    $('#hidden_nav').toggleClass('ani');
    if ($('#hidden_nav').hasClass('ani')) {
        $('#hidden_nav').stop().animate({ left: -165 }, 800);
        $('.cli>img').attr({ src: "https://static.conects.com/static/img/conects/common/lnb_icon_open.png" }).css('margin-left', '35px');
    } else {
        $('.cli>img').attr({ src: "https://static.conects.com/static/img/conects/common/lnb_icon_close.png" }).css('margin-left', '0px');
        $('#hidden_nav').stop().animate({ left: 0 }, 500);
    }


});


// benner close
$('.a-close').click(function(){
    $(".benner_img").css('display','none');
});


// slider

let search2;
search2 = ['수험서', '참고서', '영어', '대학교재', '에세이', '자기계발', '종교']
for (let i = 0; i < search2.length; i++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: search2[i] },
        async: false,
        headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
    })
        .done(function (msg) {


            // for문 (8개)
            var sli = document.getElementsByClassName('sim' + i);


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


// on&off

let on = document.getElementsByClassName('on')
$('.on').on('click', function () {
    if ($('.on').text() === 'OFF') {
        $('.on').text('ON');
        $('.on').css({ backgroundColor: '#222' });
        $('.off').text('기능을 켜려면 ON 버튼을 클릭해주세요.')
    } else {
        $('.on').text('OFF');
        $('.on').css({ backgroundColor: ' #bbbbbb' });
        $('.off').text('기능을 끄려면 OFF 버튼을 클릭해주세요.');
    }
});




$('.all1').on('click', function () {
    $('.all_box').css({ opacity: 1, zIndex: 260 });
});

$('.close').click(function () {
    $('.all_box').css({ opacity: 0, zIndex: -50 });
});

// hidden_menu
$('.header_m>li').mouseenter(function () {
    let i = $(this).index();
    console.log(i)
    $('.slider_img').css('z-index', '-1');
    $('.slider_box>div').eq(i).css('opacity', '1').siblings().css('opacity', 0);

});

// form

$('form').on('click', function () {

    $('.seach_mimi').toggleClass('opc');
});


$(function () {
    $('#hidden>div').click(function () {
        $(this).slideToggle();
    });
});

$(function () {
    let page = 0;
    $('.btn>.prev').click(function () {
        page--;
        if (page < 0) {
            page = 0;
            return
        }

        $('.header_m').stop().animate({ marginLeft: -173 * page }, 800);

    });
    $('.btn>.next').click(function () {
        page++;
        if (page > $('.header_m>li').length - 5) {
            page = $('.header_m>li').length - 5;
            return
        }

        $('.header_m').stop().animate({ marginLeft: -173 * page }, 800);


    });
});





// all_box

$('.list2>li').mouseenter(function () {
    let i = $(this).index();

    $('.slider_img').css('z-index', '10')

    $('.slider_img>ul').eq(i).css("opacity", '1').siblings().css("opacity", '0');
});








// today


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나침판" },
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
            var str2 = str.substring(0, 33);

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


// review


$('.prev_r').click(function () {
    $('.rev li:last').prependTo('.rev');
    $('.rev').css('margin-left', -830);
    $('.rev').stop().animate({ marginLeft: 0 }, 800);
});



$('.next_r').on('click', function () {
    $('.rev').stop().animate({ marginLeft: '-830px' }, 800, function () {
        $('.rev li:first').appendTo('.rev');
        $('.rev').css('margin-left', '0');
    });

});



//  sub js


let price_sum = 17550;

$('.price_sum').append(price_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
$('.sum').append(price_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");

// 총 상품금액

$(function () {
    $('.pl').click(function () {
        if ($('.co-v').val() > 999) {
            alert("1000권 초과 구매가 불가능합니다.");
            $('.co-v').val(1000);
        } else {
            $('.co-v').val(parseInt($(".co-v").val()) + 1);
            let sum = parseInt($(".co-v").val() * price_sum);
            $('.price_sum').html(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
        }

    });


    $('.ma').click(function () {
        if ($('.co-v').val() < 2) {
            alert('1권 이상 구매가 가능합니다.');
            $('.co-v').val(2);
        }
        $('.co-v').val(parseInt($('.co-v').val()) - 1);
        let sum = parseInt($('.co-v').val() * price_sum);
        $('.sum').html(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
    });
});

// 
$(function () {
    $('.pl2').click(function () {
        if ($('.b-c').val() > 999) {
            alert("1000권 초과 구매가 불가능합니다.");
            $('.b-c').val(1000);
        } else {
            $('.b-c').val(parseInt($(".b-c").val()) + 1);
            let sum = parseInt($(".b-c").val() * price_sum);
            $('.sum').html(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
        }

    });


    $('.ma2').click(function () {
        if ($('.b-c').val() < 2) {
            alert('1권 이상 구매가 가능합니다.');
            $('.b-c').val(2);
        }
        $('.b-c').val(parseInt($('.b-c').val()) - 1);
        let sum = parseInt($('.b-c').val() * price_sum);
        $('.price_sum').html(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
    });
});



// review-sub
$('.prev').click(function () {
    $('.rev-b:last').prependTo('.re_hidden');
    $('.re_hidden').css('margin-left', -1088);
    $('.re_hidden').stop().animate({ marginLeft: 0 }, 800);
});



$('.next').on('click', function () {
    $('.re_hidden').stop().animate({ marginLeft: '-1088px' }, 800, function () {
        $('.rev-b:first').appendTo('.re_hidden');
        $('.re_hidden').css('margin-left', '0');
    });

});

// adon-sub
$('.ad-prev').click(function () {
    $('.adon-ul>li:last').prependTo('.adon-ul');
    $('.adon-ul').css('margin-left', -165);
    $('.adon-ul').stop().animate({ marginLeft: 0 }, 800);
});



$('.ad-next').on('click', function () {
    $('.adon-ul').stop().animate({ marginLeft: '-165px' }, 800, function () {
        $('.adon-ul>li:first').appendTo('.adon-ul');
        $('.adon-ul').css('margin-left', '0');
    });

});

// adon-sub
$('.ad-prev').click(function () {
    $('.ad-ul2>li:last').prependTo('.ad-ul2');
    $('.ad-ul2').css('margin-left', -165);
    $('.ad-ul2').stop().animate({ marginLeft: 0 }, 800);
});



$('.ad-next').on('click', function () {
    $('.ad-ul2').stop().animate({ marginLeft: '-165px' }, 800, function () {
        $('.ad-ul2>li:first').appendTo('.ad-ul2');
        $('.ad-ul2').css('margin-left', '0');
    });

});


// adon

$('.buy_box>ul>li').click(function () {
    let i = $(this).index();

    $(this).toggleClass('active').siblings().removeClass('active');

    $('.buy_kind').eq(i).siblings().css('display','none');
    $('.buy_kind').eq(i).css('display','flex');
    $('.buy_kind').eq(i).siblings().css('display','none');
   
    console.log(i)


});







// series API
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "모의고사" },
    async: false,
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})
    .done(function (msg) {
        console.log(msg)

        // for문 (8개)
        var divs = document.getElementsByClassName('se-li');
        console.log(divs);

        for (var j = 0; j < divs.length; j++) {




            $('.se-img>a').eq(j).prepend("<img src='" + msg.documents[j].thumbnail + "'/>");


            let tit = msg.documents[j].title;
            let tit2 = tit.substring(0, 29);



            $('.se-img').eq(j).append("<h4>" + tit2 + "</h4>");
            let price = msg.documents[j].sale_price;

            let price2 = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            console.log(price2);
            $('.se-img').eq(j).append("<p>" + price2 + " 원 </p>");


        }

    });

// book-buy1

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나침판" },
    async: false,
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})
    .done(function (msg) {
        console.log(msg)

        $('.book-buy1').prepend("<img src='" + msg.documents[0].thumbnail + "'/>");

        let tit = msg.documents[0].title;
        let tit2 = tit.substring(0, 29);
        $('.book-buy1').append("<h5>" + tit2 + "</h5>");

    });



// book-in


$(function(){
    $.get('./sub.txt/txt1.txt', function(data){
        $('.bok-t').html(data);
    });
});


    // wri-int

    $(function(){
        $.get('./sub.txt/txt2.txt', function(data){
            $('.wri-int').html(data);
        });
    });
    // p-re
      // wri-int

      $(function(){
        $.get('./sub.txt/txt3.txt', function(data){
            $('.p-re').html(data);
        });
    });
    // relevant

  $(function(){
        $.get('./sub.txt/txt4.txt', function(data){
            $('.relevant').html(data);
        });
    });


$('.bok-b').click(function(){
    $('.bok-i').css('height','8130px').css('overflow','visible');
    $(this).css('display','none').siblings('.bok-b2').css('display','block').parents('.gradient_box').css('background','transparent');
});


$('.bok-b2').click(function(){
    $('.bok-i').css('height','500px').css('overflow','hidden');
    $(this).css('display','none').siblings('.bok-b').css('display','block').parents('.gradient_box').css('background','linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 47%, rgba(255,255,255,1) 100%)');
});



// re-유의사항
$('.hidden-op').on({
    mouseenter: function(){
        $('.hidden_text').css('display','block');
    },
    mouseleave: function(){
        $('.hidden_text').css('display','none');
    },

});





// 원클릭메뉴이동

let nav=$('.one');
let click_=$('.r-topic');

nav.click(function(){

let offset=click_.offset().top;
$('html, body').animate({scrollTop:offset},400)
});
 


// all check

$('.ch_b>input').click(function(){
    if($('.ch_b>input').is(':checked')){
        $('.adon-ul>li>input').prop('checked',true);
    }else{
        $('.adon-ul>li>input').prop('checked',false);
    }
});


$('#ac').click(function(){
    if($('.ch_b>input').is(':checked')){
        $('.ad-ul2>li>input').prop('checked',true);
    }else{
        $('.ad-ul2>li>input').prop('checked',false);
    }
});

$('#af').click(function(){
    if($('.ch_b>input').is(':checked')){
        $('.se-ul>li>input').prop('checked',true);
    }else{
        $('.se-ul>li>input').prop('checked',false);
    }
});

// top 버튼
$(function() {
    // 보이기 | 숨기기
    $(window).scroll(function() {
       if ($(this).scrollTop() > 2000) { //250 넘으면 버튼이 보여짐니다.
             $('.up_btn').fadeIn();
             $('.up_btn').css('left', $('#sidebar').offset().left);  // #sidebar left:0 죄표
             } else {
             $('.up_btn').fadeOut();
       }
    });
    // 버튼 클릭시
    $("#toTop").click(function() {   
    $('html, body').animate({
      scrollTop : 0    // 0 까지 animation 이동합니다.
     }, 400);          // 속도 400
     return false;
     });
   });