describe('Calculater', function(){

  describe('adds two numbers', function(){
    it('returns sum', function(){
      expect(add(2,4)).toBe(6);
    });
  });

  describe('subtracts two numbers', function(){
    it('returns result', function(){
      expect(subtract(4,2)).toBe(2);
      expect(subtract(2,6)).toBe(-4);
    });
  })


});
