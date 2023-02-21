/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/bootstrap-progressbar.js":
/*!************************************************!*\
  !*** ./src/assets/js/bootstrap-progressbar.js ***!
  \************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
 * bootstrap-progressbar v0.8.5 by @minddust
 * Copyright (c) 2012-2014 Stephan Groß
 *
 * http://www.minddust.com/project/bootstrap-progressbar/
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
(function ($) {
  'use strict';

  // PROGRESSBAR CLASS DEFINITION
  // ============================
  var Progressbar = function Progressbar(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Progressbar.defaults, options);
  };
  Progressbar.defaults = {
    transition_delay: 300,
    refresh_speed: 50,
    display_text: 'none',
    use_percentage: true,
    percent_format: function percent_format(percent) {
      return percent + '%';
    },
    amount_format: function amount_format(amount_part, amount_max, amount_min) {
      return amount_part + ' / ' + amount_max;
    },
    update: $.noop,
    done: $.noop,
    fail: $.noop
  };
  Progressbar.prototype.transition = function () {
    var $this = this.$element;
    var $parent = $this.parent();
    var $back_text = this.$back_text;
    var $front_text = this.$front_text;
    var options = this.options;
    var data_transitiongoal = parseInt($this.attr('data-transitiongoal'));
    var aria_valuemin = parseInt($this.attr('aria-valuemin')) || 0;
    var aria_valuemax = parseInt($this.attr('aria-valuemax')) || 100;
    var is_vertical = $parent.hasClass('vertical');
    var update = options.update && typeof options.update === 'function' ? options.update : Progressbar.defaults.update;
    var done = options.done && typeof options.done === 'function' ? options.done : Progressbar.defaults.done;
    var fail = options.fail && typeof options.fail === 'function' ? options.fail : Progressbar.defaults.fail;
    if (isNaN(data_transitiongoal)) {
      fail('data-transitiongoal not set');
      return;
    }
    var percentage = Math.round(100 * (data_transitiongoal - aria_valuemin) / (aria_valuemax - aria_valuemin));
    if (options.display_text === 'center' && !$back_text && !$front_text) {
      this.$back_text = $back_text = $('<span>').addClass('progressbar-back-text').prependTo($parent);
      this.$front_text = $front_text = $('<span>').addClass('progressbar-front-text').prependTo($this);
      var parent_size;
      if (is_vertical) {
        parent_size = $parent.css('height');
        $back_text.css({
          height: parent_size,
          'line-height': parent_size
        });
        $front_text.css({
          height: parent_size,
          'line-height': parent_size
        });
        $(window).resize(function () {
          parent_size = $parent.css('height');
          $back_text.css({
            height: parent_size,
            'line-height': parent_size
          });
          $front_text.css({
            height: parent_size,
            'line-height': parent_size
          });
        }); // normal resizing would brick the structure because width is in px
      } else {
        parent_size = $parent.css('width');
        $front_text.css({
          width: parent_size
        });
        $(window).resize(function () {
          parent_size = $parent.css('width');
          $front_text.css({
            width: parent_size
          });
        }); // normal resizing would brick the structure because width is in px
      }
    }

    setTimeout(function () {
      var current_percentage;
      var current_value;
      var this_size;
      var parent_size;
      var text;
      if (is_vertical) {
        $this.css('height', percentage + '%');
      } else {
        $this.css('width', percentage + '%');
      }
      var progress = setInterval(function () {
        if (is_vertical) {
          this_size = $this.height();
          parent_size = $parent.height();
        } else {
          this_size = $this.width();
          parent_size = $parent.width();
        }
        current_percentage = Math.round(100 * this_size / parent_size);
        current_value = Math.round(aria_valuemin + this_size / parent_size * (aria_valuemax - aria_valuemin));
        if (current_percentage >= percentage) {
          current_percentage = percentage;
          current_value = data_transitiongoal;
          done($this);
          clearInterval(progress);
        }
        if (options.display_text !== 'none') {
          text = options.use_percentage ? options.percent_format(current_percentage) : options.amount_format(current_value, aria_valuemax, aria_valuemin);
          if (options.display_text === 'fill') {
            $this.text(text);
          } else if (options.display_text === 'center') {
            $back_text.text(text);
            $front_text.text(text);
          }
        }
        $this.attr('aria-valuenow', current_value);
        update(current_percentage, $this);
      }, options.refresh_speed);
    }, options.transition_delay);
  };

  // PROGRESSBAR PLUGIN DEFINITION
  // =============================

  var old = $.fn.progressbar;
  $.fn.progressbar = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.progressbar');
      var options = _typeof(option) === 'object' && option;
      if (!data) {
        $this.data('bs.progressbar', data = new Progressbar(this, options));
      }
      data.transition();
    });
  };
  $.fn.progressbar.Constructor = Progressbar;

  // PROGRESSBAR NO CONFLICT
  // =======================

  $.fn.progressbar.noConflict = function () {
    $.fn.progressbar = old;
    return this;
  };
})(window.jQuery);

/***/ }),

