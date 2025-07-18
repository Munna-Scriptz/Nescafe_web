// Aos Animation ------------------
AOS.init();
// Mouse Follower circle------------
const circleElement = document.querySelector('.circle');

const mouse = {
    x: 0,
    y: 0
  },
  circle = {
    x: 0,
    y: 0
  };

window.addEventListener('mousemove', e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Speed factor
// Between 0 and 1 (0 = smoother, 1 = instant)
const speed = 0.05;

const tick = () => {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px)`;
  window.requestAnimationFrame(tick);
}

tick();

//Food Slider--------------------
$('.counter').counterUp({
  delay: 10,
  time: 1000
});



$('.food_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  prevArrow: '<i class="fa-solid arrows prr fa-chevron-left"></i>',
  nextArrow: '<i class="fa-solid arrows nrr fa-chevron-right"></i>',
  dots: false,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        prevArrow: '<i class="fa-solid arrows prr fa-chevron-left"></i>',
        nextArrow: '<i class="fa-solid arrows nrr fa-chevron-right"></i>',
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: '<i class="fa-solid arrows prr fa-chevron-left"></i>',
        nextArrow: '<i class="fa-solid arrows nrr fa-chevron-right"></i>',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: '<i class="fa-solid arrows prr fa-chevron-left"></i>',
        nextArrow: '<i class="fa-solid arrows nrr fa-chevron-right"></i>',
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// --------------Scroll Effect
$(function() {

    $(this).impulse();

    $('#container').impulse({effect: 'easeOutBack', fluid: false});
});

(function($, nib) {

$.fn.impulse = function(options) {

    var set = $.extend({}, $.fn.impulse.default, options), gate = $(nib),
    vessel = this, object = $(set.target), area = {}, edge = [],
    fad = {}, entity, brink = [], outset = [], quit = [], morph,
    way, speed, destined = [], pour = 'requestAnimationFrame',
    use = $.extend({novel: pour in nib, turned: 0}, set);

    elementAnalysis();

    vessel.each(function(hit) {

        use = $.extend({}, use);

        $(this).data('impulse', use).on('wheel.excite', function(act, info) {

            if (!use.keen && !act.mien) return;

            if (act.mien) {
            fad = $.extend({}, use, info);
            use.annul = fad.delay == true;
            var loom = act.mien;
            fad.fluid = false;
            }
            else {
            if (use.annul) return;
            fad = use;
            loom = act.originalEvent.deltaY;
            }

            loom = loom/Math.abs(loom);

            if (use.crux) {
            entity = $(this);
            brink[0] = edge[hit];
            }
            else {
            entity = object;
            brink = edge;
            }

            $.each({range: 'orbit', tempo: 'pace'}, function(slot, mate) {
            if (typeof fad[slot] === 'function') fad[mate] = fad[slot]();
            else fad[mate] = fad[slot];
            });

            if (loom != use.zeal || act.mien) use.turned = 1;
            else use.turned = Math.min(use.curb, use.turned+1);

            if (!fad.delay && fad.fluid && use.turned == 1) morph = 'curve';
            else morph = fad.effect;

            way = loom*fad.orbit*Math.pow(use.leap, use.turned-1);
            speed = fad.pace*Math.pow(use.sloth, use.turned-1) || 1;
            use.zeal = loom;

            entity.each(function(part) {
            outset[part] = $(this).scrollTop();
            destined[part] = outset[part]+way;
            quit[part] = onFringe(this, part, outset[part]);
            });

            use.waive = ceaseOperation();

            if (!way) speed = 1;
            if (use.novel) {
            if (use.motion) {
            cancelAnimationFrame(use.motion);
            use.initial = use.present;
            }
            else use.initial = Date.now();
            use.motion = nib[pour](streamCore);
            }
            else inciteSource();
        });

        this.addEventListener('wheel', function(tick) {

            if (!use.keen) return;
            if (use.annul) return denyRise(tick);
            else if (fad.delay == true && !use.waive) use.annul = true;
            if (!(use.waive && use.occur)) denyRise(tick);

        }, hasQuiet() ? {passive: false} : false);
    });

    $.easing['curve'] = $.easing['easeInOutSine'];

    gate.resize(function() {
    clearTimeout(use.bound);
    use.bound = setTimeout(detectOverflow, 100);
    });

    return this;

    function streamCore() {
    use.present = Date.now();
    var advance = Math.min(use.present-use.initial, speed)/speed,
    increase = $.easing[morph](advance);
    entity.each(function(key) {
    if (!quit[key]) {
    $(this).scrollTop(outset[key]+increase*way);
    checkLimits(this, key, advance);
    }
    });
    if (advance < 1 && !use.waive) use.motion = nib[pour](streamCore);
    else hindStage();
    }

    function inciteSource() {
    entity.each(function(beat) {
    if (!quit[beat]) {
    $(this).stop().animate({scrollTop: destined[beat]}, {
    duration: speed,
    easing: morph,
    progress: function(current, sequence) {
    checkLimits(this, beat, sequence);
    },
    complete: hindStage
    });
    }
    });
    }

    function checkLimits(essence, rank, factor) {
    if (100*factor >= fad.reset) use.turned = 0;
    if (onFringe(essence, rank)) {
    quit[rank] = true;
    if (!use.novel) $(essence).stop(true, true);
    use.waive = ceaseOperation();
    }
    }

    function onFringe(matter, cue, genesis) {
    var put = Math.round(genesis || $(matter).scrollTop()),
    above = destined[cue] < 0 && !put,
    below = destined[cue] > brink[cue] && put == brink[cue] && fad.orbit > 0;
    return above || below;
    }

    function ceaseOperation() {
    return quit.every(function(flag) {return flag});
    }

    function hindStage() {
    use.turned = use.annul = use.motion = 0;
    }

    function denyRise(jab) {
    jab.preventDefault();
    jab.stopPropagation();
    }

    function elementAnalysis() {
    var item = $();
    if (!object.length) {
    use.crux = true;
    object = vessel;
    }
    object.each(function() {
    if ($.zenith(this)) {
    if (!use.main) {
    if (use.novel) use.main = nib;
    else use.main = baseTag();
    item = item.add(use.main);
    }
    }
    else item = item.add(this);
    });
    use.target = object = item;
    object.each(function(zest) {
    if ($.zenith(this)) area[zest] = 'hub';
    else area[zest] = 'sub';
    });
    if (use.crux && use.main) vessel = object;
    detectOverflow();
    }

    function baseTag() {
    var origin = gate.scrollTop();
    gate.scrollTop(1);
    if ($('html').scrollTop()) var root = 'html';
    else if ($('body').scrollTop()) root = 'body';
    else root = 'html, body';
    gate.scrollTop(origin);
    return root;
    }

    function detectOverflow() {
    object.each(function(peg) {
    if (area[peg] == 'hub') var teem = $(document).height()-gate.height();
    else teem = this.scrollHeight-$(this).height();
    edge[peg] = Math.round(teem);
    });
    }

    function hasQuiet() {
    var cold = false,
    hike = function() {};
    try {
    var aid = Object.defineProperty({}, 'passive', {
    get: function() {cold = true}
    });
    nib.addEventListener('test', hike, aid);
    nib.removeEventListener('test', hike, aid);
    } catch(e) {}
    return cold;
    }
};

$.zenith = function(sample) {

    var peak = [nib,document,'HTML','BODY'], facet;
    if (sample) return peak.indexOf(sample) > -1 || peak.indexOf(sample.tagName) > -1;
    $.each(peak, function(spot, detail) {
    facet = $(detail).data('impulse');
    if (facet) return false;
    });
    return facet;
};

$.fn.impulse.default = {

    target: '',
    range: 135,
    leap: 1.35,
    tempo: 500,
    sloth: 1.1,
    curb: 5,
    reset: 85,
    effect: 'easeOutSine',
    keen: true,
    delay: false,
    occur: true,
    fluid: true
};

$.fn.demit = function() {

    return this.each(function() {
    if ($.zenith(this)) var habit = $.zenith();
    else habit = $(this).data('impulse');
    if (habit) {
    if (habit.novel) cancelAnimationFrame(habit.motion);
    else habit.target.stop();
    habit.turned = habit.annul = habit.motion = 0;
    }
    });
};

$.fn.amend = function(gist) {

    return this.each(function() {
    if ($.zenith(this)) var quirk = $.zenith();
    else quirk = $(this).data('impulse');
    if (quirk) {
    $.each(gist, function(sign, rate) {
    if (sign in quirk) quirk[sign] = rate;
    });
    }
    });
};

$.fn.evoke = function(unit) {

    var lot = $.Event('wheel.excite', {mien: true}), bulk;
    return this.each(function() {
    if ($.zenith(this)) {
    if (!bulk) {
    bulk = $.zenith();
    if (bulk) $(bulk.main).trigger(lot, unit);
    }
    }
    else $(this).trigger(lot, unit);
    });
};
}(jQuery, window));

(function($){var b={};$.each(['Quad','Cubic','Quart','Quint','Expo'],function(i,n){b[n]=function(p){return Math.pow(p,i+2)}});$.extend(b,{Sine:function(p){return 1-Math.cos(p*Math.PI/2)},Circ:function(p){return 1-Math.sqrt(1-p*p)},Elastic:function(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15)},Back:function(p){return p*p*(3*p-2)},Bounce:function(p){var f,h=4;while(p<((f=Math.pow(2,--h))-1)/11){}return (1/Math.pow(4,3-h)-7.5625*Math.pow((f*3-2)/22-p,2))}});$.each(b,function(n,e){$.easing['easeIn'+n]=e;$.easing['easeOut'+n]=function(p){return 1-e(1-p)};$.easing['easeInOut'+n]=function(p){return p<0.5?e(p*2)/2:1-e(p*-2+2)/2}})})(jQuery);

