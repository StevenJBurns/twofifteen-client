import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '../Page/Page';
import { FranchiseSeasonList } from './FranchiseSeasonList'
import franchiseData from '../../../data/franchiseData.json';

export const PageFranchiseDetail = () => {
  const [franchiseObj, setFranchiseObj] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    const findFranchise = async id => {
      const franchise = await franchiseData.find(f => f.id === +id);
      setFranchiseObj(franchise);
    };

    findFranchise(id) 
  }, [id, franchiseObj, setFranchiseObj]);
  
  return (
    <Page>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#D0D0D0' }}>{franchiseObj.name}</h1>
        <FranchiseSeasonList seasons={franchiseObj.seasons} />
      </div>
    </Page>
  );
};
