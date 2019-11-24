import React from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import franchiseData from '../../../data/franchises.json';

export const PageFranchiseDetail = props => {
  const location = useLocation();
  const history = useHistory();
  const params = useParams();

  const [franchiseObj, setFranchiseObj] = React.useState(null);

  React.useEffect(() => {
    if (!franchiseObj) setFranchiseObj(findFranchise(params.id));
  });

  const findFranchise = async id => {
    await franchiseData.find(f => f.id === params.id);
  }

  console.log('franchiseObj: ', franchiseObj);
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: '#D0D0D0' }}>Franchise Detail:</h1>
    </div>
  );
};