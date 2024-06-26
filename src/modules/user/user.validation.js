import joi from "joi";

export const update={
    body:joi.object().required().keys({
        newPassward:joi.string().required(),
        oldpassward:joi.string().required()
    })
}

export const createUserAccount={
    body:joi.object().required().keys({
        userName:joi.string().required().min(3).max(25),
        email:joi.string().email().required(),
        passward:joi.string().required()
    })
}

export const updateUserInfo={
    body:joi.object().required().keys({
        userName:joi.string().min(3).max(25),
        email:joi.string().email(),
        role:joi.string()
    })
}

export const deleteUserAccount={
    params:joi.object().required().keys({
        id:joi.required()
    })
}