/***/ "./src/assets/js/bootstrap.js":
/*!************************************!*\
  !*** ./src/assets/js/bootstrap.js ***!
  \************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery');
}
+function ($) {
  'use strict';

  var version = $.fn.jquery.split(' ')[0].split('.');
  if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher');
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================
  function transitionEnd() {
    var el = document.createElement('bootstrap');
    var transEndEventNames = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };
    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return {
          end: transEndEventNames[name]
        };
      }
    }
    return false; // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false;
    var $el = this;
    $(this).one('bsTransitionEnd', function () {
      called = true;
    });
    var callback = function callback() {
      if (!called) $($el).trigger($.support.transition.end);
    };
    setTimeout(callback, duration);
    return this;
  };
  $(function () {
    $.support.transition = transitionEnd();
    if (!$.support.transition) return;
    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function handle(e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    };
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================
  var dismiss = '[data-dismiss="alert"]';
  var Alert = function Alert(el) {
    $(el).on('click', dismiss, this.close);
  };
  Alert.VERSION = '3.3.5';
  Alert.TRANSITION_DURATION = 150;
  Alert.prototype.close = function (e) {
    var $this = $(this);
    var selector = $this.attr('data-target');
    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    var $parent = $(selector);
    if (e) e.preventDefault();
    if (!$parent.length) {
      $parent = $this.closest('.alert');
    }
    $parent.trigger(e = $.Event('close.bs.alert'));
    if (e.isDefaultPrevented()) return;
    $parent.removeClass('in');
    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove();
    }
    $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
  };

  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.alert');
      if (!data) $this.data('bs.alert', data = new Alert(this));
      if (typeof option == 'string') data[option].call($this);
    });
  }
  var old = $.fn.alert;
  $.fn.alert = Plugin;
  $.fn.alert.Constructor = Alert;

  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old;
    return this;
  };

  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.5
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================
  var Button = function Button(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Button.DEFAULTS, options);
    this.isLoading = false;
  };
  Button.VERSION = '3.3.5';
  Button.DEFAULTS = {
    loadingText: 'loading...'
  };
  Button.prototype.setState = function (state) {
    var d = 'disabled';
    var $el = this.$element;
    var val = $el.is('input') ? 'val' : 'html';
    var data = $el.data();
    state += 'Text';
    if (data.resetText == null) $el.data('resetText', $el[val]());

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state]);
      if (state == 'loadingText') {
        this.isLoading = true;
        $el.addClass(d).attr(d, d);
      } else if (this.isLoading) {
        this.isLoading = false;
        $el.removeClass(d).removeAttr(d);
      }
    }, this), 0);
  };
  Button.prototype.toggle = function () {
    var changed = true;
    var $parent = this.$element.closest('[data-toggle="buttons"]');
    if ($parent.length) {
      var $input = this.$element.find('input');
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false;
        $parent.find('.active').removeClass('active');
        this.$element.addClass('active');
      } else if ($input.prop('type') == 'checkbox') {
        if ($input.prop('checked') !== this.$element.hasClass('active')) changed = false;
        this.$element.toggleClass('active');
      }
      $input.prop('checked', this.$element.hasClass('active'));
      if (changed) $input.trigger('change');
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
      this.$element.toggleClass('active');
    }
  };

  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.button');
      var options = _typeof(option) == 'object' && option;
      if (!data) $this.data('bs.button', data = new Button(this, options));
      if (option == 'toggle') data.toggle();else if (option) data.setState(option);
    });
  }
  var old = $.fn.button;
  $.fn.button = Plugin;
  $.fn.button.Constructor = Button;

  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old;
    return this;
  };

  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target);
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn');
    Plugin.call($btn, 'toggle');
    if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault();
  }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.5
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================
  var Carousel = function Carousel(element, options) {
    this.$element = $(element);
    this.$indicators = this.$element.find('.carousel-indicators');
    this.options = options;
    this.paused = null;
    this.sliding = null;
    this.interval = null;
    this.$active = null;
    this.$items = null;
    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this));
    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', $.proxy(this.pause, this)).on('mouseleave.bs.carousel', $.proxy(this.cycle, this));
  };
  Carousel.VERSION = '3.3.5';
  Carousel.TRANSITION_DURATION = 600;
  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  };
  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return;
    switch (e.which) {
      case 37:
        this.prev();
        break;
      case 39:
        this.next();
        break;
      default:
        return;
    }
    e.preventDefault();
  };
  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false);
    this.interval && clearInterval(this.interval);
    this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
    return this;
  };
  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item');
    return this.$items.index(item || this.$active);
  };
  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active);
    var willWrap = direction == 'prev' && activeIndex === 0 || direction == 'next' && activeIndex == this.$items.length - 1;
    if (willWrap && !this.options.wrap) return active;
    var delta = direction == 'prev' ? -1 : 1;
    var itemIndex = (activeIndex + delta) % this.$items.length;
    return this.$items.eq(itemIndex);
  };
  Carousel.prototype.to = function (pos) {
    var that = this;
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'));
    if (pos > this.$items.length - 1 || pos < 0) return;
    if (this.sliding) return this.$element.one('slid.bs.carousel', function () {
      that.to(pos);
    }); // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle();
    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos));
  };
  Carousel.prototype.pause = function (e) {
    e || (this.paused = true);
    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end);
      this.cycle(true);
    }
    this.interval = clearInterval(this.interval);
    return this;
  };
  Carousel.prototype.next = function () {
    if (this.sliding) return;
    return this.slide('next');
  };
  Carousel.prototype.prev = function () {
    if (this.sliding) return;
    return this.slide('prev');
  };
  Carousel.prototype.slide = function (type, next) {
    var $active = this.$element.find('.item.active');
    var $next = next || this.getItemForDirection(type, $active);
    var isCycling = this.interval;
    var direction = type == 'next' ? 'left' : 'right';
    var that = this;
    if ($next.hasClass('active')) return this.sliding = false;
    var relatedTarget = $next[0];
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    });
    this.$element.trigger(slideEvent);
    if (slideEvent.isDefaultPrevented()) return;
    this.sliding = true;
    isCycling && this.pause();
    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active');
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
      $nextIndicator && $nextIndicator.addClass('active');
    }
    var slidEvent = $.Event('slid.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    }); // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type);
      $next[0].offsetWidth; // force reflow
      $active.addClass(direction);
      $next.addClass(direction);
      $active.one('bsTransitionEnd', function () {
        $next.removeClass([type, direction].join(' ')).addClass('active');
        $active.removeClass(['active', direction].join(' '));
        that.sliding = false;
        setTimeout(function () {
          that.$element.trigger(slidEvent);
        }, 0);
      }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
    } else {
      $active.removeClass('active');
      $next.addClass('active');
      this.sliding = false;
      this.$element.trigger(slidEvent);
    }
    isCycling && this.cycle();
    return this;
  };

  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.carousel');
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), _typeof(option) == 'object' && option);
      var action = typeof option == 'string' ? option : options.slide;
      if (!data) $this.data('bs.carousel', data = new Carousel(this, options));
      if (typeof option == 'number') data.to(option);else if (action) data[action]();else if (options.interval) data.pause().cycle();
    });
  }
  var old = $.fn.carousel;
  $.fn.carousel = Plugin;
  $.fn.carousel.Constructor = Carousel;

  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old;
    return this;
  };

  // CAROUSEL DATA-API
  // =================

  var clickHandler = function clickHandler(e) {
    var href;
    var $this = $(this);
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
    if (!$target.hasClass('carousel')) return;
    var options = $.extend({}, $target.data(), $this.data());
    var slideIndex = $this.attr('data-slide-to');
    if (slideIndex) options.interval = false;
    Plugin.call($target, options);
    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex);
    }
    e.preventDefault();
  };
  $(document).on('click.bs.carousel.data-api', '[data-slide]', clickHandler).on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler);
  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this);
      Plugin.call($carousel, $carousel.data());
    });
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================
  var Collapse = function Collapse(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Collapse.DEFAULTS, options);
    this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
    this.transitioning = null;
    if (this.options.parent) {
      this.$parent = this.getParent();
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger);
    }
    if (this.options.toggle) this.toggle();
  };
  Collapse.VERSION = '3.3.5';
  Collapse.TRANSITION_DURATION = 350;
  Collapse.DEFAULTS = {
    toggle: true
  };
  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width');
    return hasWidth ? 'width' : 'height';
  };
  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return;
    var activesData;
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');
    if (actives && actives.length) {
      activesData = actives.data('bs.collapse');
      if (activesData && activesData.transitioning) return;
    }
    var startEvent = $.Event('show.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;
    if (actives && actives.length) {
      Plugin.call(actives, 'hide');
      activesData || actives.data('bs.collapse', null);
    }
    var dimension = this.dimension();
    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);
    this.$trigger.removeClass('collapsed').attr('aria-expanded', true);
    this.transitioning = 1;
    var complete = function complete() {
      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
      this.transitioning = 0;
      this.$element.trigger('shown.bs.collapse');
    };
    if (!$.support.transition) return complete.call(this);
    var scrollSize = $.camelCase(['scroll', dimension].join('-'));
    this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
  };
  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return;
    var startEvent = $.Event('hide.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;
    var dimension = this.dimension();
    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
    this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);
    this.$trigger.addClass('collapsed').attr('aria-expanded', false);
    this.transitioning = 1;
    var complete = function complete() {
      this.transitioning = 0;
      this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
    };
    if (!$.support.transition) return complete.call(this);
    this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
  };
  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']();
  };
  Collapse.prototype.getParent = function () {
    return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
      var $element = $(element);
      this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
    }, this)).end();
  };
  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in');
    $element.attr('aria-expanded', isOpen);
    $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);
  };
  function getTargetFromTrigger($trigger) {
    var href;
    var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

    return $(target);
  }

  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.collapse');
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), _typeof(option) == 'object' && option);
      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
      if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
      if (typeof option == 'string') data[option]();
    });
  }
  var old = $.fn.collapse;
  $.fn.collapse = Plugin;
  $.fn.collapse.Constructor = Collapse;

  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old;
    return this;
  };

  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this = $(this);
    if (!$this.attr('data-target')) e.preventDefault();
    var $target = getTargetFromTrigger($this);
    var data = $target.data('bs.collapse');
    var option = data ? 'toggle' : $this.data();
    Plugin.call($target, option);
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.5
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================
  var backdrop = '.dropdown-backdrop';
  var toggle = '[data-toggle="dropdown"]';
  var Dropdown = function Dropdown(element) {
    $(element).on('click.bs.dropdown', this.toggle);
  };
  Dropdown.VERSION = '3.3.5';
  function getParent($this) {
    var selector = $this.attr('data-target');
    if (!selector) {
      selector = $this.attr('href');
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    var $parent = selector && $(selector);
    return $parent && $parent.length ? $parent : $this.parent();
  }
  function clearMenus(e) {
    if (e && e.which === 3) return;
    $(backdrop).remove();
    $(toggle).each(function () {
      var $this = $(this);
      var $parent = getParent($this);
      var relatedTarget = {
        relatedTarget: this
      };
      if (!$parent.hasClass('open')) return;
      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));
      if (e.isDefaultPrevented()) return;
      $this.attr('aria-expanded', 'false');
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget);
    });
  }
  Dropdown.prototype.toggle = function (e) {
    var $this = $(this);
    if ($this.is('.disabled, :disabled')) return;
    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');
    clearMenus();
    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click', clearMenus);
      }
      var relatedTarget = {
        relatedTarget: this
      };
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));
      if (e.isDefaultPrevented()) return;
      $this.trigger('focus').attr('aria-expanded', 'true');
      $parent.toggleClass('open').trigger('shown.bs.dropdown', relatedTarget);
    }
    return false;
  };
  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;
    var $this = $(this);
    e.preventDefault();
    e.stopPropagation();
    if ($this.is('.disabled, :disabled')) return;
    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');
    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus');
      return $this.trigger('click');
    }
    var desc = ' li:not(.disabled):visible a';
    var $items = $parent.find('.dropdown-menu' + desc);
    if (!$items.length) return;
    var index = $items.index(e.target);
    if (e.which == 38 && index > 0) index--; // up
    if (e.which == 40 && index < $items.length - 1) index++; // down
    if (!~index) index = 0;
    $items.eq(index).trigger('focus');
  };

  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.dropdown');
      if (!data) $this.data('bs.dropdown', data = new Dropdown(this));
      if (typeof option == 'string') data[option].call($this);
    });
  }
  var old = $.fn.dropdown;
  $.fn.dropdown = Plugin;
  $.fn.dropdown.Constructor = Dropdown;

  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old;
    return this;
  };

  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
    e.stopPropagation();
  }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown);
}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================
  var Modal = function Modal(element, options) {
    this.options = options;
    this.$body = $(document.body);
    this.$element = $(element);
    this.$dialog = this.$element.find('.modal-dialog');
    this.$backdrop = null;
    this.isShown = null;
    this.originalBodyPad = null;
    this.scrollbarWidth = 0;
    this.ignoreBackdropClick = false;
    if (this.options.remote) {
      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
        this.$element.trigger('loaded.bs.modal');
      }, this));
    }
  };
  Modal.VERSION = '3.3.5';
  Modal.TRANSITION_DURATION = 300;
  Modal.BACKDROP_TRANSITION_DURATION = 150;
  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  };
  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget);
  };
  Modal.prototype.show = function (_relatedTarget) {
    var that = this;
    var e = $.Event('show.bs.modal', {
      relatedTarget: _relatedTarget
    });
    this.$element.trigger(e);
    if (this.isShown || e.isDefaultPrevented()) return;
    this.isShown = true;
    this.checkScrollbar();
    this.setScrollbar();
    this.$body.addClass('modal-open');
    this.escape();
    this.resize();
    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));
    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
      });
    });
    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade');
      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body); // don't move modals dom position
      }

      that.$element.show().scrollTop(0);
      that.adjustDialog();
      if (transition) {
        that.$element[0].offsetWidth; // force reflow
      }

      that.$element.addClass('in');
      that.enforceFocus();
      var e = $.Event('shown.bs.modal', {
        relatedTarget: _relatedTarget
      });
      transition ? that.$dialog // wait for modal to slide in
      .one('bsTransitionEnd', function () {
        that.$element.trigger('focus').trigger(e);
      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
    });
  };
  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault();
    e = $.Event('hide.bs.modal');
    this.$element.trigger(e);
    if (!this.isShown || e.isDefaultPrevented()) return;
    this.isShown = false;
    this.escape();
    this.resize();
    $(document).off('focusin.bs.modal');
    this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');
    this.$dialog.off('mousedown.dismiss.bs.modal');
    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
  };
  Modal.prototype.enforceFocus = function () {
    $(document).off('focusin.bs.modal') // guard against infinite focus loop
    .on('focusin.bs.modal', $.proxy(function (e) {
      if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
        this.$element.trigger('focus');
      }
    }, this));
  };
  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide();
      }, this));
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal');
    }
  };
  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
    } else {
      $(window).off('resize.bs.modal');
    }
  };
  Modal.prototype.hideModal = function () {
    var that = this;
    this.$element.hide();
    this.backdrop(function () {
      that.$body.removeClass('modal-open');
      that.resetAdjustments();
      that.resetScrollbar();
      that.$element.trigger('hidden.bs.modal');
    });
  };
  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };
  Modal.prototype.backdrop = function (callback) {
    var that = this;
    var animate = this.$element.hasClass('fade') ? 'fade' : '';
    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;
      this.$backdrop = $(document.createElement('div')).addClass('modal-backdrop ' + animate).appendTo(this.$body);
      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false;
          return;
        }
        if (e.target !== e.currentTarget) return;
        this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
      }, this));
      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

      this.$backdrop.addClass('in');
      if (!callback) return;
      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in');
      var callbackRemove = function callbackRemove() {
        that.removeBackdrop();
        callback && callback();
      };
      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
    } else if (callback) {
      callback();
    }
  };

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog();
  };
  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    });
  };
  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    });
  };
  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth;
    if (!fullWindowWidth) {
      // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect();
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
    this.scrollbarWidth = this.measureScrollbar();
  };
  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || '';
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
  };
  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad);
  };
  Modal.prototype.measureScrollbar = function () {
    // thx walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'modal-scrollbar-measure';
    this.$body.append(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this.$body[0].removeChild(scrollDiv);
    return scrollbarWidth;
  };

  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.modal');
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), _typeof(option) == 'object' && option);
      if (!data) $this.data('bs.modal', data = new Modal(this, options));
      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
    });
  }
  var old = $.fn.modal;
  $.fn.modal = Plugin;
  $.fn.modal.Constructor = Modal;

  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old;
    return this;
  };

  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this);
    var href = $this.attr('href');
    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
    var option = $target.data('bs.modal') ? 'toggle' : $.extend({
      remote: !/#/.test(href) && href
    }, $target.data(), $this.data());
    if ($this.is('a')) e.preventDefault();
    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus');
      });
    });
    Plugin.call($target, option, this);
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================
  var Tooltip = function Tooltip(element, options) {
    this.type = null;
    this.options = null;
    this.enabled = null;
    this.timeout = null;
    this.hoverState = null;
    this.$element = null;
    this.inState = null;
    this.init('tooltip', element, options);
  };
  Tooltip.VERSION = '3.3.5';
  Tooltip.TRANSITION_DURATION = 150;
  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  };
  Tooltip.prototype.init = function (type, element, options) {
    this.enabled = true;
    this.type = type;
    this.$element = $(element);
    this.options = this.getOptions(options);
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
    this.inState = {
      click: false,
      hover: false,
      focus: false
    };
    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
    }
    var triggers = this.options.trigger.split(' ');
    for (var i = triggers.length; i--;) {
      var trigger = triggers[i];
      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
      } else if (trigger != 'manual') {
        var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';
        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
      }
    }
    this.options.selector ? this._options = $.extend({}, this.options, {
      trigger: 'manual',
      selector: ''
    }) : this.fixTitle();
  };
  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS;
  };
  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options);
    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      };
    }
    return options;
  };
  Tooltip.prototype.getDelegateOptions = function () {
    var options = {};
    var defaults = this.getDefaults();
    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value;
    });
    return options;
  };
  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);
    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('bs.' + this.type, self);
    }
    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true;
    }
    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in';
      return;
    }
    clearTimeout(self.timeout);
    self.hoverState = 'in';
    if (!self.options.delay || !self.options.delay.show) return self.show();
    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show();
    }, self.options.delay.show);
  };
  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true;
    }
    return false;
  };
  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);
    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('bs.' + this.type, self);
    }
    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false;
    }
    if (self.isInStateTrue()) return;
    clearTimeout(self.timeout);
    self.hoverState = 'out';
    if (!self.options.delay || !self.options.delay.hide) return self.hide();
    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide();
    }, self.options.delay.hide);
  };
  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);
      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !inDom) return;
      var that = this;
      var $tip = this.tip();
      var tipId = this.getUID(this.type);
      this.setContent();
      $tip.attr('id', tipId);
      this.$element.attr('aria-describedby', tipId);
      if (this.options.animation) $tip.addClass('fade');
      var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
      var autoToken = /\s?auto?\s?/i;
      var autoPlace = autoToken.test(placement);
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top';
      $tip.detach().css({
        top: 0,
        left: 0,
        display: 'block'
      }).addClass(placement).data('bs.' + this.type, this);
      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
      this.$element.trigger('inserted.bs.' + this.type);
      var pos = this.getPosition();
      var actualWidth = $tip[0].offsetWidth;
      var actualHeight = $tip[0].offsetHeight;
      if (autoPlace) {
        var orgPlacement = placement;
        var viewportDim = this.getPosition(this.$viewport);
        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > viewportDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < viewportDim.left ? 'right' : placement;
        $tip.removeClass(orgPlacement).addClass(placement);
      }
      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
      this.applyPlacement(calculatedOffset, placement);
      var complete = function complete() {
        var prevHoverState = that.hoverState;
        that.$element.trigger('shown.bs.' + that.type);
        that.hoverState = null;
        if (prevHoverState == 'out') that.leave(that);
      };
      $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
    }
  };
  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip = this.tip();
    var width = $tip[0].offsetWidth;
    var height = $tip[0].offsetHeight;

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10);
    var marginLeft = parseInt($tip.css('margin-left'), 10);

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop)) marginTop = 0;
    if (isNaN(marginLeft)) marginLeft = 0;
    offset.top += marginTop;
    offset.left += marginLeft;

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function using(props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        });
      }
    }, offset), 0);
    $tip.addClass('in');

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth = $tip[0].offsetWidth;
    var actualHeight = $tip[0].offsetHeight;
    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight;
    }
    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
    if (delta.left) offset.left += delta.left;else offset.top += delta.top;
    var isVertical = /top|bottom/.test(placement);
    var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';
    $tip.offset(offset);
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
  };
  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow().css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isVertical ? 'top' : 'left', '');
  };
  Tooltip.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();
    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
    $tip.removeClass('fade in top bottom left right');
  };
  Tooltip.prototype.hide = function (callback) {
    var that = this;
    var $tip = $(this.$tip);
    var e = $.Event('hide.bs.' + this.type);
    function complete() {
      if (that.hoverState != 'in') $tip.detach();
      that.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + that.type);
      callback && callback();
    }
    this.$element.trigger(e);
    if (e.isDefaultPrevented()) return;
    $tip.removeClass('in');
    $.support.transition && $tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
    this.hoverState = null;
    return this;
  };
  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element;
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
    }
  };
  Tooltip.prototype.hasContent = function () {
    return this.getTitle();
  };
  Tooltip.prototype.getPosition = function ($element) {
    $element = $element || this.$element;
    var el = $element[0];
    var isBody = el.tagName == 'BODY';
    var elRect = el.getBoundingClientRect();
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, {
        width: elRect.right - elRect.left,
        height: elRect.bottom - elRect.top
      });
    }
    var elOffset = isBody ? {
      top: 0,
      left: 0
    } : $element.offset();
    var scroll = {
      scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
    };
    var outerDims = isBody ? {
      width: $(window).width(),
      height: $(window).height()
    } : null;
    return $.extend({}, elRect, scroll, outerDims, elOffset);
  };
  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? {
      top: pos.top + pos.height,
      left: pos.left + pos.width / 2 - actualWidth / 2
    } : placement == 'top' ? {
      top: pos.top - actualHeight,
      left: pos.left + pos.width / 2 - actualWidth / 2
    } : placement == 'left' ? {
      top: pos.top + pos.height / 2 - actualHeight / 2,
      left: pos.left - actualWidth
    } : /* placement == 'right' */{
      top: pos.top + pos.height / 2 - actualHeight / 2,
      left: pos.left + pos.width
    };
  };
  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return delta;
    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
    var viewportDimensions = this.getPosition(this.$viewport);
    if (/right|left/.test(placement)) {
      var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
      if (topEdgeOffset < viewportDimensions.top) {
        // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset;
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
        // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
      }
    } else {
      var leftEdgeOffset = pos.left - viewportPadding;
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
      if (leftEdgeOffset < viewportDimensions.left) {
        // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset;
      } else if (rightEdgeOffset > viewportDimensions.right) {
        // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
      }
    }
    return delta;
  };
  Tooltip.prototype.getTitle = function () {
    var title;
    var $e = this.$element;
    var o = this.options;
    title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);
    return title;
  };
  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000); while (document.getElementById(prefix));
    return prefix;
  };
  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template);
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
      }
    }
    return this.$tip;
  };
  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
  };
  Tooltip.prototype.enable = function () {
    this.enabled = true;
  };
  Tooltip.prototype.disable = function () {
    this.enabled = false;
  };
  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  };
  Tooltip.prototype.toggle = function (e) {
    var self = this;
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type);
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions());
        $(e.currentTarget).data('bs.' + this.type, self);
      }
    }
    if (e) {
      self.inState.click = !self.inState.click;
      if (self.isInStateTrue()) self.enter(self);else self.leave(self);
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
    }
  };
  Tooltip.prototype.destroy = function () {
    var that = this;
    clearTimeout(this.timeout);
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type);
      if (that.$tip) {
        that.$tip.detach();
      }
      that.$tip = null;
      that.$arrow = null;
      that.$viewport = null;
    });
  };

  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tooltip');
      var options = _typeof(option) == 'object' && option;
      if (!data && /destroy|hide/.test(option)) return;
      if (!data) $this.data('bs.tooltip', data = new Tooltip(this, options));
      if (typeof option == 'string') data[option]();
    });
  }
  var old = $.fn.tooltip;
  $.fn.tooltip = Plugin;
  $.fn.tooltip.Constructor = Tooltip;

  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old;
    return this;
  };
}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.5
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================
  var Popover = function Popover(element, options) {
    this.init('popover', element, options);
  };
  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');
  Popover.VERSION = '3.3.5';
  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  });

  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
  Popover.prototype.constructor = Popover;
  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS;
  };
  Popover.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();
    var content = this.getContent();
    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
    $tip.find('.popover-content').children().detach().end()[
    // we use append for html objects to maintain js events
    this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](content);
    $tip.removeClass('fade top bottom left right in');

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
  };
  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  };
  Popover.prototype.getContent = function () {
    var $e = this.$element;
    var o = this.options;
    return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
  };
  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow');
  };

  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.popover');
      var options = _typeof(option) == 'object' && option;
      if (!data && /destroy|hide/.test(option)) return;
      if (!data) $this.data('bs.popover', data = new Popover(this, options));
      if (typeof option == 'string') data[option]();
    });
  }
  var old = $.fn.popover;
  $.fn.popover = Plugin;
  $.fn.popover.Constructor = Popover;

  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old;
    return this;
  };
}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.5
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================
  function ScrollSpy(element, options) {
    this.$body = $(document.body);
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
    this.selector = (this.options.target || '') + ' .nav li > a';
    this.offsets = [];
    this.targets = [];
    this.activeTarget = null;
    this.scrollHeight = 0;
    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this));
    this.refresh();
    this.process();
  }
  ScrollSpy.VERSION = '3.3.5';
  ScrollSpy.DEFAULTS = {
    offset: 10
  };
  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  };
  ScrollSpy.prototype.refresh = function () {
    var that = this;
    var offsetMethod = 'offset';
    var offsetBase = 0;
    this.offsets = [];
    this.targets = [];
    this.scrollHeight = this.getScrollHeight();
    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position';
      offsetBase = this.$scrollElement.scrollTop();
    }
    this.$body.find(this.selector).map(function () {
      var $el = $(this);
      var href = $el.data('target') || $el.attr('href');
      var $href = /^#./.test(href) && $(href);
      return $href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + offsetBase, href]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      that.offsets.push(this[0]);
      that.targets.push(this[1]);
    });
  };
  ScrollSpy.prototype.process = function () {
    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
    var scrollHeight = this.getScrollHeight();
    var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
    var offsets = this.offsets;
    var targets = this.targets;
    var activeTarget = this.activeTarget;
    var i;
    if (this.scrollHeight != scrollHeight) {
      this.refresh();
    }
    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
    }
    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null;
      return this.clear();
    }
    for (i = offsets.length; i--;) {
      activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
    }
  };
  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target;
    this.clear();
    var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
    var active = $(selector).parents('li').addClass('active');
    if (active.parent('.dropdown-menu').length) {
      active = active.closest('li.dropdown').addClass('active');
    }
    active.trigger('activate.bs.scrollspy');
  };
  ScrollSpy.prototype.clear = function () {
    $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
  };

  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.scrollspy');
      var options = _typeof(option) == 'object' && option;
      if (!data) $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
      if (typeof option == 'string') data[option]();
    });
  }
  var old = $.fn.scrollspy;
  $.fn.scrollspy = Plugin;
  $.fn.scrollspy.Constructor = ScrollSpy;

  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old;
    return this;
  };

  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this);
      Plugin.call($spy, $spy.data());
    });
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================
  var Tab = function Tab(element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element);
    // jscs:enable requireDollarBeforejQueryAssignment
  };

  Tab.VERSION = '3.3.5';
  Tab.TRANSITION_DURATION = 150;
  Tab.prototype.show = function () {
    var $this = this.element;
    var $ul = $this.closest('ul:not(.dropdown-menu)');
    var selector = $this.data('target');
    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return;
    var $previous = $ul.find('.active:last a');
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    });
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    });
    $previous.trigger(hideEvent);
    $this.trigger(showEvent);
    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;
    var $target = $(selector);
    this.activate($this.closest('li'), $ul);
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      });
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      });
    });
  };
  Tab.prototype.activate = function (element, container, callback) {
    var $active = container.find('> .active');
    var transition = callback && $.support.transition && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length);
    function next() {
      $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', false);
      element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', true);
      if (transition) {
        element[0].offsetWidth; // reflow for transition
        element.addClass('in');
      } else {
        element.removeClass('fade');
      }
      if (element.parent('.dropdown-menu').length) {
        element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', true);
      }
      callback && callback();
    }
    $active.length && transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();
    $active.removeClass('in');
  };

  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tab');
      if (!data) $this.data('bs.tab', data = new Tab(this));
      if (typeof option == 'string') data[option]();
    });
  }
  var old = $.fn.tab;
  $.fn.tab = Plugin;
  $.fn.tab.Constructor = Tab;

  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old;
    return this;
  };

  // TAB DATA-API
  // ============

  var clickHandler = function clickHandler(e) {
    e.preventDefault();
    Plugin.call($(this), 'show');
  };
  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler).on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);
}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================
  var Affix = function Affix(element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options);
    this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));
    this.$element = $(element);
    this.affixed = null;
    this.unpin = null;
    this.pinnedOffset = null;
    this.checkPosition();
  };
  Affix.VERSION = '3.3.5';
  Affix.RESET = 'affix affix-top affix-bottom';
  Affix.DEFAULTS = {
    offset: 0,
    target: window
  };
  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    var targetHeight = this.$target.height();
    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;
    if (this.affixed == 'bottom') {
      if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : 'bottom';
      return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : 'bottom';
    }
    var initializing = this.affixed == null;
    var colliderTop = initializing ? scrollTop : position.top;
    var colliderHeight = initializing ? targetHeight : height;
    if (offsetTop != null && scrollTop <= offsetTop) return 'top';
    if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return 'bottom';
    return false;
  };
  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(Affix.RESET).addClass('affix');
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    return this.pinnedOffset = position.top - scrollTop;
  };
  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1);
  };
  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return;
    var height = this.$element.height();
    var offset = this.options.offset;
    var offsetTop = offset.top;
    var offsetBottom = offset.bottom;
    var scrollHeight = Math.max($(document).height(), $(document.body).height());
    if (_typeof(offset) != 'object') offsetBottom = offsetTop = offset;
    if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);
    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);
    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '');
      var affixType = 'affix' + (affix ? '-' + affix : '');
      var e = $.Event(affixType + '.bs.affix');
      this.$element.trigger(e);
      if (e.isDefaultPrevented()) return;
      this.affixed = affix;
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;
      this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix');
    }
    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      });
    }
  };

  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.affix');
      var options = _typeof(option) == 'object' && option;
      if (!data) $this.data('bs.affix', data = new Affix(this, options));
      if (typeof option == 'string') data[option]();
    });
  }
  var old = $.fn.affix;
  $.fn.affix = Plugin;
  $.fn.affix.Constructor = Affix;

  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old;
    return this;
  };

  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this);
      var data = $spy.data();
      data.offset = data.offset || {};
      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
      if (data.offsetTop != null) data.offset.top = data.offsetTop;
      Plugin.call($spy, data);
    });
  });
}(jQuery);

/***/ }),

/***/ "./src/assets/js/custom.js":
/*!*********************************!*\
  !*** ./src/assets/js/custom.js ***!
  \*********************************/
/***/ (() => {

/**	
	* Template Name: Intensely
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	
	1. SEARCH BOX SLIDE
	2. HOVER DROPDOWN MENU
	3. BOOTSTRAP ACCORDION
	4. SKILL PROGRESS BAR
	5. MIXIT SLIDER
	6. FANCYBOX
	7. MAIN SLIDER (SLICK SLIDER)
	8. LOGIN MODAL WINDOW
	9. COUNTER
	10. TESTIMONIAL SLIDER (SLICK SLIDER)
	11. CLIENTS BRAND SLIDER (SLICK SLIDER) 
	12. SCROLL TOP BUTTON
	13. PRELOADER 
	14. WOW ANIMATION	
	
**/

jQuery(function ($) {
  /* ----------------------------------------------------------- */
  /*  1. SEARCH BOX SLIDE
  /* ----------------------------------------------------------- */

  $('#search-icon').click(function (e) {
    e.preventDefault();
    $('.header-top').slideToggle(500);
  });

  /* ----------------------------------------------------------- */
  /*  2. HOVER DROPDOWN MENU
  /* ----------------------------------------------------------- */

  // for hover dropdown menu
  $('ul.nav li.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
  }, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
  });

  /* ----------------------------------------------------------- */
  /*  3. BOOTSTRAP ACCORDION
  /* ----------------------------------------------------------- */

  $('#accordion .panel-collapse').on('shown.bs.collapse', function () {
    $(this).prev().find(".fa").removeClass("fa-plus-square").addClass("fa-minus-square");
  });

  //The reverse of the above on hidden event:

  $('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
    $(this).prev().find(".fa").removeClass("fa-minus-square").addClass("fa-plus-square");
  });

  /* ----------------------------------------------------------- */
  /*  4. SKILL PROGRESS BAR
  /* ----------------------------------------------------------- */

  $('.progress .progress-bar').progressbar({
    display_text: 'center',
    percent_format: function percent_format(p) {
      return p + ' %';
    }
  });

  /* ----------------------------------------------------------- */
  /*  5. MIXIT SLIDER
  /* ----------------------------------------------------------- */

  jQuery(function () {
    $('#mixit-container').mixItUp();
  });

  /* ----------------------------------------------------------- */
  /*  6. FANCYBOX 
  /* ----------------------------------------------------------- */

  jQuery(document).ready(function () {
    $(".fancybox").fancybox();
  });

  /* ----------------------------------------------------------- */
  /*  7. MAIN SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */

  jQuery('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    accessibility: false,
    fade: true,
    cssEase: 'linear'
  });

  /* ----------------------------------------------------------- */
  /*  8. LOGIN MODAL WINDOW
  /* ----------------------------------------------------------- */

  $("#signup-btn").on('click', function (e) {
    $('#signup-content').show();
    $('#login-content').hide();
    e.preventDefault();
  });
  $("#login-btn").on('click', function (e) {
    $('#login-content').show();
    $('#signup-content').hide();
    e.preventDefault();
  });

  /* ----------------------------------------------------------- */
  /*  9. COUNTER
  /* ----------------------------------------------------------- */

  jQuery('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  /* ----------------------------------------------------------- */
  /*  10. TESTIMONIAL SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */

  jQuery('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    cssEase: 'linear'
  });

  /* ----------------------------------------------------------- */
  /*  11. CLIENTS BRAND SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */

  $('.clients-brand-slide').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });

  /* ----------------------------------------------------------- */
  /*  12. SCROLL TOP BUTTON
  /* ----------------------------------------------------------- */

  //Check to see if the window is top if not then display button

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  //Click event to scroll to top

  $('.scrollToTop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  /* ----------------------------------------------------------- */
  /*  13. PRELOADER 
  /* ----------------------------------------------------------- */

  jQuery(window).load(function () {
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(100).css({
      'overflow': 'visible'
    });
  });

  /* ----------------------------------------------------------- */
  /*  14. WOW ANIMATION
  /* ----------------------------------------------------------- */

  wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    live: true,
    callback: function callback(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
    }
  });
  wow.init();
});

