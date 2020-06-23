export const randint = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export const randchoice = (list) => {
  return list[randint(0, list.length)]
}
