import joi from 'joi'

export const createContribution = {
    body: joi.object({
        ArabicName: joi.string().min(2).max(25).required(),
        EnglishName: joi.string().min(2).max(25).required(),
        description: joi.string().min(10).required().messages({
          'string.min': 'الوصف يجب ان تكون 10 احرف على الاقل',
      }),
        benefit: joi.string().min(10).required().messages({
            'string.min': 'الفوائد يجب ان تكون 10 احرف على الاقل',
        }),
        effect: joi.string().min(5).required().messages({
            'string.min': 'الاثارالجانبية يجب ان تكون 10 احرف على الاقل',
        }),
        place: joi.string().min(3).required().messages({
            'string.min': 'المنشأ يجب ان تكون 5 احرف على الاقل',
        }),
        image: joi.object().required().messages({
            'any.required': 'قم بإدراج الصورة',
        }),
    }).required(),
};



export const updateContribution={
    body:joi.object().required().keys({
        ArabicName:joi.string().min(2).max(25),
        EnglishName:joi.string().min(2).max(25),
        description:joi.string().min(10).max(500),
        benefit:joi.string().max(1000).min(10),
        effect:joi.string().min(5).max(1000),
        place:joi.string().min(3).max(200),
        verified:joi.boolean()
    })
}

