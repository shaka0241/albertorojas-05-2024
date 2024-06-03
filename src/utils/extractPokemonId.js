export const extractPokemonId = (url) => {
    const regex = /\/pokemon\/(\d+)\//
    const match = url.match(regex)
    return match ? match[1] : null
  }