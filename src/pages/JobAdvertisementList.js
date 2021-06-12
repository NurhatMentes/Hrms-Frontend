import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Button, Card, Image, Icon } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisement()
      .then((result) => setJobAdvertisements(result.data.data));
  },[]);

  return jobAdvertisements.map((jobAdvertisement) => (
    <div>
      <Card.Group temsPerRow={3}>
        <Card raised>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://www.volt-hrms.com/volt/images/volt_login_08.gif"
            />
            <Card.Header>{jobAdvertisement.jobPosition.jobName}</Card.Header>
            <Card.Meta>{jobAdvertisement.employer.companyName}</Card.Meta>
            <Card.Meta>{jobAdvertisement.employer.webAdress}</Card.Meta>
            <Card.Description style={{ marginRight: "45px" }}>
              {jobAdvertisement.city.citiyName}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div key={jobAdvertisement.id} className="ui two buttons">
              <Button animated basic color="blue" as={NavLink} to={`/jobAdvertisements/${jobAdvertisement.id}`}>
                <Button.Content visible>
                  İncele</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  ));
}
