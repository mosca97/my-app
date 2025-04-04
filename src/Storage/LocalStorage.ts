import { IUserModel } from "../IUserModel"

const REGISTERED_USERS = "registered_users"

const addNewUser = (user: IUserModel) => {
    const userStr = localStorage.getItem(REGISTERED_USERS) || "[]"
    const users = JSON.parse(userStr) as IUserModel[]
    users.push(user)

    localStorage.setItem(REGISTERED_USERS, JSON.stringify(users))
}

const isUserIsAlreadyRegitered = (username: string): boolean => {
    const userStr = localStorage.getItem(REGISTERED_USERS) || null

    if (userStr == null)
        return false;

    const users = JSON.parse(userStr) as IUserModel[]

    const userExist = users.find(u => u.userName == username)

    return userExist != null
}

export { addNewUser,isUserIsAlreadyRegitered }