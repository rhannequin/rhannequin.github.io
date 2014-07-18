;(function(){
  'use strict';

  var $ = require('jquery')

  $('body').addClass('js-enabled')
  $('.js-project-title').on('click', projectTitleEvent)

  showProjectDescription($('.js-project-title:first'))

  function projectTitleEvent (e) {
    e.preventDefault()
    var $el = $(e.currentTarget)
    showProjectDescription($el)
  }

  function showProjectDescription($el) {
    var selector = $el.data('target')
      , title = $el.html()
      , link = $el.data('link')
      , content = $(selector).html()
      , htmlTitle = '<h2><a href="' + link + '">' + title + '</a></h2>'
    addCurrentClass($el)
    $('.project-descriptions').html(htmlTitle + content)
  }

  function addCurrentClass($el) {
    var currentClassName = 'current-project'
    $('.' + currentClassName).removeClass(currentClassName)
    $el.addClass(currentClassName)
  }

})()
