import { AppDispatch } from "../index";
import { airportSlice } from "../slices/airportSlice";
import { handbookSlice } from "../slices/handbookSlice";
import axios from "../../axios";

export const fetchHandbooks = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(handbookSlice.actions.fetching());
      const data = await Promise.all([axios.get("")]);

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
