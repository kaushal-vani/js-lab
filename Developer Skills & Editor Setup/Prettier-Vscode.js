'use strict'

// To install Prettier
// VS Code => extensions => Prettier => Install => reload VS code

// To set Prettier as default code Formatter
// Code => Preference => Setting => Search for 'Default Formatter' => change to [ esbenp.prettier-vscode ] ...
// Search for 'format on save' => check that box as yes ...

// To make changes in prettier formatting as per our requirment,
//  we have to create a configuration file.
//=> create '.prettierrc' file in the project folder.

// We can automate console.log as a global snippet 
// Code => Preference => => user snippets => new gobal snippet file => create a new global snippet 

// "Print to console": {                                    =>
//     "scope": "javascript,typescript",                    => To include what types
//     "prefix": "log",                                     => short cut to enable the snippet
//     "body": [
//         "console.log($1);",                              => Defines what is to be place if short cut is entered
//     ],
//     "description": "Log output to console"               => To give description of what the snippet will do 
// },

// but then when you place the $1 inside for cursor placement , the autocomplete will not work.


/*Other Extensions Used in VS Code

ES Lint
Monokai Pro 
Image Preview
Prettier 
Setting Sync
TODO Highlight
*/
// To open settings in JSON format . File => Preference => Setting => [top right corner => open file as JSON in icon]