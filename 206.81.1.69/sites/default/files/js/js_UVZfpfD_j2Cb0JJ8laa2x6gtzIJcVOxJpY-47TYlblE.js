/**
 * @file
 * JS for Radix.
 */
(function ($, Drupal, window, document, undefined) {

  // Show dropdown on hover.
  Drupal.behaviors.radix_dropdown = {
    attach: function(context, setting) {
      $('.dropdown').once('radix-dropdown', function(){
        // Show dropdown on hover.
        $(this).mouseenter(function(){
          $(this).addClass('open');
        });
        $(this).mouseleave(function(){
          $(this).removeClass('open');
        });
      });
    }
  }

  // Bootstrap tooltip.
  Drupal.behaviors.radix_tooltip = {
    attach: function(context, setting) {
      if ($.fn.tooltip) {
        $("[data-toggle='tooltip']").tooltip();
      }
    }
  }

  // Bootstrap popover.
  Drupal.behaviors.radix_popover = {
    attach: function(context, setting) {
      if ($.fn.popover) {
        $("[data-toggle='popover']").popover();
      }
    }
  }

  $(document).ready(function() {
    // Allow main menu dropdown-toggle to be clickable.
    $('#main-menu .dropdown > a.dropdown-toggle').once('radix-dropdown', function(){
      $(this).click(function(e) {
        e.preventDefault();
        window.location.href = $(this).attr('href');
      });
    });

    // Show first tab by default.
    // Ignore the "primary" tabs on the node edit page.
    if ($.fn.tab) {
      var tabs = $('.nav-tabs').not('.primary');
      tabs.children('li').first().find('a').tab('show');

      if (hash = window.location.hash) {
        $('.nav-tabs > li > a[href$=' + hash + ']').tab('show');
      }
    }
  });
})(jQuery, Drupal, this, this.document);
;
/**
 * @file
 * Custom scripts for theme.
 */
(function ($) {
  $(document).ready(function() {
    $('.field-name-field-fotos .field-item img').load(function() {
      $this = $(this);
      descricao = $this.attr('title');
      $this.parent().append('<span class="description">'+descricao+'</span>');
      $this.attr('title', '');
      $this.parent().addClass('loaded');
    })
    
    $('#info-button').click(function(event) {
      $('.field-name-body').toggleClass('show');
      event.stopPropagation();
    });
    $('body.front').click(function() {
      $('.field-name-body').removeClass('show')
    });
    $('.field-name-body').click(function(event) {
      event.stopPropagation();
    });
  })
})(jQuery);
;
