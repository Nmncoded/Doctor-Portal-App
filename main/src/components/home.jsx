import { useEffect, useState } from "react";
import { GiCrossMark } from 'react-icons/gi';
import { Pagination } from '@mui/material';
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi';
import { connect } from "react-redux";
import { updatePatientsData } from "../store/action";

function Home(props){
    let { allPatientsData, dispatch } = props;
    let limit = 4;
    let [offset, setOffset ] = useState(0);
    let [searchPatientByName,setSearchPatientByName] = useState("");
    let [sortingBy,setSortingBy] = useState("");
    let [sortedData,setSortedData] = useState(null);

    // useEffect(() => {
    //     setTotalCount(sortedData ? sortedData.length : allPatientsData.length)
    // },[sortedData])

    useEffect(() => {
        if(searchPatientByName && !sortingBy){
            setSortedData(allPatientsData.filter(data => data.name.includes(searchPatientByName)))
        }else if ( !searchPatientByName && sortingBy ) {
            setSortedData(allPatientsData.sort((a,b) => a[sortingBy] - b[sortingBy]))  
        }else if (searchPatientByName && sortingBy ){
            setSortedData(allPatientsData.filter(data => data.name.includes(searchPatientByName)).sort((a,b) => a[sortingBy] - b[sortingBy]))
        }else {
            setSortedData(null);
        }
        
    },[searchPatientByName,sortingBy])

    const handleDeletePatient = (id) => {
        let data = allPatientsData.filter((elm,index) => index !== id)
        dispatch(updatePatientsData(data))
    }
    // console.log(sortedData);

    const handlePagination = (value) => {
        console.log(value);
        setOffset( (value*limit) - limit)
    }

    return (
        <section className="main-home flex-column-center-center" >
            <Link to='/add-new-patient' >
            <button className="button-shrink padding" >+ Add new patient</button>
            </Link>
            {
                allPatientsData && allPatientsData.length > 0 ? 
                <div className="main-patients-ui" >
                    <header className="patient-header flex-between-center" >
                        <h1>Patients List</h1>
                        <div className="searchbar flex-between-center">
                            <BiSearch className="icon" />
                            <input type="text" id="search" name='search' value={searchPatientByName} onChange={(e) => setSearchPatientByName(e.target.value)} placeholder='Enter Patient name' />
                        </div>
                        <select id="sorting" onChange={(e) => setSortingBy(e.target.value)} value={sortingBy} >
                            <option value="" >Sort by</option>
                            <option value="name">Name</option>
                            <option value="email">Email</option>
                            <option value="age">Age</option>
                            <option value="gender">Gender</option>
                        </select>
                    </header>
                    <ul className="all-patients-list" >
                        {
                            ( sortedData ? sortedData : allPatientsData ).filter((elm,index) => offset < index + 1 ).map((patient,index) => {
                                if(index + 1 > limit)return;
                                return (
    
                        <li key={index} className="one-patient" >
                            <div className='delete-btn' >
                                <Link  className='info'  to={`/patient-details/${index}`} >
                                    <h1><span>Patient name : </span>{patient.name}</h1>
                                    <p><span>Added At : </span>{patient.addedAt }</p>
                                </Link>
                                <button onClick={() => handleDeletePatient(index) } className="button-shrink padding" >
                                <GiCrossMark />
                                </button>
                            </div>
                        </li>
                                )
                            })
                        }
                    </ul>
                    <div className="flex-center-center" >
                    <Pagination count={Math.ceil((sortedData ? sortedData.length : allPatientsData.length)/4)} onChange={(event,page) => handlePagination(page) }  shape="rounded" color="primary" />
                    </div>
                </div> : 
                <p className="errs" >Add Patients !!!</p>
            }
        </section>
    )
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(Home);