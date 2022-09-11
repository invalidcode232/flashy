import type { NextPage } from 'next';
import CollectionsHeader from '../../components/Collections/CollectionsHeader';
import CollectionsList from '../../components/Collections/CollectionsList';
import CollectionProvider from '../../contexts/CollectionProvider';
import Layout from '../../layouts/Dashboard/Layout';

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <CollectionProvider>
        <CollectionsHeader />
        <CollectionsList />
      </CollectionProvider>
    </Layout>
  );
};

export default Dashboard;
