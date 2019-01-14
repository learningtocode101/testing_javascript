describe("Converter", function() {

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

  describe("Mass", function(){
    it("Pound to Kilogram", function(){
      let result = convertPoundToKilogram(20);
      expect(result).toEqual('9.070');
    });

    it("Kilogram to Pound", function(){
      let result = convertKilogramToPound(10);
      expect(result).toEqual('22.050');
    });

    it("Kilogram to Stone", function(){
      let result = convertKilogramToStone(150);
      expect(result).toEqual('23.622');
    });

  });
});
