import { useState } from "react";
// import { useToast,Box,Button } from '@chakra-ui/react';
import { GiCrossMark } from 'react-icons/gi';
import { Pagination } from '@mui/material';
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi';
import { connect } from "react-redux";

function Home(props){
    let { allPatientsData } = props;
    console.log(allPatientsData);
    // const toast = useToast();
    let [searchPatientByName,setSearchPatientByName] = useState("");
    let [sortingBy,setSortingBy] = useState("");

    const handleCollectionDelete = (id) => {
        console.log(id);
        // dispatch(deleteCollection(id))
    }

    return (
        <section className="main-home flex-column-center-center" >
            <Link to='/add-new-patient' >
            <button className="button-shrink padding" >+ Add new patient</button>
            </Link>
            <div className="main-patients-ui" >
                <header className="patient-header flex-between-center" >
                    <h1>Patients List</h1>
                    <div className="searchbar flex-between-center">
                        <BiSearch className="icon" />
                        <input type="text" id="search" name='search' value={searchPatientByName} onChange={(e) => setSearchPatientByName(e.target.value)} placeholder='Enter Patient name' />
                    </div>
                    <select id="sorting" onChange={(e) => setSortingBy(e.target.value)} value={sortingBy} >
                        <option value="" >Sort by</option>
                        <option value="Name">Name</option>
                        <option value="Email">Email</option>
                        <option value="Age">Age</option>
                        <option value="Gender">Gender</option>
                    </select>
                </header>
                <ul className="all-patients-list" >
                    {
                        allPatientsData.map((patient,index) => {
                            return (

                    <li key={index} className="one-patient" >
                        <div className='delete-btn' >
                            <Link to={`/patient-details/${index}`} >
                            <div className='info' >
                                <h1>{patient.name}</h1>
                                <p>{Date.now() }</p>
                            </div>
                            </Link>
                            <button className="button-shrink padding" >
                            <GiCrossMark />
                            </button>
                        </div>
                    </li>
                            )
                        })
                    }
                </ul>
                <div className="flex-center-center" >
                <Pagination count={5}  shape="rounded" color="primary" />
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(Home);