var shopCar = (function () {
    return {
        init: function (ele) {
            this.$ele = document.querySelector(ele);
            this.$gwcpush=document.querySelector('.gwcpush');
            this.event();
            this.getShopListData();
        },
        event: function () {
            var _this = this;
        },
        // 获取所有商品信息
        getShopListData: function () {
            var _this = this;
            var params = {
                success: function (data) {
                    data = JSON.parse(data);
                    _this.shopList = data.data;
                    _this.getCarList();
                    // _this.insertShopList(data.data);
                }
            }
            sendAjax('json/shop.json', params);
        },
        getCarList: function () {
            // [{id: 1, count:2}, {id: 2, count: 10}]
            this.carList = JSON.parse(localStorage.shopList);
            for(var i = 0; i <  this.shopList.length; i++) {
                for(var j = 0; j < this.carList.length; j++) {
                    if(this.shopList[i].id == this.carList[j].id) {
                        // this.carList[j] = {
                        //     ...this.carList[j],
                        //     ...this.shopList[i]
                        // }
                        Object.assign(this.carList[j], this.shopList[i]);
                        break;
                    }
                }
            }
            console.log(this.carList);
            this.countPrice(this.carList);
            this.insertCarList(this.carList);
        },
        // 计算总价
        countPrice: function(arr) {
           arr = arr.map(x => {
               return x.countPrice = x.price * x.count;
           })
        },
        // 把购物车数据渲染到页面中
        insertCarList: function (data) {
            var arr = [];
            var shop;
            // debugger
            console.log(this.shopList)
            for (var i = 0; i < data.length; i++) {
                // 通过id获取商品信息
                // for(var j = 0; j < this.shopList.length; j++) {
                //     if(data[i].id == this.shopList[j].id) {
                //         shop = this.shopList[j];
                //         break;
                //     }
                // }
                arr.push(`
                <ul class="gwc02">
					<li class="gwc1 gwc1v">
						<img src="img/shangpin01.jpg">
						<a href="" class="shop-name">${data[i].name}</a>
					</li>
					<li class="gwc2">￥<span class="gwc2v shop-price">${data[i].price}</span></li>
					<li class="gwc3 gwc3v">
						<button class="gwc3l">-</button>
						<input class="gwc3c shop-count" type="text" value="${data[i].count}">
						<button class="gwc3r">+</button>	
					</li>
					<li class="gwc4 ">￥<span class="gwc4v">0.00</span></li>
					<li class="gwc5 gwc5v">124</li>
					<li class="gwc6">￥<span class="gwc6v shop-total">124.00</span></li>
					<li class="gwc7 gwc7v">
						<a href="denglu.html">收藏</a> | 
						<a class="shop-btn-del" attr-index="${i}">移除</a>
					</li>
				</ul>`);
                
            }
            this.$gwcpush.innerHTML = arr.join('');
        },
    }
}())