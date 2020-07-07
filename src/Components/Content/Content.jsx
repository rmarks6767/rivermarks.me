import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home from './Home/Home';
import Projects from '../Content/Projects/Projects';
// import Blog from '../Blog/Blog';
// import Pictures from '../Pictures/Pictures';

class Content extends Component{
  render(){
    return(
      <div className="Content">
        <BrowserRouter>
          <Switch>
            {/* <Route path="" render={() => (<Home />)}/> */}
            <Route path="/projects" render={() => (<Projects />)}/>
            {/* <Route path="/blog" render={() => (<Blog />)}/> */}
            {/* <Route path="/sickpics" render={() => (<Pictures />)}/> */}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Content;