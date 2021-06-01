/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from "react-native";

import BackgroundJob from "react-native-background-job";

const regularJobKey = "regularJobKey";
const exactJobKey = "exactJobKey";
const foregroundJobKey = "foregroundJobKey";
/**
 * In Android SDK versions greater than 23, Doze is being used by apps by default,
 * in order to optimize battery by temporarily turning off background tasks when
 * the phone is left undisturbed for some hours.
 *
 * But, some apps may require background tasks to keep running, ignoring doze and
 * not optimizing battery (this means battery needs to be traded off for performance
 * as per required).
 *
 * Such jobs can be scheduled as everRunningJob is scheduled below.
 * It may be scheduled as normal jobs are, but they wont behave as expected. Doze
 * feature will disable the running background jobs if the phone remains undisturbed
 * for some time.
 *
 * So everRunningJob scheduled below can be scheduled by checking if is ignoring
 * optimizations.If true, schedule the job in the callback, else we notify the
 * user to manually remove the app from the battery optimization list.
 */
const everRunningJobKey = "everRunningJobKey";

// This has to run outside of the component definition since the component is never
// instantiated when running in headless mode
BackgroundJob.register({
  /* In this case, the exact parameter is false. Then, the period is not the same you 
  choosed */
  jobKey: regularJobKey,
  job: () => console.log(`RegularJo Job!. Key = ${regularJobKey}`)
});

BackgroundJob.register({
  // works only in background
  jobKey: exactJobKey,
  job: () => {
    console.log(`${new Date()} Exact Job fired!. Key = ${exactJobKey}`);
  }
});
BackgroundJob.register({
  // works in background and foreground
  jobKey: foregroundJobKey,
  job: () => console.log(`Foreground Job fired!. Key = ${foregroundJobKey}`)
});
BackgroundJob.register({
  jobKey: everRunningJobKey,
  job: () => console.log(`Ever Running Job fired! Key=${everRunningJobKey}`)
});

export default class backtest extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [] };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Testing BackgroundJob</Text>
        <Text style={styles.instructions}>
          Try connecting the device to the developer console, schedule an event
          and then quit the app.
        </Text>
        <Text>
          Scheduled jobs:
          {this.state.jobs.map(({ jobKey }) => jobKey)}
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            BackgroundJob.schedule({
              jobKey: regularJobKey,
              notificationTitle: "Regular Job",
              notificationText: "Regular Job is runing...",
              period: 15000
            });
          }}
        >
          <Text>Schedule regular job</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            BackgroundJob.schedule({
              jobKey: exactJobKey,
              period: 1000,
              exact: true
            });
          }}
        >
          <Text>Schedule exact job</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            BackgroundJob.schedule({
              jobKey: foregroundJobKey,
              period: 1000,
              exact: true,
              allowExecutionInForeground: true
            });
          }}
        >
          <Text>Schedule exact foreground job</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            BackgroundJob.isAppIgnoringBatteryOptimization(
              (error, ignoringOptimization) => {
                if (ignoringOptimization !== true) {
                  alert(
                    "To ensure app functions properly, please manually remove app from battery optimization menu. ", error
                  );
                  
                }
                BackgroundJob.schedule({
                  jobKey: everRunningJobKey,
                  period: 1000,
                  exact: true,
                  allowWhileIdle: true
                });
              }
            );
          }}
        >
          <Text>Schedule ever running job</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            BackgroundJob.cancel({ jobKey: regularJobKey });
          }}
        >
          <Text>Cancel regular job</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            BackgroundJob.cancelAll();
          }}
        >
          <Text>CancelAll</Text>
        </TouchableHighlight>
      </View>
    );
  }
  componentDidMount() {
    // BackgroundJob.schedule({
    //   jobKey: exactJobKey,
    //   period: 1000,
    //   timeout: 10000,
    //   exact: true
    // });
  }
}

const styles = StyleSheet.create({
  button: { padding: 20, backgroundColor: "#ccc", marginBottom: 10 },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: { fontSize: 20, textAlign: "center", margin: 10 },
  instructions: { textAlign: "center", color: "#333333", marginBottom: 5 }
});

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => backtest);
