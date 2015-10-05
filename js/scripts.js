$(document).ready(function() {

  'use strict';

  // Notice CSS that JavaScript is enabled
  $('body').addClass('js-enabled')

  var  $projectsContainer    = $('.projects')
    , $descriptionsContainer = $projectsContainer.find('.projects-description')
    , $projectTitles         = $projectsContainer.find('.js-project-title')

  addProjectToDom($($projectTitles[0]))
  $projectTitles.on('click', addProjectToDomEvent)


  // Functions

  function createTitle(name, link) {
    return '<h3><a href="' + link + '">' + name + '</a></h3>'
  }

  function addProjectToDom($project) {
    var $description = $project.parent('.js-project').find('.js-project-description')
      , title        = createTitle($project.text(), $project.data('link'))
    $descriptionsContainer.html(title + $description.html())
  }

  function addProjectToDomEvent(e) {
    var $project = $(e.currentTarget)
    addProjectToDom($project)
  }

})
