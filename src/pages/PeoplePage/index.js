import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class PeoplePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isNameSorted: false,
            isSalarySorted: false,
            sortedFormData: null,
            filterLessThan2500: false,
            filterBetween2500And4000: false,
            filterGreaterThan4000: false,
        };
    }

    handleNameSort = () => {
        const { isNameSorted } = this.state;
        const data = [...this.props.formData];

        if (isNameSorted) {
            this.setState({ isNameSorted: false, sortedFormData: null });
        } else {
            data.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                return 0;
            });
            this.setState({ isNameSorted: true, isSalarySorted: false, sortedFormData: data });
        }
    };

    handleSalarySort = () => {
        const { isSalarySorted } = this.state;
        const data = [...this.props.formData];

        if (isSalarySorted) {
            this.setState({ isSalarySorted: false, sortedFormData: null });
        } else {
            data.sort((a, b) => a.salary - b.salary);
            this.setState({ isSalarySorted: true, isNameSorted: false, sortedFormData: data });
        }
    };

    handleFilterLessThan2500Change = (event) => {
        const filterLessThan2500 = event.target.checked;
        this.setState({ filterLessThan2500 });
    };

    handleFilterBetween2500And4000Change = (event) => {
        const filterBetween2500And4000 = event.target.checked;
        this.setState({ filterBetween2500And4000 });
    };

    handleFilterGreaterThan4000Change = (event) => {
        const filterGreaterThan4000 = event.target.checked;
        this.setState({ filterGreaterThan4000 });
    };

    render() {
        const {
            isNameSorted,
            isSalarySorted,
            sortedFormData,
            filterLessThan2500,
            filterBetween2500And4000,
            filterGreaterThan4000,
        } = this.state;
        const { formData } = this.props;

        let data = isNameSorted || isSalarySorted ? sortedFormData : formData;

        if (filterLessThan2500) {
            data = data.filter((person) => person.salary < 2500);
        }

        if (filterBetween2500And4000) {
            data = data.filter((person) => person.salary >= 2500 && person.salary < 4000);
        }

        if (filterGreaterThan4000) {
            data = data.filter((person) => person.salary >= 4000);
        }


        return (
            <div className="container">
                <h1>People</h1>
                <div style={{display: "flex"}}>
                    <div style={{marginRight: 50}}>
                        <h4>Sorteaza dupa:</h4>
                        <div style={{display: "flex"}}>
                            <div className="form-check"
                                 style={{marginRight: 10}}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="sortByName"
                                    checked={isNameSorted}
                                    onChange={this.handleNameSort}
                                />
                                <label className="form-check-label" htmlFor="sortByName">
                                    &nbsp;  Nume
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="sortBySalary"
                                    checked={isSalarySorted}
                                    onChange={this.handleSalarySort}
                                />
                                <label className="form-check-label" htmlFor="sortBySalary">
                                    &nbsp;  Salariu
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Filtreaza dupa:</h4>
                        <div style={{display: "flex"}}>
                            <div className="form-check" style={{marginRight: 10}}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="filterLessThan2500"
                                    checked={filterLessThan2500}
                                    onChange={this.handleFilterLessThan2500Change}
                                />
                                <label className="form-check-label" htmlFor="filterLessThan2500">
                                    &nbsp; &lt; 2500
                                </label>
                            </div>
                            <div className="form-check" style={{marginRight: 10}}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="filterBetween2500And4000"
                                    checked={filterBetween2500And4000}
                                    onChange={this.handleFilterBetween2500And4000Change}
                                />
                                <label className="form-check-label" htmlFor="filterBetween2500And4000">
                                    &nbsp;  2500 - 4000
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="filterGreaterThan4000"
                                    checked={filterGreaterThan4000}
                                    onChange={this.handleFilterGreaterThan4000Change}/>
                                <label className="form-check-label" htmlFor="filterGreaterThan4000">
                                    &nbsp; &gt; 4000
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {data.length ? (
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Nume</th>
                            <th>Prenume</th>
                            <th>Meserie</th>
                            <th>Salariu</th>
                            <th>Data angajarii</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((person, idx) => (
                            <tr key={idx}>
                                <td>{person.name}</td>
                                <td>{person.surname}</td>
                                <td>{person.job}</td>
                                <td>{person.salary}</td>
                                <td>{person.date}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="d-flex flex-column align-items-center">
                        <p className="h3">Lista este goala!</p>
                    </div>
                )}

                <Link to="/">
                    <button className="btn btn-success ">Adauga o persoana</button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    formData: state.form.formData,
});

export default connect(mapStateToProps)(PeoplePage);
