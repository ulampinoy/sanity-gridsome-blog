export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df604f35a0a69e8bea792e7',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-ittaia9x',
                  apiId: '6d642130-684c-49c0-be06-27c6bea47ed9'
                },
                {
                  buildHookId: '5df604f4b041c7f9bff32cc8',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-6ubv46xt',
                  apiId: '987309d9-90df-4979-b448-d0f683f20a96'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ulampinoy/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-6ubv46xt.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
