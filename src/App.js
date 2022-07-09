import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import GetAppPage from "./pages/GetAppPage";

function App() {
    return (
        <Layout>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/getapp">
                    <GetAppPage />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
