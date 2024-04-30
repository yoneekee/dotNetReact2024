//import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function LoadingComponent() {
  const { activityStore } = useStore();
  const { loading } = activityStore;
  const content = "Loading App";

  return (
    <Dimmer active={true} inverted={loading}>
      <Loader content={content} />
    </Dimmer>
  );
}
