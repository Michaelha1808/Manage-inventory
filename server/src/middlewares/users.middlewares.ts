import { checkSchema } from 'express-validator'
import { USERS_MESSAGES } from '~/constants/messages'
import { validate } from '~/utils/validation'

export const createReceipmentAndProductValidator = validate(
  checkSchema(
    {
      delivery_person_name: {
        trim: true,
        notEmpty: {
          errorMessage: USERS_MESSAGES.DELIVER_PERSON_NAME_NOT_EMPTY
        },
        isString: {
          errorMessage: USERS_MESSAGES.DELIVER_PERSON_NAME_IS_STRING
        },
        isLength: {
          options: {
            min: 1,
            max: 40
          }
        }
      },
      according_to: {
        trim: true,
        notEmpty: {
          errorMessage: USERS_MESSAGES.DELIVER_ACCORDING_TO_NOT_EMPTY
        },
        isString: {
          errorMessage: USERS_MESSAGES.ACCORDING_TO_IS_STRING
        },
        isLength: {
          options: {
            min: 1,
            max: 40
          }
        }
      },
      according_number: {
        trim: true,
        notEmpty: {
          errorMessage: USERS_MESSAGES.ACCORDING_NUMBER_NOT_EMPTY
        },
        isNumeric: {
          errorMessage: USERS_MESSAGES.ACCORDING_NUMBER_IS_NUMBER
        },
        isLength: {
          options: {
            min: 1,
            max: 40
          }
        }
      },
      according_date: {
        trim: true,
        notEmpty: {
          errorMessage: USERS_MESSAGES.ACCORDING_DATE_NOT_EMPTY
        },
        isString: {
          errorMessage: USERS_MESSAGES.ACCORDING_DATE_IS_STRING
        },
        isLength: {
          options: {
            min: 1,
            max: 40
          }
        }
      },
      according_by: {
        trim: true,
        notEmpty: {
          errorMessage: USERS_MESSAGES.ACCORDING_BY_NOT_EMPTY
        },
        isString: {
          errorMessage: USERS_MESSAGES.ACCORDING_BY_IS_STRING
        },
        isLength: {
          options: {
            min: 1,
            max: 40
          }
        }
      },
      id_inventory: {
        trim: true,
        notEmpty: {
          errorMessage: USERS_MESSAGES.ID_INVENTORY_NOT_EMPTY
        },
        isNumeric: {
          errorMessage: USERS_MESSAGES.ID_INVENTORY_IS_NUMBER
        },
        isLength: {
          options: {
            min: 1,
            max: 40
          }
        }
      },
      organizational_unit: {
        trim: true,
        notEmpty: {
          errorMessage: USERS_MESSAGES.ORGANIZATIONAL_UNIT_NOT_EMPTY
        },
        isString: {
          errorMessage: USERS_MESSAGES.ORGANIZATIONAL_UNIT_IS_STRING
        },
        isLength: {
          options: {
            min: 1,
            max: 40
          }
        }
      },
      organization_department: {
        trim: true,
        notEmpty: {
          errorMessage: USERS_MESSAGES.ORGANIZATIONAL_DEPARTMENT_NOT_EMPTY
        },
        isString: {
          errorMessage: USERS_MESSAGES.ORGANIZATIONAL_DEPARTMENT_IS_STRING
        },
        isLength: {
          options: {
            min: 1,
            max: 40
          }
        }
      },
      date_receipment: {
        trim: true,
        notEmpty: {
          errorMessage: USERS_MESSAGES.DATE_RECEIPTMENT_NOT_EMPTY
        },
        isString: {
          errorMessage: USERS_MESSAGES.DATE_RECEIPTMENT_IS_STRING
        },
        isLength: {
          options: {
            min: 1,
            max: 40
          }
        }
      },
      number_receipment: {
        trim: true,
        notEmpty: {
          errorMessage: USERS_MESSAGES.NUMBER_RECEIPTMENT_NOT_EMPTY
        },
        isNumeric: {
          errorMessage: USERS_MESSAGES.NUMBER_RECEIPTMENT_IS_NUMBER
        },
        isLength: {
          options: {
            min: 1,
            max: 40
          }
        }
      },
      debt: {
        trim: true,
        notEmpty: {
          errorMessage: USERS_MESSAGES.DEBT_NOT_EMPTY
        },
        isString: {
          errorMessage: USERS_MESSAGES.DEBT_IS_STRING
        },
        isLength: {
          options: {
            min: 1,
            max: 40
          }
        }
      },
      having_yes: {
        trim: true,
        notEmpty: {
          errorMessage: USERS_MESSAGES.HAVING_YES_NOT_EMPTY
        },
        isString: {
          errorMessage: USERS_MESSAGES.HAVING_YES_IS_STRING
        },
        isLength: {
          options: {
            min: 1,
            max: 40
          }
        }
      }
    },
    ['body']
  )
)
