import React from 'react'

const SearchContext = React.createContext({
  searchText: '',
  updateSearchText: () => {},

  showSearchComponent: false,
  searchDataFetchStatus: 'INITIAL',

  changeStatusOfSearchComponent: () => {},
  searchComponentShowStatusChange: () => {},

  userPosts: [],
  //   setPostsData: () => {},

  //   isSearchButtonClicked: false,
  //   setSearchButton: () => {},

  //   setLoading: false,
  //   isFailure: false,
  //   resetFailure: () => {},
  //   setFailure: () => {},
  //   updateLoading: () => {},
  //   resetSearchButton: () => {},

  //   initiateSearchPostLikeApi: () => {},
})

export default SearchContext
