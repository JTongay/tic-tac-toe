(function () {

  $(function () {

    var player = 1;

    $('.square').on('click', function (event) {
      var squareSelected = $(this);
      if (squareSelected.hasClass('fa fa-times') || squareSelected.hasClass('fa fa-circle-o')) {
        alert("This square has already been selected! Please select another!");
      } else {
        if (player === 1) {
          squareSelected.addClass('fa fa-times');
          if (checkIfPlayerWon('fa fa-times')) {
            alert("Congrats! Player " + player + " has won!")
          } else {
            player = 2;
          }

        } else {
          squareSelected.addClass('fa fa-circle-o');
          if (checkIfPlayerWon('fa fa-circle-o')) {
            alert("Congrats! Player " + player + " has won!")
          } else {
            player = 1;
          }

        }
      }
    })

    function checkIfPlayerWon(symbol) {
      if ($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
        return true;
      } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
        return true;
      } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
        return true;
      } else if ($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
        return true;
      } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
        return true;
      } else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
        return true;
      } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
        return true;
      } else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
        return true;
      } else {
        return false;
      }
    }

  })

})();
