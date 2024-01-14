export const USERS_MESSAGES = {
  GET_INVENTORY_LOCATION_SUCCESS: 'Lấy địa chỉ kho thành công!',
  CREATE_RECEIPTMENT_PRODUCT_SUCCESS: 'Tạo phiếu nhập kho thành công!',
  VALIDATION_ERROR: 'Validation error',
  DELIVER_PERSON_NAME_NOT_EMPTY: 'Delivery person name not empty',
  DELIVER_PERSON_NAME_IS_STRING: 'Delivery person name is must a string',
  DELIVER_ACCORDING_TO_NOT_EMPTY: 'Delivery according to not empty',
  ACCORDING_TO_IS_STRING: 'According to must be string',
  ACCORDING_NUMBER_NOT_EMPTY: 'According number not empty',
  ACCORDING_NUMBER_IS_NUMBER: 'According number is must be number',
  ACCORDING_DATE_NOT_EMPTY: 'According date not empty',
  ACCORDING_DATE_IS_STRING: 'According date is must be string',
  ACCORDING_BY_NOT_EMPTY: 'According by not empty',
  ACCORDING_BY_IS_STRING: 'According by is must be string',
  ID_INVENTORY_NOT_EMPTY: 'Id inventory is not emtpy',
  ID_INVENTORY_IS_NUMBER: 'Id inventory is must be number',
  ORGANIZATIONAL_UNIT_NOT_EMPTY: 'Organization unit is not emtpy',
  ORGANIZATIONAL_UNIT_IS_STRING: 'Organization unit is must be string',
  ORGANIZATIONAL_DEPARTMENT_NOT_EMPTY: 'Organization dePARTMENT is not emtpy',
  ORGANIZATIONAL_DEPARTMENT_IS_STRING: 'Organization dePARTment is must be string',
  DATE_RECEIPTMENT_NOT_EMPTY: 'Date receipt is not emtpy',
  DATE_RECEIPTMENT_IS_STRING: 'Date receipt is must be string',
  NUMBER_RECEIPTMENT_NOT_EMPTY: 'Number receipt is not emtpy',
  NUMBER_RECEIPTMENT_IS_NUMBER: 'Number receipt is must be number',
  DEBT_NOT_EMPTY: 'Debt is not empty',
  DEBT_IS_STRING: 'Debt is must be string',
  HAVING_YES_NOT_EMPTY: 'Having yes is not empty',
  HAVING_YES_IS_STRING: 'Having yes is must be string',
  UPDATE_PRODUCT_SUCCESS: 'Update Product Success!',
  UPDATE_RECEIPTMENT_SUCCESS: 'Update Receiptment Success',
  DELETE_PRODUCT_SUCCESS: 'Delete Product Success',
  DELETE_RECEIPTMENT_SUCCESS: ' Delete Receiptment Success',
  CREATE_PRODUCT_SUCCESS: 'Create Product Success'
} as const

export const TWEETS_MESSAGES = {
  INVALID_TYPE: 'Invalid type',
  INVALID_AUDIENCE: 'Invalid audience',
  PARENT_ID_MUST_BE_A_VALID_TWEET_ID: 'Parent id must be a valid tweet id',
  PARENT_ID_MUST_BE_NULL: 'Parent id must be null',
  CONTENT_MUST_BE_A_NON_EMPTY_STRING: 'Content must be a non-empty string',
  CONTENT_MUST_BE_EMPTY_STRING: 'Content must be empty string',
  HASHTAGS_MUST_BE_AN_ARRAY_OF_STRING: 'Hashtags must be an array of string',
  MENTIONS_MUST_BE_AN_ARRAY_OF_USER_ID: 'Mentions must be an array of user id',
  MEDIAS_MUST_BE_AN_ARRAY_OF_MEDIA_OBJECT: 'Medias must be an array of media object',
  INVALID_TWEET_ID: 'Invalid tweet id',
  TWEET_NOT_FOUND: 'Tweet not found',
  TWEET_IS_NOT_PUBLIC: 'Tweet is not public'
} as const

export const BOOKMARK_MESSAGES = {
  BOOKMARK_SUCCESSFULLY: 'Bookmark successfully',
  UNBOOKMARK_SUCCESSFULLY: 'Unbookmark successfully'
}

export const LIKE_MESSAGES = {
  LIKE_SUCCESSFULLY: 'Like successfully',
  UNLIKE_SUCCESSFULLY: 'Unlike successfully'
}