/***/ }),

/***/ "./src/assets/js/jquery.counterup.js":
/*!*******************************************!*\
  !*** ./src/assets/js/jquery.counterup.js ***!
  \*******************************************/
/***/ (() => {

/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
(function ($) {
  "use strict";

  $.fn.counterUp = function (options) {
    // Defaults
    var settings = $.extend({
      'time': 400,
      'delay': 10
    }, options);
    return this.each(function () {
      // Store the object
      var $this = $(this);
      var $settings = settings;
      var counterUpper = function counterUpper() {
        var nums = [];
        var divisions = $settings.time / $settings.delay;
        var num = $this.text();
        var isComma = /[0-9]+,[0-9]+/.test(num);
        num = num.replace(/,/g, '');
        var isInt = /^[0-9]+$/.test(num);
        var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
        var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

        // Generate list of incremental numbers to display
        for (var i = divisions; i >= 1; i--) {
          // Preserve as int if input was int
          var newNum = parseInt(num / divisions * i);

          // Preserve float if input was float
          if (isFloat) {
            newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
          }

          // Preserve commas if input had commas
          if (isComma) {
            while (/(\d+)(\d{3})/.test(newNum.toString())) {
              newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
            }
          }
          nums.unshift(newNum);
        }
        $this.data('counterup-nums', nums);
        $this.text('0');

        // Updates the number until we're done
        var f = function f() {
          $this.text($this.data('counterup-nums').shift());
          if ($this.data('counterup-nums').length) {
            setTimeout($this.data('counterup-func'), $settings.delay);
          } else {
            delete $this.data('counterup-nums');
            $this.data('counterup-nums', null);
            $this.data('counterup-func', null);
          }
        };
        $this.data('counterup-func', f);

        // Start the count up
        setTimeout($this.data('counterup-func'), $settings.delay);
      };

      // Perform counts when the element gets into view
      $this.waypoint(counterUpper, {
        offset: '100%',
        triggerOnce: true
      });
    });
  };
})(jQuery);

/***/ }),

/***/ "./src/assets/js/jquery.fancybox.pack.js":
/*!***********************************************!*\
  !*** ./src/assets/js/jquery.fancybox.pack.js ***!
  \***********************************************/
/***/ (() => {

/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function (s, H, f, w) {
  var K = f("html"),
    q = f(s),
    p = f(H),
    b = f.fancybox = function () {
      b.open.apply(this, arguments);
    },
    J = navigator.userAgent.match(/msie/i),
    C = null,
    t = H.createTouch !== w,
    u = function u(a) {
      return a && a.hasOwnProperty && a instanceof f;
    },
    r = function r(a) {
      return a && "string" === f.type(a);
    },
    F = function F(a) {
      return r(a) && 0 < a.indexOf("%");
    },
    m = function m(a, d) {
      var e = parseInt(a, 10) || 0;
      d && F(a) && (e *= b.getViewport()[d] / 100);
      return Math.ceil(e);
    },
    x = function x(a, b) {
      return m(a, b) + "px";
    };
  f.extend(b, {
    version: "2.1.5",
    defaults: {
      padding: 15,
      margin: 20,
      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,
      pixelRatio: 1,
      autoSize: !0,
      autoHeight: !1,
      autoWidth: !1,
      autoResize: !0,
      autoCenter: !t,
      fitToView: !0,
      aspectRatio: !1,
      topRatio: 0.5,
      leftRatio: 0.5,
      scrolling: "auto",
      wrapCSS: "",
      arrows: !0,
      closeBtn: !0,
      closeClick: !1,
      nextClick: !1,
      mouseWheel: !0,
      autoPlay: !1,
      playSpeed: 3E3,
      preload: 3,
      modal: !1,
      loop: !0,
      ajax: {
        dataType: "html",
        headers: {
          "X-fancyBox": !0
        }
      },
      iframe: {
        scrolling: "auto",
        preload: !0
      },
      swf: {
        wmode: "transparent",
        allowfullscreen: "true",
        allowscriptaccess: "always"
      },
      keys: {
        next: {
          13: "left",
          34: "up",
          39: "left",
          40: "up"
        },
        prev: {
          8: "right",
          33: "down",
          37: "right",
          38: "down"
        },
        close: [27],
        play: [32],
        toggle: [70]
      },
      direction: {
        next: "left",
        prev: "right"
      },
      scrollOutside: !0,
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,
      tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (J ? ' allowtransparency="true"' : "") + "></iframe>",
        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
      },
      openEffect: "fade",
      openSpeed: 250,
      openEasing: "swing",
      openOpacity: !0,
      openMethod: "zoomIn",
      closeEffect: "fade",
      closeSpeed: 250,
      closeEasing: "swing",
      closeOpacity: !0,
      closeMethod: "zoomOut",
      nextEffect: "elastic",
      nextSpeed: 250,
      nextEasing: "swing",
      nextMethod: "changeIn",
      prevEffect: "elastic",
      prevSpeed: 250,
      prevEasing: "swing",
      prevMethod: "changeOut",
      helpers: {
        overlay: !0,
        title: !0
      },
      onCancel: f.noop,
      beforeLoad: f.noop,
      afterLoad: f.noop,
      beforeShow: f.noop,
      afterShow: f.noop,
      beforeChange: f.noop,
      beforeClose: f.noop,
      afterClose: f.noop
    },
    group: {},
    opts: {},
    previous: null,
    coming: null,
    current: null,
    isActive: !1,
    isOpen: !1,
    isOpened: !1,
    wrap: null,
    skin: null,
    outer: null,
    inner: null,
    player: {
      timer: null,
      isActive: !1
    },
    ajaxLoad: null,
    imgPreload: null,
    transitions: {},
    helpers: {},
    open: function open(a, d) {
      if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = u(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
        var l = {},
          g,
          h,
          k,
          n,
          m;
        "object" === f.type(c) && (c.nodeType && (c = f(c)), u(c) ? (l = {
          href: c.data("fancybox-href") || c.attr("href"),
          title: f("<div/>").text(c.data("fancybox-title") || c.attr("title")).html(),
          isDom: !0,
          element: c
        }, f.metadata && f.extend(!0, l, c.metadata())) : l = c);
        g = d.href || l.href || (r(c) ? c : null);
        h = d.title !== w ? d.title : l.title || "";
        n = (k = d.content || l.content) ? "html" : d.type || l.type;
        !n && l.isDom && (n = c.data("fancybox-type"), n || (n = (n = c.prop("class").match(/fancybox\.(\w+)/)) ? n[1] : null));
        r(g) && (n || (b.isImage(g) ? n = "image" : b.isSWF(g) ? n = "swf" : "#" === g.charAt(0) ? n = "inline" : r(c) && (n = "html", k = c)), "ajax" === n && (m = g.split(/\s+/, 2), g = m.shift(), m = m.shift()));
        k || ("inline" === n ? g ? k = f(r(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : l.isDom && (k = c) : "html" === n ? k = g : n || g || !l.isDom || (n = "inline", k = c));
        f.extend(l, {
          href: g,
          type: n,
          content: k,
          title: h,
          selector: m
        });
        a[e] = l;
      }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== w && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index);
    },
    cancel: function cancel() {
      var a = b.coming;
      a && !1 === b.trigger("onCancel") || (b.hideLoading(), a && (b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a)));
    },
    close: function close(a) {
      b.cancel();
      !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (b.isOpen && !0 !== a ? (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]()) : (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut())));
    },
    play: function play(a) {
      var d = function d() {
          clearTimeout(b.player.timer);
        },
        e = function e() {
          d();
          b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed));
        },
        c = function c() {
          d();
          p.unbind(".player");
          b.player.isActive = !1;
          b.trigger("onPlayEnd");
        };
      !0 === a || !b.player.isActive && !1 !== a ? b.current && (b.current.loop || b.current.index < b.group.length - 1) && (b.player.isActive = !0, p.bind({
        "onCancel.player beforeClose.player": c,
        "onUpdate.player": e,
        "beforeLoad.player": d
      }), e(), b.trigger("onPlayStart")) : c();
    },
    next: function next(a) {
      var d = b.current;
      d && (r(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"));
    },
    prev: function prev(a) {
      var d = b.current;
      d && (r(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"));
    },
    jumpto: function jumpto(a, d, e) {
      var c = b.current;
      c && (a = m(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== w && (b.cancel(), b._start(a)));
    },
    reposition: function reposition(a, d) {
      var e = b.current,
        c = e ? e.wrap : null,
        l;
      c && (l = b._getPosition(d), a && "scroll" === a.type ? (delete l.position, c.stop(!0, !0).animate(l, 200)) : (c.css(l), e.pos = f.extend({}, e.dim, l)));
    },
    update: function update(a) {
      var d = a && a.originalEvent && a.originalEvent.type,
        e = !d || "orientationchange" === d;
      e && (clearTimeout(C), C = null);
      b.isOpen && !C && (C = setTimeout(function () {
        var c = b.current;
        c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), C = null);
      }, e && !t ? 0 : 300));
    },
    toggle: function toggle(a) {
      b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, t && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update());
    },
    hideLoading: function hideLoading() {
      p.unbind(".loading");
      f("#fancybox-loading").remove();
    },
    showLoading: function showLoading() {
      var a, d;
      b.hideLoading();
      a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
      p.bind("keydown.loading", function (a) {
        27 === (a.which || a.keyCode) && (a.preventDefault(), b.cancel());
      });
      b.defaults.fixed || (d = b.getViewport(), a.css({
        position: "absolute",
        top: 0.5 * d.h + d.y,
        left: 0.5 * d.w + d.x
      }));
      b.trigger("onLoading");
    },
    getViewport: function getViewport() {
      var a = b.current && b.current.locked || !1,
        d = {
          x: q.scrollLeft(),
          y: q.scrollTop()
        };
      a && a.length ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = t && s.innerWidth ? s.innerWidth : q.width(), d.h = t && s.innerHeight ? s.innerHeight : q.height());
      return d;
    },
    unbindEvents: function unbindEvents() {
      b.wrap && u(b.wrap) && b.wrap.unbind(".fb");
      p.unbind(".fb");
      q.unbind(".fb");
    },
    bindEvents: function bindEvents() {
      var a = b.current,
        d;
      a && (q.bind("orientationchange.fb" + (t ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function (e) {
        var c = e.which || e.keyCode,
          l = e.target || e.srcElement;
        if (27 === c && b.coming) return !1;
        e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || l && (l.type || f(l).is("[contenteditable]")) || f.each(d, function (d, l) {
          if (1 < a.group.length && l[c] !== w) return b[d](l[c]), e.preventDefault(), !1;
          if (-1 < f.inArray(c, l)) return b[d](), e.preventDefault(), !1;
        });
      }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, l, g) {
        for (var h = f(d.target || null), k = !1; h.length && !(k || h.is(".fancybox-skin") || h.is(".fancybox-wrap"));) k = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
        0 !== c && !k && 1 < b.group.length && !a.canShrink && (0 < g || 0 < l ? b.prev(0 < g ? "down" : "left") : (0 > g || 0 > l) && b.next(0 > g ? "up" : "right"), d.preventDefault());
      }));
    },
    trigger: function trigger(a, d) {
      var e,
        c = d || b.coming || b.current;
      if (c) {
        f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
        if (!1 === e) return !1;
        c.helpers && f.each(c.helpers, function (d, e) {
          if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c);
        });
      }
      p.trigger(a);
    },
    isImage: function isImage(a) {
      return r(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
    },
    isSWF: function isSWF(a) {
      return r(a) && a.match(/\.(swf)((\?|#).*)?$/i);
    },
    _start: function _start(a) {
      var d = {},
        e,
        c;
      a = m(a);
      e = b.group[a] || null;
      if (!e) return !1;
      d = f.extend(!0, {}, b.opts, e);
      e = d.margin;
      c = d.padding;
      "number" === f.type(e) && (d.margin = [e, e, e, e]);
      "number" === f.type(c) && (d.padding = [c, c, c, c]);
      d.modal && f.extend(!0, d, {
        closeBtn: !1,
        closeClick: !1,
        nextClick: !1,
        arrows: !1,
        mouseWheel: !1,
        keys: null,
        helpers: {
          overlay: {
            closeClick: !1
          }
        }
      });
      d.autoSize && (d.autoWidth = d.autoHeight = !0);
      "auto" === d.width && (d.autoWidth = !0);
      "auto" === d.height && (d.autoHeight = !0);
      d.group = b.group;
      d.index = a;
      b.coming = d;
      if (!1 === b.trigger("beforeLoad")) b.coming = null;else {
        c = d.type;
        e = d.href;
        if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
        b.isActive = !0;
        if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
        "image" === c && (d.aspectRatio = !0);
        "iframe" === c && t && (d.scrolling = "scroll");
        d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (t ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
        f.extend(d, {
          skin: f(".fancybox-skin", d.wrap),
          outer: f(".fancybox-outer", d.wrap),
          inner: f(".fancybox-inner", d.wrap)
        });
        f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
          d.skin.css("padding" + b, x(d.padding[a]));
        });
        b.trigger("onReady");
        if ("inline" === c || "html" === c) {
          if (!d.content || !d.content.length) return b._error("content");
        } else if (!e) return b._error("href");
        "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad();
      }
    },
    _error: function _error(a) {
      f.extend(b.coming, {
        type: "html",
        autoWidth: !0,
        autoHeight: !0,
        minWidth: 0,
        minHeight: 0,
        scrolling: "no",
        hasError: a,
        content: b.coming.tpl.error
      });
      b._afterLoad();
    },
    _loadImage: function _loadImage() {
      var a = b.imgPreload = new Image();
      a.onload = function () {
        this.onload = this.onerror = null;
        b.coming.width = this.width / b.opts.pixelRatio;
        b.coming.height = this.height / b.opts.pixelRatio;
        b._afterLoad();
      };
      a.onerror = function () {
        this.onload = this.onerror = null;
        b._error("image");
      };
      a.src = b.coming.href;
      !0 !== a.complete && b.showLoading();
    },
    _loadAjax: function _loadAjax() {
      var a = b.coming;
      b.showLoading();
      b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
        url: a.href,
        error: function error(a, e) {
          b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading();
        },
        success: function success(d, e) {
          "success" === e && (a.content = d, b._afterLoad());
        }
      }));
    },
    _loadIframe: function _loadIframe() {
      var a = b.coming,
        d = f(a.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr("scrolling", t ? "auto" : a.iframe.scrolling).attr("src", a.href);
      f(a.wrap).bind("onReset", function () {
        try {
          f(this).find("iframe").hide().attr("src", "//about:blank").end().empty();
        } catch (a) {}
      });
      a.iframe.preload && (b.showLoading(), d.one("load", function () {
        f(this).data("ready", 1);
        t || f(this).bind("load.fb", b.update);
        f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
        b._afterLoad();
      }));
      a.content = d.appendTo(a.inner);
      a.iframe.preload || b._afterLoad();
    },
    _preloadImages: function _preloadImages() {
      var a = b.group,
        d = b.current,
        e = a.length,
        c = d.preload ? Math.min(d.preload, e - 1) : 0,
        f,
        g;
      for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && (new Image().src = f.href);
    },
    _afterLoad: function _afterLoad() {
      var a = b.coming,
        d = b.current,
        e,
        c,
        l,
        g,
        h;
      b.hideLoading();
      if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;else {
        d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
        b.unbindEvents();
        e = a.content;
        c = a.type;
        l = a.scrolling;
        f.extend(b, {
          wrap: a.wrap,
          skin: a.skin,
          outer: a.outer,
          inner: a.inner,
          current: a,
          previous: d
        });
        g = a.href;
        switch (c) {
          case "inline":
          case "ajax":
          case "html":
            a.selector ? e = f("<div>").html(e).find(a.selector) : u(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
              f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1);
            }));
            break;
          case "image":
            e = a.tpl.image.replace(/\{href\}/g, g);
            break;
          case "swf":
            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) {
              e += '<param name="' + a + '" value="' + b + '"></param>';
              h += " " + a + '="' + b + '"';
            }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>";
        }
        u(e) && e.parent().is(a.inner) || a.inner.append(e);
        b.trigger("beforeShow");
        a.inner.css("overflow", "yes" === l ? "scroll" : "no" === l ? "hidden" : l);
        b._setDimension();
        b.reposition();
        b.isOpen = !1;
        b.coming = null;
        b.bindEvents();
        if (!b.isOpened) f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();else if (d.prevMethod) b.transitions[d.prevMethod]();
        b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
        b._preloadImages();
      }
    },
    _setDimension: function _setDimension() {
      var a = b.getViewport(),
        d = 0,
        e = !1,
        c = !1,
        e = b.wrap,
        l = b.skin,
        g = b.inner,
        h = b.current,
        c = h.width,
        k = h.height,
        n = h.minWidth,
        v = h.minHeight,
        p = h.maxWidth,
        q = h.maxHeight,
        t = h.scrolling,
        r = h.scrollOutside ? h.scrollbarWidth : 0,
        y = h.margin,
        z = m(y[1] + y[3]),
        s = m(y[0] + y[2]),
        w,
        A,
        u,
        D,
        B,
        G,
        C,
        E,
        I;
      e.add(l).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
      y = m(l.outerWidth(!0) - l.width());
      w = m(l.outerHeight(!0) - l.height());
      A = z + y;
      u = s + w;
      D = F(c) ? (a.w - A) * m(c) / 100 : c;
      B = F(k) ? (a.h - u) * m(k) / 100 : k;
      if ("iframe" === h.type) {
        if (I = h.content, h.autoHeight && 1 === I.data("ready")) try {
          I[0].contentWindow.document.location && (g.width(D).height(9999), G = I.contents().find("body"), r && G.css("overflow-x", "hidden"), B = G.outerHeight(!0));
        } catch (H) {}
      } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(D), h.autoHeight || g.height(B), h.autoWidth && (D = g.width()), h.autoHeight && (B = g.height()), g.removeClass("fancybox-tmp");
      c = m(D);
      k = m(B);
      E = D / B;
      n = m(F(n) ? m(n, "w") - A : n);
      p = m(F(p) ? m(p, "w") - A : p);
      v = m(F(v) ? m(v, "h") - u : v);
      q = m(F(q) ? m(q, "h") - u : q);
      G = p;
      C = q;
      h.fitToView && (p = Math.min(a.w - A, p), q = Math.min(a.h - u, q));
      A = a.w - z;
      s = a.h - s;
      h.aspectRatio ? (c > p && (c = p, k = m(c / E)), k > q && (k = q, c = m(k * E)), c < n && (c = n, k = m(c / E)), k < v && (k = v, c = m(k * E))) : (c = Math.max(n, Math.min(c, p)), h.autoHeight && "iframe" !== h.type && (g.width(c), k = g.height()), k = Math.max(v, Math.min(k, q)));
      if (h.fitToView) if (g.width(c).height(k), e.width(c + y), a = e.width(), z = e.height(), h.aspectRatio) for (; (a > A || z > s) && c > n && k > v && !(19 < d++);) k = Math.max(v, Math.min(q, k - 10)), c = m(k * E), c < n && (c = n, k = m(c / E)), c > p && (c = p, k = m(c / E)), g.width(c).height(k), e.width(c + y), a = e.width(), z = e.height();else c = Math.max(n, Math.min(c, c - (a - A))), k = Math.max(v, Math.min(k, k - (z - s)));
      r && "auto" === t && k < B && c + y + r < A && (c += r);
      g.width(c).height(k);
      e.width(c + y);
      a = e.width();
      z = e.height();
      e = (a > A || z > s) && c > n && k > v;
      c = h.aspectRatio ? c < G && k < C && c < D && k < B : (c < G || k < C) && (c < D || k < B);
      f.extend(h, {
        dim: {
          width: x(a),
          height: x(z)
        },
        origWidth: D,
        origHeight: B,
        canShrink: e,
        canExpand: c,
        wPadding: y,
        hPadding: w,
        wrapSpace: z - l.outerHeight(!0),
        skinSpace: l.height() - k
      });
      !I && h.autoHeight && k > v && k < q && !c && g.height("auto");
    },
    _getPosition: function _getPosition(a) {
      var d = b.current,
        e = b.getViewport(),
        c = d.margin,
        f = b.wrap.width() + c[1] + c[3],
        g = b.wrap.height() + c[0] + c[2],
        c = {
          position: "absolute",
          top: c[0],
          left: c[3]
        };
      d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
      c.top = x(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
      c.left = x(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
      return c;
    },
    _afterZoomIn: function _afterZoomIn() {
      var a = b.current;
      a && ((b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
        f(d.target).is("a") || f(d.target).parent().is("a") || (d.preventDefault(), b[a.closeClick ? "close" : "next"]());
      }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
        a.preventDefault();
        b.close();
      }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), a.loop || a.index !== a.group.length - 1) ? b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play(!0)) : b.play(!1));
    },
    _afterZoomOut: function _afterZoomOut(a) {
      a = a || b.current;
      f(".fancybox-wrap").trigger("onReset").remove();
      f.extend(b, {
        group: {},
        opts: {},
        router: !1,
        current: null,
        isActive: !1,
        isOpened: !1,
        isOpen: !1,
        isClosing: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null
      });
      b.trigger("afterClose", a);
    }
  });
  b.transitions = {
    getOrigPosition: function getOrigPosition() {
      var a = b.current,
        d = a.element,
        e = a.orig,
        c = {},
        f = 50,
        g = 50,
        h = a.hPadding,
        k = a.wPadding,
        n = b.getViewport();
      !e && a.isDom && d.is(":visible") && (e = d.find("img:first"), e.length || (e = d));
      u(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = n.y + (n.h - g) * a.topRatio, c.left = n.x + (n.w - f) * a.leftRatio);
      if ("fixed" === b.wrap.css("position") || a.locked) c.top -= n.y, c.left -= n.x;
      return c = {
        top: x(c.top - h * a.topRatio),
        left: x(c.left - k * a.leftRatio),
        width: x(f + k),
        height: x(g + h)
      };
    },
    step: function step(a, d) {
      var e,
        c,
        f = d.prop;
      c = b.current;
      var g = c.wrapSpace,
        h = c.skinSpace;
      if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](m("width" === f ? c : c - g * e)), b.inner[f](m("width" === f ? c : c - g * e - h * e));
    },
    zoomIn: function zoomIn() {
      var a = b.current,
        d = a.pos,
        e = a.openEffect,
        c = "elastic" === e,
        l = f.extend({
          opacity: 1
        }, d);
      delete l.position;
      c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
      b.wrap.css(d).animate(l, {
        duration: "none" === e ? 0 : a.openSpeed,
        easing: a.openEasing,
        step: c ? this.step : null,
        complete: b._afterZoomIn
      });
    },
    zoomOut: function zoomOut() {
      var a = b.current,
        d = a.closeEffect,
        e = "elastic" === d,
        c = {
          opacity: 0.1
        };
      e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
      b.wrap.animate(c, {
        duration: "none" === d ? 0 : a.closeSpeed,
        easing: a.closeEasing,
        step: e ? this.step : null,
        complete: b._afterZoomOut
      });
    },
    changeIn: function changeIn() {
      var a = b.current,
        d = a.nextEffect,
        e = a.pos,
        c = {
          opacity: 1
        },
        f = b.direction,
        g;
      e.opacity = 0.1;
      "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = x(m(e[g]) - 200), c[g] = "+=200px") : (e[g] = x(m(e[g]) + 200), c[g] = "-=200px"));
      "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
        duration: a.nextSpeed,
        easing: a.nextEasing,
        complete: b._afterZoomIn
      });
    },
    changeOut: function changeOut() {
      var a = b.previous,
        d = a.prevEffect,
        e = {
          opacity: 0.1
        },
        c = b.direction;
      "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
      a.wrap.animate(e, {
        duration: "none" === d ? 0 : a.prevSpeed,
        easing: a.prevEasing,
        complete: function complete() {
          f(this).trigger("onReset").remove();
        }
      });
    }
  };
  b.helpers.overlay = {
    defaults: {
      closeClick: !0,
      speedOut: 200,
      showEarly: !0,
      css: {},
      locked: !t,
      fixed: !0
    },
    overlay: null,
    fixed: !1,
    el: f("html"),
    create: function create(a) {
      var d;
      a = f.extend({}, this.defaults, a);
      this.overlay && this.close();
      d = b.coming ? b.coming.parent : a.parent;
      this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(d && d.lenth ? d : "body");
      this.fixed = !1;
      a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0);
    },
    open: function open(a) {
      var d = this;
      a = f.extend({}, this.defaults, a);
      this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
      this.fixed || (q.bind("resize.overlay", f.proxy(this.update, this)), this.update());
      a.closeClick && this.overlay.bind("click.overlay", function (a) {
        if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1;
      });
      this.overlay.css(a.css).show();
    },
    close: function close() {
      q.unbind("resize.overlay");
      this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH));
      f(".fancybox-overlay").remove().hide();
      f.extend(this, {
        overlay: null,
        fixed: !1
      });
    },
    update: function update() {
      var a = "100%",
        b;
      this.overlay.width(a).height("100%");
      J ? (b = Math.max(H.documentElement.offsetWidth, H.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > q.width() && (a = p.width());
      this.overlay.width(a).height(p.height());
    },
    onReady: function onReady(a, b) {
      var e = this.overlay;
      f(".fancybox-overlay").stop(!0, !0);
      e || this.create(a);
      a.locked && this.fixed && b.fixed && (b.locked = this.overlay.append(b.wrap), b.fixed = !1);
      !0 === a.showEarly && this.beforeShow.apply(this, arguments);
    },
    beforeShow: function beforeShow(a, b) {
      b.locked && !this.el.hasClass("fancybox-lock") && (!1 !== this.fixPosition && f("*").filter(function () {
        return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap");
      }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = q.scrollTop(), this.scrollH = q.scrollLeft(), this.el.addClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH));
      this.open(a);
    },
    onUpdate: function onUpdate() {
      this.fixed || this.update();
    },
    afterClose: function afterClose(a) {
      this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this));
    }
  };
  b.helpers.title = {
    defaults: {
      type: "float",
      position: "bottom"
    },
    beforeShow: function beforeShow(a) {
      var d = b.current,
        e = d.title,
        c = a.type;
      f.isFunction(e) && (e = e.call(d.element, d));
      if (r(e) && "" !== f.trim(e)) {
        d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
        switch (c) {
          case "inside":
            c = b.skin;
            break;
          case "outside":
            c = b.wrap;
            break;
          case "over":
            c = b.inner;
            break;
          default:
            c = b.skin, d.appendTo("body"), J && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(m(d.css("margin-bottom")));
        }
        d["top" === a.position ? "prependTo" : "appendTo"](c);
      }
    }
  };
  f.fn.fancybox = function (a) {
    var d,
      e = f(this),
      c = this.selector || "",
      l = function l(g) {
        var h = f(this).blur(),
          k = d,
          l,
          m;
        g.ctrlKey || g.altKey || g.shiftKey || g.metaKey || h.is(".fancybox-wrap") || (l = a.groupAttr || "data-fancybox-group", m = h.attr(l), m || (l = "rel", m = h.get(0)[l]), m && "" !== m && "nofollow" !== m && (h = c.length ? f(c) : e, h = h.filter("[" + l + '="' + m + '"]'), k = h.index(this)), a.index = k, !1 !== b.open(h, a) && g.preventDefault());
      };
    a = a || {};
    d = a.index || 0;
    c && !1 !== a.live ? p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", l) : e.unbind("click.fb-start").bind("click.fb-start", l);
    this.filter("[data-fancybox-start=1]").trigger("click");
    return this;
  };
  p.ready(function () {
    var a, d;
    f.scrollbarWidth === w && (f.scrollbarWidth = function () {
      var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
        b = a.children(),
        b = b.innerWidth() - b.height(99).innerWidth();
      a.remove();
      return b;
    });
    f.support.fixedPosition === w && (f.support.fixedPosition = function () {
      var a = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
        b = 20 === a[0].offsetTop || 15 === a[0].offsetTop;
      a.remove();
      return b;
    }());
    f.extend(b.defaults, {
      scrollbarWidth: f.scrollbarWidth(),
      fixed: f.support.fixedPosition,
      parent: f("body")
    });
    a = f(s).width();
    K.addClass("fancybox-lock-test");
    d = f(s).width();
    K.removeClass("fancybox-lock-test");
    f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head");
  });
})(window, document, jQuery);

