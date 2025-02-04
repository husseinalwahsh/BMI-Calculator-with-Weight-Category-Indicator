let weight = document.getElementById("weight");
let height = document.getElementById("height");
let btuCalculateBMI = document.getElementById("calculateBMI");
let PResult = document.getElementById("result");
btuCalculateBMI.onclick = function () {
  if (calculateBMI() < 18 && calculateBMI() > 0) {
    PResult.innerHTML = "نحافة ";
    PResult.style.color = "blue";
  } else if (calculateBMI() >= 18 && calculateBMI() <= 24.9) {
    PResult.innerHTML = "وزن مثالي ";
    PResult.style.color = "#008000";
  } else if (calculateBMI() >= 25 && calculateBMI() <= 29.9) {
    PResult.innerHTML = "وزن زائد ";
    PResult.style.color = "rgb(102, 156, 102)";
  } else if (calculateBMI() >= 30 && calculateBMI() <= 34.9) {
    PResult.innerHTML = "سمنة من الدرجة الاولى ";
    PResult.style.color = "rgb(152, 52, 52)";
  } else if (calculateBMI() >= 35 && calculateBMI() <= 39.9) {
    PResult.innerHTML = "سمنة من الدرجة الثانية ";
    PResult.style.color = "rgb(208, 28, 28)";
  } else if (calculateBMI() > 39.9) {
    PResult.innerHTML = "سمنة خطيرة";
    PResult.style.color = "red";
  } else {
    alert(".الرجاء إدخال القيم الصحيحة ");
  }
};

// const calculateBMI = () => weight.value / (height.value * height.value);
function calculateBMI() {
  if (
    weight.value === "" ||
    height.value === "" ||
    height <= 0 ||
    weight <= 0
  ) {
    return 0;
  }
  return weight.value / (height.value * height.value);
}
