export default {
  name: 'pet',
  type: 'document',
  title: 'Pet',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {
      name: 'date',
      type: 'datetime',
      title: 'Date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
        calenderTodayLabel: 'Today',
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'author'}],
    },
  ],
}
