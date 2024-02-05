/// 12inc :1fit

function inchToFit(inch) {
  const inchFit = inch / 12;
  return inchFit;
}

const shuvofit = inchToFit(76);
// console.log(shuvofit.toFixed(2));

//
function inchFitConvert(inch2) {
  const inchFit2 = inch2 / 12;
  const fit = parseInt(inchFit2);
  const fitModuless = inch2 % 12;
  const result = fit + " Fit " + fitModuless + " inch";
  return result;
}
const fitShovo = inchFitConvert(76);
// console.log(fitShovo);

// fit to inch

function convertFit(inchFot) {
  const inchFitC = inchFot / 12;
  const convertInteger = parseInt(inchFitC);
  const modules = inchFot % 12;
  const results = convertInteger + " Fit " + modules + "Inch";
  return results;
}

const so = convertFit(76);
// console.log(so);

// mail to kilo meter convert

function mailToKilometer(mail) {
  const mailConvert = mail * 1.60394;
  const paresIntConvert = parseInt(mailConvert);
  const modules2 = mail % 1.60394;
  const mailResult =
    paresIntConvert + " KiloMeter " + modules2.toFixed(2) + "Meter";
  return mailResult;
}

const mailResult = mailToKilometer(2);
console.log(mailResult);
