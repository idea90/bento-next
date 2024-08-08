//
//    Bento-Next
//    Config file
//
//
//    https://github.com/migueravila/Bento - upstream

import { Config } from './src/types/config';

// Bento-next config
// Use an editor with Typescript support to get autocomplete and validity checking!
export const config: Config = {
  // General settings
  name: 'Idea',
  openInNewTab: false,
  title: 'Bento',

  // Clock settings
  twelveHourFormat: true,
  flashSeparator: false,

  // Font settings
  font: {
    // Source: 'google' or 'local'
    source: 'google',
    // Font name, e.g., 'Roboto' (case sensitive)
    name: 'Roboto',
  },

  // Theme settings
  theme: 'bento',

  // Background image settings
  // Provide a file name located in ./src/assets/images/ or a URL.
  // Leave blank to disable.
  backgroundImage: '',

  // Installed themes list
  themes: [
    'arc',
    'bento',
    'catppuccin-frappe',
    'catppuccin-macchiato',
    'catppuccin-mocha',
    'conceptdark', // dark mode only
    'monokai',
    'nord',
    'sakura',
    'solarized',
  ],

  // Search Bar settings
  searchBar: true,
  searchEngine: 'google', // Options: 'google', 'ddg'
  barPlaceholder: '', // Default: search engine name. Set to ' ' for no placeholder.
  autoFocusBar: true,

  // Greetings settings
  greetingMorning: 'Good morning,',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Sweet dreams,',

  // Layout settings
  layout: 'buttons', // Options: 'bento', 'lists', 'buttons'

  // Weather settings
  weatherKey: import.meta.env.VITE_API_KEY, // Set OpenWeatherMap key in .env
  weatherIcons: 'OneDark', // Options: 'OneDark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // Options: 'F', 'C'
  language: 'en', // More languages: https://openweathermap.org/current#multi

  // Location settings
  trackLocation: false, // Disable automatic location tracking
  manualLocation: {
    latitude: '', // Users will manually enter latitude
    longitude: '', // Users will manually enter longitude
  },

  // Automatic theme switching settings
  autoTheme: 'system', // Options: 'system', 'location', 'preset', 'none'

  // Preset theme switching times (if autoTheme is 'preset')
  darkModeOnTime: '18:30',
  lightModeOnTime: '07:00',

  // Component visibility settings
  componentsEnabled: {
    searchBar: true,
    themeButton: true,
    clock: true,
    greeter: true,
    date: true,
    weather: true,
  },

  // Buttons group settings
  buttons: [
    // First buttons group
    [
      {
        name: 'ChatGPT',
        icon: 'fas fa-comment-dots',
        url: 'https://chat.openai.com/',
      },
      {
        name: 'Facebook',
        icon: 'fab fa-facebook-f',
        url: 'https://facebook.com/',
      },
      {
        name: 'GitHub', // Added GitHub button
        icon: 'fab fa-github',
        url: 'https://github.com/',
      },
      {
        name: 'Mail',
        icon: 'fas fa-envelope',
        url: 'https://mail.google.com/mail/u/0/',
      },
      {
        name: 'Reddit',
        icon: 'fab fa-reddit',
        url: 'https://reddit.com',
      },
      {
        name: 'Youtube',
        icon: 'fab fa-youtube',
        url: 'https://youtube.com/',
      },
    ],
  ],
};
