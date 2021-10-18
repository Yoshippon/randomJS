const baseStrings = [
    ["zero"],
    ["um", "dez", "cem", "mil", "dez mil", "cem mil", "um milhão"],
    ["dois", "vinte", "duzentos"],
    ["tres", "trinta", "trezentos"],
    ["quatro", "quarenta", "quatrocentos"],
    ["cinco", "cinquenta", "quinhentos"],
    ["seis", "sessenta", "seiscentos"],
    ["sete", "setenta", "setecentos"],
    ["oito", "oitenta", "oitocentos"],
    ["nove", "noventa", "novecentos"],
]

const units = baseStrings.map(([un]) => un)

const powersOfTen = baseStrings[1].map((num, i) => ({ [10 ** i ]: num})).slice(1).reduce((a, c) => Object.assign(a, c), {})

const edgeCases = {
    ...units,
    11: 'onze',
    12: 'doze',
    13: 'treze',
    14: 'catorze',
    15: 'quinze',
    16: 'dezeseis',
    17: 'dezesete',
    18: 'dezoito',
    19: 'dezenove',
    ...powersOfTen
}

const getSafe = (unit, str) => `${unit ? str : ""}`

const getHundredthsPart = (num) => {
    if (!num || !Number.isInteger(num)) return "Not an integer"

    if(edgeCases[num]) return edgeCases[num]

    const numArray = Array.from(String(num)).reverse()

    const [un, dz] = numArray.map(Number)

    const [unStr, dzStr, huStr] = numArray.map(Number).map((pos, i) => pos ? baseStrings[pos][i] : "")

    const edgeDozens = edgeCases[String(dz) + String(un)]

    const dozens = dz === 1 ? edgeDozens : `${dzStr || ""}${dz ? " " : ""}${unStr || ""}`

    return `${huStr || ""} ${dozens}`.trim().replace(new RegExp(' ', 'g'), ' e ')
}

const t0 = getHundredthsPart(5)
const t1 = getHundredthsPart(10)
const t2 = getHundredthsPart(22)
const t3 = getHundredthsPart(311)
const t4 = getHundredthsPart(702)
const t5 = getHundredthsPart(455)

t0
t1
t2
t3
t4
t5
