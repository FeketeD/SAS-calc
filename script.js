function calculateCashBox() {
    const cbAmount = parseFloat(document.getElementById("cbAmount").value);
    const peopleCount = parseInt(document.getElementById("peopleCount").value);
    const totalResult = document.getElementById("totalResult");
    const perPersonResult = document.getElementById("perPersonResult");
    totalResult.innerText = "Total:";
    perPersonResult.innerText = "Per Person:";

    if (isNaN(cbAmount) || isNaN(peopleCount) || peopleCount <= 0) {
      alert("Please enter valid values!");
      return;
    }

    const total = cbAmount * 18000;
    const perPerson = total / peopleCount;

    totalResult.innerText += " " + total.toLocaleString('hu-HU') + " $";
    perPersonResult.innerText += " " + perPerson.toLocaleString('hu-HU') + " $";
}