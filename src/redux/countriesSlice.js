import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRegions = createAsyncThunk(
  'countries/fetchRegions',
  async (region) => {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await response.json();
    return data;
}
);
const savedCountries = JSON.parse(localStorage.getItem('savedCountries')) || [];

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    selectedRegion: '',
    loading: false,
    error: null,
    savedCountries: savedCountries,
  },
  reducers: {
    setSelectedRegion: (state, action) => {
      state.selectedRegion = action.payload;
    },
    saveCountry: (state, action) => {
      const exists = state.savedCountries.find(c => c.name.common === action.payload.name.common);
      if (!exists) {
        state.savedCountries.push(action.payload);
        localStorage.setItem('savedCountries', JSON.stringify(state.savedCountries));
      }
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

export const { setSelectedRegion, saveCountry  } = countriesSlice.actions;
export default countriesSlice.reducer;
