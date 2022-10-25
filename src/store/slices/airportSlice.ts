import { IAirport } from "../../models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AirportState {
  loading: boolean;
  error: string;
  count: number;
  airports: IAirport[];
}

interface AirportPayload {
  airports: IAirport[];
  count: number;
}

const initialState: AirportState = {
  loading: false,
  count: 0,
  error: "",
  airports: [],
};

export const airportSlice = createSlice({
  name: "airport",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<AirportPayload>) {
      state.loading = false;
      state.airports = action.payload.airports;
      state.count = action.payload.count;
      state.error = "";
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default airportSlice.reducer;
