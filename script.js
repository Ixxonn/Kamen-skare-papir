const sleep = ms => new Promise(r => setTimeout(r, ms));
goto(-250, 250)
const program = async () => {
  // NE DIRATI IZNAD OVE LINIJE
  // NE DIRATI ISPOD OVE LINIJE
}
//program()
//------------------------------------------------------
//------------------------------------------------------
const pobjeda = Symbol('pobjeda')
const poraz = Symbol("poraz")
const nerijeseno = Symbol("nerijeseno")
const lijevo = Symbol(`lijevo`)
const desno = Symbol(`desno`)

const getPlayerChoice = () => {

  const input = prompt("Unesi kamen, skare ili papir")
  return input

}

const getComputerChoice = () => {
  const broj = Math.random()
  if (broj < 0.33)
    return "kamen"
  else if (broj < 0.66)
    return "skare"
  else
    return "papir"
}

const ispisiPotez = async (igrac, kompjuter) => {

  switch (igrac) {
    case "skare":
      ispisiSkare(lijevo)
      break;
    case "kamen":
      ispisiKamen(lijevo)
      break;
    case "papir":
      ispisiPapir(lijevo)
      break;
  }
  await sleep(1000)
  switch (kompjuter) {
    case "skare":
      ispisiSkare(desno)
      break;
    case "kamen":
      ispisiKamen(desno)
      break;
    case "papir":
      ispisiPapir(desno)
      break;
  }

}

const ispisiSkare = (mjesto) => {
  if (mjesto === desno) {
    goto(100, 0)
  }
  if (mjesto === lijevo) {
    goto(-100, 0)
  }
  right(30)
  forward(80)
  right(180)
  forward(80)
  left(120)
  penup()
  forward(50)
  pendown()
  left(120)
  forward(80)
  right(40)

}
const ispisiPapir = (mjesto) => {
  if (mjesto === desno) {
    goto(100, 0)
  }
  if (mjesto === lijevo) {
    goto(-100, 0)
  }
  right(120)
  forward(80)
  left(90)
  forward(120)
  left(90)
  forward(80)
  left(90)
  forward(120)
  right(150)
}
const ispisiKamen = (mjesto) => {
  if (mjesto === desno) {
    goto(100, 0)
  }
  if (mjesto === lijevo) {
    goto(-100, 0)
  }

  for (let brojac = 0; brojac < 360; brojac++) {
    forward(1)
    right(4)
  }
}

//funkcija oneRound. Pozove getComputerChoice i getPlayerChoice i onda odredi pobjednika i ispise tko je pobjednik
const oneRound = async (igrac, kompjuter) => {
  clear()
  await ispisiPotez(igrac, kompjuter)
  if (igrac === "skare" && kompjuter === "papir")
    return pobjeda
  else if (igrac === "skare" && kompjuter === "kamen")
    return poraz
  else if (igrac === "skare" && kompjuter === "skare")
    return nerijeseno
  else if (igrac === "papir" && kompjuter === "kamen")
    return pobjeda
  else if (igrac === "papir" && kompjuter === "skare")
    return poraz
  else if (igrac === "papir" && kompjuter === "papir")
    return nerijeseno
  else if (igrac === "kamen" && kompjuter === "skare")
    return pobjeda
  else if (igrac === "kamen" && kompjuter === "papir")
    return poraz
  else if (igrac === "kamen" && kompjuter === "kamen")
    return nerijeseno
}

const igra = async () => {
  //inicijalizirati scoreIgrac i scoreKompjuter na 0
  let scoreIgrac = 0
  let scoreKompjuter = 0

  for (let brojac = 0; brojac < 5; brojac++) {
    const rez = await oneRound(getPlayerChoice(), getComputerChoice())
    await sleep(1)

    if (rez === poraz) {
      scoreKompjuter = scoreKompjuter + 1
      alert("Izgubili ste")
    }
    else if (rez === pobjeda) {
      scoreIgrac = scoreIgrac + 1
      alert("Pobjedili ste")
    }
    else {
      alert("Nerijeseno")
    }
  }
  alert(`Konacni rezultat igraca je ${scoreIgrac} a konacni rezultat kompjutera je ${scoreKompjuter}`)
}
igra()