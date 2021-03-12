export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '604b5f4ba4df4db1f70d8ec1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pvddhuqt',
                  apiId: '1ebaa032-4dca-414f-8489-92bba4310f1c'
                },
                {
                  buildHookId: '604b5f4b6b9cd5b30a266436',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ajbetdb5',
                  apiId: '34f9ee94-d8ba-4046-8745-e12b0d34a645'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/newt0/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ajbetdb5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
