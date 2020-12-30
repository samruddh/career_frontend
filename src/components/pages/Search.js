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
          "Storm's End",
          "Riverrun",
          "Mummer's Ford",
          "Oxcross",
          "Whispering Wood",
          "Green Fork",
          "Stony Shore",
          "Torrhen's Square",
          "Ruby Ford",
          "Darry",
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
          "Harrenhal",
          "Shield Islands",
          "Storm's End",
          "Winterfell",
          "Deepwood Motte",
          "Raventree",
          "Riverrun",
          "Deepwood Motte",
          "The Twins",
          "Castle Black",
          "Riverrun",
          "Moat Cailin",
          "Moat Cailin",
          "Winterfell"
      ]}
      />
    </div>
    </>
  );
};

export default Search;

