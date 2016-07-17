(function () {

  $(function () {

    var player = 1;

    //Click events
    $('.square').on('click', playGame);
    $(document).on('click', '#newbutton', newGame);


    // Game playing functionality
    function playGame() {
      var squareSelected = $(this);
      if (squareSelected.hasClass('fa fa-times') || squareSelected.hasClass('fa fa-circle-o')) {
        alert("This square has already been selected! Please select another!");
      } else {
        if (player === 1) {
          squareSelected.addClass('fa fa-times');
          $('#p1').hide();
          $('#p2').show();
          if (checkIfPlayerWon('fa fa-times')) {
            alert("Congrats! Player " + player + " has won!")
          } else {
            player = 2;
          }

        } else if (player === 2) {
          squareSelected.addClass('fa fa-circle-o');
          $('#p1').show();
          $('#p2').hide();
          if (checkIfPlayerWon('fa fa-circle-o')) {
            alert("Congrats! Player " + player + " has won!")
          } else {
            player = 1;
          }
        }

      }
    };


    //Checks to see if there's a winner
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
    };

    //Resets the gameboard
    function newGame() {
      $('.square').removeClass('fa fa-circle-o');
      $('.square').removeClass('fa-times');
    }

  });

})();
