import React from 'react'
import { Route } from 'react-router'
import { Grid, GridRow } from 'semantic-ui-react'
import EmployerList from '../../pages/EmployerList'
import JobAdvertisementList from '../../pages/JobAdvertisementList'
import JobAdvertisementDetailList from "../../pages/JobAdvertisementDetailList";
import Sidebar from '../sidebar/Sidebar'

export default function Dashboard() {
    return (
      <div className="Dashboard">
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Sidebar />
            </Grid.Column>
            <Grid.Column width={12}>
              <Route exact path="/" component={JobAdvertisementList} />
              <Route
                exact
                path="/jobadvertisements"
                component={JobAdvertisementList}
              />
              <Route
                exact
                path="/jobadvertisements/:id"
                component={JobAdvertisementDetailList}
              />
              <Route exact path="/employers" component={EmployerList} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
}
