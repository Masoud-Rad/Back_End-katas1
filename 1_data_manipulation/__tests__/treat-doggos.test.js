const treatDoggos = require('../treat-doggos.js');


describe('treatDoggos', () => {
  it('if it takes empty array should return empty array ', () => {
    //arrange
    //act
    //asset
    expect(treatDoggos([])).toEqual([]);
  });
  

  it('should return expected array', () => {
     //arrange
     const dogs = [{ name: 'Otis', age: 3, hasRabies: true }];
    
    const result= [{ name:'Otis', age: 3, hasRabies: false }]
    //act
    //asset
    expect(treatDoggos(dogs)).toEqual(result);
  });

  it('should not mutate arguments, should be pure', () => {
    //arrange
    const dogs = [{ name: 'Otis', age: 3, hasRabies: true }];
    const copyDogs = [{ name: 'Otis', age: 3, hasRabies: true }];
    const result= [{ name:'Otis', age: 3, hasRabies: false }]

    //act
    treatDoggos(dogs);
    //asset
    expect(dogs).toEqual(copyDogs);
    expect(dogs).not.toBe(result);
  });


  
});