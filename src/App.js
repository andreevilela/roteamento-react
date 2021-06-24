import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Participantes from "./components/Participantes";
import NovoParticipante from "./components/NovoParticipante"
import EditaParticipante from "./components/EditaParticipante"

function App() {
  return (
    <BrowserRouter>
      <div class="row">
        <div class="col-3">
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="" role="tab" aria-controls="v-pills-home" aria-selected="true">
              <h1 className="navbar-brand">
                Leilão
              </h1>
            </a>
            <a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
              <Link to="/participantes" className="nav-link">
                Listar Participantes
              </Link>
            </a>
            <a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
              <Link to="/novo" className="nav-link">
                Novo Participante
              </Link>
            </a>
          </div>
        </div>
      </div>
      

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/participantes"]} component={Participantes} />
          <Route path="/novo" component={NovoParticipante} />
          <Route path="/participantes/:id" component={EditaParticipante} />
        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;