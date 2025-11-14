import { defineType } from 'sanity'

export default defineType({
  name: 'like',
  title: 'Like',
  type: 'document',
  fields: [
    {
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: { type: 'post' },
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
      post: 'post.title.en',
    },
    prepare(selection: any) {
      const { user, post } = selection
      return {
        title: `${user} liked ${post}`,
      }
    },
  },
})