import React from 'react'

function Table({ data, title }) {
    return (
        <div style={{ marginBottom: "30px" }}>
            <div className="flex-row " style={{ padding: "25px" }}>
                <div className="flex-large" style={{ marginBottom: "10px" }}>
                    <h2>{title}</h2>
                </div>
                <table class="table text-center table-bordered" style={{ borderCollapse: "collapse", borderRadius: "1em", overflow: "hidden" }}>
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Job No.</th>
                            <th scope="col">Type</th>
                            <th scope="col">Move Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">1<sup>st</sup> Available Delivery</th>
                            <th scope="col">Moving From</th>
                            <th scope="col">Moving To</th>
                            <th scope="col">CF / Lbs</th>
                            <th scope="col">Miles</th>
                            <th scope="col">Estimate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) && data.length > 0 ? (
                            data.map((element) => (
                                <tr>
                                    <th scope="row">{element["jobNo"]}</th>
                                    <td>{element["type"]}</td>
                                    <td>{element["moveDate"]}</td>
                                    <td>{element["time"]}</td>
                                    <td>{element["availableDelivery"]}</td>
                                    <td>{element["movingFrom"]}</td>
                                    <td>{element["movingTo"]}</td>
                                    <td>{element["cfLbs"]}</td>
                                    <td>{element["miles"]}</td>
                                    <td>{element["estimate"]}</td>
                                </tr>
                            ))
                        ) : (
                            <tr className="table-danger">
                                <th colspan="10">
                                    <center>
                                        At this time there are no registers available
                                    </center>
                                </th>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </div>

    )
}

export default Table
