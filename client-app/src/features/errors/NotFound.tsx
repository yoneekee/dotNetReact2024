import { Button, Header, Icon, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Segment placeholder>
        <Header icon>
          <Icon name="search" />
          Opps - we've looked everywhere but could not foind what you are
          looking for!
        </Header>
      </Segment>
      <Segment.Inline>
        <Button as={Link} to="/activities">
          Return to activities page
        </Button>
      </Segment.Inline>
    </>
  );
}
