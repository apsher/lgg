var lbt = (function(){
    var timer = null;
    return {
        init: function(ele) {
            if(typeof ele == 'string') {
                ele = document.querySelector(ele);
            }
            this.$ele = ele;
            this.$tip = ele.querySelector('.lbt_tip');
            this.$tipLiAll = this.$tip.children;
            this.$img = ele.querySelector('.lbt_img');
            this.$imgLiAll = this.$img.children;
            var first = this.$imgLiAll[0];
            var last =  this.$img.lastElementChild;
            this.$img.appendChild(first.cloneNode(true));
            this.$img.insertBefore(last.cloneNode(true), first);
            this.$img.style.left = '-750px';
            for(var i = 0; i <  this.$tipLiAll.length; i++) {
                this.$tipLiAll[i].index = i;
            }
            this.index = 0;
            this.event();
            this.autoPlay();
        },
        event: function() {
            var _this = this;
            this.$tip.onmouseover = function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName == 'LI') {
                    _this.showImage(target.index);
                }
            };
            var $box=document.querySelector('.lbt_box');
        },
        showImage: function(index) {
            var maxIndex = this.$tipLiAll.length - 1;
            if(index > maxIndex) {
                index = 0;
                this.$img.style.left = 0;
            } else if(index < 0) {
                index = maxIndex;
                this.$img.style.left = -750 * (maxIndex + 2) + 'px';
            }
            this.index = index;
            for(var i = 0; i < this.$tipLiAll.length; i++) {
                this.$tipLiAll[i].removeAttribute('class');
            }
            this.$tipLiAll[index].className = 'active';
            move(this.$img, 'left', -750 * (index + 1));
        },
        autoPlay(index) {
        	var _this=this;
        	setInterval(function(){
        		_this.index++;
        		_this.showImage(_this.index);
        	},5000)
        	}
        }
    }
())