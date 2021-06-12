import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Segment, Image, Icon, Header, Label, Divider } from 'semantic-ui-react'
import JobAdvertisementService from "../services/jobAdvertisementService";
import Moment from 'react-moment';

export default function JobAdvertisementDetailList() {
    let { id } = useParams();

    const [jobAdvertisements, setJobAdvertisements] = useState([]);

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService
            .getJobAdvertisementId(id)
            .then((result) => setJobAdvertisements(result.data.data));
    }, []);

    return (
        <div>
            <Container text>
                <div>
                    <Header as='h3' icon textAlign='center'>
                        <Icon name='users' circular />
                        <Header.Content>{jobAdvertisements.jobPosition?.jobName}</Header.Content>
                    </Header>
                </div>
                <Segment>
                    <Image src="https://assets.wired.com/photos/w_1200/wp-content/uploads/2014/06/1JakeBarton_byStanleyChow_wxd.jpeg" size='small' floated='left' />
                    <div >
                        <h1 style={{ marginRight: "250px" }}>
                            {jobAdvertisements.employer?.companyName}
                        </h1>
                    </div>
                   
                    <div  style={{ marginTop: "20px", marginLeft: "195px" , position: "absolute" }}>
                        <Icon circular color='black' name='phone' />
                        {jobAdvertisements.employer?.phone}
                    </div>
                    <div class="ui label" style={{ marginTop: "20px", marginRight: "20px"}}>
                        <Icon name='mail' />
                        {jobAdvertisements.employer?.webAdress}
                    </div>
                </Segment>
                <Segment>
                    <Header as='h2' floated='left'>
                        {jobAdvertisements.city?.citiyName}
                    </Header>
                    <div style={{  marginLeft: "110px", position: "absolute" }}>
                        <Label as='a' color='teal' tag>
                            {jobAdvertisements.workingTime?.workingTimeName}
                        </Label>
                    </div>
                    <div style={{ marginLeft: "240px", position: "absolute" }}>
                        <Label as='a' color='green' tag>İT: 
                            <Moment format="YYYY/MM/DD">
                                {jobAdvertisements.creationDate}
                            </Moment>
                
                        </Label>
                    </div>
                    <div style={{ marginLeft: "380px", position: "absolute" }}>
                        <Label as='a' color='red' tag>ST:
                            <Moment format="YYYY/MM/DD">
                                {jobAdvertisements.applicationDeadline}
                            </Moment>

                        </Label>
                    </div>
                    <div style={{ marginLeft: "490px" }}>
                        <Label as='a' color='blue' image>
                            <Icon inverted name='lira' />
                            {jobAdvertisements.minSalary}
                            <Label.Detail>{jobAdvertisements.maxSalary}</Label.Detail>
                        </Label>
                    </div>
                   
                    <Divider clearing />
                    <p> {jobAdvertisements.jobDescription}</p>
                </Segment>
            </Container>
        </div>
    )
}











