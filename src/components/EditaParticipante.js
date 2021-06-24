import React, { useState, useEffect } from "react";
import * as api from "../services/Endpoints"

const EditaParticipante = props => {
    const estadoInicial = {
        id: null,
        nome: "",
        cpf: "",
    };

    const [participante, setParticipante] = useState(estadoInicial);
    const [message, setMessage] = useState("");

    const getParticipante = (id) => {
        api.get(id)
            .then(response => {
                setParticipante(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(
        () => { getParticipante(props.match.params.id); },
        [props.match.params.id]
    );

    const trataCampo = event => {
        const { name, value } = event.target;
        setParticipante({ ...participante, [name]: value });
    };

    const atualizarLivro = () => {
        api.update(participante.id, participante)
            .then(response => {
                console.log(response.data);
                setMessage("Partcipante atualizado!");
            })
            .catch(e => { console.log(e); });
    };

    const excluirParticipante = () => {
        api.remove(participante.id)
            .then(response => {
                console.log(response.data);
                props.history.push("/participantes");
            })
            .catch(e => { console.log(e); });
    };

    return (
        <div>
            <div class="row">
                <div class="col-md-3">
                </div>
                <div class="col-md-6">
                    {participante ? (
                        <div className="edit-form">
                            <h4>Partcipante do leilão</h4>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="titulo">Nome</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nome"
                                        name="nome"
                                        value={participante.nome}
                                        onChange={trataCampo}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="description">CPF</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cpf"
                                        name="cpf"
                                        value={participante.cpf}
                                        onChange={trataCampo}
                                    />
                                </div>
                            </form>

                            <button className="btn btn-danger danger mt-3" onClick={excluirParticipante}>Excluir</button>
                            <button type="submit" className="btn btn-primary mt-3 mx-3" onClick={atualizarLivro}>
                                Atualizar
                            </button>
                            <p>{message}</p>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Selecione um livro ...</p>
                        </div>
                    )}
                </div>
                <div class="col-md-3">
                </div>
            </div>
        </div>
    );
};

export default EditaParticipante;