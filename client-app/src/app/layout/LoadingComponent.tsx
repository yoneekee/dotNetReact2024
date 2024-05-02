//import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function LoadingComponent() {
  const { activityStore } = useStore();
  const { loading } = activityStore;
  const content = "Loading App";


  return (
    <Dimmer active={true} inverted={loading}>
      <Loader content={content} />
    </Dimmer>
  );
});
