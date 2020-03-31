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
                  buildHookId: '5e82ec0e777304cfea9e0ba8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7ipboevv',
                  apiId: 'eaa14b7e-1eeb-4aff-b290-c70ffaa5a4b6'
                },
                {
                  buildHookId: '5e82ec0e4a58460ff93e3d3f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zvgtyrwg',
                  apiId: 'd6fc68d8-11cb-458f-acf5-62c858e3feb0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisguiloineau/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zvgtyrwg.netlify.com', category: 'apps'}
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
