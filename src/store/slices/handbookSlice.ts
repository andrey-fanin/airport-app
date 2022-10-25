import {
  IAirportCountry,
  IAirportRegion,
  IAirportType,
} from "../../models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HandbookState {
  loading: boolean;
  types: IAirportType[];
  regions: IAirportRegion[];
  countries: IAirportCountry[];
}

const initialState: HandbookState = {
  loading: false,
  regions: [],
  countries: [],
  types: [],
};

interface HandbookPayload {
  types: IAirportType[];
  countries: IAirportCountry[];
  regions: IAirportRegion[];
}

export const handbookSlice = createSlice({
  name: "handbook",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<HandbookPayload>) {
      state.loading = false;
      state.types = action.payload.types;
      state.regions = action.payload.regions;
      state.countries = action.payload.countries;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
    },
  },
});

export default handbookSlice.reducer;
