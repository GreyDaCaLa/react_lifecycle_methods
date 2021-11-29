import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    console.log("App - Contructor")
    super(props);

    this.state = { 
      hasLoaded:false,
      title:"Place Holder Text In Title",
    };

    //binds
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleLoadedChange = this.handleLoadedChange.bind(this);
    this.displayLoading = this.displayLoading.bind(this);

  }

  //event handler functions
  handleTitleChange(){
    this.setState({
      title: document.getElementById("title").value,
    })

  }

  handleLoadedChange(){
    this.setState({
      hasLoaded: this.state.hasLoaded ? false : true,
    })
  }


  displayLoading() {
    if(this.state.hasLoaded) { 
      return (
        <>
          <input 
            type="text"
            name="tile"
            id="title"
            placeholder={"enter new title place holder"} 
          />
          <button onClick={this.handleTitleChange}>Change Title</button>
        </>
      );

    }else{
      return <h3>Loading...</h3>
    }
  }





  //life cycle methods

  componentDidMount() {
    console.log("App -  Mount")
    this.setState({
      hasLoaded: true,

    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App - update", prevState);
  }



  render() {
    console.log("App - Rendor")
    return (
      <div>
        <h1>{this.state.title}</h1>
        {/* <button onClick={this.handleLoadedChange}>Toggle Loaded</button> */}
        <hr />
        {this.displayLoading()}
      </div>
    );
  }
}

export default App;
