// Prepare ready function
$(document).ready(function() {

    $("#btnChangeCalculate").click(function() {
        var moneyDue = $("#moneyDue").val();
        console.log(moneyDue);
        var moneyPaid = $("#moneyPaid").val();
        console.log(moneyPaid);
        var moneyBack = moneyPaid - moneyDue;

        var dollar = Math.floor(moneyBack);
        console.log(dollar);
        var change = Math.round((moneyBack % 1) * 100);
        console.log(change);
        var quarter = Math.floor(change / 25);
        console.log(quarter);
        var dime = Math.floor((change - (quarter * 25)) / 10);
        console.log(dime);
        var nickel = Math.floor((change - (quarter * 25) - (dime * 10)) / 5);
        console.log(nickel);
        var penny = Math.floor((change - (quarter * 25) - (dime * 10) - (nickel * 5)) / 1);
        console.log(penny);

        // Set texts for dollar and coin outputs
        $("#p").text(dollar);
        $("#p1").text(quarter);
        $("#p2").text(dime);
        $("#p3").text(nickel);
        $("#p4").text(penny);

    });
});
