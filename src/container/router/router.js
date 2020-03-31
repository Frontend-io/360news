import React from 'react'
import {Route, Switch, Redirect } from "react-router-dom"
import Home from '../../components/homepage/home';
import Categories from '../../components/categories/categories';
import NewsCategory from '../../components/newsCategory/newsCategory';
import Read from '../../components/read/read';

export const RouterMain = () =>(
    <>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/categories/:id" component={NewsCategory} />
            <Route exact path="/categories/:id/:id" component={ Read} />
            <Redirect exact path="*" to={Home} />
        </Switch>
    </>
)