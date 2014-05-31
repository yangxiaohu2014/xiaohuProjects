// JavaScript Document
  function reSort($li){  //当窗口尺寸变化时重排列
	    var $li=$li;
		$.each($li,function(index,e){
			if(index==0){
				$("#container #firstUl").append(e);
			}else{
				$minUl = getMinUl();
			    $minUl.append(html);
			}
		});
  };
  function init(){//此函数用于初始化
	    UlW=$("#container ul").eq(0).width();//列宽一致，故设为全局变量
	    n = document.documentElement.clientWidth /UlW | 0;  //设为全局变量计算页面能排下多少列
		n=Math.max(n,4);//页面至少有4个pin
        while(n>$("#container ul").size()){
			$("#container").append('<ul></ul>');
		}
		var data = 0;
      
        $("#container").width(n*UlW);//设置el的总宽度
		 var offsetl=(document.documentElement.clientWidth-$("#container").width())/2;
		$("#container").offset({left:offsetl});
	
		$("#firstUl").append('<li><img src="img/8.jpg"><p>这是主角，所以图片不能换哦</p></li>');//右侧第一列第一个元素为固定元素
		var initH=document.documentElement.clientHeight;         //设置初始加载的高度
		while(getMaxUl().height()<initH){                       //每次加载时模拟随机加载图片
			data = parseInt(Math.random()*7);
			var html='';			
			html = '<li><img src = img/'
					+data+'.jpg><p>src='
					+data+'.jpg</p></li>';
			$minUl = getMinUl();
			$minUl.append(html);
		}
		$("img").mouseover(function(){
		     $(this).animate({opacity:'0.4'},"fast").animate({
			    opacity:'0.8'},"slow").animate({opacity:'0.4'},"fast").animate({opacity:'1'},
			   "slow");
		});
	}
	function loadMeinv(){ //此函数用于滑块到底时，动态添加图片
		var data = 0;
		for(var i=0;i<30;i++){//每次加载时模拟随机加载图片
			data = parseInt(Math.random()*9);
			var html = "";
			html = '<li><img src = img/'
					+data+'.jpg><p>src='
					+data+'.jpg</p></li>';
			$minUl = getMinUl();
			$minUl.append(html);
		}
			$("img").mouseover(function(){
			$(this).animate({opacity:'0.4'},"fast").animate({
			opacity:'0.8'},"slow").animate({opacity:'0.4'},"fast").animate({opacity:'1'},
			"slow");
		});
		/*$("img").mouseover(function(){
			$(this).animate({opacity:'0.4'},"fast").animate({opacity:'0.8'},
			"fast").animate({opacity:'0.4'},"fast").animate({opacity:'1'},"fast");
		});*/
	}
	function getarraykey(s, v) {
	  for(k in s) {
		if(s[k] == v) {
		  return k;
		  }
	  }
	}
	function getMinUl(){//每次获取最短的ul,将图片放到其后
		var $arrUl = $("#container ul");
		var $minUl =$arrUl.eq(0);
		$arrUl.each(function(index,elem){
			if($(elem).height()<$minUl.height()){
				$minUl = $(elem);
			}
		});
		return $minUl;
	}
	function getMaxUl(){
			var $arrUl=$("#container ul");
			var $maxUl=$arrUl.eq(0);
			$arrUl.each(function(index, element) {
                if($(element).height()>$maxUl.height()){
					$maxUl=$(element);
				}
            });
			return $maxUl;
	}