/***/ }),

/***/ "./src/assets/js/jquery.mixitup.js":
/*!*****************************************!*\
  !*** ./src/assets/js/jquery.mixitup.js ***!
  \*****************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**!
 * MixItUp v2.1.10
 *
 * @copyright Copyright 2015 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://mixitup.kunkalabs.com
 *
 * @license   Commercial use requires a commercial license.
 *            https://mixitup.kunkalabs.com/licenses/
 *
 *            Non-commercial use permitted under terms of CC-BY-NC license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */

(function ($, undf) {
  'use strict';

  /**
   * MixItUp Constructor Function
   * @constructor
   * @extends jQuery
   */
  $.MixItUp = function () {
    var self = this;
    self._execAction('_constructor', 0);
    $.extend(self, {
      /* Public Properties
      ---------------------------------------------------------------------- */

      selectors: {
        target: '.mix',
        filter: '.filter',
        sort: '.sort'
      },
      animation: {
        enable: true,
        effects: 'fade scale',
        duration: 600,
        easing: 'ease',
        perspectiveDistance: '3000',
        perspectiveOrigin: '50% 50%',
        queue: true,
        queueLimit: 1,
        animateChangeLayout: false,
        animateResizeContainer: true,
        animateResizeTargets: false,
        staggerSequence: false,
        reverseOut: false
      },
      callbacks: {
        onMixLoad: false,
        onMixStart: false,
        onMixBusy: false,
        onMixEnd: false,
        onMixFail: false,
        _user: false
      },
      controls: {
        enable: true,
        live: false,
        toggleFilterButtons: false,
        toggleLogic: 'or',
        activeClass: 'active'
      },
      layout: {
        display: 'inline-block',
        containerClass: '',
        containerClassFail: 'fail'
      },
      load: {
        filter: 'all',
        sort: false
      },
      /* Private Properties
      ---------------------------------------------------------------------- */

      _$body: null,
      _$container: null,
      _$targets: null,
      _$parent: null,
      _$sortButtons: null,
      _$filterButtons: null,
      _suckMode: false,
      _mixing: false,
      _sorting: false,
      _clicking: false,
      _loading: true,
      _changingLayout: false,
      _changingClass: false,
      _changingDisplay: false,
      _origOrder: [],
      _startOrder: [],
      _newOrder: [],
      _activeFilter: null,
      _toggleArray: [],
      _toggleString: '',
      _activeSort: 'default:asc',
      _newSort: null,
      _startHeight: null,
      _newHeight: null,
      _incPadding: true,
      _newDisplay: null,
      _newClass: null,
      _targetsBound: 0,
      _targetsDone: 0,
      _queue: [],
      _$show: $(),
      _$hide: $()
    });
    self._execAction('_constructor', 1);
  };

  /**
   * MixItUp Prototype
   * @override
   */

  $.MixItUp.prototype = {
    constructor: $.MixItUp,
    /* Static Properties
    ---------------------------------------------------------------------- */

    _instances: {},
    _handled: {
      _filter: {},
      _sort: {}
    },
    _bound: {
      _filter: {},
      _sort: {}
    },
    _actions: {},
    _filters: {},
    /* Static Methods
    ---------------------------------------------------------------------- */

    /**
     * Extend
     * @since 2.1.0
     * @param {object} new properties/methods
     * @extends {object} prototype
     */

    extend: function extend(extension) {
      for (var key in extension) {
        $.MixItUp.prototype[key] = extension[key];
      }
    },
    /**
     * Add Action
     * @since 2.1.0
     * @param {string} hook name
     * @param {string} namespace
     * @param {function} function to execute
     * @param {number} priority
     * @extends {object} $.MixItUp.prototype._actions
     */

    addAction: function addAction(hook, name, func, priority) {
      $.MixItUp.prototype._addHook('_actions', hook, name, func, priority);
    },
    /**
     * Add Filter
     * @since 2.1.0
     * @param {string} hook name
     * @param {string} namespace
     * @param {function} function to execute
     * @param {number} priority
     * @extends {object} $.MixItUp.prototype._filters
     */

    addFilter: function addFilter(hook, name, func, priority) {
      $.MixItUp.prototype._addHook('_filters', hook, name, func, priority);
    },
    /**
     * Add Hook
     * @since 2.1.0
     * @param {string} type of hook
     * @param {string} hook name
     * @param {function} function to execute
     * @param {number} priority
     * @extends {object} $.MixItUp.prototype._filters
     */

    _addHook: function _addHook(type, hook, name, func, priority) {
      var collection = $.MixItUp.prototype[type],
        obj = {};
      priority = priority === 1 || priority === 'post' ? 'post' : 'pre';
      obj[hook] = {};
      obj[hook][priority] = {};
      obj[hook][priority][name] = func;
      $.extend(true, collection, obj);
    },
    /* Private Methods
    ---------------------------------------------------------------------- */

    /**
     * Initialise
     * @since 2.0.0
     * @param {object} domNode
     * @param {object} config
     */

    _init: function _init(domNode, config) {
      var self = this;
      self._execAction('_init', 0, arguments);
      config && $.extend(true, self, config);
      self._$body = $('body');
      self._domNode = domNode;
      self._$container = $(domNode);
      self._$container.addClass(self.layout.containerClass);
      self._id = domNode.id;
      self._platformDetect();
      self._brake = self._getPrefixedCSS('transition', 'none');
      self._refresh(true);
      self._$parent = self._$targets.parent().length ? self._$targets.parent() : self._$container;
      if (self.load.sort) {
        self._newSort = self._parseSort(self.load.sort);
        self._newSortString = self.load.sort;
        self._activeSort = self.load.sort;
        self._sort();
        self._printSort();
      }
      self._activeFilter = self.load.filter === 'all' ? self.selectors.target : self.load.filter === 'none' ? '' : self.load.filter;
      self.controls.enable && self._bindHandlers();
      if (self.controls.toggleFilterButtons) {
        self._buildToggleArray();
        for (var i = 0; i < self._toggleArray.length; i++) {
          self._updateControls({
            filter: self._toggleArray[i],
            sort: self._activeSort
          }, true);
        }
        ;
      } else if (self.controls.enable) {
        self._updateControls({
          filter: self._activeFilter,
          sort: self._activeSort
        });
      }
      self._filter();
      self._init = true;
      self._$container.data('mixItUp', self);
      self._execAction('_init', 1, arguments);
      self._buildState();
      self._$targets.css(self._brake);
      self._goMix(self.animation.enable);
    },
    /**
     * Platform Detect
     * @since 2.0.0
     */

    _platformDetect: function _platformDetect() {
      var self = this,
        vendorsTrans = ['Webkit', 'Moz', 'O', 'ms'],
        vendorsRAF = ['webkit', 'moz'],
        chrome = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || false,
        ff = typeof InstallTrigger !== 'undefined',
        prefix = function prefix(el) {
          for (var i = 0; i < vendorsTrans.length; i++) {
            if (vendorsTrans[i] + 'Transition' in el.style) {
              return {
                prefix: '-' + vendorsTrans[i].toLowerCase() + '-',
                vendor: vendorsTrans[i]
              };
            }
            ;
          }
          ;
          return 'transition' in el.style ? '' : false;
        },
        transPrefix = prefix(self._domNode);
      self._execAction('_platformDetect', 0);
      self._chrome = chrome ? parseInt(chrome[1], 10) : false;
      self._ff = ff ? parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]) : false;
      self._prefix = transPrefix.prefix;
      self._vendor = transPrefix.vendor;
      self._suckMode = window.atob && self._prefix ? false : true;
      self._suckMode && (self.animation.enable = false);
      self._ff && self._ff <= 4 && (self.animation.enable = false);

      /* Polyfills
      ---------------------------------------------------------------------- */

      /**
       * window.requestAnimationFrame
       */

      for (var x = 0; x < vendorsRAF.length && !window.requestAnimationFrame; x++) {
        window.requestAnimationFrame = window[vendorsRAF[x] + 'RequestAnimationFrame'];
      }

      /**
       * Object.getPrototypeOf
       */

      if (typeof Object.getPrototypeOf !== 'function') {
        if (_typeof('test'.__proto__) === 'object') {
          Object.getPrototypeOf = function (object) {
            return object.__proto__;
          };
        } else {
          Object.getPrototypeOf = function (object) {
            return object.constructor.prototype;
          };
        }
      }

      /**
       * Element.nextElementSibling
       */

      if (self._domNode.nextElementSibling === undf) {
        Object.defineProperty(Element.prototype, 'nextElementSibling', {
          get: function get() {
            var el = this.nextSibling;
            while (el) {
              if (el.nodeType === 1) {
                return el;
              }
              el = el.nextSibling;
            }
            return null;
          }
        });
      }
      self._execAction('_platformDetect', 1);
    },
    /**
     * Refresh
     * @since 2.0.0
     * @param {boolean} init
     * @param {boolean} force
     */

    _refresh: function _refresh(init, force) {
      var self = this;
      self._execAction('_refresh', 0, arguments);
      self._$targets = self._$container.find(self.selectors.target);
      for (var i = 0; i < self._$targets.length; i++) {
        var target = self._$targets[i];
        if (target.dataset === undf || force) {
          target.dataset = {};
          for (var j = 0; j < target.attributes.length; j++) {
            var attr = target.attributes[j],
              name = attr.name,
              val = attr.value;
            if (name.indexOf('data-') > -1) {
              var dataName = self._helpers._camelCase(name.substring(5, name.length));
              target.dataset[dataName] = val;
            }
          }
        }
        if (target.mixParent === undf) {
          target.mixParent = self._id;
        }
      }
      if (self._$targets.length && init || !self._origOrder.length && self._$targets.length) {
        self._origOrder = [];
        for (var i = 0; i < self._$targets.length; i++) {
          var target = self._$targets[i];
          self._origOrder.push(target);
        }
      }
      self._execAction('_refresh', 1, arguments);
    },
    /**
     * Bind Handlers
     * @since 2.0.0
     */

    _bindHandlers: function _bindHandlers() {
      var self = this,
        filters = $.MixItUp.prototype._bound._filter,
        sorts = $.MixItUp.prototype._bound._sort;
      self._execAction('_bindHandlers', 0);
      if (self.controls.live) {
        self._$body.on('click.mixItUp.' + self._id, self.selectors.sort, function () {
          self._processClick($(this), 'sort');
        }).on('click.mixItUp.' + self._id, self.selectors.filter, function () {
          self._processClick($(this), 'filter');
        });
      } else {
        self._$sortButtons = $(self.selectors.sort);
        self._$filterButtons = $(self.selectors.filter);
        self._$sortButtons.on('click.mixItUp.' + self._id, function () {
          self._processClick($(this), 'sort');
        });
        self._$filterButtons.on('click.mixItUp.' + self._id, function () {
          self._processClick($(this), 'filter');
        });
      }
      filters[self.selectors.filter] = filters[self.selectors.filter] === undf ? 1 : filters[self.selectors.filter] + 1;
      sorts[self.selectors.sort] = sorts[self.selectors.sort] === undf ? 1 : sorts[self.selectors.sort] + 1;
      self._execAction('_bindHandlers', 1);
    },
    /**
     * Process Click
     * @since 2.0.0
     * @param {object} $button
     * @param {string} type
     */

    _processClick: function _processClick($button, type) {
      var self = this,
        trackClick = function trackClick($button, type, off) {
          var proto = $.MixItUp.prototype;
          proto._handled['_' + type][self.selectors[type]] = proto._handled['_' + type][self.selectors[type]] === undf ? 1 : proto._handled['_' + type][self.selectors[type]] + 1;
          if (proto._handled['_' + type][self.selectors[type]] === proto._bound['_' + type][self.selectors[type]]) {
            $button[(off ? 'remove' : 'add') + 'Class'](self.controls.activeClass);
            delete proto._handled['_' + type][self.selectors[type]];
          }
        };
      self._execAction('_processClick', 0, arguments);
      if (!self._mixing || self.animation.queue && self._queue.length < self.animation.queueLimit) {
        self._clicking = true;
        if (type === 'sort') {
          var sort = $button.attr('data-sort');
          if (!$button.hasClass(self.controls.activeClass) || sort.indexOf('random') > -1) {
            $(self.selectors.sort).removeClass(self.controls.activeClass);
            trackClick($button, type);
            self.sort(sort);
          }
        }
        if (type === 'filter') {
          var filter = $button.attr('data-filter'),
            ndx,
            seperator = self.controls.toggleLogic === 'or' ? ',' : '';
          if (!self.controls.toggleFilterButtons) {
            if (!$button.hasClass(self.controls.activeClass)) {
              $(self.selectors.filter).removeClass(self.controls.activeClass);
              trackClick($button, type);
              self.filter(filter);
            }
          } else {
            self._buildToggleArray();
            if (!$button.hasClass(self.controls.activeClass)) {
              trackClick($button, type);
              self._toggleArray.push(filter);
            } else {
              trackClick($button, type, true);
              ndx = self._toggleArray.indexOf(filter);
              self._toggleArray.splice(ndx, 1);
            }
            self._toggleArray = $.grep(self._toggleArray, function (n) {
              return n;
            });
            self._toggleString = self._toggleArray.join(seperator);
            self.filter(self._toggleString);
          }
        }
        self._execAction('_processClick', 1, arguments);
      } else {
        if (typeof self.callbacks.onMixBusy === 'function') {
          self.callbacks.onMixBusy.call(self._domNode, self._state, self);
        }
        self._execAction('_processClickBusy', 1, arguments);
      }
    },
    /**
     * Build Toggle Array
     * @since 2.0.0
     */

    _buildToggleArray: function _buildToggleArray() {
      var self = this,
        activeFilter = self._activeFilter.replace(/\s/g, '');
      self._execAction('_buildToggleArray', 0, arguments);
      if (self.controls.toggleLogic === 'or') {
        self._toggleArray = activeFilter.split(',');
      } else {
        self._toggleArray = activeFilter.split('.');
        !self._toggleArray[0] && self._toggleArray.shift();
        for (var i = 0, filter; filter = self._toggleArray[i]; i++) {
          self._toggleArray[i] = '.' + filter;
        }
      }
      self._execAction('_buildToggleArray', 1, arguments);
    },
    /**
     * Update Controls
     * @since 2.0.0
     * @param {object} command
     * @param {boolean} multi
     */

    _updateControls: function _updateControls(command, multi) {
      var self = this,
        output = {
          filter: command.filter,
          sort: command.sort
        },
        update = function update($el, filter) {
          try {
            multi && type === 'filter' && !(output.filter === 'none' || output.filter === '') ? $el.filter(filter).addClass(self.controls.activeClass) : $el.removeClass(self.controls.activeClass).filter(filter).addClass(self.controls.activeClass);
          } catch (e) {}
        },
        type = 'filter',
        $el = null;
      self._execAction('_updateControls', 0, arguments);
      command.filter === undf && (output.filter = self._activeFilter);
      command.sort === undf && (output.sort = self._activeSort);
      output.filter === self.selectors.target && (output.filter = 'all');
      for (var i = 0; i < 2; i++) {
        $el = self.controls.live ? $(self.selectors[type]) : self['_$' + type + 'Buttons'];
        $el && update($el, '[data-' + type + '="' + output[type] + '"]');
        type = 'sort';
      }
      self._execAction('_updateControls', 1, arguments);
    },
    /**
     * Filter (private)
     * @since 2.0.0
     */

    _filter: function _filter() {
      var self = this;
      self._execAction('_filter', 0);
      for (var i = 0; i < self._$targets.length; i++) {
        var $target = $(self._$targets[i]);
        if ($target.is(self._activeFilter)) {
          self._$show = self._$show.add($target);
        } else {
          self._$hide = self._$hide.add($target);
        }
      }
      self._execAction('_filter', 1);
    },
    /**
     * Sort (private)
     * @since 2.0.0
     */

    _sort: function _sort() {
      var self = this,
        arrayShuffle = function arrayShuffle(oldArray) {
          var newArray = oldArray.slice(),
            len = newArray.length,
            i = len;
          while (i--) {
            var p = parseInt(Math.random() * len);
            var t = newArray[i];
            newArray[i] = newArray[p];
            newArray[p] = t;
          }
          ;
          return newArray;
        };
      self._execAction('_sort', 0);
      self._startOrder = [];
      for (var i = 0; i < self._$targets.length; i++) {
        var target = self._$targets[i];
        self._startOrder.push(target);
      }
      switch (self._newSort[0].sortBy) {
        case 'default':
          self._newOrder = self._origOrder;
          break;
        case 'random':
          self._newOrder = arrayShuffle(self._startOrder);
          break;
        case 'custom':
          self._newOrder = self._newSort[0].order;
          break;
        default:
          self._newOrder = self._startOrder.concat().sort(function (a, b) {
            return self._compare(a, b);
          });
      }
      self._execAction('_sort', 1);
    },
    /**
     * Compare Algorithm
     * @since 2.0.0
     * @param {string|number} a
     * @param {string|number} b
     * @param {number} depth (recursion)
     * @return {number}
     */

    _compare: function _compare(a, b, depth) {
      depth = depth ? depth : 0;
      var self = this,
        order = self._newSort[depth].order,
        getData = function getData(el) {
          return el.dataset[self._newSort[depth].sortBy] || 0;
        },
        attrA = isNaN(getData(a) * 1) ? getData(a).toLowerCase() : getData(a) * 1,
        attrB = isNaN(getData(b) * 1) ? getData(b).toLowerCase() : getData(b) * 1;
      if (attrA < attrB) return order === 'asc' ? -1 : 1;
      if (attrA > attrB) return order === 'asc' ? 1 : -1;
      if (attrA === attrB && self._newSort.length > depth + 1) return self._compare(a, b, depth + 1);
      return 0;
    },
    /**
     * Print Sort
     * @since 2.0.0
     * @param {boolean} reset
     */

    _printSort: function _printSort(reset) {
      var self = this,
        order = reset ? self._startOrder : self._newOrder,
        targets = self._$parent[0].querySelectorAll(self.selectors.target),
        nextSibling = targets.length ? targets[targets.length - 1].nextElementSibling : null,
        frag = document.createDocumentFragment();
      self._execAction('_printSort', 0, arguments);
      for (var i = 0; i < targets.length; i++) {
        var target = targets[i],
          whiteSpace = target.nextSibling;
        if (target.style.position === 'absolute') continue;
        if (whiteSpace && whiteSpace.nodeName === '#text') {
          self._$parent[0].removeChild(whiteSpace);
        }
        self._$parent[0].removeChild(target);
      }
      for (var i = 0; i < order.length; i++) {
        var el = order[i];
        if (self._newSort[0].sortBy === 'default' && self._newSort[0].order === 'desc' && !reset) {
          var firstChild = frag.firstChild;
          frag.insertBefore(el, firstChild);
          frag.insertBefore(document.createTextNode(' '), el);
        } else {
          frag.appendChild(el);
          frag.appendChild(document.createTextNode(' '));
        }
      }
      nextSibling ? self._$parent[0].insertBefore(frag, nextSibling) : self._$parent[0].appendChild(frag);
      self._execAction('_printSort', 1, arguments);
    },
    /**
     * Parse Sort
     * @since 2.0.0
     * @param {string} sortString
     * @return {array} newSort
     */

    _parseSort: function _parseSort(sortString) {
      var self = this,
        rules = typeof sortString === 'string' ? sortString.split(' ') : [sortString],
        newSort = [];
      for (var i = 0; i < rules.length; i++) {
        var rule = typeof sortString === 'string' ? rules[i].split(':') : ['custom', rules[i]],
          ruleObj = {
            sortBy: self._helpers._camelCase(rule[0]),
            order: rule[1] || 'asc'
          };
        newSort.push(ruleObj);
        if (ruleObj.sortBy === 'default' || ruleObj.sortBy === 'random') break;
      }
      return self._execFilter('_parseSort', newSort, arguments);
    },
    /**
     * Parse Effects
     * @since 2.0.0
     * @return {object} effects
     */

    _parseEffects: function _parseEffects() {
      var self = this,
        effects = {
          opacity: '',
          transformIn: '',
          transformOut: '',
          filter: ''
        },
        parse = function parse(effect, extract, reverse) {
          if (self.animation.effects.indexOf(effect) > -1) {
            if (extract) {
              var propIndex = self.animation.effects.indexOf(effect + '(');
              if (propIndex > -1) {
                var str = self.animation.effects.substring(propIndex),
                  match = /\(([^)]+)\)/.exec(str),
                  val = match[1];
                return {
                  val: val
                };
              }
            }
            return true;
          } else {
            return false;
          }
        },
        negate = function negate(value, invert) {
          if (invert) {
            return value.charAt(0) === '-' ? value.substr(1, value.length) : '-' + value;
          } else {
            return value;
          }
        },
        buildTransform = function buildTransform(key, invert) {
          var transforms = [['scale', '.01'], ['translateX', '20px'], ['translateY', '20px'], ['translateZ', '20px'], ['rotateX', '90deg'], ['rotateY', '90deg'], ['rotateZ', '180deg']];
          for (var i = 0; i < transforms.length; i++) {
            var prop = transforms[i][0],
              def = transforms[i][1],
              inverted = invert && prop !== 'scale';
            effects[key] += parse(prop) ? prop + '(' + negate(parse(prop, true).val || def, inverted) + ') ' : '';
          }
        };
      effects.opacity = parse('fade') ? parse('fade', true).val || '0' : '1';
      buildTransform('transformIn');
      self.animation.reverseOut ? buildTransform('transformOut', true) : effects.transformOut = effects.transformIn;
      effects.transition = {};
      effects.transition = self._getPrefixedCSS('transition', 'all ' + self.animation.duration + 'ms ' + self.animation.easing + ', opacity ' + self.animation.duration + 'ms linear');
      self.animation.stagger = parse('stagger') ? true : false;
      self.animation.staggerDuration = parseInt(parse('stagger') ? parse('stagger', true).val ? parse('stagger', true).val : 100 : 100);
      return self._execFilter('_parseEffects', effects);
    },
    /**
     * Build State
     * @since 2.0.0
     * @param {boolean} future
     * @return {object} futureState
     */

    _buildState: function _buildState(future) {
      var self = this,
        state = {};
      self._execAction('_buildState', 0);
      state = {
        activeFilter: self._activeFilter === '' ? 'none' : self._activeFilter,
        activeSort: future && self._newSortString ? self._newSortString : self._activeSort,
        fail: !self._$show.length && self._activeFilter !== '',
        $targets: self._$targets,
        $show: self._$show,
        $hide: self._$hide,
        totalTargets: self._$targets.length,
        totalShow: self._$show.length,
        totalHide: self._$hide.length,
        display: future && self._newDisplay ? self._newDisplay : self.layout.display
      };
      if (future) {
        return self._execFilter('_buildState', state);
      } else {
        self._state = state;
        self._execAction('_buildState', 1);
      }
    },
    /**
     * Go Mix
     * @since 2.0.0
     * @param {boolean} animate
     */

    _goMix: function _goMix(animate) {
      var self = this,
        phase1 = function phase1() {
          if (self._chrome && self._chrome === 31) {
            chromeFix(self._$parent[0]);
          }
          self._setInter();
          phase2();
        },
        phase2 = function phase2() {
          var scrollTop = window.pageYOffset,
            scrollLeft = window.pageXOffset,
            docHeight = document.documentElement.scrollHeight;
          self._getInterMixData();
          self._setFinal();
          self._getFinalMixData();
          window.pageYOffset !== scrollTop && window.scrollTo(scrollLeft, scrollTop);
          self._prepTargets();
          if (window.requestAnimationFrame) {
            requestAnimationFrame(phase3);
          } else {
            setTimeout(function () {
              phase3();
            }, 20);
          }
        },
        phase3 = function phase3() {
          self._animateTargets();
          if (self._targetsBound === 0) {
            self._cleanUp();
          }
        },
        chromeFix = function chromeFix(grid) {
          var parent = grid.parentElement,
            placeholder = document.createElement('div'),
            frag = document.createDocumentFragment();
          parent.insertBefore(placeholder, grid);
          frag.appendChild(grid);
          parent.replaceChild(grid, placeholder);
        },
        futureState = self._buildState(true);
      self._execAction('_goMix', 0, arguments);
      !self.animation.duration && (animate = false);
      self._mixing = true;
      self._$container.removeClass(self.layout.containerClassFail);
      if (typeof self.callbacks.onMixStart === 'function') {
        self.callbacks.onMixStart.call(self._domNode, self._state, futureState, self);
      }
      self._$container.trigger('mixStart', [self._state, futureState, self]);
      self._getOrigMixData();
      if (animate && !self._suckMode) {
        window.requestAnimationFrame ? requestAnimationFrame(phase1) : phase1();
      } else {
        self._cleanUp();
      }
      self._execAction('_goMix', 1, arguments);
    },
    /**
     * Get Target Data
     * @since 2.0.0
     */

    _getTargetData: function _getTargetData(el, stage) {
      var self = this,
        elStyle;
      el.dataset[stage + 'PosX'] = el.offsetLeft;
      el.dataset[stage + 'PosY'] = el.offsetTop;
      if (self.animation.animateResizeTargets) {
        elStyle = !self._suckMode ? window.getComputedStyle(el) : {
          marginBottom: '',
          marginRight: ''
        };
        el.dataset[stage + 'MarginBottom'] = parseInt(elStyle.marginBottom);
        el.dataset[stage + 'MarginRight'] = parseInt(elStyle.marginRight);
        el.dataset[stage + 'Width'] = el.offsetWidth;
        el.dataset[stage + 'Height'] = el.offsetHeight;
      }
    },
    /**
     * Get Original Mix Data
     * @since 2.0.0
     */

    _getOrigMixData: function _getOrigMixData() {
      var self = this,
        parentStyle = !self._suckMode ? window.getComputedStyle(self._$parent[0]) : {
          boxSizing: ''
        },
        parentBS = parentStyle.boxSizing || parentStyle[self._vendor + 'BoxSizing'];
      self._incPadding = parentBS === 'border-box';
      self._execAction('_getOrigMixData', 0);
      !self._suckMode && (self.effects = self._parseEffects());
      self._$toHide = self._$hide.filter(':visible');
      self._$toShow = self._$show.filter(':hidden');
      self._$pre = self._$targets.filter(':visible');
      self._startHeight = self._incPadding ? self._$parent.outerHeight() : self._$parent.height();
      for (var i = 0; i < self._$pre.length; i++) {
        var el = self._$pre[i];
        self._getTargetData(el, 'orig');
      }
      self._execAction('_getOrigMixData', 1);
    },
    /**
     * Set Intermediate Positions
     * @since 2.0.0
     */

    _setInter: function _setInter() {
      var self = this;
      self._execAction('_setInter', 0);
      if (self._changingLayout && self.animation.animateChangeLayout) {
        self._$toShow.css('display', self._newDisplay);
        if (self._changingClass) {
          self._$container.removeClass(self.layout.containerClass).addClass(self._newClass);
        }
      } else {
        self._$toShow.css('display', self.layout.display);
      }
      self._execAction('_setInter', 1);
    },
    /**
     * Get Intermediate Mix Data
     * @since 2.0.0
     */

    _getInterMixData: function _getInterMixData() {
      var self = this;
      self._execAction('_getInterMixData', 0);
      for (var i = 0; i < self._$toShow.length; i++) {
        var el = self._$toShow[i];
        self._getTargetData(el, 'inter');
      }
      for (var i = 0; i < self._$pre.length; i++) {
        var el = self._$pre[i];
        self._getTargetData(el, 'inter');
      }
      self._execAction('_getInterMixData', 1);
    },
    /**
     * Set Final Positions
     * @since 2.0.0
     */

    _setFinal: function _setFinal() {
      var self = this;
      self._execAction('_setFinal', 0);
      self._sorting && self._printSort();
      self._$toHide.removeStyle('display');
      if (self._changingLayout && self.animation.animateChangeLayout) {
        self._$pre.css('display', self._newDisplay);
      }
      self._execAction('_setFinal', 1);
    },
    /**
     * Get Final Mix Data
     * @since 2.0.0
     */

    _getFinalMixData: function _getFinalMixData() {
      var self = this;
      self._execAction('_getFinalMixData', 0);
      for (var i = 0; i < self._$toShow.length; i++) {
        var el = self._$toShow[i];
        self._getTargetData(el, 'final');
      }
      for (var i = 0; i < self._$pre.length; i++) {
        var el = self._$pre[i];
        self._getTargetData(el, 'final');
      }
      self._newHeight = self._incPadding ? self._$parent.outerHeight() : self._$parent.height();
      self._sorting && self._printSort(true);
      self._$toShow.removeStyle('display');
      self._$pre.css('display', self.layout.display);
      if (self._changingClass && self.animation.animateChangeLayout) {
        self._$container.removeClass(self._newClass).addClass(self.layout.containerClass);
      }
      self._execAction('_getFinalMixData', 1);
    },
    /**
     * Prepare Targets
     * @since 2.0.0
     */

    _prepTargets: function _prepTargets() {
      var self = this,
        transformCSS = {
          _in: self._getPrefixedCSS('transform', self.effects.transformIn),
          _out: self._getPrefixedCSS('transform', self.effects.transformOut)
        };
      self._execAction('_prepTargets', 0);
      if (self.animation.animateResizeContainer) {
        self._$parent.css('height', self._startHeight + 'px');
      }
      for (var i = 0; i < self._$toShow.length; i++) {
        var el = self._$toShow[i],
          $el = $(el);
        el.style.opacity = self.effects.opacity;
        el.style.display = self._changingLayout && self.animation.animateChangeLayout ? self._newDisplay : self.layout.display;
        $el.css(transformCSS._in);
        if (self.animation.animateResizeTargets) {
          el.style.width = el.dataset.finalWidth + 'px';
          el.style.height = el.dataset.finalHeight + 'px';
          el.style.marginRight = -(el.dataset.finalWidth - el.dataset.interWidth) + el.dataset.finalMarginRight * 1 + 'px';
          el.style.marginBottom = -(el.dataset.finalHeight - el.dataset.interHeight) + el.dataset.finalMarginBottom * 1 + 'px';
        }
      }
      for (var i = 0; i < self._$pre.length; i++) {
        var el = self._$pre[i],
          $el = $(el),
          translate = {
            x: el.dataset.origPosX - el.dataset.interPosX,
            y: el.dataset.origPosY - el.dataset.interPosY
          },
          transformCSS = self._getPrefixedCSS('transform', 'translate(' + translate.x + 'px,' + translate.y + 'px)');
        $el.css(transformCSS);
        if (self.animation.animateResizeTargets) {
          el.style.width = el.dataset.origWidth + 'px';
          el.style.height = el.dataset.origHeight + 'px';
          if (el.dataset.origWidth - el.dataset.finalWidth) {
            el.style.marginRight = -(el.dataset.origWidth - el.dataset.interWidth) + el.dataset.origMarginRight * 1 + 'px';
          }
          if (el.dataset.origHeight - el.dataset.finalHeight) {
            el.style.marginBottom = -(el.dataset.origHeight - el.dataset.interHeight) + el.dataset.origMarginBottom * 1 + 'px';
          }
        }
      }
      self._execAction('_prepTargets', 1);
    },
    /**
     * Animate Targets
     * @since 2.0.0
     */

    _animateTargets: function _animateTargets() {
      var self = this;
      self._execAction('_animateTargets', 0);
      self._targetsDone = 0;
      self._targetsBound = 0;
      self._$parent.css(self._getPrefixedCSS('perspective', self.animation.perspectiveDistance + 'px')).css(self._getPrefixedCSS('perspective-origin', self.animation.perspectiveOrigin));
      if (self.animation.animateResizeContainer) {
        self._$parent.css(self._getPrefixedCSS('transition', 'height ' + self.animation.duration + 'ms ease')).css('height', self._newHeight + 'px');
      }
      for (var i = 0; i < self._$toShow.length; i++) {
        var el = self._$toShow[i],
          $el = $(el),
          translate = {
            x: el.dataset.finalPosX - el.dataset.interPosX,
            y: el.dataset.finalPosY - el.dataset.interPosY
          },
          delay = self._getDelay(i),
          toShowCSS = {};
        el.style.opacity = '';
        for (var j = 0; j < 2; j++) {
          var a = j === 0 ? a = self._prefix : '';
          if (self._ff && self._ff <= 20) {
            toShowCSS[a + 'transition-property'] = 'all';
            toShowCSS[a + 'transition-timing-function'] = self.animation.easing + 'ms';
            toShowCSS[a + 'transition-duration'] = self.animation.duration + 'ms';
          }
          toShowCSS[a + 'transition-delay'] = delay + 'ms';
          toShowCSS[a + 'transform'] = 'translate(' + translate.x + 'px,' + translate.y + 'px)';
        }
        if (self.effects.transform || self.effects.opacity) {
          self._bindTargetDone($el);
        }
        self._ff && self._ff <= 20 ? $el.css(toShowCSS) : $el.css(self.effects.transition).css(toShowCSS);
      }
      for (var i = 0; i < self._$pre.length; i++) {
        var el = self._$pre[i],
          $el = $(el),
          translate = {
            x: el.dataset.finalPosX - el.dataset.interPosX,
            y: el.dataset.finalPosY - el.dataset.interPosY
          },
          delay = self._getDelay(i);
        if (!(el.dataset.finalPosX === el.dataset.origPosX && el.dataset.finalPosY === el.dataset.origPosY)) {
          self._bindTargetDone($el);
        }
        $el.css(self._getPrefixedCSS('transition', 'all ' + self.animation.duration + 'ms ' + self.animation.easing + ' ' + delay + 'ms'));
        $el.css(self._getPrefixedCSS('transform', 'translate(' + translate.x + 'px,' + translate.y + 'px)'));
        if (self.animation.animateResizeTargets) {
          if (el.dataset.origWidth - el.dataset.finalWidth && el.dataset.finalWidth * 1) {
            el.style.width = el.dataset.finalWidth + 'px';
            el.style.marginRight = -(el.dataset.finalWidth - el.dataset.interWidth) + el.dataset.finalMarginRight * 1 + 'px';
          }
          if (el.dataset.origHeight - el.dataset.finalHeight && el.dataset.finalHeight * 1) {
            el.style.height = el.dataset.finalHeight + 'px';
            el.style.marginBottom = -(el.dataset.finalHeight - el.dataset.interHeight) + el.dataset.finalMarginBottom * 1 + 'px';
          }
        }
      }
      if (self._changingClass) {
        self._$container.removeClass(self.layout.containerClass).addClass(self._newClass);
      }
      for (var i = 0; i < self._$toHide.length; i++) {
        var el = self._$toHide[i],
          $el = $(el),
          delay = self._getDelay(i),
          toHideCSS = {};
        for (var j = 0; j < 2; j++) {
          var a = j === 0 ? a = self._prefix : '';
          toHideCSS[a + 'transition-delay'] = delay + 'ms';
          toHideCSS[a + 'transform'] = self.effects.transformOut;
          toHideCSS.opacity = self.effects.opacity;
        }
        $el.css(self.effects.transition).css(toHideCSS);
        if (self.effects.transform || self.effects.opacity) {
          self._bindTargetDone($el);
        }
        ;
      }
      self._execAction('_animateTargets', 1);
    },
    /**
     * Bind Targets TransitionEnd
     * @since 2.0.0
     * @param {object} $el
     */

    _bindTargetDone: function _bindTargetDone($el) {
      var self = this,
        el = $el[0];
      self._execAction('_bindTargetDone', 0, arguments);
      if (!el.dataset.bound) {
        el.dataset.bound = true;
        self._targetsBound++;
        $el.on('webkitTransitionEnd.mixItUp transitionend.mixItUp', function (e) {
          if ((e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1) && $(e.originalEvent.target).is(self.selectors.target)) {
            $el.off('.mixItUp');
            delete el.dataset.bound;
            self._targetDone();
          }
        });
      }
      self._execAction('_bindTargetDone', 1, arguments);
    },
    /**
     * Target Done
     * @since 2.0.0
     */

    _targetDone: function _targetDone() {
      var self = this;
      self._execAction('_targetDone', 0);
      self._targetsDone++;
      self._targetsDone === self._targetsBound && self._cleanUp();
      self._execAction('_targetDone', 1);
    },
    /**
     * Clean Up
     * @since 2.0.0
     */

    _cleanUp: function _cleanUp() {
      var self = this,
        targetStyles = self.animation.animateResizeTargets ? 'transform opacity width height margin-bottom margin-right' : 'transform opacity',
        unBrake = function unBrake() {
          self._$targets.removeStyle('transition', self._prefix);
        };
      self._execAction('_cleanUp', 0);
      !self._changingLayout ? self._$show.css('display', self.layout.display) : self._$show.css('display', self._newDisplay);
      self._$targets.css(self._brake);
      self._$targets.removeStyle(targetStyles, self._prefix).removeAttr('data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom');
      self._$hide.removeStyle('display');
      self._$parent.removeStyle('height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin', self._prefix);
      if (self._sorting) {
        self._printSort();
        self._activeSort = self._newSortString;
        self._sorting = false;
      }
      if (self._changingLayout) {
        if (self._changingDisplay) {
          self.layout.display = self._newDisplay;
          self._changingDisplay = false;
        }
        if (self._changingClass) {
          self._$parent.removeClass(self.layout.containerClass).addClass(self._newClass);
          self.layout.containerClass = self._newClass;
          self._changingClass = false;
        }
        self._changingLayout = false;
      }
      self._refresh();
      self._buildState();
      if (self._state.fail) {
        self._$container.addClass(self.layout.containerClassFail);
      }
      self._$show = $();
      self._$hide = $();
      if (window.requestAnimationFrame) {
        requestAnimationFrame(unBrake);
      }
      self._mixing = false;
      if (typeof self.callbacks._user === 'function') {
        self.callbacks._user.call(self._domNode, self._state, self);
      }
      if (typeof self.callbacks.onMixEnd === 'function') {
        self.callbacks.onMixEnd.call(self._domNode, self._state, self);
      }
      self._$container.trigger('mixEnd', [self._state, self]);
      if (self._state.fail) {
        typeof self.callbacks.onMixFail === 'function' && self.callbacks.onMixFail.call(self._domNode, self._state, self);
        self._$container.trigger('mixFail', [self._state, self]);
      }
      if (self._loading) {
        typeof self.callbacks.onMixLoad === 'function' && self.callbacks.onMixLoad.call(self._domNode, self._state, self);
        self._$container.trigger('mixLoad', [self._state, self]);
      }
      if (self._queue.length) {
        self._execAction('_queue', 0);
        self.multiMix(self._queue[0][0], self._queue[0][1], self._queue[0][2]);
        self._queue.splice(0, 1);
      }
      self._execAction('_cleanUp', 1);
      self._loading = false;
    },
    /**
     * Get Prefixed CSS
     * @since 2.0.0
     * @param {string} property
     * @param {string} value
     * @param {boolean} prefixValue
     * @return {object} styles
     */

    _getPrefixedCSS: function _getPrefixedCSS(property, value, prefixValue) {
      var self = this,
        styles = {},
        prefix = '',
        i = -1;
      for (i = 0; i < 2; i++) {
        prefix = i === 0 ? self._prefix : '';
        prefixValue ? styles[prefix + property] = prefix + value : styles[prefix + property] = value;
      }
      return self._execFilter('_getPrefixedCSS', styles, arguments);
    },
    /**
     * Get Delay
     * @since 2.0.0
     * @param {number} i
     * @return {number} delay
     */

    _getDelay: function _getDelay(i) {
      var self = this,
        n = typeof self.animation.staggerSequence === 'function' ? self.animation.staggerSequence.call(self._domNode, i, self._state) : i,
        delay = self.animation.stagger ? n * self.animation.staggerDuration : 0;
      return self._execFilter('_getDelay', delay, arguments);
    },
    /**
     * Parse MultiMix Arguments
     * @since 2.0.0
     * @param {array} args
     * @return {object} output
     */

    _parseMultiMixArgs: function _parseMultiMixArgs(args) {
      var self = this,
        output = {
          command: null,
          animate: self.animation.enable,
          callback: null
        };
      for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        if (arg !== null) {
          if (_typeof(arg) === 'object' || typeof arg === 'string') {
            output.command = arg;
          } else if (typeof arg === 'boolean') {
            output.animate = arg;
          } else if (typeof arg === 'function') {
            output.callback = arg;
          }
        }
      }
      return self._execFilter('_parseMultiMixArgs', output, arguments);
    },
    /**
     * Parse Insert Arguments
     * @since 2.0.0
     * @param {array} args
     * @return {object} output
     */

    _parseInsertArgs: function _parseInsertArgs(args) {
      var self = this,
        output = {
          index: 0,
          $object: $(),
          multiMix: {
            filter: self._state.activeFilter
          },
          callback: null
        };
      for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        if (typeof arg === 'number') {
          output.index = arg;
        } else if (_typeof(arg) === 'object' && arg instanceof $) {
          output.$object = arg;
        } else if (_typeof(arg) === 'object' && self._helpers._isElement(arg)) {
          output.$object = $(arg);
        } else if (_typeof(arg) === 'object' && arg !== null) {
          output.multiMix = arg;
        } else if (typeof arg === 'boolean' && !arg) {
          output.multiMix = false;
        } else if (typeof arg === 'function') {
          output.callback = arg;
        }
      }
      return self._execFilter('_parseInsertArgs', output, arguments);
    },
    /**
     * Execute Action
     * @since 2.0.0
     * @param {string} methodName
     * @param {boolean} isPost
     * @param {array} args
     */

    _execAction: function _execAction(methodName, isPost, args) {
      var self = this,
        context = isPost ? 'post' : 'pre';
      if (!self._actions.isEmptyObject && self._actions.hasOwnProperty(methodName)) {
        for (var key in self._actions[methodName][context]) {
          self._actions[methodName][context][key].call(self, args);
        }
      }
    },
    /**
     * Execute Filter
     * @since 2.0.0
     * @param {string} methodName
     * @param {mixed} value
     * @return {mixed} value
     */

    _execFilter: function _execFilter(methodName, value, args) {
      var self = this;
      if (!self._filters.isEmptyObject && self._filters.hasOwnProperty(methodName)) {
        for (var key in self._filters[methodName]) {
          return self._filters[methodName][key].call(self, args);
        }
      } else {
        return value;
      }
    },
    /* Helpers
    ---------------------------------------------------------------------- */

    _helpers: {
      /**
       * CamelCase
       * @since 2.0.0
       * @param {string}
       * @return {string}
       */

      _camelCase: function _camelCase(string) {
        return string.replace(/-([a-z])/g, function (g) {
          return g[1].toUpperCase();
        });
      },
      /**
       * Is Element
       * @since 2.1.3
       * @param {object} element to test
       * @return {boolean}
       */

      _isElement: function _isElement(el) {
        if (window.HTMLElement) {
          return el instanceof HTMLElement;
        } else {
          return el !== null && el.nodeType === 1 && el.nodeName === 'string';
        }
      }
    },
    /* Public Methods
    ---------------------------------------------------------------------- */

    /**
     * Is Mixing
     * @since 2.0.0
     * @return {boolean}
     */

    isMixing: function isMixing() {
      var self = this;
      return self._execFilter('isMixing', self._mixing);
    },
    /**
     * Filter (public)
     * @since 2.0.0
     * @param {array} arguments
     */

    filter: function filter() {
      var self = this,
        args = self._parseMultiMixArgs(arguments);
      self._clicking && (self._toggleString = '');
      self.multiMix({
        filter: args.command
      }, args.animate, args.callback);
    },
    /**
     * Sort (public)
     * @since 2.0.0
     * @param {array} arguments
     */

    sort: function sort() {
      var self = this,
        args = self._parseMultiMixArgs(arguments);
      self.multiMix({
        sort: args.command
      }, args.animate, args.callback);
    },
    /**
     * Change Layout (public)
     * @since 2.0.0
     * @param {array} arguments
     */

    changeLayout: function changeLayout() {
      var self = this,
        args = self._parseMultiMixArgs(arguments);
      self.multiMix({
        changeLayout: args.command
      }, args.animate, args.callback);
    },
    /**
     * MultiMix
     * @since 2.0.0
     * @param {array} arguments
     */

    multiMix: function multiMix() {
      var self = this,
        args = self._parseMultiMixArgs(arguments);
      self._execAction('multiMix', 0, arguments);
      if (!self._mixing) {
        if (self.controls.enable && !self._clicking) {
          self.controls.toggleFilterButtons && self._buildToggleArray();
          self._updateControls(args.command, self.controls.toggleFilterButtons);
        }
        self._queue.length < 2 && (self._clicking = false);
        delete self.callbacks._user;
        if (args.callback) self.callbacks._user = args.callback;
        var sort = args.command.sort,
          filter = args.command.filter,
          changeLayout = args.command.changeLayout;
        self._refresh();
        if (sort) {
          self._newSort = self._parseSort(sort);
          self._newSortString = sort;
          self._sorting = true;
          self._sort();
        }
        if (filter !== undf) {
          filter = filter === 'all' ? self.selectors.target : filter;
          self._activeFilter = filter;
        }
        self._filter();
        if (changeLayout) {
          self._newDisplay = typeof changeLayout === 'string' ? changeLayout : changeLayout.display || self.layout.display;
          self._newClass = changeLayout.containerClass || '';
          if (self._newDisplay !== self.layout.display || self._newClass !== self.layout.containerClass) {
            self._changingLayout = true;
            self._changingClass = self._newClass !== self.layout.containerClass;
            self._changingDisplay = self._newDisplay !== self.layout.display;
          }
        }
        self._$targets.css(self._brake);
        self._goMix(args.animate ^ self.animation.enable ? args.animate : self.animation.enable);
        self._execAction('multiMix', 1, arguments);
      } else {
        if (self.animation.queue && self._queue.length < self.animation.queueLimit) {
          self._queue.push(arguments);
          self.controls.enable && !self._clicking && self._updateControls(args.command);
          self._execAction('multiMixQueue', 1, arguments);
        } else {
          if (typeof self.callbacks.onMixBusy === 'function') {
            self.callbacks.onMixBusy.call(self._domNode, self._state, self);
          }
          self._$container.trigger('mixBusy', [self._state, self]);
          self._execAction('multiMixBusy', 1, arguments);
        }
      }
    },
    /**
     * Insert
     * @since 2.0.0
     * @param {array} arguments
     */

    insert: function insert() {
      var self = this,
        args = self._parseInsertArgs(arguments),
        callback = typeof args.callback === 'function' ? args.callback : null,
        frag = document.createDocumentFragment(),
        target = function () {
          self._refresh();
          if (self._$targets.length) {
            return args.index < self._$targets.length || !self._$targets.length ? self._$targets[args.index] : self._$targets[self._$targets.length - 1].nextElementSibling;
          } else {
            return self._$parent[0].children[0];
          }
        }();
      self._execAction('insert', 0, arguments);
      if (args.$object) {
        for (var i = 0; i < args.$object.length; i++) {
          var el = args.$object[i];
          frag.appendChild(el);
          frag.appendChild(document.createTextNode(' '));
        }
        self._$parent[0].insertBefore(frag, target);
      }
      self._execAction('insert', 1, arguments);
      if (_typeof(args.multiMix) === 'object') {
        self.multiMix(args.multiMix, callback);
      }
    },
    /**
     * Prepend
     * @since 2.0.0
     * @param {array} arguments
     */

    prepend: function prepend() {
      var self = this,
        args = self._parseInsertArgs(arguments);
      self.insert(0, args.$object, args.multiMix, args.callback);
    },
    /**
     * Append
     * @since 2.0.0
     * @param {array} arguments
     */

    append: function append() {
      var self = this,
        args = self._parseInsertArgs(arguments);
      self.insert(self._state.totalTargets, args.$object, args.multiMix, args.callback);
    },
    /**
     * Get Option
     * @since 2.0.0
     * @param {string} string
     * @return {mixed} value
     */

    getOption: function getOption(string) {
      var self = this,
        getProperty = function getProperty(obj, prop) {
          var parts = prop.split('.'),
            last = parts.pop(),
            l = parts.length,
            i = 1,
            current = parts[0] || prop;
          while ((obj = obj[current]) && i < l) {
            current = parts[i];
            i++;
          }
          if (obj !== undf) {
            return obj[last] !== undf ? obj[last] : obj;
          }
        };
      return string ? self._execFilter('getOption', getProperty(self, string), arguments) : self;
    },
    /**
     * Set Options
     * @since 2.0.0
     * @param {object} config
     */

    setOptions: function setOptions(config) {
      var self = this;
      self._execAction('setOptions', 0, arguments);
      _typeof(config) === 'object' && $.extend(true, self, config);
      self._execAction('setOptions', 1, arguments);
    },
    /**
     * Get State
     * @since 2.0.0
     * @return {object} state
     */

    getState: function getState() {
      var self = this;
      return self._execFilter('getState', self._state, self);
    },
    /**
     * Force Refresh
     * @since 2.1.2
     */

    forceRefresh: function forceRefresh() {
      var self = this;
      self._refresh(false, true);
    },
    /**
     * Destroy
     * @since 2.0.0
     * @param {boolean} hideAll
     */

    destroy: function destroy(hideAll) {
      var self = this,
        filters = $.MixItUp.prototype._bound._filter,
        sorts = $.MixItUp.prototype._bound._sort;
      self._execAction('destroy', 0, arguments);
      self._$body.add($(self.selectors.sort)).add($(self.selectors.filter)).off('.mixItUp');
      for (var i = 0; i < self._$targets.length; i++) {
        var target = self._$targets[i];
        hideAll && (target.style.display = '');
        delete target.mixParent;
      }
      self._execAction('destroy', 1, arguments);
      if (filters[self.selectors.filter] && filters[self.selectors.filter] > 1) {
        filters[self.selectors.filter]--;
      } else if (filters[self.selectors.filter] === 1) {
        delete filters[self.selectors.filter];
      }
      if (sorts[self.selectors.sort] && sorts[self.selectors.sort] > 1) {
        sorts[self.selectors.sort]--;
      } else if (sorts[self.selectors.sort] === 1) {
        delete sorts[self.selectors.sort];
      }
      delete $.MixItUp.prototype._instances[self._id];
    }
  };

  /* jQuery Methods
  ---------------------------------------------------------------------- */

  /**
   * jQuery .mixItUp() method
   * @since 2.0.0
   * @extends $.fn
   */

  $.fn.mixItUp = function () {
    var args = arguments,
      dataReturn = [],
      eachReturn,
      _instantiate = function _instantiate(domNode, settings) {
        var instance = new $.MixItUp(),
          rand = function rand() {
            return ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase();
          };
        instance._execAction('_instantiate', 0, arguments);
        domNode.id = !domNode.id ? 'MixItUp' + rand() : domNode.id;
        if (!instance._instances[domNode.id]) {
          instance._instances[domNode.id] = instance;
          instance._init(domNode, settings);
        }
        instance._execAction('_instantiate', 1, arguments);
      };
    eachReturn = this.each(function () {
      if (args && typeof args[0] === 'string') {
        var instance = $.MixItUp.prototype._instances[this.id];
        if (args[0] === 'isLoaded') {
          dataReturn.push(instance ? true : false);
        } else {
          var data = instance[args[0]](args[1], args[2], args[3]);
          if (data !== undf) dataReturn.push(data);
        }
      } else {
        _instantiate(this, args[0]);
      }
    });
    if (dataReturn.length) {
      return dataReturn.length > 1 ? dataReturn : dataReturn[0];
    } else {
      return eachReturn;
    }
  };

  /**
   * jQuery .removeStyle() method
   * @since 2.0.0
   * @extends $.fn
   */

  $.fn.removeStyle = function (style, prefix) {
    prefix = prefix ? prefix : '';
    return this.each(function () {
      var el = this,
        styles = style.split(' ');
      for (var i = 0; i < styles.length; i++) {
        for (var j = 0; j < 4; j++) {
          switch (j) {
            case 0:
              var prop = styles[i];
              break;
            case 1:
              var prop = $.MixItUp.prototype._helpers._camelCase(prop);
              break;
            case 2:
              var prop = prefix + styles[i];
              break;
            case 3:
              var prop = $.MixItUp.prototype._helpers._camelCase(prefix + styles[i]);
          }
          if (el.style[prop] !== undf && typeof el.style[prop] !== 'unknown' && el.style[prop].length > 0) {
            el.style[prop] = '';
          }
          if (!prefix && j === 1) break;
        }
      }
      if (el.attributes && el.attributes.style && el.attributes.style !== undf && el.attributes.style.value === '') {
        el.attributes.removeNamedItem('style');
      }
    });
  };
})(jQuery);

