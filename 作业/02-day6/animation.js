<script type="text/javascript">
	function getStyle(element, attr){
		return window.getComputedStyle?window.getComputedStyle(element, null)[attr]:element.currentStyle[attr] ||0;
	}

	function animate(element, json, fn){
		clearInterval(element.timeId);
		element.timeId = setInterval(function(){
			var flag = true;
			for (var attr in json){
				if(attr == "opacity"){
					var current = element.getStyle(element, attr) * 100;
					var target = json[attr] * 100;
					var step = (target-current)/10;
					step = step>0?Math.ceil(step):Math.floor(step);
					current += step;
					element.style[attr] = current/100;
				} else if(attr == "zIndex"){
					element.style[attr] = json[attr];
				} else {
					var current = parseInt(element.getStyle(element, attr));
					var target = json[attr];
					var step = (target - current)/10;
					step = step>0?Math.ceil(step):Math.floor(step);
					current += step;
					element.style[attr] = current + "px";
				}
				if(current != json[attr]){
					flag = false;
				}
			}
			if(flag){
				clearInterval(element.timeId);
				if(fn){
					fn();
				}
			}
		},20)
	}
</script>