import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Footer from '@/components/Footer';
import UserForm from '@/components/UserForm';
import TableToPDF from '@/components/TableToPDF';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="custom-background">
      <Head>
        <title>GraceFit Tracker</title>
        {/* Your other Head elements go here */}
      </Head>
      <div className="w-full flex-grow relative overflow-hidden">
        <Header />
        <div className="mt-24 px-4 my-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <Intro />
            <div className="w-full">
              <UserForm setData={setData} setLoading={setLoading} loading={loading} />
            </div>
            {loading ? (
              <div className="w-full text-center text-secondary-light p-2 text-xl font-normal">
                Working on it...
              </div>
            ) : data.length > 0 ? (
              <TableToPDF data={data} />
            ) : (
              undefined
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
