# Credit Dashboard
> A responsive SPA for displaying data concerning a credit union's past year performance.

This app is constructed using React, Ant Design, and Ant Design Charts for the front end
and is capable of displaying up to three different datasets at a time in the three provided
charts in the interface. The app also includes some relevant statistics in the form of four
'widgets', which display data pertaining to specific components of the datasets provided. The
backend for this project is composed of an AWS Lambda function which is itself running through
API Gateway. There are also a couple of different options to style the app that a user can choose
between, such as a classic white interface or a glassmorphic one.

<img src="assets/light.png">
<img src="assets/opal.png">

Changing between these would require going into settings under the user dropdown menu.

<img src="assets/settings1.png">
<img src="assets/settings2.png">

## Changes
Additionally, I found the data structure provided for the API response to be constricting with regards to the flexibility
for new datasets to be added to the response, so a small change was made to alter the data structure of the 'Data' field from:

```
Data: {
  Levels: {
    XData: string[],
    YData: int[],
    Source: [],
    Target: [],
    Value: []
  },
  CurrentProducts: {
    XData: string[],
    YData: int[],
    Source: [],
    Target: [],
    Value: []
  },
  ...
  PreferredChannels: {
    XData: string[],
    YData: int[],
    Source: [],
    Target: [],
    Value: []
  }
}
```

to the structure:

```
Data: [
  {
    Name: <dataset name>,
    XData: string[],
    YData: int[],
    Source: [],
    Target: [],
    Value: []
  }
]
```

in order to discourage too much specificity in the response.
