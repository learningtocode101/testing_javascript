describe('Calculater', function(){

    it('adds two numbers', function(){
      expect(add(2,4)).toBe(6);
    });
    it('subtracts two numbers', function(){
      expect(subtract(4,2)).toBe(2);
      expect(subtract(2,6)).toBe(-4);
    });
    it('multiplies two numbers', function(){
      expect(multiply(4,2)).toEqual(8);
    });

});
