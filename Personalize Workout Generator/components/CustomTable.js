import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { RiTimer2Line } from 'react-icons/ri';

const CustomTableHeader = ({ colName }) => (
  <th className="font-semibold p-4 text-left text-white bg-gradient-to-r from-primary-dark to-primary-light border-b-4 border-primary-dark rounded-t-lg">
    {colName}
  </th>
);

const CustomTableData = ({ data, type }) => (
  <td className="border-b border-slate-100 p-4 text-black font-medium">
    {type === 'rest' ? (
      <span className="flex items-center">
        <RiTimer2Line className="mr-2 text-primary-dark" /> {data}
      </span>
    ) : (
      data
    )}
  </td>
);

const CustomTable = ({ exercises }) => {
  return (
    <div className="table-responsive">
      <table className="border-collapse table-fixed w-full text-sm mb-3 bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="text-white">
            <CustomTableHeader colName={'Exercise'} />
            <CustomTableHeader colName={'Sets'} />
            <CustomTableHeader colName={'Reps'} />
            <CustomTableHeader colName={'Weights'} />
            <CustomTableHeader colName={'Rest Between Sets'} />
          </tr>
        </thead>
        <tbody>
          {exercises.map(({ exercise, sets, reps, weight, rest }, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <CustomTableData data={exercise} type={'exercise'} />
              <CustomTableData data={sets} type={'sets'} />
              <CustomTableData data={reps} type={'reps'} />
              <CustomTableData data={weight} type={'weight'} />
              <CustomTableData data={rest} type={'rest'} />
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center mt-6">
        <p className="text-gray-600 text-sm">
          Stay committed to your journey. Consistency is the key!
        </p>
      </div>
    </div>
  );
};

export default CustomTable;
