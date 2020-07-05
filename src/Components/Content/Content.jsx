import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import Pictures from '../Pictures/Pictures';

class Content extends Component{
  render(){
    return(
      <div className="Content">
        <Switch>
          <Route path="" render={() => (<Home />)}/>
          <Route path="/projects" render={() => (<Projects />)}/>
          <Route path="/blog" render={() => (<Blog />)}/>
          <Route path="/sickpics" render={() => (<Pictures />)}/>
        </Switch>
      </div>
    )
  }
}

export default Content;