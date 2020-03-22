$(document).ready(function () {




  $("#btnGenerar").click(function () {

    var num = $('#txtNumero').val();
    var a = 0;
    var b = parseInt(num);
    var c = 0;

    for (var i = 1; i < 65; i++) {

      $('#tablero').append(`<div class='col-4 col-sm-1 p-1 bg-success text-white border'>
      <small class='border rounded p-1 text-white bg-warning font-weight-bold'>${i}</small><br>
      <small>
      ${b}
      </small></div>`);
      a = b;
      c = b;
      b = a + c; 

      
    }
  });

  $("#btnLimpiar").click(function () {
    $('#tablero').empty();

  });



});