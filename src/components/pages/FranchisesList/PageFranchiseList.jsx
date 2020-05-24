import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../Page/Page';
import franchiseData from '../../../data/franchiseData.json';
import './PageFranchises.scss';

export const PageFranchiseList = props => {
  const [franchiseList, setFranchiseList] = React.useState([]);

  React.useEffect(() => {
    const getFranchiseList = async () => {
      const list = await franchiseData.map(f =>
        ({"id": f.id, "name": f.name})
      );
      setFranchiseList(list);
    };
    getFranchiseList();

    return () => {};
  }, [franchiseList])

  return (
    <Page>
      <div className="div-teams-content">
        <ul>
          {franchiseList.map(f => (
            <li key={f.id.toString()}>
              <Link to={`/franchises/${f.id}`}>{f.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Page>
  );
};
