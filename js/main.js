$(function () {

    $('.main_slide').slick({
        // 슬라이드 형식 변환
        arrows: false,
        // 버튼없애기
        // fade: true,
        // 흐려졌다가 나타나기
        autoplay: true,
        // 자동으로 다음번호 넘어가기
        pauseOnHover: false,
        // 마우스 올리면 넘어가는
        pauseOnFocus: false,
        // 클릭했을때 멈추는
    });

    $('.main_visual .dots li').on('mouseenter', function () {
        // 내가 클릭한 요소의 번호를 알려주는
        let idx = $(this).index();
        // idx는 class 같은 이름 붙혀주는것
        // 클릭한 이것this의 번호를 가져와 하는것
        console.log(idx);
        $('.main_slide').slick('slickGoTo', idx, true)
        // 버튼별로 눌렀을때 페이지 넘어가게 하는것
    });


    // <클릭하면 왼쪽으로 슬라이딩 하는법>
    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    // <클릭하면 오른쪽 다음으로 슬라이딩 하는법>
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    })
});