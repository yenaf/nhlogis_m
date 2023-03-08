$(function(){
    mainInit()
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
})

function mainInit(){
    gnb_menu()
    mainVisual()

}

function gnb_menu(){
    let $allmenu=$('#header .all-menu');
    let $nav=$('#nav');
    let $bg=$('.bg');
    let $close=$('#nav .close')
    let $menua=$('#nav .gnb> li >a')
    

    $allmenu.on('click',function(){
        $nav.addClass('on');
        $bg.addClass('on');
        $('#nav .gnb li ul').stop().hide();
    })

    $close.on('click',function(){
        $nav.removeClass('on');
        $bg.removeClass('on');
    })

    $menua.on('click',function(){
        $('#nav .gnb li ul').stop().slideUp();
        $(this).next().stop().slideToggle();
    })
}

function mainVisual(){
    
}