/***/ }),

/***/ "./src/assets/js/slick.js":
/*!********************************!*\
  !*** ./src/assets/js/slick.js ***!
  \********************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.7
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function (factory) {
  'use strict';

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var Slick = window.Slick || {};
  Slick = function () {
    var instanceUid = 0;
    function Slick(element, settings) {
      var _ = this,
        dataSettings;
      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function customPaging(slider, i) {
          return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (i + 1) + '</button>';
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.hidden = 'hidden';
      _.paused = false;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data('slick') || {};
      _.options = $.extend({}, _.defaults, dataSettings, settings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;
      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }
      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.instanceUid = instanceUid++;

      // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source
      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
      _.registerBreakpoints();
      _.init(true);
      _.checkResponsive(true);
    }
    return Slick;
  }();
  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;
    if (typeof index === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }
    _.unload();
    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }
    _.$slides = _.$slideTrack.children(this.options.slide);
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });
    _.$slidesCache = _.$slides;
    _.reinit();
  };
  Slick.prototype.animateHeight = function () {
    var _ = this;
    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };
  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
      _ = this;
    _.animateHeight();
    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }
    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }
        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function step(now) {
            now = Math.ceil(now);
            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' + now + 'px, 0px)';
              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' + now + 'px)';
              _.$slideTrack.css(animProps);
            }
          },
          complete: function complete() {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();
        targetLeft = Math.ceil(targetLeft);
        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }
        _.$slideTrack.css(animProps);
        if (callback) {
          setTimeout(function () {
            _.disableTransition();
            callback.call();
          }, _.options.speed);
        }
      }
    }
  };
  Slick.prototype.asNavFor = function (index) {
    var _ = this,
      asNavFor = _.options.asNavFor;
    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }
    if (asNavFor !== null && _typeof(asNavFor) === 'object') {
      asNavFor.each(function () {
        var target = $(this).slick('getSlick');
        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };
  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
      transition = {};
    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };
  Slick.prototype.autoPlay = function () {
    var _ = this;
    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
    if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };
  Slick.prototype.autoPlayClear = function () {
    var _ = this;
    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };
  Slick.prototype.autoPlayIterator = function () {
    var _ = this;
    if (_.options.infinite === false) {
      if (_.direction === 1) {
        if (_.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        }
        _.slideHandler(_.currentSlide + _.options.slidesToScroll);
      } else {
        if (_.currentSlide - 1 === 0) {
          _.direction = 1;
        }
        _.slideHandler(_.currentSlide - _.options.slidesToScroll);
      }
    } else {
      _.slideHandler(_.currentSlide + _.options.slidesToScroll);
    }
  };
  Slick.prototype.buildArrows = function () {
    var _ = this;
    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }
        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }
        if (_.options.infinite !== true) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
          'aria-disabled': 'true',
          'tabindex': '-1'
        });
      }
    }
  };
  Slick.prototype.buildDots = function () {
    var _ = this,
      i,
      dotString;
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      dotString = '<ul class="' + _.options.dotsClass + '">';
      for (i = 0; i <= _.getDotCount(); i += 1) {
        dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
      }
      dotString += '</ul>';
      _.$dots = $(dotString).appendTo(_.options.appendDots);
      _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
    }
  };
  Slick.prototype.buildOut = function () {
    var _ = this;
    _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
    _.slideCount = _.$slides.length;
    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
    });
    _.$slidesCache = _.$slides;
    _.$slider.addClass('slick-slider');
    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
    _.$slideTrack.css('opacity', 0);
    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }
    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
    _.setupInfinite();
    _.buildArrows();
    _.buildDots();
    _.updateDots();
    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
  };
  Slick.prototype.buildRows = function () {
    var _ = this,
      a,
      b,
      c,
      newSlides,
      numOfSlides,
      originalSlides,
      slidesPerSection;
    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();
    if (_.options.rows > 1) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');
        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');
          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }
          slide.appendChild(row);
        }
        newSlides.appendChild(slide);
      }
      _.$slider.html(newSlides);
      _.$slider.children().children().children().css({
        'width': 100 / _.options.slidesPerRow + '%',
        'display': 'inline-block'
      });
    }
  };
  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
      breakpoint,
      targetBreakpoint,
      respondToWidth,
      triggerBreakpoint = false;
    var sliderWidth = _.$slider.width();
    var windowWidth = window.innerWidth || $(window).width();
    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }
    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;
      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }
      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;
            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }
              _.refresh(initial);
            }
            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;
          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }
            _.refresh(initial);
          }
          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;
          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }
          _.refresh(initial);
          triggerBreakpoint = targetBreakpoint;
        }
      }

      // only trigger breakpoints during an actual break. not on initialize.
      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  };
  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
      $target = $(event.target),
      indexOffset,
      slideOffset,
      unevenOffset;

    // If target is a link, prevent default action.
    if ($target.is('a')) {
      event.preventDefault();
    }

    // If target is not the <li> element (ie: a child), find the <li>.
    if (!$target.is('li')) {
      $target = $target.closest('li');
    }
    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
    switch (event.data.message) {
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }
        break;
      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }
        break;
      case 'index':
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
        _.slideHandler(_.checkNavigable(index), false, dontAnimate);
        $target.children().trigger('focus');
        break;
      default:
        return;
    }
  };
  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
      navigables,
      prevNavigable;
    navigables = _.getNavigableIndexes();
    prevNavigable = 0;
    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }
        prevNavigable = navigables[n];
      }
    }
    return index;
  };
  Slick.prototype.cleanUpEvents = function () {
    var _ = this;
    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots).off('click.slick', _.changeSlide);
      if (_.options.pauseOnDotsHover === true && _.options.autoplay === true) {
        $('li', _.$dots).off('mouseenter.slick', $.proxy(_.setPaused, _, true)).off('mouseleave.slick', $.proxy(_.setPaused, _, false));
      }
    }
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
    }
    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
    _.$list.off('click.slick', _.clickHandler);
    $(document).off(_.visibilityChange, _.visibility);
    _.$list.off('mouseenter.slick', $.proxy(_.setPaused, _, true));
    _.$list.off('mouseleave.slick', $.proxy(_.setPaused, _, false));
    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }
    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
  };
  Slick.prototype.cleanUpRows = function () {
    var _ = this,
      originalSlides;
    if (_.options.rows > 1) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');
      _.$slider.html(originalSlides);
    }
  };
  Slick.prototype.clickHandler = function (event) {
    var _ = this;
    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };
  Slick.prototype.destroy = function (refresh) {
    var _ = this;
    _.autoPlayClear();
    _.touchObject = {};
    _.cleanUpEvents();
    $('.slick-cloned', _.$slider).detach();
    if (_.$dots) {
      _.$dots.remove();
    }
    if (_.options.arrows === true) {
      if (_.$prevArrow && _.$prevArrow.length) {
        _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css("display", "");
        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.remove();
        }
      }
      if (_.$nextArrow && _.$nextArrow.length) {
        _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css("display", "");
        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.remove();
        }
      }
    }
    if (_.$slides) {
      _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
        $(this).attr('style', $(this).data('originalStyling'));
      });
      _.$slideTrack.children(this.options.slide).detach();
      _.$slideTrack.detach();
      _.$list.detach();
      _.$slider.append(_.$slides);
    }
    _.cleanUpRows();
    _.$slider.removeClass('slick-slider');
    _.$slider.removeClass('slick-initialized');
    _.unslicked = true;
    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  };
  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
      transition = {};
    transition[_.transitionType] = '';
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };
  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;
    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });
      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);
      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });
      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);
          callback.call();
        }, _.options.speed);
      }
    }
  };
  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;
    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);
      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };
  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;
    if (filter !== null) {
      _.unload();
      _.$slideTrack.children(this.options.slide).detach();
      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
      _.reinit();
    }
  };
  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;
    return _.currentSlide;
  };
  Slick.prototype.getDotCount = function () {
    var _ = this;
    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;
    if (_.options.infinite === true) {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToShow;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToShow;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }
    return pagerQty - 1;
  };
  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
      targetLeft,
      verticalHeight,
      verticalOffset = 0,
      targetSlide;
    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);
    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        verticalOffset = verticalHeight * _.options.slidesToShow * -1;
      }
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }
    if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }
    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }
    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }
      targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      if (_.options.centerMode === true) {
        if (_.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }
    return targetLeft;
  };
  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;
    return _.options[option];
  };
  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
      breakPoint = 0,
      counter = 0,
      indexes = [],
      max;
    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }
    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }
    return indexes;
  };
  Slick.prototype.getSlick = function () {
    return this;
  };
  Slick.prototype.getSlideCount = function () {
    var _ = this,
      slidesTraversed,
      swipedSlide,
      centerOffset;
    centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      });
      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };
  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;
    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);
  };
  Slick.prototype.init = function (creation) {
    var _ = this;
    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');
      _.buildRows();
      _.buildOut();
      _.setProps();
      _.startLoad();
      _.loadSlider();
      _.initializeEvents();
      _.updateArrows();
      _.updateDots();
    }
    if (creation) {
      _.$slider.trigger('init', [_]);
    }
    if (_.options.accessibility === true) {
      _.initADA();
    }
  };
  Slick.prototype.initArrowEvents = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.on('click.slick', {
        message: 'previous'
      }, _.changeSlide);
      _.$nextArrow.on('click.slick', {
        message: 'next'
      }, _.changeSlide);
    }
  };
  Slick.prototype.initDotEvents = function () {
    var _ = this;
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);
    }
    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
      $('li', _.$dots).on('mouseenter.slick', $.proxy(_.setPaused, _, true)).on('mouseleave.slick', $.proxy(_.setPaused, _, false));
    }
  };
  Slick.prototype.initializeEvents = function () {
    var _ = this;
    _.initArrowEvents();
    _.initDotEvents();
    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);
    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);
    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);
    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);
    _.$list.on('click.slick', _.clickHandler);
    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
    _.$list.on('mouseenter.slick', $.proxy(_.setPaused, _, true));
    _.$list.on('mouseleave.slick', $.proxy(_.setPaused, _, false));
    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }
    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
  };
  Slick.prototype.initUI = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();
      _.$nextArrow.show();
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
    if (_.options.autoplay === true) {
      _.autoPlay();
    }
  };
  Slick.prototype.keyHandler = function (event) {
    var _ = this;
    //Dont slide if the cursor is inside the form fields and arrow keys are pressed
    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: 'previous'
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: 'next'
          }
        });
      }
    }
  };
  Slick.prototype.lazyLoad = function () {
    var _ = this,
      loadRange,
      cloneRange,
      rangeStart,
      rangeEnd;
    function loadImages(imagesScope) {
      $('img[data-lazy]', imagesScope).each(function () {
        var image = $(this),
          imageSource = $(this).attr('data-lazy'),
          imageToLoad = document.createElement('img');
        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            image.attr('src', imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr('data-lazy').removeClass('slick-loading');
            });
          });
        };
        imageToLoad.src = imageSource;
      });
    }
    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = rangeStart + _.options.slidesToShow;
      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }
    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
    loadImages(loadRange);
    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };
  Slick.prototype.loadSlider = function () {
    var _ = this;
    _.setPosition();
    _.$slideTrack.css({
      opacity: 1
    });
    _.$slider.removeClass('slick-loading');
    _.initUI();
    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  };
  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;
    _.changeSlide({
      data: {
        message: 'next'
      }
    });
  };
  Slick.prototype.orientationChange = function () {
    var _ = this;
    _.checkResponsive();
    _.setPosition();
  };
  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;
    _.autoPlayClear();
    _.paused = true;
  };
  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;
    _.paused = false;
    _.autoPlay();
  };
  Slick.prototype.postSlide = function (index) {
    var _ = this;
    _.$slider.trigger('afterChange', [_, index]);
    _.animating = false;
    _.setPosition();
    _.swipeLeft = null;
    if (_.options.autoplay === true && _.paused === false) {
      _.autoPlay();
    }
    if (_.options.accessibility === true) {
      _.initADA();
    }
  };
  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;
    _.changeSlide({
      data: {
        message: 'previous'
      }
    });
  };
  Slick.prototype.preventDefault = function (e) {
    e.preventDefault();
  };
  Slick.prototype.progressiveLazyLoad = function () {
    var _ = this,
      imgCount,
      targetImage;
    imgCount = $('img[data-lazy]', _.$slider).length;
    if (imgCount > 0) {
      targetImage = $('img[data-lazy]', _.$slider).first();
      targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function () {
        targetImage.removeAttr('data-lazy');
        _.progressiveLazyLoad();
        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }
      }).error(function () {
        targetImage.removeAttr('data-lazy');
        _.progressiveLazyLoad();
      });
    }
  };
  Slick.prototype.refresh = function (initializing) {
    var _ = this,
      currentSlide = _.currentSlide;
    _.destroy(true);
    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });
    _.init();
    if (!initializing) {
      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);
    }
  };
  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
      breakpoint,
      currentBreakpoint,
      l,
      responsiveSettings = _.options.responsive || null;
    if ($.type(responsiveSettings) === "array" && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || 'window';
      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;
        currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.
          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }
            l--;
          }
          _.breakpoints.push(currentBreakpoint);
          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }
      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };
  Slick.prototype.reinit = function () {
    var _ = this;
    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
    _.slideCount = _.$slides.length;
    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }
    _.registerBreakpoints();
    _.setProps();
    _.setupInfinite();
    _.buildArrows();
    _.updateArrows();
    _.initArrowEvents();
    _.buildDots();
    _.updateDots();
    _.initDotEvents();
    _.checkResponsive(false, true);
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }
    _.setSlideClasses(0);
    _.setPosition();
    _.$slider.trigger('reInit', [_]);
    if (_.options.autoplay === true) {
      _.focusHandler();
    }
  };
  Slick.prototype.resize = function () {
    var _ = this;
    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();
        _.checkResponsive();
        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };
  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;
    if (typeof index === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }
    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }
    _.unload();
    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }
    _.$slides = _.$slideTrack.children(this.options.slide);
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slidesCache = _.$slides;
    _.reinit();
  };
  Slick.prototype.setCSS = function (position) {
    var _ = this,
      positionProps = {},
      x,
      y;
    if (_.options.rtl === true) {
      position = -position;
    }
    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    positionProps[_.positionProp] = position;
    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};
      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
        _.$slideTrack.css(positionProps);
      }
    }
  };
  Slick.prototype.setDimensions = function () {
    var _ = this;
    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: '0px ' + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + ' 0px'
        });
      }
    }
    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();
    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);
      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
    }
    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  };
  Slick.prototype.setFade = function () {
    var _ = this,
      targetLeft;
    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;
      if (_.options.rtl === true) {
        $(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });
    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };
  Slick.prototype.setHeight = function () {
    var _ = this;
    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.css('height', targetHeight);
    }
  };
  Slick.prototype.setOption = Slick.prototype.slickSetOption = function (option, value, refresh) {
    var _ = this,
      l,
      item;
    if (option === "responsive" && $.type(value) === "array") {
      for (item in value) {
        if ($.type(_.options.responsive) !== "array") {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1;
          // loop through the responsive object and splice out duplicates.
          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }
            l--;
          }
          _.options.responsive.push(value[item]);
        }
      }
    } else {
      _.options[option] = value;
    }
    if (refresh === true) {
      _.unload();
      _.reinit();
    }
  };
  Slick.prototype.setPosition = function () {
    var _ = this;
    _.setDimensions();
    _.setHeight();
    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }
    _.$slider.trigger('setPosition', [_]);
  };
  Slick.prototype.setProps = function () {
    var _ = this,
      bodyStyle = document.body.style;
    _.positionProp = _.options.vertical === true ? 'top' : 'left';
    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }
    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }
    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }
    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }
    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }
    _.transformsEnabled = _.animType !== null && _.animType !== false;
  };
  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
      centerOffset,
      allSlides,
      indexOffset,
      remainder;
    allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');
    _.$slides.eq(index).addClass('slick-current');
    if (_.options.centerMode === true) {
      centerOffset = Math.floor(_.options.slidesToShow / 2);
      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
        }
        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }
      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        }
      }
    }
    if (_.options.lazyLoad === 'ondemand') {
      _.lazyLoad();
    }
  };
  Slick.prototype.setupInfinite = function () {
    var _ = this,
      i,
      slideIndex,
      infiniteCount;
    if (_.options.fade === true) {
      _.options.centerMode = false;
    }
    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;
      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }
        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
        }
        for (i = 0; i < infiniteCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
        }
        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
          $(this).attr('id', '');
        });
      }
    }
  };
  Slick.prototype.setPaused = function (paused) {
    var _ = this;
    if (_.options.autoplay === true && _.options.pauseOnHover === true) {
      _.paused = paused;
      if (!paused) {
        _.autoPlay();
      } else {
        _.autoPlayClear();
      }
    }
  };
  Slick.prototype.selectHandler = function (event) {
    var _ = this;
    var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
    var index = parseInt(targetElement.attr('data-slick-index'));
    if (!index) index = 0;
    if (_.slideCount <= _.options.slidesToShow) {
      _.setSlideClasses(index);
      _.asNavFor(index);
      return;
    }
    _.slideHandler(index);
  };
  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
      animSlide,
      oldSlide,
      slideLeft,
      targetLeft = null,
      _ = this;
    sync = sync || false;
    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }
    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }
    if (_.slideCount <= _.options.slidesToShow) {
      return;
    }
    if (sync === false) {
      _.asNavFor(index);
    }
    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    }
    if (_.options.autoplay === true) {
      clearInterval(_.autoPlayTimer);
    }
    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }
    _.animating = true;
    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;
    _.setSlideClasses(_.currentSlide);
    _.updateDots();
    _.updateArrows();
    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);
        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }
      _.animateHeight();
      return;
    }
    if (dontAnimate !== true) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };
  Slick.prototype.startLoad = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();
      _.$nextArrow.hide();
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }
    _.$slider.addClass('slick-loading');
  };
  Slick.prototype.swipeDirection = function () {
    var xDist,
      yDist,
      r,
      swipeAngle,
      _ = this;
    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? 'left' : 'right';
    }
    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? 'left' : 'right';
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? 'right' : 'left';
    }
    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'left';
      } else {
        return 'right';
      }
    }
    return 'vertical';
  };
  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
      slideCount;
    _.dragging = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;
    if (_.touchObject.curX === undefined) {
      return false;
    }
    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }
    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      switch (_.swipeDirection()) {
        case 'left':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.slideHandler(slideCount);
          _.currentDirection = 0;
          _.touchObject = {};
          _.$slider.trigger('swipe', [_, 'left']);
          break;
        case 'right':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.slideHandler(slideCount);
          _.currentDirection = 1;
          _.touchObject = {};
          _.$slider.trigger('swipe', [_, 'right']);
          break;
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);
        _.touchObject = {};
      }
    }
  };
  Slick.prototype.swipeHandler = function (event) {
    var _ = this;
    if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }
    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }
    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);
        break;
      case 'move':
        _.swipeMove(event);
        break;
      case 'end':
        _.swipeEnd(event);
        break;
    }
  };
  Slick.prototype.swipeMove = function (event) {
    var _ = this,
      edgeWasHit = false,
      curLeft,
      swipeDirection,
      swipeLength,
      positionOffset,
      touches;
    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
    if (!_.dragging || touches && touches.length !== 1) {
      return false;
    }
    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
    }
    swipeDirection = _.swipeDirection();
    if (swipeDirection === 'vertical') {
      return;
    }
    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      event.preventDefault();
    }
    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }
    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;
    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }
    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }
    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }
    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }
    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }
    _.setCSS(_.swipeLeft);
  };
  Slick.prototype.swipeStart = function (event) {
    var _ = this,
      touches;
    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }
    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }
    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };
  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;
    if (_.$slidesCache !== null) {
      _.unload();
      _.$slideTrack.children(this.options.slide).detach();
      _.$slidesCache.appendTo(_.$slideTrack);
      _.reinit();
    }
  };
  Slick.prototype.unload = function () {
    var _ = this;
    $('.slick-cloned', _.$slider).remove();
    if (_.$dots) {
      _.$dots.remove();
    }
    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }
    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }
    _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
  };
  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;
    _.$slider.trigger('unslick', [_, fromBreakpoint]);
    _.destroy();
  };
  Slick.prototype.updateArrows = function () {
    var _ = this,
      centerOffset;
    centerOffset = Math.floor(_.options.slidesToShow / 2);
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      }
    }
  };
  Slick.prototype.updateDots = function () {
    var _ = this;
    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');
      _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false');
    }
  };
  Slick.prototype.visibility = function () {
    var _ = this;
    if (document[_.hidden]) {
      _.paused = true;
      _.autoPlayClear();
    } else {
      if (_.options.autoplay === true) {
        _.paused = false;
        _.autoPlay();
      }
    }
  };
  Slick.prototype.initADA = function () {
    var _ = this;
    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    }).find('a, input, button, select').attr({
      'tabindex': '-1'
    });
    _.$slideTrack.attr('role', 'listbox');
    _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
      $(this).attr({
        'role': 'option',
        'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
      });
    });
    if (_.$dots !== null) {
      _.$dots.attr('role', 'tablist').find('li').each(function (i) {
        $(this).attr({
          'role': 'presentation',
          'aria-selected': 'false',
          'aria-controls': 'navigation' + _.instanceUid + i + '',
          'id': 'slick-slide' + _.instanceUid + i + ''
        });
      }).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar');
    }
    _.activateADA();
  };
  Slick.prototype.activateADA = function () {
    var _ = this,
      _isSlideOnFocus = _.$slider.find('*').is(':focus');
    // _isSlideOnFocus = _.$slides.is(':focus') || _.$slides.find('*').is(':focus');

    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': 'false',
      'tabindex': '0'
    }).find('a, input, button, select').attr({
      'tabindex': '0'
    });
    _isSlideOnFocus && _.$slideTrack.find('.slick-active').focus();
  };
  Slick.prototype.focusHandler = function () {
    var _ = this;
    _.$slider.on('focus.slick blur.slick', '*', function (event) {
      event.stopImmediatePropagation();
      var sf = $(this);
      setTimeout(function () {
        if (_.isPlay) {
          if (sf.is(':focus')) {
            _.autoPlayClear();
            _.paused = true;
          } else {
            _.paused = false;
            _.autoPlay();
          }
        }
      }, 0);
    });
  };
  $.fn.slick = function () {
    var _ = this,
      opt = arguments[0],
      args = Array.prototype.slice.call(arguments, 1),
      l = _.length,
      i = 0,
      ret;
    for (i; i < l; i++) {
      if (_typeof(opt) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };
});

/***/ }),

