import ActivityList from "./ActivityList";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityFilters from "./ActivityFilters";

export default observer(function ActivitiyDashBoard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [activityRegistry.size, loadActivities]);

  if (activityStore.loadingInitial) return <LoadingComponent />;

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        <ActivityFilters />
      </Grid.Column>
    </Grid>
  );
});
