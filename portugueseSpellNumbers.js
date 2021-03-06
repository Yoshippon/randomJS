const baseStrings = [
  ["zero"],
  ["um", "dez", "cento", "mil", "dez mil", "cem mil", "um milhão"],
  ["dois", "vinte", "duzentos"],
  ["tres", "trinta", "trezentos"],
  ["quatro", "quarenta", "quatrocentos"],
  ["cinco", "cinquenta", "quinhentos"],
  ["seis", "sessenta", "seiscentos"],
  ["sete", "setenta", "setecentos"],
  ["oito", "oitenta", "oitocentos"],
  ["nove", "noventa", "novecentos"],
];

const units = baseStrings.map(([un]) => un);

const powersOfTen = baseStrings[1]
  .map((num, i) => ({ [10 ** i]: num }))
  .slice(1)
  .reduce((a, c) => Object.assign(a, c), {});

const edgeCases = {
  "": "",
  ...units,
  11: "onze",
  12: "doze",
  13: "treze",
  14: "catorze",
  15: "quinze",
  16: "dezeseis",
  17: "dezesete",
  18: "dezoito",
  19: "dezenove",
  ...powersOfTen,
  100: "cem",
};

const getSafe = (unit, str) => `${unit ? str : ""}`;

const getHundredthsPart = (num) => {
  if (!num || !Number.isInteger(num)) return "Not an integer";

  if (edgeCases[num]) return edgeCases[num];

  const numArray = Array.from(String(num)).reverse();

  const [un, dz, hu, ...ths] = numArray;

  const thsStr = ths[0] ? Number(ths.reverse().join("")) : "";

  const thousBase = thsStr ? `${getHundredthsPart(thsStr)} mil ` : "";

  const getFromBase = (pos, i) => (pos ? baseStrings[pos][i] : "");

  const [unBase = "", dzStr = "", huBase = ""] = numArray
    .map((a) => (a ? Number(a) : ""))
    .map(getFromBase);

  const appendE = thousBase && Number(hu) ? false : Number(dz) || Number(un);

  const thousandsStr = thousBase && appendE ? `${thousBase} e ` : thousBase;

  const huStr = thousandsStr && hu === "1" ? "cento" : huBase;

  const edgeDzs = edgeCases[String(dz) + String(un)];

  const unStr = `${!edgeDzs ? unBase : ""}`;

  const dozensStr = String(dz === "1" ? edgeDzs : `${dzStr}${dz ? " " : ""}`);

  const hundredsStr = `${huStr}${dozensStr ? ` ${dozensStr}` : ""}${unStr}`;

  const clean = (str) => str.trim().replace("  ", " ").replace(/\s/g, " e ");

  const result = `${thousandsStr}${clean(hundredsStr)}`;

  return result;
};

const results = [
  //   getHundredthsPart(5),
  //   getHundredthsPart(10),
  //   getHundredthsPart(18),
  //   getHundredthsPart(22),
  //   getHundredthsPart(100),
  //   getHundredthsPart(101),
  //   getHundredthsPart(310),
  //   getHundredthsPart(311),
  //   getHundredthsPart(702),
  //   getHundredthsPart(455),
  getHundredthsPart(150),
  getHundredthsPart(1000),
  getHundredthsPart(1001),
  getHundredthsPart(2000),
  getHundredthsPart(3022),
  getHundredthsPart(3222),
  getHundredthsPart(4122),
  getHundredthsPart(40122),
  getHundredthsPart(150122),
  getHundredthsPart(155122),
  getHundredthsPart(555555),
];

const [
  t0,
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  t10,
  t11,
  t12,
  t13,
  t14,
  t15,
  t16,
] = results;

t0;
t1;
t2;
t3;
t4;
t5;
t6;
t7;
t8;
t9;
t10;
t11;
t13;
t14;
t15;
t16;
