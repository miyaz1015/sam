$(document).ready(function() {
  $(".ro").fadeTo(1,1)
  .hover( 
    function(){// マウスオーバー時
      $(this).fadeTo("4000", 0.2);//4秒かけて20%の透明度になる。
    },
    function(){// マウスアウト時
      $(this).fadeTo("3500", 1);//3.5秒かけて100%の透明度に戻す。
    }
  );
});