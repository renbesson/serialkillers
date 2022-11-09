var allSNs = document.getElementById("allInput");
var deliveredSNs = document.getElementById("deliveredInput");
var resultDiv = document.querySelector(".resultDiv");

var splitFunction = (string) => {
  return string.split(", ");
};

var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  var allSplit = splitFunction(allSNs.value);
  var deliveredSplit = splitFunction(deliveredSNs.value);

  var resultArray = allSplit.filter((item) => !deliveredSplit.includes(item));

  resultDiv.textContent = resultArray;
});
