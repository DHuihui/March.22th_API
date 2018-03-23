$(function(){
	//定义一个变量放置data
	var goods;
	//定义两个数组放置规格和口味
	var sizeArr=[];
	var tasterArr=[];
	//获取商品信息
	$.ajax({
		url:'data/goods.json',
		type:'get',
		async:'false',
		dataType:'json',
		success:function(data){
			// console.log(data);
			init(data);
		}
	})
	function init(data){
		goods=data;
		console.log(goods);
		//获取商品属性（名称与口味）
		var attrArr=[];
		for(var i in goods){
			attrArr.push(goods[i].att_name);
		}
		// console.log(attrArr);
		// 获取商品名称信息    当前值，索引
		attrArr.forEach(function(val,index){
			// console.log(val);
			//分割商品名称和口味信息
			var tempArr=val.split('|');
			// console.log(tempArr);
			//将尺寸保存在sizeArr中
			if($.inArray(tempArr[0],sizeArr)==-1){
				sizeArr.push(tempArr[0]);
			}
			//将口味信息保存在tasterArr中
			if($.inArray(tempArr[1],tasterArr)==-1){
				tasterArr.push(tempArr[1]);
			}
		})
		// console.log(sizeArr);
		// console.log(tasterArr);
		// 调用函数生成包装尺寸
		setSizeHtml();
		//生成口味
		setTasteHtml();
		//调用函数生成商品图片 
		select();
		
	}
	function setSizeHtml(){
		var html='';
		sizeArr.forEach(function(v,key){
			html+='<li>'+v+'</li>';
			// console.log(html);
		});
		$(".size ul").html(html);
	}
	function setTasteHtml(){
		var html='';
		tasterArr.forEach(function(v,key){
			html+='<li>'+v +'</li>';
		});
		$(".taste ul").html(html);
	}

	//选择包装尺寸对应
	//相应的图片与商品价格相关信息
	function select(curGoods){
		var domain='http://t.lld8839.com/';
		//商品图片
		$(".thumb").html("<img src='"+domain+curGoods.att_img+"'>");
		//商品信息
		$("detail p").html('价格:<span class="price">+'curGoods.att_price'+</span>可用消费券:<span class="quan">+'curGoods.att_reduce'+</span>pv:<span class="pv">+'curGoods.att_pv'+</span>库存:<span class="num">+'curGoods.att_kc'+</span>')
		
	}
})