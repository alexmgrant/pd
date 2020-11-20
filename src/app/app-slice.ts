import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

import { RootState } from '../app/store';
import { getUsers as getUsersFromApi } from '../common/api-utils';

export const NodesAdapter = createEntityAdapter<{
  id: number;
}>({
  selectId: (node) => node.id,
});

export const initialState = NodesAdapter.getInitialState({
  loading: false,
});

const getUsers = createAsyncThunk('nodes', async () => {
  const response = await getUsersFromApi();
  return (await response) as any[];
});

const NodesSlice = createSlice({
  name: 'Nodes',
  initialState,
  reducers: {
    nodesLoading(state) {
      state.loading = !state.loading;
    },
    nodeUpdated(state, action) {
      const { payload } = action;
      const { id } = payload;

      NodesAdapter.updateOne(state, payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      NodesAdapter.setAll(state, action.payload);
      state.loading = false;
    });
  },
});

export const {
  selectById: selectNodeById,
  selectAll: selectAllNodes,
  selectIds: selectNodeIds,
} = NodesAdapter.getSelectors<RootState>((state) => state.appSlice);

const { nodesLoading, nodeUpdated } = NodesSlice.actions;

export { nodesLoading, getUsers, nodeUpdated };
export default NodesSlice.reducer;
