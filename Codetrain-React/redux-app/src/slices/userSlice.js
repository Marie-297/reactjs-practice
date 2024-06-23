import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    editUser: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload.newEdit
        } else {
          return user
        }
      })
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => {
        if (user.id!== action.payload) {
          return user
        }
      })
    }
  },
})

export const { addUser, editUser, deleteUser } = userSlice.actions
export default userSlice.reducer