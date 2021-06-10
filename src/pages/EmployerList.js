import React, { useEffect, useState } from "react";

import EmployerService from "../services/employerService";
import { Button, Card, Icon } from "semantic-ui-react";


export default function EmployerList() {

  const [employers, setEmployers] = useState([])

  useEffect(() => {
    let emplpoyerService = new EmployerService();
    emplpoyerService.getEmployer().then(result =>setEmployers(result.data.data))
  })

  

  return (
      employers.map(employer =>(
        <div>
          <Card.Group temsPerRow={3}>
            <Card fluid raised >
              <Card.Content>
                <Card.Header>{employer.companyName}</Card.Header>
                <Card.Meta>{employer.phone}</Card.Meta>
                <Card.Description>
                  {employer.webAdress}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button animated basic color="green">
                    <Button.Content visible>İncele</Button.Content>
                    <Button.Content hidden>
                      <Icon name='arrow right' />
                    </Button.Content>
              </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      ))
  );
}
