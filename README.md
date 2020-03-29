# react-query-navigation-native
Integrates [React Query](https://github.com/tannerlinsley/react-query) with [React Navigation](https://reactnavigation.org/) for React Native apps.

## Features

- Automatically refetch queries on app focus (by subscribing to [`AppState`](https://reactnative.dev/docs/appstate))
- Automatically refetch query on screen focus in `useQuery` hook (by using [`useFocusEffect`](https://reactnavigation.org/docs/use-focus-effect) from React Navigation)

## Installation

```
$ npm i --save react-query-navigation-native
# or
$ yarn add react-query-navigation-native
```

Make sure, that you have `react-query` installed.

## Usage

`react-query-navigation-native` re-exports everything from `react-query`. This means, that you can replace imports from `react-query` to `react-query-navigation-native` everywhere in your app and use it as earlier.

```diff
// import everything from react-query-navigation-native
- import { useQuery, useMutation, queryCache } from 'react-query'
+ import { useQuery, useMutation, queryCache } from 'react-query-navigation-native'

// or just import useQuery from react-query-navigation-native
- import { useQuery, useMutation, queryCache } from 'react-query'
+ import { useMutation, queryCache } from 'react-query'
+ import { useQuery } from 'react-query-navigation-native'
```

## Docs

See [`react-query` docs](https://github.com/tannerlinsley/react-query)
