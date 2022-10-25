import { AppDispatch } from "../index";
import axios from "../../axios";
import { IAirport } from "../../models/models";
import { airportSlice } from "../slices/airportSlice";

export const fetchAirports = (_page = 1, _limit = 50) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(airportSlice.actions.fetching());
      const response = await axios.get<IAirport[]>("airports", {
        params: {
          _limit,
          _page,
        },
      });
      dispatch(
        airportSlice.actions.fetchSuccess({
          airports: response.data,
          count: 88,
        })
      );
    } catch (e) {
      dispatch(airportSlice.actions.fetchError(e as Error));
    }
  };
};
