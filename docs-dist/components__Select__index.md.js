(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [14],
  {
    '3twl': function(e, t, l) {
      'use strict';
      l.r(t);
      var a = l('0Owb'),
        n = l('q1tI'),
        c = l.n(n),
        r = (l('B2uJ'), l('+su7'), l('qOys'), l('5Yjd')),
        i = l.n(r),
        d = c.a.memo(function() {
          var e = l('K+nK'),
            t = e(l('q1tI')),
            a = l('/7QA'),
            n = function() {
              return t['default'].createElement(
                a.Select,
                { style: { width: 200 }, placeholder: 'Please select' },
                Array.from({ length: 10 }).map(function(e, l) {
                  return t['default'].createElement(
                    a.Select.Option,
                    { value: l, key: l },
                    'Option-',
                    l,
                  );
                }),
              );
            };
          return t['default'].createElement(n);
        }),
        m = c.a.memo(function() {
          var e = l('K+nK'),
            t = e(l('q1tI')),
            a = l('/7QA'),
            n = function() {
              return t['default'].createElement(
                a.Select,
                {
                  multiple: !0,
                  style: { width: 400 },
                  placeholder: 'Please select',
                },
                Array.from({ length: 10 }).map(function(e, l) {
                  return t['default'].createElement(
                    a.Select.Option,
                    { value: l, key: l },
                    'Option-',
                    l,
                  );
                }),
              );
            };
          return t['default'].createElement(n);
        }),
        u = c.a.memo(function() {
          var e = l('K+nK'),
            t = e(l('q1tI')),
            a = l('/7QA'),
            n = function() {
              return t['default'].createElement(
                a.Select,
                {
                  showSearch: !0,
                  style: { width: 200 },
                  placeholder: 'Please select',
                },
                t['default'].createElement(
                  a.Select.Option,
                  { value: 'jack' },
                  'Jack',
                ),
                t['default'].createElement(
                  a.Select.Option,
                  { value: 'lucy' },
                  'Lucy',
                ),
                t['default'].createElement(
                  a.Select.Option,
                  { value: 'disabled', disabled: !0 },
                  'Disabled',
                ),
                t['default'].createElement(
                  a.Select.Option,
                  { value: 'Yiminghe' },
                  'yiminghe',
                ),
              );
            };
          return t['default'].createElement(n);
        }),
        o = c.a.memo(function() {
          var e = l('K+nK'),
            t = e(l('q1tI')),
            a = l('/7QA'),
            n = function() {
              return t['default'].createElement(
                a.Select,
                {
                  allowClear: !0,
                  style: { width: 200 },
                  placeholder: 'Please select',
                },
                t['default'].createElement(
                  a.Select.Option,
                  { value: 'jack' },
                  'Jack',
                ),
                t['default'].createElement(
                  a.Select.Option,
                  { value: 'lucy' },
                  'Lucy',
                ),
                t['default'].createElement(
                  a.Select.Option,
                  { value: 'disabled', disabled: !0 },
                  'Disabled',
                ),
                t['default'].createElement(
                  a.Select.Option,
                  { value: 'Yiminghe' },
                  'yiminghe',
                ),
              );
            };
          return t['default'].createElement(n);
        }),
        s = c.a.memo(function() {
          var e = l('K+nK'),
            t = e(l('q1tI')),
            a = l('/7QA'),
            n = function() {
              return t['default'].createElement(
                a.Select,
                {
                  disabled: !0,
                  style: { width: 200 },
                  placeholder: 'Please select',
                },
                t['default'].createElement(
                  a.Select.Option,
                  { value: 'jack' },
                  'Jack',
                ),
                t['default'].createElement(
                  a.Select.Option,
                  { value: 'lucy' },
                  'Lucy',
                ),
                t['default'].createElement(
                  a.Select.Option,
                  { value: 'disabled', disabled: !0 },
                  'Disabled',
                ),
                t['default'].createElement(
                  a.Select.Option,
                  { value: 'Yiminghe' },
                  'yiminghe',
                ),
              );
            };
          return t['default'].createElement(n);
        });
      t['default'] = function() {
        return c.a.createElement(
          c.a.Fragment,
          null,
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h2',
              { id: 'select-\u9009\u62e9\u5668' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#select-\u9009\u62e9\u5668' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Select \u9009\u62e9\u5668',
            ),
            c.a.createElement('hr', null),
            c.a.createElement(
              'h3',
              { id: '\u57fa\u672c\u7528\u6cd5' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u672c\u7528\u6cd5' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u672c\u7528\u6cd5',
            ),
          ),
          c.a.createElement(
            i.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Select } from 'faz-ui';\n\nexport default () =>\n  <Select\n    style={{ width: 200 }}\n    placeholder=\"Please select\"\n  >\n    {Array.from({ length: 10 }).map((it, index) =>\n      <Select.Option\n        value={index}\n        key={index}\n      >\n        Option-{index}\n      </Select.Option>\n    )}\n  </Select>",
                },
              },
              {
                title: 'Basic',
                desc:
                  '<div class="markdown"><p>\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            c.a.createElement(d, null),
          ),
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h3',
              { id: '\u591a\u9009\u6a21\u5f0f\u3002' },
              c.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u591a\u9009\u6a21\u5f0f\u3002',
                },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u591a\u9009\u6a21\u5f0f\u3002',
            ),
          ),
          c.a.createElement(
            i.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Select } from 'faz-ui';\n\nexport default () =>\n  <Select\n    multiple\n    style={{ width: 400 }}\n    placeholder=\"Please select\"\n  >\n    {Array.from({ length: 10 }).map((it, index) =>\n      <Select.Option\n        value={index}\n        key={index}\n      >\n        Option-{index}\n      </Select.Option>\n    )}\n  </Select>",
                },
              },
              {
                title: 'Multiple',
                desc:
                  '<div class="markdown"><p>\u591a\u9009\uff0c\u4ece\u5df2\u6709\u6761\u76ee\u4e2d\u9009\u62e9\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            c.a.createElement(m, null),
          ),
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h3',
              { id: '\u5e26\u641c\u7d22\u6846' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u5e26\u641c\u7d22\u6846' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5e26\u641c\u7d22\u6846',
            ),
          ),
          c.a.createElement(
            i.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Select } from \'faz-ui\';\n\nexport default () =>\n  <Select\n    showSearch\n    style={{ width: 200 }}\n    placeholder="Please select"\n  >\n    <Select.Option value="jack">Jack</Select.Option>\n    <Select.Option value="lucy">Lucy</Select.Option>\n    <Select.Option value="disabled" disabled>\n      Disabled\n    </Select.Option>\n    <Select.Option value="Yiminghe">yiminghe</Select.Option>\n  </Select>',
                },
              },
              {
                title: 'ShowSearch',
                desc:
                  '<div class="markdown"><p>\u5c55\u5f00\u540e\u53ef\u5bf9\u9009\u9879\u8fdb\u884c\u641c\u7d22\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            c.a.createElement(u, null),
          ),
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h3',
              { id: '\u6e05\u9664\u9009\u62e9\u5185\u5bb9' },
              c.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u6e05\u9664\u9009\u62e9\u5185\u5bb9',
                },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u6e05\u9664\u9009\u62e9\u5185\u5bb9',
            ),
          ),
          c.a.createElement(
            i.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Select } from \'faz-ui\';\n\nexport default () =>\n  <Select\n    allowClear\n    style={{ width: 200 }}\n    placeholder="Please select"\n  >\n    <Select.Option value="jack">Jack</Select.Option>\n    <Select.Option value="lucy">Lucy</Select.Option>\n    <Select.Option value="disabled" disabled>\n      Disabled\n    </Select.Option>\n    <Select.Option value="Yiminghe">yiminghe</Select.Option>\n  </Select>',
                },
              },
              {
                title: 'AllowClear',
                desc:
                  '<div class="markdown"><p>\u6e05\u9664\u5df2\u9009\u62e9\u5185\u5bb9\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            c.a.createElement(o, null),
          ),
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h3',
              { id: '\u7981\u7528\u72b6\u6001' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u7981\u7528\u72b6\u6001' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u7981\u7528\u72b6\u6001',
            ),
          ),
          c.a.createElement(
            i.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Select } from \'faz-ui\';\n\nexport default () =>\n  <Select\n    disabled\n    style={{ width: 200 }}\n    placeholder="Please select"\n  >\n    <Select.Option value="jack">Jack</Select.Option>\n    <Select.Option value="lucy">Lucy</Select.Option>\n    <Select.Option value="disabled" disabled>\n      Disabled\n    </Select.Option>\n    <Select.Option value="Yiminghe">yiminghe</Select.Option>\n  </Select>',
                },
              },
              {
                title: 'Disabled',
                desc:
                  '<div class="markdown"><p>\u7981\u7528\u72b6\u6001\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            c.a.createElement(s, null),
          ),
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h2',
              { id: 'api' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            c.a.createElement(
              'table',
              null,
              c.a.createElement(
                'thead',
                null,
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('th', null, '\u5c5e\u6027'),
                  c.a.createElement('th', null, '\u8bf4\u660e'),
                  c.a.createElement('th', null, '\u7c7b\u578b'),
                  c.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              c.a.createElement(
                'tbody',
                null,
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'allowClear'),
                  c.a.createElement('td', null, '\u652f\u6301\u6e05\u9664'),
                  c.a.createElement('td', null, 'boolean'),
                  c.a.createElement('td', null, 'false'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'disabled'),
                  c.a.createElement('td', null, '\u662f\u5426\u7981\u7528'),
                  c.a.createElement('td', null, 'boolean'),
                  c.a.createElement('td', null, 'false'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'showSearch'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u4f7f\u5355\u9009\u6a21\u5f0f\u53ef\u641c\u7d22',
                  ),
                  c.a.createElement('td', null, 'boolean'),
                  c.a.createElement('td', null, 'false'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'multiple'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u5f00\u542f\u591a\u9009\u6a21\u5f0f',
                  ),
                  c.a.createElement('td', null, 'boolean'),
                  c.a.createElement('td', null, 'false'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'suffixIcon'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u9009\u62e9\u6846\u540e\u7f00\u56fe\u6807',
                  ),
                  c.a.createElement('td', null, 'React.ReactNode'),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'clearIcon'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u591a\u9009\u6846\u6e05\u7a7a\u56fe\u6807',
                  ),
                  c.a.createElement('td', null, 'React.ReactNode'),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'defaultValue'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u9ed8\u8ba4\u9009\u4e2d\u503c',
                  ),
                  c.a.createElement('td', null, 'string | string[]'),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'value'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u9009\u4e2d\u503c',
                  ),
                  c.a.createElement('td', null, 'string | string[]'),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'placeholder'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u9009\u62e9\u6846\u9ed8\u8ba4\u6587\u5b57',
                  ),
                  c.a.createElement('td', null, 'string'),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'listHeight'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u5f39\u7a97\u6eda\u52a8\u9ad8\u5ea6',
                  ),
                  c.a.createElement('td', null, 'number'),
                  c.a.createElement('td', null, '256'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'style'),
                  c.a.createElement('td', null, '\u8bbe\u7f6e\u6837\u5f0f'),
                  c.a.createElement('td', null, 'React.CSSProperties'),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'className'),
                  c.a.createElement('td', null, '\u8bbe\u7f6e\u7c7b\u540d'),
                  c.a.createElement('td', null, 'string'),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'onSelect'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u9009\u4e2d\u65f6\u7684\u56de\u8c03',
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    '(value: string | string[]) => void',
                  ),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'onChange'),
                  c.a.createElement(
                    'td',
                    null,
                    'value \u6539\u53d8\u65f6\u7684\u56de\u8c03',
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    '(value: string | string[] | undefined) => void',
                  ),
                  c.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
