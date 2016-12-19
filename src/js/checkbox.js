var checkbox = document.querySelector('p[role=checkbox]');
console.log(checkbox);

checkbox.addEventListener('click', function() {
  if (this.getAttribute('aria-checked') === 'true') {
      this.setAttribute('aria-checked', 'false');
  } else {
    // 그렇지 않으면 true로 변경
    this.setAttribute('aria-checked', 'true');
  }
});

checkbox.addEventListener('keydown', function(e) {
  if(e) { e.preventDefault(); }
  if (e.keyCode == '32') {
    if (this.getAttribute('aria-checked') === 'true') {
      this.setAttribute('aria-checked', 'false');
    } else {
      this.setAttribute('aria-checked', 'true');
    }
  }
});
