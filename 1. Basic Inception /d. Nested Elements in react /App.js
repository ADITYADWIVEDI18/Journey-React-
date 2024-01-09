
     // If we want to add the multiple div or child for example -:
    //   <div id='parent'>
   //         <div id='child'>
  //              <h1> I'm a tag. </h1>
 //           </div>
//       </div>

const parent = React.createElement('div' , {id:'parent' } , React.createElement('div' , {id:'child'} , React.createElement('h1' , { } , 'Im an h1 tag. ')) );

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(parent);
