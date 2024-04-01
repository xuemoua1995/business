
"use strict";
	
	
/* swiper */
window.Swiper && (function(d){
	
	function s(el)
	{
		var c = {},
			p = el.getAttribute('data-pagination'),
			slides = el.getAttribute('data-slides'),
			space = el.getAttribute('data-space'),
			prev = el.getAttribute('data-prev'),
			next = el.getAttribute('data-next')
		;
		
		if(slides)
		{
			c.breakpoints = { 768: { slidesPerView: slides } };
		}
		
		if(space)
		{
			c.spaceBetween = space;
		}
		
		if(prev || next)
		{
			c.navigation = {};
		}
		
		if(prev)
		{
			c.navigation.prevEl = prev;
		}
		
		if(next)
		{
			c.navigation.nextEl = next;
		}
		
		if(p)
		{
			c.pagination =
			{
				el: p,
				type: 'custom',
				renderCustom: function(swiper, current, total)
				{
					var r = swiper.el.querySelector(swiper.pagination.el.getAttribute('data-tmpl')).innerHTML;
					
					r = r.replace('group-' + current, 'active' );
					r = r.replace('w-[%px]', 'w-[' + ((current / total) * 100) + '%]' );
					r = r.replace('01', (current < 10 ? '0' : '') + current );
					
					return r;
				}
			};
		}
		
		new Swiper( el, c );
	}
	
	d.querySelectorAll('.swiper').forEach(s);
	
})(document);

/* odometer */
window.Waypoint && (function(){
	
	function s(el)
	{
		new Waypoint.Inview({
			element: el,
			entered: function() {
				this.element.innerHTML = this.element.getAttribute('data-v');
			},
			exited: function() {
				this.element.innerHTML = 0;
			}
		});
	}
	
	document.querySelectorAll('.odometer').forEach(s);
	
})();

/* hway */
window.Waypoint && (function(){
	
	function s(el)
	{
		new Waypoint.Inview({
			element: el,
			entered: function() {
				this.element.className = this.element.className + ' hway-active';
			},
			exited: function() {
				this.element.className = this.element.className.replace(/\shway-active/g, '');
			}
		});
	}
	
	document.querySelectorAll('.hway').forEach(s);
	
})();

/* toggle */
window.Waypoint && (function(){
	
	function s(el)
	{
		el.addEventListener('click', function(e){
			
			e.preventDefault();
			
			var t = document.querySelector(this.hash),
				c = t.className,
				cn = this.getAttribute('data-c-toggle'),
				r = new RegExp('\\s' + cn, 'g')
			;
			
			t.setAttribute(
				'class', 
				c.match(r) ? c.replace(r, '' ) : (c + ' ' + cn)
			);
			
			return false;
		});
	}
	
	document.querySelectorAll('[data-c-toggle]').forEach(s);
	
})();
