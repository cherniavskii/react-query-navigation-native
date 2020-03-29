const React = require('react');
const ReactQuery = require('react-query');
const { useFocusEffect } = require('@react-navigation/native');


function useQuery(...args) {
  const query = ReactQuery.useQuery(...args);
 
  const isMountedRef = React.useRef(false);

  useFocusEffect(React.useCallback(() => {
    // do not refetch when query is initially mounted
    if (isMountedRef.current) {
      query.refetch()
    }
  }, [query.refetch]))

  React.useEffect(() => {
    isMountedRef.current = true;
  }, [])

  return query;
}

module.exports = {
  ...ReactQuery,
  useQuery,
}