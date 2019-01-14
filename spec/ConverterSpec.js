describe("Temperature Converter", function() {

  describe("Temperatures", function() {
    it("Fahrenheit to Celsius", function() {
      let result = convertFahrenheitToCelsius(100);
      expect(result).toEqual('37.8');
    });

    it("Celsius to Fahrenheit", function() {
      let solution = convertCelsiusToFahrenheit(60);
      expect(solution).toBe('140');
    });
  });
});
