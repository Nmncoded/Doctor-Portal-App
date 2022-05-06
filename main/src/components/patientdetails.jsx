import { connect } from "react-redux";
import { Link } from "react-router-dom";


function PatientDetails(props){
    let {allPatientsData}  = props;
    let [data] = allPatientsData.filter((elm,index) => index === +props.match.params.id)
    // console.log(props);
    return (
        <div className="one-patient max-width" >
            <div className="back-btn" >
                <button className="button-swing m-p" >
                    <Link to='/' >Go back</Link>
                </button>
            </div>
            <h1 className="design" >Patient Name : <span>{data.name}</span></h1>
            <h1 className="design" >Patient Email : <span>{data.email}</span></h1>
            <h1 className="design" >Patient Age : <span>{data.age}</span></h1>
            <h1 className="design" >Patient Gender : <span>{data.gender}</span></h1>

        </div>
        ) 
        

}


const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(PatientDetails);