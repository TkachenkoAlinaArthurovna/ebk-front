import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataForOrder: {
    comment: '',
    doNotCall: false,
    settlement: '',
    department: '',
    street: '',
    house: '',
    flat: '',
    filteredDepartments: '',
    isOpenModalPayment: false,
    cityRefAndRef: {},
    products: [],
  },
};

const DataForOrderSlice = createSlice({
  name: 'dataForOrder',
  initialState,
  reducers: {
    setDataForOrder: (state, action) => {
      state.dataForOrder[action.payload.valueName] = action.payload.value;
    },
    resetDataForOrder: (state) => {
      state.dataForOrder = {
        comment: '',
        doNotCall: false,
        settlement: '',
        department: '',
        street: '',
        house: '',
        flat: '',
        filteredDepartments: '',
        isOpenModalPayment: false,
        cityRefAndRef: {},
        products: [],
      };
    },
  },
});

export const { setDataForOrder, resetDataForOrder } = DataForOrderSlice.actions;
export default DataForOrderSlice.reducer;
