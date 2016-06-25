'use strict'

const Subject = {
  name: 'Suject',
  properties: {
    'id': 'int',
    'title': 'string',
    'description': 'string',
    'members_count': 'int',
    'discussions_count': 'int',
  }
}

const Discussion = {
  name: 'Discussion',
  properties: {
    'id': 'int',
    'subject_id': 'int',
    'title': 'string',
    'content': 'string',
    'comments_count': 'int',
    'created_at': 'int',
  }
}

const Comment = {
  name: 'Comment',
  properties: {
    'id': 'int',
    'discussion_id': 'int',
    'user_id': 'int',
    'content': 'string',
    'created_at': 'int',
  }
}
