//		加载
		$(".tree").css("background-image","url('images/tre.jpg')");
		$(".time").css("background-image","url('images/beijing.jpg')");
		$(".fadeout").css("background-image","url('images/beijing3.png')");
//		开场动画
		var loading = $(".loading img");
		loading.animate({
			top:"30px",
		},200,function(){
			loading.animate({
				top:"-30px",
			},300,function(){
				loading.addClass("santa_class");
				mod1();
			})
		})
//		雪花
		var snow = $("<div></div>").css("position","absolute").html("❄");
		setInterval(()=>{
//			获取大小
			let fontsizes = parseInt(Math.random() * (50 - 16 + 1) + 16); 
//			获取透明度
			let transparency = Math.ceil((Math.random() * (1 - 0.2) + 0.2)*10)/10; 
//			获取x和y
			body_width = parseInt($("body").css("width"));
			body_height = parseInt($("body").css("height"));
			let x = parseInt(Math.random()*body_width);
			let x2 = parseInt(Math.random()*body_width);
			let y = parseInt(Math.random()*body_height);
			snow.clone().css({
				fontSize:fontsizes,
				opacity:transparency,
				top:0,
				left:x,
			}).appendTo(".snow_div").animate({
				top:body_height-80,
				left:x2-50,
			},3000,function(){
				setTimeout(()=>{
					this.remove();
				},1500)
			});
		},100)
//		模块一
		function mod1(){
			setTimeout(()=>{
				loading.css("display","none");
				setTimeout(()=>{
					$(".text").fadeIn("slow").css("display","flex");
				},1000,mod2());
			},1000);
		}
//		模块二
		function mod2(){
			setTimeout(()=>{
				$(".text").fadeOut("slow").css("display","none");
			},5000,mod2_1());
		}
		function mod2_1(){
			setTimeout(()=>{
				$(".tree").fadeIn("slow").css("display","flex");
			},5000)
		}
		boclick = 0;
		$(".imgbook>img").click(function(){
			boclick++;
			if(boclick%2==1){
				$(".book").addClass("book_class");
				$(".imgbook").addClass("imgbook_class");	
			}else{
				$(".book").removeClass("book_class");
				$(".imgbook").removeClass("imgbook_class");
			}
		})
		$(".content>span").click(function(){
			$(".tree").fadeOut("slow",function(){
				$(".blessing").fadeIn("slow").css("display","flex");
			});
		})
//		模块三
		var blessing = [
			'After every Christmas I have to accompany you!',
			'I love you！',
			'Happy new year！',
			'I wish you and I can enter the same university',
			'I always have been loving you,and always will love you',
		];
		vartexts = $("<span></span>");
		$("#push_submit").click(function(){
			texts = $(".blessing_push>input:nth-child(1)").val();
			let texts3 = vartexts.html(texts);
			blessing.push(texts);
			let push_height = parseInt(Math.random()*body_height);
			texts3.clone().appendTo(".blessing_content").css({
				right:0,
				top:push_height,
			}).animate({
				right:body_width,
			},10000,function(){
				this.remove();
			})
		})
		setInterval(function(){
			blessing_length = blessing.length;
			let push_height = parseInt(Math.random()*body_height);
			let index = parseInt(Math.random()*blessing_length);
			let texts2 = vartexts.html(blessing[index]);
			texts2.clone().appendTo(".blessing_content").css({
				right:0,
				top:push_height,
			}).animate({
				right:body_width,
			},10000,function(){
				this.remove();
			});
		},3000);
		$(".blessing_push>span").click(function(){
			$(".blessing").fadeOut("slow",function(){
				$(".time").fadeIn("slow").css("display","flex");
			});
		})
//		倒计时
		i1=0;
		i2=0;
		i3=0;
		i4=0;
		function settime(){
			let st1 = new Date("2022.12.25 00:00:00").getTime();
			let st2 = new Date().getTime();
			let st = st1-st2;
			d = Math.floor(st/1000/60/60/24);
			h = Math.floor(st/1000/60/60%24);
			m = Math.floor(st/1000/60%60);
			s = Math.floor(st/1000%60);
			document.getElementById("day").innerHTML=d;
			document.getElementById("hou").innerHTML=h;
			document.getElementById("min").innerHTML=m;
			document.getElementById("sec").innerHTML=s;
			let st11 = new Date("2022.12.24 23:59:59").getTime();
			let st22 = new Date().getTime();
			let stt = st11-st22;
			dd = Math.floor(stt/1000/60/60/24);
			hh = Math.floor(stt/1000/60/60%24);
			mm = Math.floor(stt/1000/60%60);
			ss = Math.floor(stt/1000%60);
			if(dd!=d){
				i4++;
				$("#day").css("transform","rotateY("+360*i4+"deg"+")");
			}
			if(hh!=h){
				i3++;
				$("#hou").css("transform","rotateY("+360*i3+"deg"+")");
			}
			if(mm!=m){
				i2++;
				$("#min").css("transform","rotateY("+360*i2+"deg"+")");
			}
			if(ss!=s){
				i1++;
				$("#sec").css("transform","rotateY("+360*i1+"deg"+")");
			}
			if(d == 0 && h == 0 && m == 0 && s == 0){
				clearInterval(settimesd);
				$(".time").fadeOut("slow",function(){
					$(".time").css("display","none",mod5());
				});
			}
		}
		settime();
		settimesd = setInterval("settime()",1000);
//		模块五
		function mod5(){
			$(".time").css("display","none");
			$(".fadeout").css("display","flex").fadeIn("slow",function(){
				$(".fadeout>img").animate({
					left:"60vw",
					top:"0px",
				},3000,function(){
					$(".fadeout>img").fadeOut("slow",function(){
						$(".fadeout>img").css("display","none");
						$(".fadeout>h2").fadeIn("slow");
					})
				})
			})
		}