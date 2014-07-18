;(function(win, doc){
  'use strict';

  var forEach = Array.prototype.forEach

  // Notice CSS that JavaScript is enabled
  doc.querySelector('body').className = 'js-enabled'

  // Click event on projects title
  forEach.call(doc.querySelectorAll('.js-project-title'), function(el) {
    el.addEventListener('click', projectTitleEvent)
  })

  showProjectDescription(doc.querySelectorAll('.js-project-title')[0])



  function projectTitleEvent (e) {
    e.preventDefault()
    var el = e.currentTarget
    showProjectDescription(el)
  }

  function showProjectDescription(el) {
    var selector = el.getAttribute('data-target')
      , title = el.innerHTML
      , link = el.getAttribute('data-link')
      , content = doc.querySelector(selector).innerHTML
      , htmlTitle = '<h2><a href="' + link + '">' + title + '</a></h2>'
    addCurrentClass(el)
    doc.querySelector('.project-descriptions').innerHTML = htmlTitle + content
  }

  function addCurrentClass(selector) {
    var currentClassName = 'current-project'
      , selectorClassName = selector.className
    removeClass(currentClassName)
    if(selector.className.indexOf(currentClassName) === -1) {
      selector.className = selectorClassName + ' ' + currentClassName
    }
  }

  function removeClass(className) {
    var elementsWithClass = doc.querySelectorAll('.' + className)
    if(elementsWithClass.length > 0) {
      forEach.call(elementsWithClass, function(el) {
        el.className = el.className.split(className).join('').trim()
      })
    }
  }

})(window, window.document)
