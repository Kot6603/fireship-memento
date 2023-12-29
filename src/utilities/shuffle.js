
// combine and shuffle two arrays
const shuffle = () => {
  const assets = [
    { image: '/assets/css.png' },
    { image: '/assets/html5.png' },
    { image: '/assets/jquery.png' },
    { image: '/assets/js.png' },
    { image: '/assets/next.png' },
    { image: '/assets/node.png' },
    { image: '/assets/react.png' },
    { image: '/assets/ts.png' },
  ]

  const fisherYates = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
  }

  const combinedArr = [...assets, ...assets]
    .map((card) => ({ ...card, id: Math.random() }))
    .sort(() => Math.random - 0.5)

  return fisherYates(combinedArr)
}

export default shuffle
