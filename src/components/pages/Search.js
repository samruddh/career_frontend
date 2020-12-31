import React from 'react';
import Footer from '../Footer';
import '../Autocomplete.css';
import Autocomplete from '../Autocomplete'


const Search = () => {
  return (
    <>
    <div className="App">
      <Autocomplete
        options={[
          "King's Landing",
          "Duskendale",
          "Riverrun",
          "Mummer's Ford",
          "Oxcross",
          "Whispering Wood",
          "Green Fork",
          "Stony Shore",
          "Ruby Ford",
          "Red Fork",
          "Crag",
          "Ryamsport, Vinetown, Starfish Harbor",
          "Seagard",
          "Harrenhal",
          "Golden Tooth",
          "Torrhen's Square",
          "Darry",
          "Saltpans",
          "Dragonstone",
          "Winterfell",
          "Shield Islands",
          "Storm's End",
          "Deepwood Motte",
          "Raventree",
          "The Twins",
          "Castle Black",
          "Moat Cailin"
      ]}
      />
    </div>
    <Footer />
    </>
  );
};

export default Search;

