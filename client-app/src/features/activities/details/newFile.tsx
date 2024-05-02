import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivitiyDetailedHeader from "./ActivitiyDetailedHeader";

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadingInitial,
    loadActivity,
  } = activityStore;

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <LoadingComponent />;
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivitiyDetailedHeader />
        <ActivityDetailedInfo />
      </Grid.Column>
    </Grid>
  );
});
