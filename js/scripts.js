$(function() {
  $("#blanks form").submit(function(event){
    var name1Input = $("input#name1").val();
    var name2Input = $("input#name2").val();
    var AddressInput = $("input#Address").val();
    var CityInput = $("input#City").val();
    var StateInput = $("input#State").val();
    var ZipInput = $("input#Zip").val();
    var BearInput = $("input#Bear").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".Address").text(AddressInput);
    $(".City").text(CityInput);
    $(".State").text(StateInput);
    $(".Zip").text(ZipInput);
    $(".Bear").text(BearInput);

    $("#confirmation").show();

    event.preventDefault();
  });

  $("#confirmation button").click(function(event) {
    event.preventDefault();
    $("#confirmation").hide();
    $("#receipt").show();
  });

});
