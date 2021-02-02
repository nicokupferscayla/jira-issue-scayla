var jira______scayla = 'jira\.scayla\.com';
var check_check_check_check______scayla;
var check_check_check_check2_____scayla;

if (window.location.href.match(jira______scayla)) {
    if (!isDialogOpen_____scayla()) {
        addButton_____scayla();
    }
    else {
        runCode______scayla();

        check_check_check_check2_____scayla = setInterval(() => {
            if (!isDialogOpen_____scayla()) {
                addButton_____scayla();
                clearInterval(check_check_check_check2_____scayla);
            }
        }, 500);
    }
}

function addButton_____scayla() {
    var elem = document.createElement('button');
    elem.onclick = runCode______scayla;
    elem.innerHTML = 'Bug Template';
    elem.style.cssText =
        'z-index:10000000;position: fixed; top: 3px; right: 350px;' +
        'background-color:#2684ff; display: inline-block; padding: 8px;color: #eee;border: 0;' +
        'font-weight: bold;font-size: 13px;border-radius: 4px';
    document.body.appendChild(elem);
}

function isDialogOpen_____scayla() {
    return document.querySelectorAll("#create-issue-dialog").length
        && document.querySelectorAll("#project-single-select > .icon").length
}

/**
 * Runs the function that sets the template bug
 */
function runCode______scayla() {
    if (!isDialogOpen_____scayla()) {
        document.getElementById('create_link').click();
        check_check_check_check______scayla = setInterval(() => {
            if (isDialogOpen_____scayla()) {
                clearInterval(check_check_check_check______scayla);
                setTypeBug______scayla();
            }
        }, 50)
    } else {
        setTypeBug______scayla();
    }

}

function setTypeBug______scayla() {
    var content_____scayla = document.querySelectorAll('#create-issue-dialog > .jira-dialog-content')[0];
    content_____scayla.style.opacity = 0.1;

    document.querySelectorAll("#project-single-select > .icon")[0].click();
//     setTimeout(() => {
//         var projects = document.querySelectorAll('#all-projects > li');
//         for (var i = 0; i < projects.length; ++i) {
//             if (projects[i].id.match(/\(scayla\)/)) {
//                 console.log(projects[i])
//                 console.log('selecting project: ', projects[i].id);
//                 projects[i].className += "active"
//                 setTimeout(() => {projects[i].click();}, 100)
//                 break;
//             }
//         }
//     }, 300)
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
* Go to ...  

h3. Expected Result
* ...  

h3. Actual Result
* ...   


-------   

h3. Environment - any

h3. Extra details
* none
`;
        }
        if ( document.getElementById("summary").value === "") {
            document.getElementById("summary").value = "[FE / BE]"
        }
        setTimeout(() => {
            jQuery('.aui-nav > li[data-mode="wysiwyg"] > a')[0].click();
            content_____scayla.style.opacity = 1;
        }, 600)
    }, 1500);

}
