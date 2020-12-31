import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
    search_data:[],
    api_data: []
  };

  onChange = (e) => {
    console.log('onChanges');

    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onclick2 = ()=>{
    const searchParam = this.state.userInput;
    const url = `http://3.84.185.161/:8000/api/search?location=${searchParam}`;

     fetch(url).then(response => response.json()).then(data =>{ this.setState({api_data: data})});
     const api_data = this.state.api_data;
     console.log( api_data );

  }
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      onclick2,

      state: { activeOption, filteredOptions, showOptions, userInput }
    } = this;
    let optionList;
    
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }
              return (
                <li className={className} key={optionName} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }

    let displayData = "Loading..."
    if(this.state.api_data != null){
      displayData = this.state.api_data.map((item,index)=>{
        return (<div class="result">
          <div class="card1">
            <div class="container1">
              <h4><b>Name:{item.name}</b></h4> 
              <p>Year:{item.year}</p>
              <p>Attacker king:{item.attacker_king}</p>
              <p>Defender king:{item.defender_king}</p> 
              <p>Region:{item.region}</p>  
            </div>
          </div>
        </div>
      )})
    }
   

    return (
      <React.Fragment>
        <h1>Enter Location Name to search (Ex:Riverrun):</h1>
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          <input type="submit" className="search-btn" onClick={onclick2} />
        </div>
          
          
        {optionList}
        {displayData}
      </React.Fragment>
    );
  }
}

export default Autocomplete;
