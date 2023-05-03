const formatAlbums = require('../format-albums.js');

describe('formatAlbums', () => {
  it('if it takes empty array should return empty array ', () => {
    //arrange
    //act
    //asset
    expect(formatAlbums([])).toEqual([]);
  });
  it('if it takes empty array should return empty array ', () => {
    //arrange

    //act
    //asset
    expect(formatAlbums([],[])).toEqual([]);
  });
  it('if it takes empty array should return empty array ', () => {
    //arrange
    const albums = [
      { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
      { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
    ];
    //act
    //asset
    expect(formatAlbums(albums,[])).toEqual([]);
  });

  it('should return expected array', () => {
     //arrange
     const albums = [
      { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
      { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
    ];
    const artistIdReference = {
      Grammatics: 9923,
      Doves: 324
    };
    const result= [
      { name: 'Grammatics', artistId: 9923, releaseYear: 2009 },
      { name: 'Kingdom of Rust', artistId: 324, releaseYear: 2009 },
    ];
    //act
    //asset
    expect(formatAlbums(albums, artistIdReference)).toEqual(result);
  });

  it('should not mutate arguments, should be pure', () => {
    //arrange
    const albums = [
      { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
      { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
    ];
    const copyAlbum = [
      { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
      { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
    ];
    const artistIdReference = {
      Grammatics: 9923,
      Doves: 324
    };
    const copyArtistIdReference = {
      Grammatics: 9923,
      Doves: 324
    };

    //act
    formatAlbums(albums, artistIdReference);
    //asset
    expect(albums).toEqual(copyAlbum);
    expect(artistIdReference).toEqual(copyArtistIdReference);
  });


  
});
