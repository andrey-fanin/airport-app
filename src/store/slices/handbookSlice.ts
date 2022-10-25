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

interface handbookPayload {}

export const handbookSlice = createSlice({
  name: "handbook",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction) {
      state.loading = false;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
    },
  },
});

export default handbookSlice.reducer;
