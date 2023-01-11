/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

export default {
  basename: "adblockplus",
  version: "3.16.1",
  webpack: {
    bundles: [
      {
        dest: "background.js",
        src: [
          "adblockpluschrome/lib/serviceworkerInit.js",
          "adblockpluschrome/lib/devtools.js",
          "adblockpluschrome/lib/debug.js",
          "adblockpluschrome/lib/subscriptionInit.js",
          "lib/init.js",
          "lib/recommendLanguage.js",
          "adblockpluschrome/lib/filterComposer.js",
          "adblockpluschrome/lib/stats.js",
          "adblockpluschrome/lib/uninstall.js",
          "adblockpluschrome/lib/contentFiltering.js",
          "adblockpluschrome/lib/messageResponder.js",
          "adblockpluschrome/lib/filterConfiguration.js",
          "lib/public-api/allowlisting.js"
        ]
      },
      {
        dest: "composer.js",
        src: ["js/pages/composer.mjs"]
      },
      {
        dest: "composer.preload.js",
        src: ["js/content/composer.preload.mjs"]
      },
      {
        dest: "day1.js",
        src: ["js/pages/day1.mjs"]
      },
      {
        dest: "desktop-options.js",
        src: ["js/pages/desktop-options/index.mjs"]
      },
      {
        dest: "devtools-panel.js",
        src: ["js/pages/devtools-panel/index.mjs"]
      },
      {
        dest: "first-run.js",
        src: ["js/pages/first-run.mjs"]
      },
      {
        dest: "issue-reporter.js",
        src: ["js/pages/issue-reporter/index.mjs"]
      },
      {
        dest: "polyfill.js",
        src: ["adblockpluschrome/lib/polyfill.js"]
      },
      {
        dest: "popup.js",
        src: ["js/pages/popup/index.mjs"]
      },
      {
        dest: "popup-dummy.js",
        src: ["js/pages/popup-dummy.mjs"]
      },
      {
        dest: "premium.preload.js",
        src: ["src/premium/content/index.ts"]
      },
      {
        dest: "problem.js",
        src: ["js/pages/problem.mjs"]
      },
      {
        dest: "updates.js",
        src: ["js/pages/updates.mjs"]
      }
    ]
  },
  mapping: {
    copy: [
      {
        dest: "skin",
        src: [
          "skin/**",
          "!skin/fonts/*00/**",
          "!skin/icons/toolbar/**",
          "!skin/icons/arrow.svg",
          "!skin/icons/logo/manifest/**",
          "!skin/icons/mobile/**",
          "!skin/mobile-options.css"
        ]
      },
      {
        dest: "icons/logo",
        src: [
          "skin/icons/logo/manifest/**"
        ]
      },
      {
        dest: "data",
        src: "data/*.json"
      },
      {
        dest: "ext",
        src: [
          "adblockpluschrome/ext/**"
        ]
      },
      {
        dest: "",
        src: [
          "*.html",
          "adblockpluschrome/devtools.*",
          "options.js",
          "!mobile-options.html"
        ]
      }
    ],
    rename: [
      {
        dest: "icons/abp-16-notification.png",
        src: "skin/icons/toolbar/notification-16.png"
      },
      {
        dest: "icons/abp-16-allowlisted.png",
        src: "skin/icons/toolbar/disabled-16.png"
      },
      {
        dest: "icons/abp-16.png",
        src: "skin/icons/toolbar/default-16.png"
      },
      {
        dest: "icons/abp-20-notification.png",
        src: "skin/icons/toolbar/notification-20.png"
      },
      {
        dest: "icons/abp-20-allowlisted.png",
        src: "skin/icons/toolbar/disabled-20.png"
      },
      {
        dest: "icons/abp-20.png",
        src: "skin/icons/toolbar/default-20.png"
      },
      {
        dest: "icons/abp-32-notification.png",
        src: "skin/icons/toolbar/notification-32.png"
      },
      {
        dest: "icons/abp-32-allowlisted.png",
        src: "skin/icons/toolbar/disabled-32.png"
      },
      {
        dest: "icons/abp-32.png",
        src: "skin/icons/toolbar/default-32.png"
      },
      {
        dest: "icons/abp-40-notification.png",
        src: "skin/icons/toolbar/notification-40.png"
      },
      {
        dest: "icons/abp-40-allowlisted.png",
        src: "skin/icons/toolbar/disabled-40.png"
      },
      {
        dest: "icons/abp-40.png",
        src: "skin/icons/toolbar/default-40.png"
      },
      {
        dest: "vendor/webext-sdk/content.js",
        src: "vendor/webext-sdk/dist/ewe-content.js"
      }
    ]
  },
  translations: {
    dest: "_locales",
    src: [
      "locale/**/*.json",
      "!locale/*/mobile-options.json"
    ]
  }
};
