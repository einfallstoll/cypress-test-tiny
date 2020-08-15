document.getElementById('regenerate').addEventListener('click', function() {
  for (var limit = 1; limit <= 200000; limit++) {
    var a = false;
    for (var i = 2; i <= limit; i++) {
      if (limit%i===0 && i!==limit) {
        a = true;
      }
    }
    if (a === false) {
      console.log(limit);
    }
  }
});
