var  shopList = (function(){
    return {
        init: function(ele) {
            this.$ele = document.querySelector(ele);
//          this.getShopListData();
            this.event();
        },
        event: function() {
            var _this = this;
            this.$ele.addEventListener('click', function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName == 'BUTTON' && target.className == 'xqlt2222 shop-btn-car') {
                    // 获取商品id,商品数量
                    var id = target.getAttribute('attr-id');
                    var count=$xqlt221c[0].value;
                    _this.addCar(id, count);
                }
            }, false);
        },
        // 获取商品数据
//      getShopListData: function(){
//          var _this = this;
//          var params = {
//              success: function(data) {
//                  data = JSON.parse(data);
//                  _this.insertShopList(data.data);
//              }
//          }
//          sendAjax('json/shop.json', params);
//      },
        // 添加商品
        addCar(id, count) {
            // 把商品信息保存到本地数据库
            // 把所有添加的商品数据放到一个字段中, shopList
            // 添加第一个商品时,本地存储没有shopList
            // 本地存储数据格式一定是字符串格式
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            for(var i = 0; i < shopList.length; i++) {
                if(shopList[i].id === id) {
                    // 商品已经存在
                    shopList[i].count = Number(shopList[i].count) + Number(count);
                    break;
                }
            }
            if(i === shopList.length) {
                // 商品不存在
                shopList.push({id: id, count: count});
            }
            localStorage.shopList = JSON.stringify(shopList);

        }
    }
}())