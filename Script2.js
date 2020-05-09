function handleDragStart(e) {
    this.style.opacity = '0.4';
  }
  
  var cols = document.querySelectorAll('#barra .scroll');
  [].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', handleDragStart, false);
  });