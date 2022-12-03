import { publish } from 'gh-pages';

publish(
    'dist', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/HoodieRocks/hoodierocks.github.io.git', // Update to point to your repository
        user: {
            name: 'HoodieRocks', // update to use your name
            email: 'aidenhperry@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);