import React from 'react'
import {Link} from "react-router-dom";
import {addToFormList} from '../../redux/form/FormActions'
import {connect} from "react-redux";
import {withRouter} from "react-router";

import './styles.css'


class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            name: "",
            surname: "",
            job: "",
            salary: "",
            date: new Date().toLocaleDateString()
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const id = this.props.formData.length + 1;
        this.props.addToFormList({...this.state, id});
        this.setState({
            id,
            name: '',
            surname: '',
            job: '',
            salary: '',
            date: '',
        });
    };


    render() {
        return (
            <div className="container-fluid container-min-max-width">
                    <h1 className="text-center " style={{paddingBottom: 20}}>Home Page</h1>
                <div style={{justifyContent: "center", display: "flex"}}>
                    <form onSubmit={this.handleSubmit} style={{width: "60%"}}>
                        <div className="form-group">
                            <div className="input-group input-group-lg mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    style={{marginBottom: 10}}
                                    placeholder="Nume"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    style={{marginBottom: 10}}
                                    placeholder="Prenume"
                                    name="surname"
                                    value={this.state.surname}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    style={{marginBottom: 10}}
                                    placeholder="Meserie"
                                    name="job"
                                    value={this.state.job}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    style={{marginBottom: 10}}
                                    placeholder="Salariu"
                                    name="salary"
                                    value={this.state.salary}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    style={{marginBottom: 10}}
                                    placeholder="Data angajarii"
                                    name="date"
                                    defaultValue={this.state.date}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div style={{justifyContent: "center", display: "flex"}}>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                            <Link to="/people" style={{marginLeft: 10}}>
                                <button className="btn btn-success ">Verifica lista</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const {match} = ownProps
    const personId = match.params.personId
    return {
        formData: state.form.formData.some(
            (person) => person.id === Number(personId)
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToFormList: (payload) => dispatch(addToFormList(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage));
