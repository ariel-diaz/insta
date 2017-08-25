import React, {Component} from 'react';

class FileUpload extends Component{
    constructor(props){
        super(props);
        this.state = {
            uploadValue: 0,
        };
    }



    render(){
        return(
            <div>
                <progress value={this.state.uploadValue} max="100"> </progress>
                <br/>
                <input type="file" onChange={this.props.handleUpload}/>
            </div>
        )
    }

}

export default FileUpload;