import React from 'react';

class PageGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className='page-games'>
        <div className='div-games-content'>
          <h1>Games Search by Decade</h1>
          <div className='div-search-decade'>
            <h1>1871 - 1880</h1>
          </div>
          <div className='div-search-decade'>
            <h1>1881 - 1890</h1>
          </div>
          <div className='div-search-decade'>
            <h1>1891 - 1900</h1>
          </div>
          <div className='div-search-decade'>
            <h1>1901 - 1910</h1>
          </div>
          <div className='div-search-decade'>
            <h1>1911 - 1920</h1>
          </div>
          <div className='div-search-decade'>
            <h1>1921 - 1930</h1>
          </div>
          <div className='div-search-decade'>
            <h1>1931 - 1940</h1>
          </div>
          <div className='div-search-decade'>
            <h1>1941 - 1950</h1>
          </div>
          <div className='div-search-decade'>
            <h1>1951 - 1960</h1>
          </div>
          <div className='div-search-decade'>
            <h1>1961 - 1970</h1>
          </div>
          <div className='div-search-decade'>
            <h1>1971 - 1980</h1>
          </div>
          <div className='div-search-decade'>
            <h1>1981 - 1990</h1>
          </div>
          <div className='div-search-decade'>
            <h1>1991 - 2000</h1>
          </div>
          <div className='div-search-decade'>
            <h1>2001 - 2010</h1>
          </div>
          <div className='div-search-decade'>
            <h1>2011 - 2017</h1>
          </div>
        </div>
      </main>
    );
  }
}

export default PageGames;