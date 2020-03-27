var jira______peter = 'jira\.scayla\.com';
var assignTo;

if (window.location.href.match(jira______peter)) {
    addButton_____peter();
}

function addButton_____peter() {
    var elem = document.createElement('button');
    elem.onclick = runCode______peter;
    elem.innerHTML = 'Assign to...';
    elem.style.cssText =
        'z-index:10000000;position: fixed; top: 3px; right: 550px;' +
        'background-color:#2684ff; display: inline-block; padding: 8px;color: #eee;border: 0;' +
        'font-weight: bold;font-size: 13px;border-radius: 4px';
    document.body.appendChild(elem);
}

/**
 * Runs the function that sets the template bug
 */
function runCode______peter() {
    assignTo = prompt('assign to? type "peter" for peter, "nico", "juan", etc');
    var collapsed = document.querySelectorAll('.ghx-heading-expander');
    jQuery('.aui-iconfont-close-dialog').click();
    for (const coll of collapsed) {
        if (coll.attributes['aria-expanded'].value === 'false') {
            coll.click();
        }
    }

    setTimeout(() => {
        var issues = jQuery('.js-issue')
        assignToPeter(issues, 0);
    }, 100);

}

function assignToPeter(issues, index) {
    if (index >= issues.length) {
        alert('finished assigning everything to ' + assignTo);
    }

    var issue = issues[index];
    issue.click();

    setTimeout(() => {
        typeMollAndPressEnter(() => {
            assignToPeter(issues, index + 1);
        });
    }, 300);
}

function typeMollAndPressEnter(callback) {

    jQuery('#assignee-val').click();
    setTimeout(() => {
        jQuery('#assignee-val .noloading.drop-menu').click();
        setTimeout(() => {
            jQuery('.aui-list-item').removeClass('active');
            setTimeout(() => {
                jQuery(`[id*="${ assignTo }"]`).addClass('active');
                setTimeout(() => {
                    jQuery(`[id*="${ assignTo }"]`).click();
                    setTimeout(() => {
                        jQuery('.aui-button.submit').click();
                        setTimeout(() => {
                            jQuery('.aui-iconfont-close-dialog').click();
                            callback();
                        }, 100);
                    }, 50);
                }, 50);
            }, 50);
        }, 500);
    }, 300);


}
