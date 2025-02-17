import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RepoItem } from "../types/types";

type UserState = {
  value: RepoItem[];
}

const initialState: UserState = {
  value: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserRepo: (state: UserState, action: PayloadAction<RepoItem[]>) => {
      if (Array.isArray(action.payload)) {
        const arr: RepoItem[] = action.payload.map((el: RepoItem) => ({
          name: el.name,
          description: el.description,
          html_url: el.html_url,
          stargazers_count: el.stargazers_count,
          updated_at: el.updated_at,
        }));

        state.value = arr;
      }
    },
  },
});

export const { setUserRepo } = userSlice.actions;

export default userSlice.reducer;
