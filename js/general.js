var plugins = '';
(function ($) {

    $(function () {

		$.reject({
			reject: {msie: 9},
			closeCookie: true,
			imagePath: 'js/plugins/jReject-master/images/',
			header: 'Your browser is not supported here', // Header Text
			paragraph1: 'You are currently using an unsupported browser', // Paragraph 1
			paragraph2: 'Please install one of the many optional browsers below to proceed',
			closeMessage: 'Close this window at your own demise!' // Message below close window link
		});

    });

    plugins = {

        fancybox: function (obj) {

            obj.fancybox({helpers: {media: {}, overlay: {locked: false}}});

        },
        swipers: function () {

			var indexSwiper = new Swiper('.level-1-swiper', {
				loop: false,
				paginationClickable: true,
				direction: 'vertical',
				noSwipingClass: 'aaaaaaaaaaaa'
				//simulateTouch:false
			});

			var indexSwipers2 = new Swiper($('.level-2-swiper'), {
				loop: false,
				noSwipingClass: 'aaaaaaaaaaaa'
				//simulateTouch:false
			});

			var indexSwipers3 = new Swiper($('.level-3-swiper'), {
				loop: false,
				noSwipingClass: 'aaaaaaaaaaaa'
				//simulateTouch:false
			});

			indexSwipers4 = {};

			$('.products-cards-swiper').each(function(index){
				indexSwipers4[index] = new Swiper($(this), {
					loop: false,
					direction: 'horizontal'
				});
			});

			productsSwipers = {};

			$('.products-swiper').each(function(index){
				if($(this).hasClass('show_one_per_view')){
					slidesPerView = 1
				}else{
					slidesPerView = 3
				}
				productsSwipers[index] = new Swiper($(this), {
					loop: false,
					direction: 'horizontal',
					slidesPerView: slidesPerView
				});
			});

			goto_gategory = function(index){
				indexSwipers2.slideTo(index, 0);
				indexSwipers3.slideTo(index, 0);
				indexSwiper.slideTo(1);
			};

			goto_gategory_products = function(cat_id, product_index){
				indexSwipers3.slideTo(cat_id, 0);
				indexSwipers4[cat_id].slideTo(product_index, 0);
				indexSwiper.slideTo(2);
			};

			goback = function(){
				indexSwiper.slidePrev();
			};

			$('a[onclick]').on('click', function (event) {
				event.preventDefault();
			});

			swiperDataAttrs = function() {

				swipers = {};

				$('div.swiper-container').each(function (index) {

					swiperAttrsObj = {};
					var obj = $(this)[0].attributes;
					var hasDataAtributes = 0;
					$(obj).each(function () {
						if (this.nodeName.indexOf('data-') > -1) {
							hasDataAtributes = 1;
							var str_name = this.nodeName.replace('data-', '').replace('-', ' ').replace('-', ' ').toLowerCase().replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, function (letter) {
								return letter.toUpperCase();
							}).replace(' ', '').replace(' ', '');
							str_name = str_name.charAt(0).toLowerCase() + str_name.slice(1);
							var str_val = this.nodeValue;
							if (str_val % 1 === 0) {
								swiperAttrsObj[str_name] = parseInt(str_val);
							} else {
								swiperAttrsObj[str_name] = str_val;
							}

						}
					});

					if (hasDataAtributes == 1) {
						console.log(swiperAttrsObj);

						swipers[index] = new Swiper($(this), swiperAttrsObj);
					};
				});

			};

			swiperDataAttrs();

        },
        buildMobile: function () {

            //mobileModules.detect_smallest_rez();
            //mobileModules.smart_vers();
            //mobileModules.desktop_v_switcher();

        }
    };

    /* SCRIPTS INIT */

    plugins.swipers();
    //plugins.buildMobile();
    //plugins.formCheck($('#forma'));

    /* SCRIPTS INIT END */

})(jQuery);
