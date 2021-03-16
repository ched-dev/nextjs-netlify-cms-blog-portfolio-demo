const isLocalhost = typeof window !== 'undefined' && window.location.host === 'localhost:3000'

module.exports = {
  backend: isLocalhost ? { name: 'test-repo' } : {
    name: 'git-gateway',
    branch: 'master'
  },
  load_config_file: false,
  media_folder: 'public/img',
  public_folder: 'img',
  // CLOUDINARY SUPPORT
  // media_library: {
  //   name: 'cloudinary',
  //   config: {
  //     cloud_name: 'cloudname',
  //     api_key: 1234567890
  //   }
  // },
  collections: [
    {
      name: 'posts',
      label: 'Posts',
      folder: 'public/data/posts',
      extension: 'json',
      create: true,
      slug: '{{fields.slug}}',
      identifier_field: 'slug',
      sort_by: 'date',
      fields: [
        { label: 'Slug', name: 'slug', pattern: ['^[a-zA-Z0-9-_]+$', 'Alphanumeric with dashes or underscores'], widget: 'string' },
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'text' },
        { label: 'Publish Date', name: 'date', widget: 'datetime' },
        // { label: 'Credits', name: 'credits', widget: 'credits' },
        { label: 'Cover Image', name: 'thumbnail', widget: 'image', required: false },
        { label: 'Content', name: 'body', widget: 'markdown' },
      ]
    }
  ]
}