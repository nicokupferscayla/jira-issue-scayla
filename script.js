document.querySelectorAll("#project-single-select > .icon")[0].click();
setTimeout(() => {
  var projects = document.querySelectorAll('#all-projects > li');
  for (var i = 0; i < projects.length; ++i) {
    if (projects[i].id.match(/\(scayla\)/)) {
       console.log(projects[i])
       console.log('selecting project: ', projects[i].id);
       projects[i].className += "active"
       setTimeout(() => {projects[i].click();}, 100)
       break;
    }
  }
}, 300)
setTimeout(() => {
  document.querySelectorAll("#issuetype-single-select > .icon")[0].click();
  setTimeout(() => {
    jQuery('#issuetype-suggestions li').removeClass('active');
    var bug = jQuery('#issuetype-suggestions li.aui-list-item-li-bug');
    if (bug.length) {
      console.log('bug', bug);
      bug.addClass("active");
      setTimeout(() => {bug.trigger('click');}, 100);
    } else {
      document.querySelectorAll("#issuetype-single-select > .icon")[0].click();
    }
  }, 300);
}, 600)
setTimeout(() => {
  jQuery('.aui-nav > li[data-mode="source"] > a')[0].click();
  if ( document.getElementById("description").value === "" ) {
    document.getElementById("description").value = 
    `h3. Steps To Reproduce
    *
    h3. Expected Result
    *
    h3. Actual Result
    *
    -------
    h3. Extra
    * tested on version: 
    *`;
  }
  if ( document.getElementById("summary").value === "") {
      document.getElementById("summary").value = "[FE / BE]"
  }
  setTimeout(() => { jQuery('.aui-nav > li[data-mode="wysiwyg"] > a')[0].click();}, 600)
}, 1500);
