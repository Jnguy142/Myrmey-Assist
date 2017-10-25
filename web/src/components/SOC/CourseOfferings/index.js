import React, { Component } from 'react';
import './style.css'; 

class CourseOfferings extends Component {
    render() {
        let offeringRows = this.props.offerings.map((offering, i) => {
            //Create instructor td by cheking if there is ratemyprofessor data
            let instructorTD = offering.Instructor.map((instructor, i) => {
                if(instructor.rmp){
                    return <a key={i} target="_blank" href={`http://www.ratemyprofessors.com/ShowRatings.jsp?tid=${instructor.rmp.id}`}>{instructor.name} [{Number(instructor.rmp.rating).toFixed(1)}]<br /></a>
                }
                else{
                    return `${instructor.name}\n`
                }
            });

            let statusTD = <td><b>{offering.Status}</b></td>;
            if(offering.Status === 'OPEN'){
                statusTD = <td className="has-text-success"><b>{offering.Status}</b></td>;
            }
            else if(offering.Status === 'Waitl'){
                statusTD = <td className="has-text-danger"><b>{offering.Status}</b></td>;
            }
            else if(offering.Status === 'NewOnly'){
                statusTD = <td className="has-text-primary"><b>{offering.Status}</b></td>;
            }

            return <tr key={i}>
                <td className="clickable" onClick={() => {this.props.addPlannedCourse(offering)}}><a>{offering.Code}</a></td>
                <td>{offering.Type}</td>
                <td>{offering.Sec}</td>
                <td>{offering.Units}</td>
                <td>{instructorTD}</td>
                <td>{offering.Time}</td>
                <td><a target="_blank" href={offering.Place.href}>{offering.Place.value}</a></td>
                <td>{offering.Final}</td>
                <td>{offering.Max}</td>
                <td>{offering.Enr}</td>
                <td>{offering.WL}</td>
                <td>{offering.Req}</td>
                <td>{offering.Rstr}</td>
                <td><a target="_blank" href={offering.Textbooks.href}>{offering.Textbooks.value}</a></td>
                <td><a target="_blank" href={offering.Web.href}>{offering.Web.value}</a></td>
                {statusTD}
            </tr>
        })
        return (
            <table className="table is-striped is-bordered is-fullwidth">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Type</th>
                        <th>Sec</th>
                        <th>Units</th>
                        <th>Instructor</th>
                        <th>Time</th>
                        <th>Place</th>
                        <th>Final</th>
                        <th>Max</th>
                        <th>Enr</th>
                        <th>WL</th>
                        <th>Req</th>
                        <th>Rstr</th>
                        <th>Textbooks</th>
                        <th>Web</th>
                        <th>Satus</th>
                    </tr>
                </thead>
                <tbody>
                    {offeringRows}
                </tbody>
            </table>
        )
    }
}

export default CourseOfferings;
