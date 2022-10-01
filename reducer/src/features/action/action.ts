import { ITodo } from './../../http/httpService';
import {createAsyncThunk} from '@reduxjs/toolkit'
import HttpServices from '../../http/httpService'
import { AxiosResponse } from 'axios';


export const fetchTodos = createAsyncThunk('todos', async () => {
    return (await HttpServices.getTodos()).data
})

export const fetchUsers = createAsyncThunk('users', async () => {
    return (await HttpServices.getUsers()).data
})
