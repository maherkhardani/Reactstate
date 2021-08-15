import { useState,Component } from 'react';
class Components extends Component {
state={
    Person:{
    name: 'maher',
    URL:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
    bio:'',
    },
    show:true,
}

handlesubmitcklicked=()=>this.setState({show:!this.state.show});
 render() {
     return(
         <div>
             {(this.state.show)?(<>
             <h1>this.state.name</h1>
                <img src={this.state.URL} alt='photo'/>
                <h2>this.state.bio</h2>
             </>):("")},

<br />
<button  onClick={this.handlesubmitcklicked}> ClickMe</button>
</div>

     )
 }

}
export default Components;