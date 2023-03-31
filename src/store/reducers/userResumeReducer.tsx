import { UserResumeAction, userResumeActionTypes, userResumeState } from "../../types/userResume"

const initialState: userResumeState = {
    userResume: {
        _id: 0,
        user_id: '',
        user_name: '',
        resume_name: '',
        qualification: '',
        specialization: '',
        skills: [],
        salary: '',
        town: '',
        busyness: '',
        office_remote: '',
        description: '',
        contacts: '',
    }
}

export const userResumeReducer = (state = initialState, action: UserResumeAction): userResumeState => {
    switch (action.type) {
        case userResumeActionTypes.CREATE_USER_RESUME:
            return { ...state, userResume: action.payload }
        case userResumeActionTypes.DELETE_USER_RESUME:
            return { ...state, userResume: null }
        case userResumeActionTypes.UPDATE_USER_RESUME:
            return {
                ...state, userResume: action.payload
            }
        case userResumeActionTypes.STRING_PROPERTY_UPDATE_USER_RESUME:
            if (state.userResume) {
                state.userResume[action.payload.property] = action.payload.data
                return state
            }
            return { ...state }

        case userResumeActionTypes.ARRAY_PROPERTY_PUSH_DATA_USER_RESUME:
            if (state.userResume) {
                state.userResume[action.payload.property].push(action.payload.data)
                return state
            }
            return state
        case userResumeActionTypes.ARRAY_PROPERTY_POP_DATA_USER_RESUME:
            if (state.userResume) {
                state.userResume[action.payload.property] = state.userResume[action.payload.property].filter(item => item !== action.payload.data)
                return state
            }
            return state
        default:
            return state
    }
}