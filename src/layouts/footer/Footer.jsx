import React from 'react'
import { Divider, Image, Segment } from "semantic-ui-react";

export default function Footer() {
    return (
      <div style={{ height: "90px" }}>
        <Segment size="big" inverted>
          <Divider inverted />
          <Divider horizontal inverted>
            HRMS PROJECT
          </Divider>
        </Segment>
      </div>
    );
}
