(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [8],
  {
    mpTb: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('0Owb'),
        l = a('q1tI'),
        r = a.n(l),
        c = (a('B2uJ'), a('+su7'), a('qOys'), a('5Yjd')),
        u = a.n(c),
        m = r.a.memo(function() {
          var e = a('K+nK'),
            t = e(a('q1tI')),
            n = a('/7QA'),
            l = function() {
              return t['default'].createElement(n.Input, {
                placeholder: 'This is placeholder',
                style: { width: 200 },
              });
            };
          return t['default'].createElement(l);
        }),
        d = r.a.memo(function() {
          var e = a('K+nK'),
            t = e(a('q1tI')),
            n = a('/7QA'),
            l = function() {
              return t['default'].createElement(n.Input, {
                allowClear: !0,
                placeholder: 'This is placeholder',
                style: { width: 200 },
              });
            };
          return t['default'].createElement(l);
        }),
        i = r.a.memo(function() {
          var e = a('K+nK'),
            t = e(a('q1tI')),
            n = a('/7QA'),
            l = function() {
              return t['default'].createElement(n.Input, {
                addonBefore: 'http://',
                addonAfter: '.com',
                defaultValue: 'mysite',
                style: { width: 400 },
              });
            };
          return t['default'].createElement(l);
        }),
        o = r.a.memo(function() {
          var e = a('K+nK'),
            t = e(a('q1tI')),
            n = a('/7QA'),
            l = function() {
              return t['default'].createElement(n.Input, {
                prefix: '\uffe5',
                suffix: 'RMB',
                style: { width: 400 },
              });
            };
          return t['default'].createElement(l);
        }),
        E = r.a.memo(function() {
          var e = a('K+nK'),
            t = e(a('q1tI')),
            n = a('/7QA'),
            l = function() {
              return t['default'].createElement(n.Input, {
                disabled: !0,
                style: { width: 200 },
              });
            };
          return t['default'].createElement(l);
        }),
        s = r.a.memo(function() {
          var e = a('K+nK'),
            t = e(a('q1tI')),
            n = a('/7QA');
          function l(e) {
            console.log('SearchValue:', e);
          }
          var r = function() {
            return t['default'].createElement(
              'div',
              null,
              t['default'].createElement(n.Input.Search, {
                onSearch: l,
                placeholder: 'input search text',
                style: { width: 200 },
              }),
              t['default'].createElement(n.Input.Search, {
                enterButton: !0,
                onSearch: l,
                placeholder: 'input search text',
                style: { width: 400, margin: 16 },
              }),
              t['default'].createElement(n.Input.Search, {
                enterButton: 'Search',
                onSearch: l,
                placeholder: 'input search text',
                style: { width: 400 },
              }),
            );
          };
          return t['default'].createElement(r);
        }),
        p = r.a.memo(function() {
          var e = a('K+nK'),
            t = e(a('q1tI')),
            n = a('/7QA'),
            l = function() {
              return t['default'].createElement(n.Input.TextArea, {
                rows: 4,
                placeholder: 'This is placeholder',
                style: { width: 400 },
              });
            };
          return t['default'].createElement(l);
        }),
        h = r.a.memo(function() {
          var e = a('K+nK'),
            t = e(a('q1tI')),
            n = a('/7QA'),
            l =
              (a('33Fu'),
              function() {
                return t['default'].createElement(n.Input.Password, {
                  placeholder: 'Enter your Password',
                  style: { width: 200 },
                });
              });
          return t['default'].createElement(l);
        }),
        f = r.a.memo(function() {
          var e = a('K+nK'),
            t = e(a('q1tI')),
            n = a('/7QA'),
            l = function() {
              return t['default'].createElement(n.Input.Limit, {
                maxLength: 4,
                placeholder: 'Enter up to 4 characters',
                style: { width: 200 },
              });
            };
          return t['default'].createElement(l);
        });
      t['default'] = function() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: 'input-\u8f93\u5165\u6846' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#input-\u8f93\u5165\u6846' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Input \u8f93\u5165\u6846',
            ),
            r.a.createElement('hr', null),
            r.a.createElement(
              'h3',
              { id: '\u57fa\u672c\u4f7f\u7528' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u672c\u4f7f\u7528' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u672c\u4f7f\u7528',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Input } from 'faz-ui';\n\nexport default () => (\n  <Input placeholder=\"This is placeholder\" style={{ width: 200 }} />\n);",
                },
              },
              {
                title: 'Basic Input',
                desc:
                  '<div class="markdown"><p>\u57fa\u672c\u4f7f\u7528\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(m, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u5e26\u79fb\u9664\u56fe\u6807' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u5e26\u79fb\u9664\u56fe\u6807',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5e26\u79fb\u9664\u56fe\u6807',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Input } from 'faz-ui';\n\nexport default () => (\n  <Input allowClear placeholder=\"This is placeholder\" style={{ width: 200 }} />\n);",
                },
              },
              {
                title: 'AllowClear',
                desc:
                  '<div class="markdown"><p>\u5e26\u79fb\u9664\u56fe\u6807\u7684\u8f93\u5165\u6846\uff0c\u70b9\u51fb\u56fe\u6807\u5220\u9664\u6240\u6709\u5185\u5bb9\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(d, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u524d\u7f6e\u540e\u7f6e\u6807\u7b7e' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u524d\u7f6e\u540e\u7f6e\u6807\u7b7e',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u524d\u7f6e/\u540e\u7f6e\u6807\u7b7e',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Input } from \'faz-ui\';\n\nexport default () => (\n  <Input\n    addonBefore="http://"\n    addonAfter=".com"\n    defaultValue="mysite"\n    style={{ width: 400 }}\n  />\n);',
                },
              },
              {
                title: 'AddonBefore & AddonAfter',
                desc:
                  '<div class="markdown"><p>\u7528\u4e8e\u914d\u7f6e\u4e00\u4e9b\u56fa\u5b9a\u7ec4\u5408\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(i, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u524d\u7f00\u548c\u540e\u7f00' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u524d\u7f00\u548c\u540e\u7f00',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u524d\u7f00\u548c\u540e\u7f00',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Input } from \'faz-ui\';\n\nexport default () => <Input prefix="\uffe5" suffix="RMB" style={{ width: 400 }} />;',
                },
              },
              {
                title: 'Prefix & Suffix',
                desc:
                  '<div class="markdown"><p>\u5728\u8f93\u5165\u6846\u4e0a\u6dfb\u52a0\u524d\u7f00\u6216\u540e\u7f00\u56fe\u6807\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(o, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u7981\u7528' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u7981\u7528' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u7981\u7528',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Input } from 'faz-ui';\n\nexport default () => <Input disabled style={{ width: 200 }} />;",
                },
              },
              {
                title: 'Disabled',
                desc:
                  '<div class="markdown"><p>\u7981\u7528 Input\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(E, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u641c\u7d22\u6846' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u641c\u7d22\u6846' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u641c\u7d22\u6846',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(n['a'])(
              {
                source: {
                  tsx:
                    'import React from \'react\';\nimport { Input } from \'faz-ui\';\n\nfunction onSearch(value: string) {\n  console.log(\'SearchValue:\', value);\n}\n\nexport default () => (\n  <div>\n    <Input.Search\n      onSearch={onSearch}\n      placeholder="input search text"\n      style={{ width: 200 }}\n    />\n    <Input.Search\n      enterButton\n      onSearch={onSearch}\n      placeholder="input search text"\n      style={{ width: 400, margin: 16 }}\n    />\n    <Input.Search\n      enterButton="Search"\n      onSearch={onSearch}\n      placeholder="input search text"\n      style={{ width: 400 }}\n    />\n  </div>\n);',
                  jsx:
                    'import React from \'react\';\nimport { Input } from \'faz-ui\';\n\nfunction onSearch(value) {\n  console.log(\'SearchValue:\', value);\n}\n\nexport default () => (\n  <div>\n    <Input.Search\n      onSearch={onSearch}\n      placeholder="input search text"\n      style={{\n        width: 200,\n      }}\n    />\n    <Input.Search\n      enterButton\n      onSearch={onSearch}\n      placeholder="input search text"\n      style={{\n        width: 400,\n        margin: 16,\n      }}\n    />\n    <Input.Search\n      enterButton="Search"\n      onSearch={onSearch}\n      placeholder="input search text"\n      style={{\n        width: 400,\n      }}\n    />\n  </div>\n);\n',
                },
              },
              {
                title: 'Input.Search',
                desc:
                  '<div class="markdown"><p>\u5e26\u6709\u641c\u7d22\u6309\u94ae\u7684\u8f93\u5165\u6846\u3002\u70b9\u51fb\u641c\u7d22\u6309\u94ae\u6216\u8005\u6309\u4e0b\u56de\u8f66\u53ef\u89e6\u53d1 onSearch\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(s, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u6587\u672c\u57df' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u6587\u672c\u57df' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u6587\u672c\u57df',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Input } from 'faz-ui';\n\nexport default () =>\n  <Input.TextArea\n    rows={4}\n    placeholder=\"This is placeholder\"\n    style={{ width: 400 }}\n  />",
                },
              },
              {
                title: 'Input.TextArea',
                desc:
                  '<div class="markdown"><p>\u7528\u4e8e\u591a\u884c\u8f93\u5165\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(p, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u5bc6\u7801\u6846' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u5bc6\u7801\u6846' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5bc6\u7801\u6846',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Input } from 'faz-ui';\nimport { BsLock, BsUnlock } from 'react-icons/ai';\n\nexport default () => <Input.Password placeholder=\"Enter your Password\" style={{ width: 200 }}/>",
                },
              },
              {
                title: 'Input.Password',
                desc:
                  '<div class="markdown"><p>\u5bc6\u7801\u6846\u3002\u4f7f\u7528 Input.Password \u65f6\uff0csuffix \u548c type \u5c5e\u6027\u5c06\u5931\u6548\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4', 'react-icons': '3.11.0' },
                files: {},
              },
            ),
            r.a.createElement(h, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u5185\u5bb9\u957f\u5ea6\u9650\u5236' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u5185\u5bb9\u957f\u5ea6\u9650\u5236',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5185\u5bb9\u957f\u5ea6\u9650\u5236',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Input } from 'faz-ui';\n\nexport default () => <Input.Limit maxLength={4} placeholder=\"Enter up to 4 characters\" style={{ width: 200 }}/>",
                },
              },
              {
                title: 'Input.Limit',
                desc:
                  '<div class="markdown"><p>\u9650\u5236\u8f93\u5165\u957f\u5ea6\u7684\u8f93\u5165\u6846\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(f, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: 'api' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            r.a.createElement(
              'h3',
              { id: 'input' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#input' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Input',
            ),
            r.a.createElement(
              'p',
              null,
              'Input \u7684\u5176\u4ed6\u5c5e\u6027\u548c React \u81ea\u5e26\u7684 input \u4e00\u81f4\u3002',
            ),
            r.a.createElement(
              'table',
              null,
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, '\u5c5e\u6027'),
                  r.a.createElement('th', null, '\u8bf4\u660e'),
                  r.a.createElement('th', null, '\u7c7b\u578b'),
                  r.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'addonAfter'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5e26\u6807\u7b7e\u7684 input\uff0c\u8bbe\u7f6e\u540e\u7f6e\u6807\u7b7e',
                  ),
                  r.a.createElement('td', null, 'React.ReactNode'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'addonBefore'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5e26\u6807\u7b7e\u7684 input\uff0c\u8bbe\u7f6e\u524d\u7f6e\u6807\u7b7e',
                  ),
                  r.a.createElement('td', null, 'React.ReactNode'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'prefix'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5e26\u6709\u524d\u7f00\u56fe\u6807\u7684 input',
                  ),
                  r.a.createElement('td', null, 'React.ReactNode'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'suffix'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5e26\u6709\u540e\u7f00\u56fe\u6807\u7684 input',
                  ),
                  r.a.createElement('td', null, 'React.ReactNode'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'defaultValue'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8f93\u5165\u6846\u9ed8\u8ba4\u5185\u5bb9',
                  ),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'disabled'),
                  r.a.createElement('td', null, '\u662f\u5426\u7981\u7528'),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'inputRef'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5185\u90e8\u539f\u751f input \u7684 ref',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      'React.Ref<HTMLInputElement>',
                    ),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'type'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u58f0\u660e input \u7c7b\u578b\uff0c\u540c\u539f\u751f input \u6807\u7b7e\u7684 type \u5c5e\u6027',
                  ),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, 'text'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'allowClear'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u53ef\u4ee5\u70b9\u51fb\u6e05\u9664\u56fe\u6807\u5220\u9664\u5185\u5bb9',
                  ),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'value'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8f93\u5165\u6846\u5185\u5bb9',
                  ),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onChange'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8f93\u5165\u6846\u5185\u5bb9\u53d8\u5316\u65f6\u7684\u56de\u8c03',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      '(event: React.ChangeEvent<HTMLInputElement>) => void',
                    ),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onPressEnter'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u6309\u4e0b\u56de\u8f66\u7684\u56de\u8c03',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      '(event: React.KeyboardEvent<HTMLInputElement>) => void',
                    ),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
              ),
            ),
            r.a.createElement(
              'h3',
              { id: 'inputtextarea' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#inputtextarea' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Input.TextArea',
            ),
            r.a.createElement(
              'p',
              null,
              'Input.TextArea \u7684\u5176\u4ed6\u5c5e\u6027\u548c\u6d4f\u89c8\u5668\u81ea\u5e26\u7684 textarea \u4e00\u81f4\u3002',
            ),
            r.a.createElement(
              'table',
              null,
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, '\u5c5e\u6027'),
                  r.a.createElement('th', null, '\u8bf4\u660e'),
                  r.a.createElement('th', null, '\u7c7b\u578b'),
                  r.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'defaultValue'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8f93\u5165\u6846\u9ed8\u8ba4\u5185\u5bb9',
                  ),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'value'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8f93\u5165\u6846\u5185\u5bb9',
                  ),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onChange'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8f93\u5165\u6846\u5185\u5bb9\u53d8\u5316\u65f6\u7684\u56de\u8c03',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      '(event: React.ChangeEvent<HTMLTextAreaElement>) => void',
                    ),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onPressEnter'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u6309\u4e0b\u56de\u8f66\u7684\u56de\u8c03',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      '(event: React.KeyboardEvent<HTMLTextAreaElement>) => void',
                    ),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onResize'),
                  r.a.createElement(
                    'td',
                    null,
                    'TextArea \u5927\u5c0f\u53d8\u5316\u65f6\u7684\u56de\u8c03',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      '(width: number, height: number) => void',
                    ),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
              ),
            ),
            r.a.createElement(
              'h3',
              { id: 'inputsearch' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#inputsearch' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Input.Search',
            ),
            r.a.createElement(
              'p',
              null,
              '\u5176\u4f59\u5c5e\u6027\u548c Input \u4e00\u81f4\u3002',
            ),
            r.a.createElement(
              'table',
              null,
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, '\u5c5e\u6027'),
                  r.a.createElement('th', null, '\u8bf4\u660e'),
                  r.a.createElement('th', null, '\u7c7b\u578b'),
                  r.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'enterButton'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u6709\u786e\u8ba4\u6309\u94ae\uff0c\u53ef\u8bbe\u4e3a\u6309\u94ae\u6587\u5b57\u3002\u8be5\u5c5e\u6027\u4f1a\u4e0e addonAfter \u51b2\u7a81\u3002',
                  ),
                  r.a.createElement('td', null, 'boolean | React.ReactNode'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onSearch'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u70b9\u51fb\u641c\u7d22\u6216\u6309\u4e0b\u56de\u8f66\u952e\u65f6\u7684\u56de\u8c03',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      '(value: string, event: React.KeyboardEvent<HTMLInputElement>) => void',
                    ),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
              ),
            ),
            r.a.createElement(
              'h3',
              { id: 'inputpassword' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#inputpassword' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Input.Password',
            ),
            r.a.createElement(
              'p',
              null,
              '\u5176\u4f59\u5c5e\u6027\u548c Input \u4e00\u81f4\u3002',
            ),
            r.a.createElement(
              'table',
              null,
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, '\u5c5e\u6027'),
                  r.a.createElement('th', null, '\u8bf4\u660e'),
                  r.a.createElement('th', null, '\u7c7b\u578b'),
                  r.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'visibilityToggle'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u663e\u793a\u5207\u6362\u6309\u94ae',
                  ),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'true'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'visibleIcon'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u663e\u793a\u5bc6\u7801 Icon',
                  ),
                  r.a.createElement('td', null, 'React.ReactNode'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'invisibleIcon'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u9690\u85cf\u5bc6\u7801 Icon',
                  ),
                  r.a.createElement('td', null, 'React.ReactNode'),
                  r.a.createElement('td', null, '-'),
                ),
              ),
            ),
            r.a.createElement(
              'h3',
              { id: 'inputlimit' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#inputlimit' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Input.Limit',
            ),
            r.a.createElement(
              'p',
              null,
              '\u5176\u4f59\u5c5e\u6027\u548c Input \u4e00\u81f4\u3002',
            ),
            r.a.createElement(
              'table',
              null,
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, '\u5c5e\u6027'),
                  r.a.createElement('th', null, '\u8bf4\u660e'),
                  r.a.createElement('th', null, '\u7c7b\u578b'),
                  r.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'maxLength'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5185\u5bb9\u7684\u6700\u5927\u957f\u5ea6',
                  ),
                  r.a.createElement('td', null, 'number'),
                  r.a.createElement('td', null, '0'),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
