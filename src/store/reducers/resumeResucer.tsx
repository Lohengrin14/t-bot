import { ResumeAction, ResumeActionTypes, ResumeState } from "../../types/resume"

const initalState: ResumeState = {
    resume: [],
    loading: false,
    error: null
}

export const resumeResucer = (state = initalState, action: ResumeAction): ResumeState => {
    switch (action.type) {
        case ResumeActionTypes.FETCH_RESUME:
            return { loading: true, error: null, resume: [] }
        case ResumeActionTypes.FETCH_RESUME_SUCCESS:
            return { loading: false, error: null, resume: action.payload }
        case ResumeActionTypes.FETCH_RESUME_ERROR:
            return { loading: false, error: action.payload, resume: [] }
        default:
            return state
    }
}
