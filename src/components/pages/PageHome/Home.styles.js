import HomeBackground from 'assets/images/app/home.jpg';

export const styles = {
  page: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: `url(${HomeBackground})`,
    backgroundSize: 'cover',
  },
  upper: {
    padding: '1rem',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#000626DD',

  },
  lower: {
    padding: '1rem',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    backgroundColor: '#3E260CDD',
  },
};
