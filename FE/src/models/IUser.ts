export interface IUser {
    success: boolean
    msg: string
    user: {
        _id: string
        email: string
        name: string
        isVerified: boolean
        verificationToken: string
        verificationTokenExpiresAt: Date | number
        lastLogin: string
        createdAt: string
        updatedAt: string
    }
}
export interface IUserState {
    user: IUser | null
    isLogged: boolean
    isLoading: boolean
    isError: string
}

export const initialState: IUserState = {
    user: null,
    isLogged: false,
    isLoading: false,
    isError: ''
}
