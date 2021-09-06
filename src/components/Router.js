/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Auth from "../routes/Auth";
import EditProfile from "../routes/EditProfile";
import Home from "../routes/Home";
import Profile from "../routes/Profile";

export default () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        {/* <Route>
                            <EditProfile />
                        </Route>
                        <Route>
                            <Profile />
                        </Route> */}
                    </>
                ) : (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    );
};
