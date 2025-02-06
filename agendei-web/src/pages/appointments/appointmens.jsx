import Navbar from "../../components/navbar/navbar.jsx";
import { Link } from "react-router-dom";

function Appointmens() {
    return <div className="container-fluid mt-page">
        <Navbar />

        <div className="d-flex justify-content-between align-items-center">
            <div className="">
                <h2 className="d-inline">Agendamentos</h2>
                <Link to="/appointments/add" className="btn btn-outline-primary ms-5">
                    Novo Agendamento
                </Link>
            </div>

            <div className="d-flex  justify-content-end">
                <input id="startDate" type="date" className="form-control" />
                <span>Até</span>
                <input id="endDate" type="date" className="form-control" />
            </div>

        </div>
    </div>
}

export default Appointmens;