/***/ "./src/assets/js/wow.js":
/*!******************************!*\
  !*** ./src/assets/js/wow.js ***!
  \******************************/
/***/ (function() {

(function () {
  var MutationObserver,
    Util,
    WeakMap,
    getComputedStyle,
    getComputedStyleRX,
    bind = function bind(fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    },
    indexOf = [].indexOf || function (item) {
      for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) return i;
      }
      return -1;
    };
  Util = function () {
    function Util() {}
    Util.prototype.extend = function (custom, defaults) {
      var key, value;
      for (key in defaults) {
        value = defaults[key];
        if (custom[key] == null) {
          custom[key] = value;
        }
      }
      return custom;
    };
    Util.prototype.isMobile = function (agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };
    Util.prototype.createEvent = function (event, bubble, cancel, detail) {
      var customEvent;
      if (bubble == null) {
        bubble = false;
      }
      if (cancel == null) {
        cancel = false;
      }
      if (detail == null) {
        detail = null;
      }
      if (document.createEvent != null) {
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(event, bubble, cancel, detail);
      } else if (document.createEventObject != null) {
        customEvent = document.createEventObject();
        customEvent.eventType = event;
      } else {
        customEvent.eventName = event;
      }
      return customEvent;
    };
    Util.prototype.emitEvent = function (elem, event) {
      if (elem.dispatchEvent != null) {
        return elem.dispatchEvent(event);
      } else if (event in (elem != null)) {
        return elem[event]();
      } else if ("on" + event in (elem != null)) {
        return elem["on" + event]();
      }
    };
    Util.prototype.addEvent = function (elem, event, fn) {
      if (elem.addEventListener != null) {
        return elem.addEventListener(event, fn, false);
      } else if (elem.attachEvent != null) {
        return elem.attachEvent("on" + event, fn);
      } else {
        return elem[event] = fn;
      }
    };
    Util.prototype.removeEvent = function (elem, event, fn) {
      if (elem.removeEventListener != null) {
        return elem.removeEventListener(event, fn, false);
      } else if (elem.detachEvent != null) {
        return elem.detachEvent("on" + event, fn);
      } else {
        return delete elem[event];
      }
    };
    Util.prototype.innerHeight = function () {
      if ('innerHeight' in window) {
        return window.innerHeight;
      } else {
        return document.documentElement.clientHeight;
      }
    };
    return Util;
  }();
  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = function () {
    function WeakMap() {
      this.keys = [];
      this.values = [];
    }
    WeakMap.prototype.get = function (key) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          return this.values[i];
        }
      }
    };
    WeakMap.prototype.set = function (key, value) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          this.values[i] = value;
          return;
        }
      }
      this.keys.push(key);
      return this.values.push(value);
    };
    return WeakMap;
  }());
  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = function () {
    function MutationObserver() {
      if (typeof console !== "undefined" && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
      }
      if (typeof console !== "undefined" && console !== null) {
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }
    MutationObserver.notSupported = true;
    MutationObserver.prototype.observe = function () {};
    return MutationObserver;
  }());
  getComputedStyle = this.getComputedStyle || function (el, pseudo) {
    this.getPropertyValue = function (prop) {
      var ref;
      if (prop === 'float') {
        prop = 'styleFloat';
      }
      if (getComputedStyleRX.test(prop)) {
        prop.replace(getComputedStyleRX, function (_, _char) {
          return _char.toUpperCase();
        });
      }
      return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
    };
    return this;
  };
  getComputedStyleRX = /(\-([a-z]){1})/g;
  this.WOW = function () {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      callback: null,
      scrollContainer: null
    };
    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = bind(this.scrollCallback, this);
      this.scrollHandler = bind(this.scrollHandler, this);
      this.resetAnimation = bind(this.resetAnimation, this);
      this.start = bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
      if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      }
      this.animationNameCache = new WeakMap();
      this.wowEvent = this.util().createEvent(this.config.boxClass);
    }
    WOW.prototype.init = function () {
      var ref;
      this.element = window.document.documentElement;
      if ((ref = document.readyState) === "interactive" || ref === "complete") {
        this.start();
      } else {
        this.util().addEvent(document, 'DOMContentLoaded', this.start);
      }
      return this.finished = [];
    };
    WOW.prototype.start = function () {
      var box, j, len, ref;
      this.stopped = false;
      this.boxes = function () {
        var j, len, ref, results;
        ref = this.element.querySelectorAll("." + this.config.boxClass);
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }.call(this);
      this.all = function () {
        var j, len, ref, results;
        ref = this.boxes;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }.call(this);
      if (this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle();
        } else {
          ref = this.boxes;
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            this.applyStyle(box, true);
          }
        }
      }
      if (!this.disabled()) {
        this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
        this.util().addEvent(window, 'resize', this.scrollHandler);
        this.interval = setInterval(this.scrollCallback, 50);
      }
      if (this.config.live) {
        return new MutationObserver(function (_this) {
          return function (records) {
            var k, len1, node, record, results;
            results = [];
            for (k = 0, len1 = records.length; k < len1; k++) {
              record = records[k];
              results.push(function () {
                var l, len2, ref1, results1;
                ref1 = record.addedNodes || [];
                results1 = [];
                for (l = 0, len2 = ref1.length; l < len2; l++) {
                  node = ref1[l];
                  results1.push(this.doSync(node));
                }
                return results1;
              }.call(_this));
            }
            return results;
          };
        }(this)).observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    };
    WOW.prototype.stop = function () {
      this.stopped = true;
      this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
      this.util().removeEvent(window, 'resize', this.scrollHandler);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };
    WOW.prototype.sync = function (element) {
      if (MutationObserver.notSupported) {
        return this.doSync(this.element);
      }
    };
    WOW.prototype.doSync = function (element) {
      var box, j, len, ref, results;
      if (element == null) {
        element = this.element;
      }
      if (element.nodeType !== 1) {
        return;
      }
      element = element.parentNode || element;
      ref = element.querySelectorAll("." + this.config.boxClass);
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        if (indexOf.call(this.all, box) < 0) {
          this.boxes.push(box);
          this.all.push(box);
          if (this.stopped || this.disabled()) {
            this.resetStyle();
          } else {
            this.applyStyle(box, true);
          }
          results.push(this.scrolled = true);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };
    WOW.prototype.show = function (box) {
      this.applyStyle(box);
      box.className = box.className + " " + this.config.animateClass;
      if (this.config.callback != null) {
        this.config.callback(box);
      }
      this.util().emitEvent(box, this.wowEvent);
      this.util().addEvent(box, 'animationend', this.resetAnimation);
      this.util().addEvent(box, 'oanimationend', this.resetAnimation);
      this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
      this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
      return box;
    };
    WOW.prototype.applyStyle = function (box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return this.animate(function (_this) {
        return function () {
          return _this.customStyle(box, hidden, duration, delay, iteration);
        };
      }(this));
    };
    WOW.prototype.animate = function () {
      if ('requestAnimationFrame' in window) {
        return function (callback) {
          return window.requestAnimationFrame(callback);
        };
      } else {
        return function (callback) {
          return callback();
        };
      }
    }();
    WOW.prototype.resetStyle = function () {
      var box, j, len, ref, results;
      ref = this.boxes;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        results.push(box.style.visibility = 'visible');
      }
      return results;
    };
    WOW.prototype.resetAnimation = function (event) {
      var target;
      if (event.type.toLowerCase().indexOf('animationend') >= 0) {
        target = event.target || event.srcElement;
        return target.className = target.className.replace(this.config.animateClass, '').trim();
      }
    };
    WOW.prototype.customStyle = function (box, hidden, duration, delay, iteration) {
      if (hidden) {
        this.cacheAnimationName(box);
      }
      box.style.visibility = hidden ? 'hidden' : 'visible';
      if (duration) {
        this.vendorSet(box.style, {
          animationDuration: duration
        });
      }
      if (delay) {
        this.vendorSet(box.style, {
          animationDelay: delay
        });
      }
      if (iteration) {
        this.vendorSet(box.style, {
          animationIterationCount: iteration
        });
      }
      this.vendorSet(box.style, {
        animationName: hidden ? 'none' : this.cachedAnimationName(box)
      });
      return box;
    };
    WOW.prototype.vendors = ["moz", "webkit"];
    WOW.prototype.vendorSet = function (elem, properties) {
      var name, results, value, vendor;
      results = [];
      for (name in properties) {
        value = properties[name];
        elem["" + name] = value;
        results.push(function () {
          var j, len, ref, results1;
          ref = this.vendors;
          results1 = [];
          for (j = 0, len = ref.length; j < len; j++) {
            vendor = ref[j];
            results1.push(elem["" + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value);
          }
          return results1;
        }.call(this));
      }
      return results;
    };
    WOW.prototype.vendorCSS = function (elem, property) {
      var j, len, ref, result, style, vendor;
      style = getComputedStyle(elem);
      result = style.getPropertyCSSValue(property);
      ref = this.vendors;
      for (j = 0, len = ref.length; j < len; j++) {
        vendor = ref[j];
        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
      }
      return result;
    };
    WOW.prototype.animationName = function (box) {
      var animationName;
      try {
        animationName = this.vendorCSS(box, 'animation-name').cssText;
      } catch (_error) {
        animationName = getComputedStyle(box).getPropertyValue('animation-name');
      }
      if (animationName === 'none') {
        return '';
      } else {
        return animationName;
      }
    };
    WOW.prototype.cacheAnimationName = function (box) {
      return this.animationNameCache.set(box, this.animationName(box));
    };
    WOW.prototype.cachedAnimationName = function (box) {
      return this.animationNameCache.get(box);
    };
    WOW.prototype.scrollHandler = function () {
      return this.scrolled = true;
    };
    WOW.prototype.scrollCallback = function () {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = function () {
          var j, len, ref, results;
          ref = this.boxes;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            if (!box) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            results.push(box);
          }
          return results;
        }.call(this);
        if (!(this.boxes.length || this.config.live)) {
          return this.stop();
        }
      }
    };
    WOW.prototype.offsetTop = function (element) {
      var top;
      while (element.offsetTop === void 0) {
        element = element.parentNode;
      }
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };
    WOW.prototype.isVisible = function (box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;
      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };
    WOW.prototype.util = function () {
      return this._util != null ? this._util : this._util = new Util();
    };
    WOW.prototype.disabled = function () {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };
    return WOW;
  }();
}).call(this);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_progressbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap-progressbar.js */ "./src/assets/js/bootstrap-progressbar.js");
/* harmony import */ var _bootstrap_progressbar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_progressbar_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap.js */ "./src/assets/js/bootstrap.js");
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom.js */ "./src/assets/js/custom.js");
/* harmony import */ var _custom_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_custom_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jquery_counterup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jquery.counterup.js */ "./src/assets/js/jquery.counterup.js");
/* harmony import */ var _jquery_counterup_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jquery_counterup_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jquery_fancybox_pack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jquery.fancybox.pack.js */ "./src/assets/js/jquery.fancybox.pack.js");
/* harmony import */ var _jquery_fancybox_pack_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jquery_fancybox_pack_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jquery_mixitup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jquery.mixitup.js */ "./src/assets/js/jquery.mixitup.js");
/* harmony import */ var _jquery_mixitup_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_jquery_mixitup_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _slick_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slick.js */ "./src/assets/js/slick.js");
/* harmony import */ var _slick_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_slick_js__WEBPACK_IMPORTED_MODULE_6__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './weyponits.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _wow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wow.js */ "./src/assets/js/wow.js");
/* harmony import */ var _wow_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wow_js__WEBPACK_IMPORTED_MODULE_8__);









})();

/******/ })()
;
//# sourceMappingURL=bundle7b9751a4da1a60d2ba73.js.map