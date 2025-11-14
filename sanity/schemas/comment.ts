import { defineType } from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
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
      name: 'author',
      title: 'Author',
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
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required(),
    },
    {
      name: 'isApproved',
      title: 'Approved',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'content',
      author: 'author.name',
      post: 'post.title.en',
    },
    prepare(selection: any) {
      const { author, post } = selection
      return {
        title: `${author} commented on ${post}`,
        subtitle: selection.title?.substring(0, 50) + '...',
      }
    },
  },
})