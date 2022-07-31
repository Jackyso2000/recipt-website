export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62e68a4da868165f4b121100',
                  title: 'Sanity Studio',
                  name: 'recipt-website-studio',
                  apiId: 'f4dbc27a-ab2d-4112-896f-4b38f0ccf502'
                },
                {
                  buildHookId: '62e68a4dfb289d6274740fc3',
                  title: 'Portfolio Website',
                  name: 'recipt-website',
                  apiId: 'bd82193a-ecc0-44b0-a955-be198dcc34ba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jackyso2000/recipt-website',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://recipt-website.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
