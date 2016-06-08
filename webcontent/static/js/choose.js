/**
 * Created by Administrator on 2016-06-06.
 */
//
//  /*
// title : 基于JQ的选项卡组件
//
// Options : event   delay
//
// Methods : nowSel()   getContent()
//
// Events : beforeClick  afterClick
// */
//
//
////jQ中的主动触发 : trigger()
//
//$(function(){
//
//    var t1 = new Tab();
//    t1.init('div1',{});
//
//    var t2 = new Tab();
//    t2.init('div2',{
//        event : 'mouseover'
//    });
//
//    var t3 = new Tab();
//    t3.init('div3',{
//        event : 'mouseover',
//        delay : 200
//    });
//
//    var t4 = new Tab();
//    t4.init('div4',{});
//    t4.nowSel(2);
//
//    $('#input1').click(function(){
//
//        alert( t4.getContent() );
//
//    });
//
//    $(t4).on('beforeClick',function(){
//        alert( t4.getContent() );
//    });
//
//    $(t4).on('afterClick',function(){
//        alert( t4.getContent() );
//    });
//
//});
//
//function Tab(){
//
//    this.oParent = null;
//    this.aInput = null;
//    this.aDiv = null;
//    this.iNow = 0;
//
//    this.settings = {  //默认参数
//        event : 'click',
//        delay : 0
//    };
//}
//
//Tab.prototype.init = function(oParent , opt){
//
//    $.extend( this.settings , opt );
//
//    this.oParent = $('#'+oParent);
//    this.aInput = this.oParent.find('input');
//    this.aDiv = this.oParent.find('div');
//
//    this.change();
//
//};
//Tab.prototype.change = function(){
//
//    var This = this;
//    var timer = null;
//
//    this.aInput.on(this.settings.event,function(){
//
//        var _this = this;
//
//        if( This.settings.event == 'mouseover' && This.settings.delay ){
//
//            timer = setTimeout(function(){
//                show(_this);
//            },This.settings.delay);
//
//        }
//        else{
//            show(this);
//        }
//
//    }).mouseout(function(){
//        clearTimeout(timer);
//    });
//
//    function show(obj){
//
//        $(This).trigger('beforeClick');
//
//        This.aInput.attr('class','');
//        This.aDiv.css('display','none');
//
//        $(obj).attr('class','active');
//
//        This.aDiv.eq( $(obj).index() ).css('display','block');
//
//        This.iNow = $(obj).index();
//
//        $(This).trigger('afterClick');
//
//    }
//
//};
//
//Tab.prototype.nowSel = function(index){
//
//    this.aInput.attr('class','');
//    this.aDiv.css('display','none');
//
//    this.aInput.eq(index).attr('class','active');
//    this.aDiv.eq(index).css('display','block');
//
//    this.iNow = index;
//
//};
//
//Tab.prototype.getContent = function(){
//
//    return this.aDiv.eq(this.iNow).html();
//
//};

/*
 title : 基于JQ的选项卡组件
 Options : event   delay
 */
$(function(){
    //alert("a");
    var t1 = new Tab();
    t1.init('login-regist',{});
});
function Tab(){

    this.oParent = null;
    this.aLi = null;
    this.aDiv = null;

    this.settings = {  //默认参数
        event : 'click'
    };
}

Tab.prototype.init = function(oParent , opt){
    $.extend( this.settings , opt );
    this.oParent = $('.'+oParent);
    this.aLi = this.oParent.find('.select-head div');
    this.aDiv = this.oParent.find('.select-content .content');
    this.change();

};
Tab.prototype.change = function(){

    var This = this;
    this.aLi.on("click",function(){
        show(this);

    });

    function show(obj){

        This.aLi.removeClass("active");
        $(obj).attr('class','active');
        This.aDiv.css('display','none');
        This.aDiv.eq( $(obj).index() ).css('display','block');
    }

};
