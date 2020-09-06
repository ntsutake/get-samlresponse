chrome.runtime.sendMessage({
    value: document.querySelector('input[name="SAMLResponse"][value]').value
});
