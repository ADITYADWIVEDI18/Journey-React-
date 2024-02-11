import React from "react";
class UserClass extends React.Component {
    //constructor is used to access the props
    constructor(props)
    {
       super(props);
    // Set of all state variable.
       this.state = {
        userInfo : {
          name : "John Doe",
          location : "England",
        },
       }
      //  console.log(this.props.name+"Constructor of UserClass Child.");
    }

    
    async componentDidMount(){

      const data = await fetch("https://api.github.com/users/ADITYADWIVEDI18");
      const json = await data.json();

      this.setState({
        userInfo:json,
      });

      console.log(json);

      // this.timer = setInterval(()=>{
      //   console.log("Interval Running");
      // },10000);
      
    }

    componentDidUpdate(){
      console.log("Timer the User Component");
    }

    componentWillUnmount(){
      // clearInterval(this.timer);

      console.log("Unmounting happens.")
    }

  //render method returns piece of jsx which displayedd on the webpage.
   render(){

        const {name,location,avatar_url}=this.state.userInfo;
      
        return (
          <div>
            <img src={avatar_url}/>
            <h1>Name : {name}</h1>
            <h2>Location : {location}</h2>
            <h3>Contact : @adityadwivedi18</h3>
            <hr/>
          </div>
        );
   } 

}

export default UserClass;
