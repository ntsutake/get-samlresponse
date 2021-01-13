var textContents = chrome.extension.getBackgroundPage().textContents;
var div = document.getElementById('textView');
div.textContent = textContents;

download.addEventListener("click", function() {
    var a = document.createElement('a');
    var text = document.getElementById("textView").value;
    a.href = 'data:text/plain;charset=utf-8,'
        + encodeURIComponent(text);
    a.setAttribute('download', 'saml.txt');
    // a.dispatchEvent(new CustomEvent('click'));
    a.click();
});
