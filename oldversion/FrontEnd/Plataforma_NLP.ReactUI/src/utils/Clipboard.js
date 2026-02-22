function copyToClipboard(text) {
  var input = document.body.appendChild(document.createElement('textarea'));
  input.value = text;
  input.focus();
  input.select();
  document.execCommand('copy');
  input.parentNode.removeChild(input);
}

export default copyToClipboard;
