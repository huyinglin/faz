(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [9],
  {
    ti3G: function(e, n, a) {
      'use strict';
      a.r(n);
      var t = a('0Owb'),
        r = a('q1tI'),
        c = a.n(r),
        s = (a('B2uJ'), a('+su7'), a('qOys'), a('5Yjd')),
        l = a.n(s),
        i = c.a.memo(function() {
          var e = a('K+nK'),
            n = e(a('q1tI')),
            t = a('/7QA');
          function r() {
            t.Message.success('\u8fd9\u662f\u63d0\u793a3');
          }
          var c = function() {
            return n['default'].createElement(
              t.Button,
              { onClick: r, type: 'primary' },
              'click',
            );
          };
          return n['default'].createElement(c);
        });
      n['default'] = function() {
        return c.a.createElement(
          c.a.Fragment,
          null,
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h2',
              { id: 'message-\u5168\u5c40\u63d0\u793a' },
              c.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#message-\u5168\u5c40\u63d0\u793a',
                },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Message \u5168\u5c40\u63d0\u793a',
            ),
            c.a.createElement('hr', null),
            c.a.createElement(
              'h3',
              { id: '\u666e\u901a\u63d0\u793a' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u666e\u901a\u63d0\u793a' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u666e\u901a\u63d0\u793a',
            ),
            c.a.createElement(
              'p',
              null,
              '\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a null \u65f6\u4e0d\u5173\u95ed\u3002',
            ),
          ),
          c.a.createElement(
            l.a,
            Object(t['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Button, Message } from 'faz-ui';\n\nfunction onOpen() {\n  Message.success('\u8fd9\u662f\u63d0\u793a3');\n  // Message.info('\u8fd9\u662f\u63d0\u793a', null);\n  // Message.warning('\u8fd9\u662f\u63d0\u793a', null);\n  // Message.error('\u8fd9\u662f\u63d0\u793a', null);\n}\n\nexport default () => <Button onClick={onOpen} type=\"primary\">click</Button>",
                },
              },
              {
                title: 'Basic',
                desc:
                  '<div class="markdown"><p>\u4fe1\u606f\u63d0\u9192\u53cd\u9988\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            c.a.createElement(i, null),
          ),
        );
      };
    },
  },
]);
