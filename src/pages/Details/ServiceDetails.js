import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import SingleServiceDetails from './SingleServiceDetails';
import Appointmnet from '../../pages/Home/Appointmnet/Appointmnet';

const ServiceDetails = () => {

    const {departmentId} = useParams();
    const [ departments, setDepartments ] = useState([]);
// https://mahfuj10.github.io/data/departments.json
 useEffect(()=>{
    fetch('/Departments.json')
      .then(result => result.json())
      .then(data => setDepartments(data))
 }, [])


const department = departments?.find(service => service.id === departmentId);

    return (
        
        <section>

        <article style={{backgroundImage:`url(${"https://businesspost.ng/wp-content/uploads/2017/04/Medical-Services.jpg"})`,height:"600px",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

            <h1 style={{paddingTop:"50vh",color:"whitesmoke",marginLeft:"10vh"}}>{department?.name} Details</h1>
            <h6 style={{marginLeft:"10vh",color:"whitesmoke",marginTop:"20px"}}>Home / {department?.name} Details</h6>

        {/* <SingleServiceDetails department={department} key={department?.id}/> */}

        </article>

        <h3 className="text-center mt-5">Welcome Medex <span className="text-primary">Department</span></h3>
        
        <article className="" style={{marginTop:"8vh"}}>
            <article className="row">
                <aside className="col-lg-6">
                    <img style={{marginLeft:"480px"}} width="450"  src={department?.image} alt="" />
                </aside>
                <aside className="col-lg-6">
                    <aside style={{paddingLeft:"100px"}}>
                          <h2 className="mb-3">{department?.name}</h2>
                          <p className="w-50">{department?.details}</p>
                    </aside>
                </aside>
            </article>
        </article>

<h3 style={{textAlign:"center",marginTop:"10vh"}}>Our {department?.name} Specialist</h3>

<article className="d-flex justify-content-center gap-4" style={{marginTop:"8vh"}}>
       
<aside>
   <Card style={{ width: '19rem',border:"none" }}>
     <Card.Img height="255" width="241"  variant="top" src={department?.doctor} />
     <Card.Body>
       <Card.Title className="text-center">Dr. {department?.doctorName}</Card.Title>
       <Card.Text>
         <h6 className="text-center">{department?.department}</h6>
       </Card.Text>
     <span className="fs-4" style={{marginLeft:"25%"}}>
        <i class="fab fa-facebook-square me-3  "></i>
        <i class="fab fa-twitter-square me-3 "></i>
        <i class="fab fa-linkedin me-3 "></i>
        <i class="fab fa-snapchat-square "></i>
     </span>
     </Card.Body>
   </Card>
</aside>

<aside>
<Card style={{ width: '19rem',border:"none" }}>
     <Card.Img height="255" width="241" variant="top" src={department?.secondDoctor} />
     <Card.Body>
       <Card.Title className="text-center">Dr. {department?.doctorName}</Card.Title>
       <Card.Text>
        <h6 className="text-center">{department?.department}</h6>
       </Card.Text>
     <span className="fs-4 text-center" style={{marginLeft:"25%"}}>
         <i class="fab fa-facebook-square me-3"></i>
         <i class="fab fa-twitter-square me-3"></i>
         <i class="fab fa-linkedin me-3"></i>
         <i class="fab fa-snapchat-square"></i>
     </span>
     </Card.Body>
     
     
   </Card>
</aside>

<aside>
<Card style={{ width: '19rem',border:"none" }}>
     <Card.Img height="255" width="241" variant="top" src={department?.thirdDoctor} />
     <Card.Body>
       <Card.Title className="text-center">{department?.doctorName}</Card.Title>
       <Card.Text>
        <h6 className="text-center">Dr. {department?.department}</h6>
       <span className="fs-4" style={{marginLeft:"25%"}}>
           <i class="fab fa-facebook-square me-3"></i>
           <i class="fab fa-twitter-square me-3"></i>
           <i class="fab fa-linkedin me-3"></i>
           <i class="fab fa-snapchat-square"></i>
       </span>
       </Card.Text>
     </Card.Body>
   </Card>
</aside>
</article>


<Appointmnet />

        </section>
    );
};

export default ServiceDetails;