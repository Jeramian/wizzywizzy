import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Contact from "./components/Contact";
import About from "./components/About";


const app = document.getElementById('app');

ReactDOM.render(<Router history={hashHistory}>
                    <Route path="/" component={Layout}></Route>
                        <IndexRoute component={Layout}></IndexRoute>
                        <Route path="contact" component={Contact}></Route>
                        <Route path="about" component={About}></Route>
                </Router>, app);