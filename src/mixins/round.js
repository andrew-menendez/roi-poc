export default {
  methods: {
    round (n, digits) {
      // from https://stackoverflow.com/questions/15762768/javascript-math-round-to-two-decimal-places
      if (typeof n === 'string') {
        return n
      }

      if (digits === undefined) {
        digits = 0
      }
      var multiplicator = Math.pow(10, digits)
      n = parseFloat((n * multiplicator).toFixed(11))
      return (Math.round(n) / multiplicator).toFixed(digits)
    }
  }
}
