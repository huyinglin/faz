(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [17],
  {
    bgfQ: function(e, t, l) {
      'use strict';
      l.r(t);
      var n = l('0Owb'),
        a = l('q1tI'),
        o = l.n(a),
        i = (l('B2uJ'), l('+su7'), l('qOys'), l('5Yjd')),
        r = l.n(i),
        c = o.a.memo(function() {
          var e = l('K+nK'),
            t = e(l('q1tI')),
            n = l('/7QA'),
            a = function() {
              return t['default'].createElement(
                n.Tooltip,
                { title: 'Tooltip' },
                t['default'].createElement('span', null, 'Tooltip'),
              );
            };
          return t['default'].createElement(a);
        }),
        u = o.a.memo(function() {
          var e = l('K+nK'),
            t = e(l('q1tI')),
            n = l('/7QA'),
            a = function() {
              return t['default'].createElement(
                'div',
                null,
                t['default'].createElement(
                  n.Tooltip,
                  { trigger: 'hover', title: 'Tooltip' },
                  t['default'].createElement(
                    n.Button,
                    { style: { margin: 8 } },
                    'Hover',
                  ),
                ),
                t['default'].createElement(
                  n.Tooltip,
                  { trigger: 'click', title: 'Tooltip' },
                  t['default'].createElement(
                    n.Button,
                    { style: { margin: 8 } },
                    'Click',
                  ),
                ),
                t['default'].createElement(
                  n.Tooltip,
                  { trigger: 'focus', title: 'Tooltip' },
                  t['default'].createElement(
                    n.Button,
                    { style: { margin: 8 } },
                    'Focus',
                  ),
                ),
                t['default'].createElement(
                  n.Tooltip,
                  { trigger: ['click', 'hover'], title: 'Tooltip' },
                  t['default'].createElement(
                    n.Button,
                    { style: { margin: 8 } },
                    'Hover & Click',
                  ),
                ),
              );
            };
          return t['default'].createElement(a);
        }),
        m = o.a.memo(function() {
          var e = l('K+nK'),
            t = e(l('q1tI')),
            n = l('/7QA'),
            a = function() {
              return t['default'].createElement(
                'div',
                null,
                t['default'].createElement(
                  n.Tooltip,
                  { enterDelay: 0, leaveDelay: 0, title: 'Tooltip' },
                  t['default'].createElement(n.Button, null, '0ms'),
                ),
                t['default'].createElement(
                  n.Tooltip,
                  { enterDelay: 500, leaveDelay: 500, title: 'Tooltip' },
                  t['default'].createElement(
                    n.Button,
                    { style: { marginLeft: 16 } },
                    '500ms',
                  ),
                ),
                t['default'].createElement(
                  n.Tooltip,
                  { title: 'Tooltip' },
                  t['default'].createElement(
                    n.Button,
                    { style: { marginLeft: 16 } },
                    'default',
                  ),
                ),
              );
            };
          return t['default'].createElement(a);
        }),
        p = o.a.memo(function() {
          var e = l('K+nK'),
            t = e(l('q1tI')),
            n = l('/7QA'),
            a = [
              'pink',
              'red',
              'yellow',
              'orange',
              'cyan',
              'green',
              'blue',
              'purple',
              'geekblue',
              'magenta',
              'volcano',
              'gold',
              'lime',
            ],
            o = ['#f50', '#2db7f5', '#87d068', '#108ee9'],
            i = function() {
              return t['default'].createElement(
                'div',
                null,
                a.map(function(e) {
                  return t['default'].createElement(
                    n.Tooltip,
                    { title: 'prompt text', color: e, key: e },
                    t['default'].createElement(
                      n.Button,
                      { style: { margin: 8 } },
                      e,
                    ),
                  );
                }),
                t['default'].createElement('br', null),
                o.map(function(e) {
                  return t['default'].createElement(
                    n.Tooltip,
                    { title: 'prompt text', color: e, key: e },
                    t['default'].createElement(
                      n.Button,
                      { style: { margin: 8 } },
                      e,
                    ),
                  );
                }),
              );
            };
          return t['default'].createElement(i);
        }),
        d = o.a.memo(function() {
          var e = l('K+nK'),
            t = e(l('tJVT')),
            n = e(l('q1tI')),
            a = l('/7QA'),
            o = n['default'].useState(!1),
            i = (0, t['default'])(o, 2),
            r = i[0],
            c = i[1];
          function u(e) {
            console.log('visible', e), c(e);
          }
          var m = function() {
            return n['default'].createElement(
              a.Tooltip,
              { defaultVisible: !0, visible: r, onChange: u, title: 'Tooltip' },
              n['default'].createElement('span', null, 'Tooltip'),
            );
          };
          return n['default'].createElement(m);
        }),
        E = o.a.memo(function() {
          var e = l('K+nK'),
            t = e(l('qqnG')),
            n = e(l('q1tI')),
            a = l('/7QA'),
            o = e(l('vOnD'));
          function i() {
            var e = (0, t['default'])([
              '\n  width: 520px;\n  display: flex;\n  justify-content: space-between;\n',
            ]);
            return (
              (i = function() {
                return e;
              }),
              e
            );
          }
          function r() {
            var e = (0, t['default'])(['\n  margin-left: 104px;\n']);
            return (
              (r = function() {
                return e;
              }),
              e
            );
          }
          function c() {
            var e = (0, t['default'])(['\n  width: 88px;\n  margin: 8px;\n']);
            return (
              (c = function() {
                return e;
              }),
              e
            );
          }
          var u = (0, o['default'])(a.Button)(c()),
            m = o['default'].div(r()),
            p = o['default'].div(i()),
            d =
              'Tooltip Title Tooltip Title Tooltip Title Tooltip Title Tooltip Title Tooltip Title',
            E = function() {
              return n['default'].createElement(
                'div',
                null,
                n['default'].createElement(
                  m,
                  null,
                  n['default'].createElement(
                    a.Tooltip,
                    { placement: 'topLeft', title: d },
                    n['default'].createElement(u, null, 'topLeft'),
                  ),
                  n['default'].createElement(
                    a.Tooltip,
                    { placement: 'top', title: d },
                    n['default'].createElement(u, null, 'top'),
                  ),
                  n['default'].createElement(
                    a.Tooltip,
                    { placement: 'topRight', title: d },
                    n['default'].createElement(u, null, 'topRight'),
                  ),
                ),
                n['default'].createElement(
                  p,
                  null,
                  n['default'].createElement(
                    a.Tooltip,
                    { placement: 'leftTop', title: d },
                    n['default'].createElement(u, null, 'leftTop'),
                  ),
                  n['default'].createElement(
                    a.Tooltip,
                    { placement: 'rightTop', title: d },
                    n['default'].createElement(u, null, 'rightTop'),
                  ),
                ),
                n['default'].createElement(
                  p,
                  null,
                  n['default'].createElement(
                    a.Tooltip,
                    { placement: 'left', title: d },
                    n['default'].createElement(u, null, 'left'),
                  ),
                  n['default'].createElement(
                    a.Tooltip,
                    { placement: 'right', title: d },
                    n['default'].createElement(u, null, 'right'),
                  ),
                ),
                n['default'].createElement(
                  p,
                  null,
                  n['default'].createElement(
                    a.Tooltip,
                    { placement: 'leftBottom', title: d },
                    n['default'].createElement(u, null, 'leftBottom'),
                  ),
                  n['default'].createElement(
                    a.Tooltip,
                    { placement: 'rightBottom', title: d },
                    n['default'].createElement(u, null, 'rightBottom'),
                  ),
                ),
                n['default'].createElement(
                  m,
                  null,
                  n['default'].createElement(
                    a.Tooltip,
                    { placement: 'bottomLeft', title: d },
                    n['default'].createElement(u, null, 'bottomLeft'),
                  ),
                  n['default'].createElement(
                    a.Tooltip,
                    { placement: 'bottom', title: d },
                    n['default'].createElement(u, null, 'bottom'),
                  ),
                  n['default'].createElement(
                    a.Tooltip,
                    { placement: 'bottomRight', title: d },
                    n['default'].createElement(u, null, 'bottomRight'),
                  ),
                ),
              );
            };
          return n['default'].createElement(E);
        });
      t['default'] = function() {
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h2',
              { id: 'tooltip-\u6587\u5b57\u63d0\u793a' },
              o.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#tooltip-\u6587\u5b57\u63d0\u793a',
                },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Tooltip \u6587\u5b57\u63d0\u793a',
            ),
            o.a.createElement('hr', null),
            o.a.createElement(
              'h3',
              { id: '\u57fa\u672c\u7528\u6cd5' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u672c\u7528\u6cd5' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u672c\u7528\u6cd5',
            ),
          ),
          o.a.createElement(
            r.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Tooltip } from 'faz-ui';\n\nexport default () => <Tooltip title=\"Tooltip\"><span>Tooltip</span></Tooltip>",
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
            o.a.createElement(c, null),
          ),
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h3',
              { id: '\u4e09\u79cd\u89e6\u53d1\u65b9\u5f0f' },
              o.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u4e09\u79cd\u89e6\u53d1\u65b9\u5f0f',
                },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u4e09\u79cd\u89e6\u53d1\u65b9\u5f0f',
            ),
          ),
          o.a.createElement(
            r.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Tooltip, Button } from \'faz-ui\';\n\nexport default () =>\n  <div>\n    <Tooltip trigger="hover" title="Tooltip"><Button style={{ margin: 8 }}>Hover</Button></Tooltip>\n    <Tooltip trigger="click" title="Tooltip"><Button style={{ margin: 8 }}>Click</Button></Tooltip>\n    <Tooltip trigger="focus" title="Tooltip"><Button style={{ margin: 8 }}>Focus</Button></Tooltip>\n    <Tooltip trigger={[\'click\', \'hover\']} title="Tooltip"><Button style={{ margin: 8 }}>Hover & Click</Button></Tooltip>\n  </div>',
                },
              },
              {
                title: 'Trigger',
                desc:
                  '<div class="markdown"><p>\u652f\u6301\u4e09\u79cd\u89e6\u53d1\u65b9\u5f0f\uff0c\u9f20\u6807\u79fb\u5165\u3001\u805a\u96c6\u3001\u70b9\u51fb\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            o.a.createElement(u, null),
          ),
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h3',
              { id: '\u5ef6\u65f6\u663e\u793a' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u5ef6\u65f6\u663e\u793a' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5ef6\u65f6\u663e\u793a',
            ),
          ),
          o.a.createElement(
            r.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Tooltip, Button } from \'faz-ui\';\n\nexport default () =>\n  <div>\n    <Tooltip enterDelay={0} leaveDelay={0} title="Tooltip">\n      <Button>0ms</Button>\n    </Tooltip>\n    <Tooltip enterDelay={500} leaveDelay={500} title="Tooltip">\n      <Button style={{ marginLeft: 16 }}>500ms</Button>\n    </Tooltip>\n    <Tooltip title="Tooltip">\n      <Button style={{ marginLeft: 16 }}>default</Button>\n    </Tooltip>\n  </div>',
                },
              },
              {
                title: 'EnterDelay & LeaveDelay',
                desc:
                  '<div class="markdown"><p>\u8bbe\u7f6e\u9f20\u6807\u79fb\u5165\u79fb\u51fa\u540e\u5ef6\u65f6\u591a\u5c11\u65f6\u95f4\u663e\u793a\uff0c\u5355\u4f4d\uff1ams\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            o.a.createElement(m, null),
          ),
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h3',
              { id: '\u591a\u5f69\u6587\u5b57\u63d0\u793a' },
              o.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u591a\u5f69\u6587\u5b57\u63d0\u793a',
                },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u591a\u5f69\u6587\u5b57\u63d0\u793a',
            ),
          ),
          o.a.createElement(
            r.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Tooltip, Button } from 'faz-ui';\n\nconst colors = [\n  'pink',\n  'red',\n  'yellow',\n  'orange',\n  'cyan',\n  'green',\n  'blue',\n  'purple',\n  'geekblue',\n  'magenta',\n  'volcano',\n  'gold',\n  'lime',\n];\n\nconst customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];\n\nexport default () =>\n  <div>\n    {colors.map(color => (\n      <Tooltip title=\"prompt text\" color={color} key={color}>\n        <Button style={{ margin: 8 }}>{color}</Button>\n      </Tooltip>\n    ))}\n    <br/>\n    {customColors.map(color => (\n      <Tooltip title=\"prompt text\" color={color} key={color}>\n        <Button style={{ margin: 8 }}>{color}</Button>\n      </Tooltip>\n    ))}\n  </div>",
                },
              },
              {
                title: 'Colors',
                desc:
                  '<div class="markdown"><p>\u6211\u4eec\u6dfb\u52a0\u4e86\u591a\u79cd\u9884\u8bbe\u8272\u5f69\u7684\u6587\u5b57\u63d0\u793a\u6837\u5f0f\uff0c\u7528\u4f5c\u4e0d\u540c\u573a\u666f\u4f7f\u7528\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            o.a.createElement(p, null),
          ),
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h3',
              { id: '\u53d7\u63a7\u7684-tooltip' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u53d7\u63a7\u7684-tooltip' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u53d7\u63a7\u7684 Tooltip',
            ),
          ),
          o.a.createElement(
            r.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Tooltip } from 'faz-ui';\n\nconst [visible, setVisible] = React.useState(false);\n\nfunction onChange(value) {\n  console.log('visible', value);\n  setVisible(value);\n}\n\nexport default () =>\n  <Tooltip\n    defaultVisible={true}\n    visible={visible}\n    onChange={onChange}\n    title=\"Tooltip\"\n  >\n    <span>Tooltip</span>\n  </Tooltip>",
                },
              },
              {
                title: 'Controlled',
                desc:
                  '<div class="markdown"><p>\u901a\u8fc7 visible \u5c5e\u6027\u63a7\u5236 Tooltip \u663e\u96a0\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            o.a.createElement(d, null),
          ),
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h3',
              { id: '\u4f4d\u7f6e' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u4f4d\u7f6e' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u4f4d\u7f6e',
            ),
          ),
          o.a.createElement(
            r.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Tooltip, Button } from \'faz-ui\';\nimport styled from \'styled-components\';\n\nconst ButtonView = styled(Button)`\n  width: 88px;\n  margin: 8px;\n`;\n\nconst TopAndButtomView = styled.div`\n  margin-left: 104px;\n`;\n\nconst CenterView = styled.div`\n  width: 520px;\n  display: flex;\n  justify-content: space-between;\n`;\n\nconst tooltipTitle = "Tooltip Title Tooltip Title Tooltip Title Tooltip Title Tooltip Title Tooltip Title";\n\nexport default () =>\n  <div>\n    <TopAndButtomView>\n      <Tooltip placement="topLeft" title={tooltipTitle}><ButtonView>topLeft</ButtonView></Tooltip>\n      <Tooltip placement="top" title={tooltipTitle}><ButtonView>top</ButtonView></Tooltip>\n      <Tooltip placement="topRight" title={tooltipTitle}><ButtonView>topRight</ButtonView></Tooltip>\n    </TopAndButtomView>\n    <CenterView>\n      <Tooltip placement="leftTop" title={tooltipTitle}><ButtonView>leftTop</ButtonView></Tooltip>\n      <Tooltip placement="rightTop" title={tooltipTitle}><ButtonView>rightTop</ButtonView></Tooltip>\n    </CenterView>\n    <CenterView>\n      <Tooltip placement="left" title={tooltipTitle}><ButtonView>left</ButtonView></Tooltip>\n      <Tooltip placement="right" title={tooltipTitle}><ButtonView>right</ButtonView></Tooltip>\n    </CenterView>\n    <CenterView>\n      <Tooltip placement="leftBottom" title={tooltipTitle}><ButtonView>leftBottom</ButtonView></Tooltip>\n      <Tooltip placement="rightBottom" title={tooltipTitle}><ButtonView>rightBottom</ButtonView></Tooltip>\n    </CenterView>\n    <TopAndButtomView>\n      <Tooltip placement="bottomLeft" title={tooltipTitle}><ButtonView>bottomLeft</ButtonView></Tooltip>\n      <Tooltip placement="bottom" title={tooltipTitle}><ButtonView>bottom</ButtonView></Tooltip>\n      <Tooltip placement="bottomRight" title={tooltipTitle}><ButtonView>bottomRight</ButtonView></Tooltip>\n    </TopAndButtomView>\n  </div>',
                },
              },
              {
                title: 'Placement',
                desc:
                  '<div class="markdown"><p>\u4f4d\u7f6e\u6709 12 \u4e2a\u65b9\u5411\u3002</p></div>',
                dependencies: {
                  'faz-ui': '1.0.4',
                  'styled-components': '5.1.1',
                },
                files: {},
              },
            ),
            o.a.createElement(E, null),
          ),
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h2',
              { id: 'api' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            o.a.createElement(
              'p',
              null,
              '\u8bf7\u786e\u4fdd Tooltip \u7684\u5b50\u5143\u7d20\u80fd\u63a5\u53d7 onMouseEnter\u3001onMouseLeave\u3001onFocus\u3001onClick \u4e8b\u4ef6\u3002',
            ),
            o.a.createElement(
              'table',
              null,
              o.a.createElement(
                'thead',
                null,
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('th', null, '\u5c5e\u6027'),
                  o.a.createElement('th', null, '\u8bf4\u660e'),
                  o.a.createElement('th', null, '\u7c7b\u578b'),
                  o.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              o.a.createElement(
                'tbody',
                null,
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'title'),
                  o.a.createElement(
                    'td',
                    null,
                    'Tooltip \u5185\u5bb9\uff0c\u8bbe\u7f6e title \u4e3a null \u65f6\uff0cTooltip \u4e0d\u4f1a\u663e\u793a',
                  ),
                  o.a.createElement('td', null, 'React.ReactNode'),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'color'),
                  o.a.createElement('td', null, '\u80cc\u666f\u989c\u8272'),
                  o.a.createElement('td', null, 'string'),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'defaultVisible'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u9ed8\u8ba4\u662f\u5426\u663e\u9690',
                  ),
                  o.a.createElement('td', null, 'boolean'),
                  o.a.createElement('td', null, 'false'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'space'),
                  o.a.createElement(
                    'td',
                    null,
                    'Tooltip \u548c children \u7684\u95f4\u8ddd\uff0c\u5355\u4f4d\uff1apx',
                  ),
                  o.a.createElement('td', null, 'number'),
                  o.a.createElement('td', null, '12'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'container'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u6d6e\u5c42\u6e32\u67d3\u7236\u8282\u70b9\uff0c\u9ed8\u8ba4\u6e32\u67d3\u5230 body \u4e0a',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    'React.ReactInstance | (() => React.ReactInstance)',
                  ),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'placement'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u6c14\u6ce1\u6846\u4f4d\u7f6e',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'top'),
                    ' ',
                    o.a.createElement('code', null, 'left'),
                    ' ',
                    o.a.createElement('code', null, 'right'),
                    ' ',
                    o.a.createElement('code', null, 'bottom'),
                    ' ',
                    o.a.createElement('code', null, 'topLeft'),
                    ' ',
                    o.a.createElement('code', null, 'topRight'),
                    ' ',
                    o.a.createElement('code', null, 'bottomLeft'),
                    ' ',
                    o.a.createElement('code', null, 'bottomRight'),
                    ' ',
                    o.a.createElement('code', null, 'leftTop'),
                    ' ',
                    o.a.createElement('code', null, 'leftBottom'),
                    ' ',
                    o.a.createElement('code', null, 'rightTop'),
                    ' ',
                    o.a.createElement('code', null, 'rightBottom'),
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'top'),
                  ),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'trigger'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u89e6\u53d1\u884c\u4e3a\uff0c\u53ef\u4f7f\u7528\u6570\u7ec4\u8bbe\u7f6e\u591a\u4e2a\u89e6\u53d1\u884c\u4e3a',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'hover'),
                    ' ',
                    o.a.createElement('code', null, 'focus'),
                    ' ',
                    o.a.createElement('code', null, 'click'),
                    ' ',
                    o.a.createElement('code', null, 'string[]'),
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'hover'),
                  ),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'enterDelay'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u9f20\u6807\u79fb\u5165\u540e\u5ef6\u65f6\u591a\u5c11\u624d\u663e\u793a Tooltip\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2',
                  ),
                  o.a.createElement('td', null, 'number'),
                  o.a.createElement('td', null, '100'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'leaveDelay'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u9f20\u6807\u79fb\u51fa\u540e\u5ef6\u65f6\u591a\u5c11\u624d\u9690\u85cf Tooltip\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2',
                  ),
                  o.a.createElement('td', null, 'number'),
                  o.a.createElement('td', null, '100'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'arrow'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u5c55\u793a\u7bad\u5934',
                  ),
                  o.a.createElement('td', null, 'boolean'),
                  o.a.createElement('td', null, 'true'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'className'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u6d6e\u5c42\u7684\u7c7b\u540d',
                  ),
                  o.a.createElement('td', null, 'string'),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'style'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u6d6e\u5c42\u7684\u6837\u5f0f',
                  ),
                  o.a.createElement('td', null, 'React.CSSProperties'),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'visible'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u7528\u4e8e\u624b\u52a8\u63a7\u5236\u6d6e\u5c42\u663e\u9690',
                  ),
                  o.a.createElement('td', null, 'boolean'),
                  o.a.createElement('td', null, 'false'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'onChange'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u663e\u793a\u9690\u85cf\u7684\u56de\u8c03',
                  ),
                  o.a.createElement('td', null, '(visible: boolean) => void'),
                  o.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
