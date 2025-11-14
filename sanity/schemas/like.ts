import { defineType } from 'sanity'

export default defineType({
  name: 'like',
  title: 'Like',
  type: 'document',
  fields: [
    {
      name: 'postId',
      title: 'Post ID',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'user',
      title: 'User',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: Rule => Rule.required(),
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'createdAt',
      title: 'Created at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      user: 'user.name',
      postId: 'postId',
    },
    prepare(selection: any) {
      const { user, postId } = selection
      return {
        title: `${user} liked ${postId}`,
      }
    },
  },
})