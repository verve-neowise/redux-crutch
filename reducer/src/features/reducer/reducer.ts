import { ActionReducerMapBuilder, createReducer, AsyncThunk, AnyAction, PayloadAction } from "@reduxjs/toolkit"
import { fetchTodos } from "../action/action"

export interface InitialStateType {
    status: 'PENDING' | 'FULFILLED' | 'REJECTED' | 'DEFAULT'
    data: any
}

export interface InitialRootStateType {
    todos: InitialStateType,
    users: InitialStateType
}

const initialState: InitialStateType = {
    status: 'DEFAULT',
    data: []
} 

const initialRootState: InitialRootStateType = {
    todos: initialState,
    users: initialState
}

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

const isPendingAction = (action: AnyAction) => {
    return action.type.endsWith('/pending')
}

const isFulfilledAction = (action: AnyAction): action is FulfilledAction => {
    return action.type.endsWith('/fulfilled')
}

const isRejectedAction = (action: AnyAction) => {
    return action.type.endsWith('/rejected')
}

const reducer = createReducer(initialRootState, builder => {
    builder
        .addMatcher(isPendingAction, (state, action) => {
            const type = toType(action.type)
            state[type].status = 'PENDING'
        })
        .addMatcher(isFulfilledAction, (state, action) => {
            const type = toType(action.type)
            state[type].status = 'FULFILLED'
            state[type].data = action.payload
        })
})

const toType = (actionType: string) => {
    const [type, status] = actionType.split('/')
    return type as keyof InitialRootStateType
}

export default reducer