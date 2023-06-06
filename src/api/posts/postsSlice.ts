import { apiSlice } from '../apiSlice';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getHolidayByCountryCode: builder.query({
      query: countryCode => `/${countryCode}`,
    }),
  }),
});

export const { useGetHolidayByCountryCodeQuery } = extendedApiSlice;
