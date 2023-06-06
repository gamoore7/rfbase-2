import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Whenever making a new apiSlice, make sure to get the above imports from .../query/react and not from .../dist/query

/**
 * This is a generic apiSlice for testing purposes and should be changed to match project specifics.
 * For a project with more than one baseURL, create new apiSlices for each.
 * Do not place any endpoints inside of these apiSlices,
 * instead create new api files for each "grouping" of endpoints and build upon the slice.
 */

export const apiSlice = createApi({
  reducerPath: 'api', //optional, can keep the same.
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://date.nager.at/api/v3/publicholidays/2023', //Replace with baseURL of project.
  }),
  endpoints: () => ({}),
});
