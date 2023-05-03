const createRef = require('../create-ref.js');

describe('createRef', () => {
  it('if it takesempty array should return empty array ', () => {
    //arrange
    //act
    //asset
    expect(createRef([])).toEqual({});
  });

  it('should return expected array', () => {
     //arrange
     const people = [
      { name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' },
      {
        name: 'ant',
        phoneNumber: '01612223344',
        address: 'Northcoders, Manchester'
      },
      { name: 'mitch', phoneNumber: '07777777777', address: null }
    ];
    const result= { vel: '01134445566', ant: '01612223344', mitch:'07777777777' };
    //act
    //asset
    expect(createRef(people, 'name', 'phoneNumber')).toEqual(result);
  });

  it('should not mutate arguments, should be pure', () => {
    //arrange
    const people = [
      { name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' },
      {
        name: 'ant',
        phoneNumber: '01612223344',
        address: 'Northcoders, Manchester'
      },
      { name: 'mitch', phoneNumber: '07777777777', address: null }
    ];
    const copyPeople = [
      { name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' },
      {
        name: 'ant',
        phoneNumber: '01612223344',
        address: 'Northcoders, Manchester'
      },
      { name: 'mitch', phoneNumber: '07777777777', address: null }
    ];
    //act
    createRef(people, 'name', 'phoneNumber');
    //asset
    expect(people).toEqual(copyPeople);
  });

  it('should return expected array', () => {
    //arrange
    const songs = [
      {
        track: '11:11',
        artist: 'Dinosaur Pile-Up',
        releaseYear: 2015,
        album: 'Eleven Eleven'
      },
      {
        track: 'Powder Blue',
        artist: 'Elbow',
        releaseYear: 2001,
        album: 'Asleep In The Back'
      }
    ];
   const result= { '11:11': 'Dinosaur Pile-Up', 'Powder Blue': 'Elbow' };
   //act
   //asset
   expect(createRef(songs, 'track', 'artist')).toEqual(result);
 });

  
});
