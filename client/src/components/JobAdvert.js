
const JobAdvert = ( {advert} ) => {


    return (

            <table>
                <tbody>
                    <tr>
                        <th><b>{ advert.category }</b></th>
                    </tr>
                    <tr>
                        <td><b>Title:</b> { advert.title } { advert.description }</td>
                    </tr>
                    <tr>
                        <td><b>Industry: </b> {advert.industry}</td>
                        <td><b>Job Type: </b> {advert.jobType}</td>
                    </tr>
                    <tr>
                        <td><b>Salary: </b> £{advert.salary}</td>
                    </tr>
                    <tr>
                        <th><b>Contact Details</b></th>
                    </tr>
                    <tr>
                        <td><b>Name:</b> { advert.customer.firstName } { advert.customer.secondName }</td>
                    </tr>
                    <tr>
                        <td><b>Email: </b> { advert.customer.email }</td>
                    </tr>
                </tbody>
            </table>

    )
}

export default JobAdvert;
