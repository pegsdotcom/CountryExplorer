import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRegions = createAsyncThunk(
  'countries/fetchRegions',
  async (region) => {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await response.json();
    return data;
}
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    selectedRegion: '',
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedRegion: (state, action) => {
      state.selectedRegion = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchRegions.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.countries = payload;
})
    .addCase(fetchRegions.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
})}
});

export const { setSelectedRegion } = countriesSlice.actions;
export default countriesSlice.reducer;
