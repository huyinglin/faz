(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [5],
  {
    '3PQu': function(e, n, t) {
      var a = t('z01/');
      function r() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (r = function() {
            return e;
          }),
          e
        );
      }
      function l(e) {
        if (e && e.__esModule) return e;
        if (null === e || ('object' !== a(e) && 'function' !== typeof e))
          return { default: e };
        var n = r();
        if (n && n.has(e)) return n.get(e);
        var t = {},
          l = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var u = l ? Object.getOwnPropertyDescriptor(e, o) : null;
            u && (u.get || u.set)
              ? Object.defineProperty(t, o, u)
              : (t[o] = e[o]);
          }
        return (t['default'] = e), n && n.set(e, t), t;
      }
      e.exports = l;
    },
    Iq7E: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t('0Owb'),
        r = t('q1tI'),
        l = t.n(r),
        o = (t('B2uJ'), t('+su7'), t('qOys'), t('5Yjd')),
        u = t.n(o),
        c = l.a.memo(function() {
          var e = t('K+nK'),
            n = e(t('qqnG')),
            a = e(t('q1tI')),
            r = t('/7QA'),
            l = e(t('vOnD'));
          function o() {
            var e = (0, n['default'])([
              '\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  color: #fff;\n  font-size: 40px;\n  background: ',
              ';\n',
            ]);
            return (
              (o = function() {
                return e;
              }),
              e
            );
          }
          var u = l['default'].h3(o(), function(e) {
            return e.background;
          });
          function c(e) {
            console.log('key:', e);
          }
          var i = function() {
            return a['default'].createElement(
              r.Carousel,
              { onChange: c },
              a['default'].createElement(
                r.Carousel.Item,
                { key: '1' },
                a['default'].createElement(
                  u,
                  { background: 'MediumAquaMarine' },
                  '1',
                ),
              ),
              a['default'].createElement(
                r.Carousel.Item,
                { key: '2' },
                a['default'].createElement(
                  u,
                  { background: 'LightSeaGreen' },
                  '2',
                ),
              ),
              a['default'].createElement(
                r.Carousel.Item,
                { key: '3' },
                a['default'].createElement(u, { background: 'Coral' }, '3'),
              ),
            );
          };
          return a['default'].createElement(i);
        }),
        i = l.a.memo(function() {
          var e = t('K+nK'),
            n = e(t('qqnG')),
            a = e(t('q1tI')),
            r = t('/7QA'),
            l = e(t('vOnD'));
          function o() {
            var e = (0, n['default'])([
              '\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ',
              ';\n',
            ]);
            return (
              (o = function() {
                return e;
              }),
              e
            );
          }
          var u = l['default'].h3(o(), function(e) {
              return e.background;
            }),
            c = function() {
              return a['default'].createElement(
                r.Carousel,
                { autoplay: !0, autoplayDuration: 2e3 },
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '1' },
                  a['default'].createElement(
                    u,
                    { background: 'MediumAquaMarine' },
                    '1',
                  ),
                ),
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '2' },
                  a['default'].createElement(
                    u,
                    { background: 'LightSeaGreen' },
                    '2',
                  ),
                ),
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '3' },
                  a['default'].createElement(u, { background: 'Coral' }, '3'),
                ),
              );
            };
          return a['default'].createElement(c);
        }),
        m = l.a.memo(function() {
          var e = t('K+nK'),
            n = e(t('qqnG')),
            a = e(t('q1tI')),
            r = t('/7QA'),
            l = e(t('vOnD'));
          function o() {
            var e = (0, n['default'])([
              '\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ',
              ';\n',
            ]);
            return (
              (o = function() {
                return e;
              }),
              e
            );
          }
          var u = l['default'].h3(o(), function(e) {
              return e.background;
            }),
            c = function() {
              return a['default'].createElement(
                r.Carousel,
                { showDots: !1 },
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '1' },
                  a['default'].createElement(
                    u,
                    { background: 'MediumAquaMarine' },
                    '1',
                  ),
                ),
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '2' },
                  a['default'].createElement(
                    u,
                    { background: 'LightSeaGreen' },
                    '2',
                  ),
                ),
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '3' },
                  a['default'].createElement(u, { background: 'Coral' }, '3'),
                ),
              );
            };
          return a['default'].createElement(c);
        }),
        s = l.a.memo(function() {
          var e = t('K+nK'),
            n = e(t('qqnG')),
            a = e(t('q1tI')),
            r = t('/7QA'),
            l = e(t('vOnD'));
          function o() {
            var e = (0, n['default'])([
              '\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ',
              ';\n',
            ]);
            return (
              (o = function() {
                return e;
              }),
              e
            );
          }
          var u = l['default'].h3(o(), function(e) {
              return e.background;
            }),
            c = function() {
              return a['default'].createElement(
                r.Carousel,
                { dotType: 'circle' },
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '1' },
                  a['default'].createElement(
                    u,
                    { background: 'MediumAquaMarine' },
                    '1',
                  ),
                ),
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '2' },
                  a['default'].createElement(
                    u,
                    { background: 'LightSeaGreen' },
                    '2',
                  ),
                ),
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '3' },
                  a['default'].createElement(u, { background: 'Coral' }, '3'),
                ),
              );
            };
          return a['default'].createElement(c);
        }),
        d = l.a.memo(function() {
          var e = t('K+nK'),
            n = e(t('qqnG')),
            a = e(t('q1tI')),
            r = t('/7QA'),
            l = e(t('vOnD'));
          function o() {
            var e = (0, n['default'])([
              '\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ',
              ';\n',
            ]);
            return (
              (o = function() {
                return e;
              }),
              e
            );
          }
          var u = l['default'].h3(o(), function(e) {
              return e.background;
            }),
            c = function() {
              return a['default'].createElement(
                r.Carousel,
                {
                  dotStyle: {
                    background: 'Crimson',
                    width: 40,
                    height: 3,
                    margin: '0 4px',
                    activeOpacity: 0.85,
                    opacity: 0.25,
                  },
                },
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '1' },
                  a['default'].createElement(
                    u,
                    { background: 'MediumAquaMarine' },
                    '1',
                  ),
                ),
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '2' },
                  a['default'].createElement(
                    u,
                    { background: 'LightSeaGreen' },
                    '2',
                  ),
                ),
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '3' },
                  a['default'].createElement(u, { background: 'Coral' }, '3'),
                ),
              );
            };
          return a['default'].createElement(c);
        }),
        f = l.a.memo(function() {
          var e = t('K+nK'),
            n = e(t('qqnG')),
            a = e(t('q1tI')),
            r = t('/7QA'),
            l = e(t('vOnD'));
          function o() {
            var e = (0, n['default'])([
              '\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ',
              ';\n',
            ]);
            return (
              (o = function() {
                return e;
              }),
              e
            );
          }
          var u = l['default'].h3(o(), function(e) {
              return e.background;
            }),
            c = function() {
              return a['default'].createElement(
                r.Carousel,
                {
                  animation: {
                    timingFunction: 'ease-in-out',
                    duration: 0.3,
                    delay: 0,
                  },
                },
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '1' },
                  a['default'].createElement(
                    u,
                    { background: 'MediumAquaMarine' },
                    '1',
                  ),
                ),
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '2' },
                  a['default'].createElement(
                    u,
                    { background: 'LightSeaGreen' },
                    '2',
                  ),
                ),
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '3' },
                  a['default'].createElement(u, { background: 'Coral' }, '3'),
                ),
              );
            };
          return a['default'].createElement(c);
        }),
        p = l.a.memo(function() {
          var e = t('K+nK'),
            n = e(t('qqnG')),
            a = e(t('q1tI')),
            r = t('/7QA'),
            l = e(t('vOnD'));
          function o() {
            var e = (0, n['default'])([
              '\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ',
              ';\n',
            ]);
            return (
              (o = function() {
                return e;
              }),
              e
            );
          }
          var u = l['default'].h3(o(), function(e) {
              return e.background;
            }),
            c = function() {
              return a['default'].createElement(
                r.Carousel,
                { arrows: !1 },
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '1' },
                  a['default'].createElement(
                    u,
                    { background: 'MediumAquaMarine' },
                    '1',
                  ),
                ),
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '2' },
                  a['default'].createElement(
                    u,
                    { background: 'LightSeaGreen' },
                    '2',
                  ),
                ),
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '3' },
                  a['default'].createElement(u, { background: 'Coral' }, '3'),
                ),
              );
            };
          return a['default'].createElement(c);
        }),
        g = l.a.memo(function() {
          var e = t('K+nK'),
            n = e(t('qqnG')),
            a = e(t('q1tI')),
            r = t('/7QA'),
            l = e(t('vOnD'));
          function o() {
            var e = (0, n['default'])([
              '\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ',
              ';\n',
            ]);
            return (
              (o = function() {
                return e;
              }),
              e
            );
          }
          var u = l['default'].h3(o(), function(e) {
              return e.background;
            }),
            c = function() {
              return a['default'].createElement(
                r.Carousel,
                { nextArrow: '>', prevArrow: '<' },
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '1' },
                  a['default'].createElement(
                    u,
                    { background: 'MediumAquaMarine' },
                    '1',
                  ),
                ),
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '2' },
                  a['default'].createElement(
                    u,
                    { background: 'LightSeaGreen' },
                    '2',
                  ),
                ),
                a['default'].createElement(
                  r.Carousel.Item,
                  { key: '3' },
                  a['default'].createElement(u, { background: 'Coral' }, '3'),
                ),
              );
            };
          return a['default'].createElement(c);
        }),
        C = l.a.memo(function() {
          var e = t('3PQu'),
            n = t('K+nK'),
            a = n(t('qqnG')),
            r = e(t('q1tI')),
            l = t('/7QA'),
            o = n(t('vOnD'));
          function u() {
            var e = (0, a['default'])([
              '\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ',
              ';\n',
            ]);
            return (
              (u = function() {
                return e;
              }),
              e
            );
          }
          var c = o['default'].h3(u(), function(e) {
              return e.background;
            }),
            i = (0, r.useRef)(null);
          function m() {
            null === i || void 0 === i || i.current.prev();
          }
          function s() {
            null === i || void 0 === i || i.current.next();
          }
          function d(e, n) {
            null === i || void 0 === i || i.current['goto'](e, n);
          }
          var f = function() {
            return r['default'].createElement(
              'div',
              null,
              r['default'].createElement(
                l.Button,
                { style: { marginRight: 8 }, type: 'primary', onClick: m },
                'Prev Page',
              ),
              r['default'].createElement(
                l.Button,
                { style: { marginRight: 8 }, type: 'primary', onClick: s },
                'Next Page',
              ),
              r['default'].createElement(l.Input, {
                style: { width: 200 },
                placeholder: 'input goto key',
                onChange: function(e) {
                  return d(e.target.value, !0);
                },
              }),
              r['default'].createElement(
                l.Carousel,
                { ref: i, style: { marginTop: 16 } },
                r['default'].createElement(
                  l.Carousel.Item,
                  { key: '1' },
                  r['default'].createElement(
                    c,
                    { background: 'MediumAquaMarine' },
                    '1',
                  ),
                ),
                r['default'].createElement(
                  l.Carousel.Item,
                  { key: '2' },
                  r['default'].createElement(
                    c,
                    { background: 'LightSeaGreen' },
                    '2',
                  ),
                ),
                r['default'].createElement(
                  l.Carousel.Item,
                  { key: '3' },
                  r['default'].createElement(c, { background: 'Coral' }, '3'),
                ),
              ),
            );
          };
          return r['default'].createElement(f);
        });
      n['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h2',
              { id: 'carousel-\u8d70\u9a6c\u706f' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#carousel-\u8d70\u9a6c\u706f' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Carousel \u8d70\u9a6c\u706f',
            ),
            l.a.createElement('hr', null),
            l.a.createElement(
              'h3',
              { id: '\u57fa\u672c' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u672c' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u672c',
            ),
          ),
          l.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    'import React from \'react\';\nimport { Carousel } from \'faz-ui\';\nimport styled from \'styled-components\';\n\nconst CarouselView = styled.h3`\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  color: #fff;\n  font-size: 40px;\n  background: ${props => props.background};\n`;\n\nfunction onChange(key: string) {\n  console.log(\'key:\', key);\n}\n\nexport default () =>\n  <Carousel onChange={onChange}>\n    <Carousel.Item key="1">\n      <CarouselView background="MediumAquaMarine">1</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="2">\n      <CarouselView background="LightSeaGreen">2</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="3">\n      <CarouselView background="Coral">3</CarouselView>\n    </Carousel.Item>\n  </Carousel>',
                  jsx:
                    'import React from \'react\';\nimport { Carousel } from \'faz-ui\';\nimport styled from \'styled-components\';\n\nconst CarouselView = styled.h3`\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  color: #fff;\n  font-size: 40px;\n  background: ${props => props.background};\n`;\n\nfunction onChange(key) {\n  console.log(\'key:\', key);\n}\n\nexport default () => (\n  <Carousel onChange={onChange}>\n    <Carousel.Item key="1">\n      <CarouselView background="MediumAquaMarine">1</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="2">\n      <CarouselView background="LightSeaGreen">2</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="3">\n      <CarouselView background="Coral">3</CarouselView>\n    </Carousel.Item>\n  </Carousel>\n);\n',
                },
              },
              {
                title: 'Basic',
                desc:
                  '<div class="markdown"><p>\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002</p></div>',
                dependencies: {
                  'faz-ui': '1.0.4',
                  'styled-components': '5.1.1',
                },
                files: {},
              },
            ),
            l.a.createElement(c, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h3',
              { id: '\u81ea\u52a8\u5207\u6362' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u81ea\u52a8\u5207\u6362' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u81ea\u52a8\u5207\u6362',
            ),
          ),
          l.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Carousel } from \'faz-ui\';\nimport styled from \'styled-components\';\n\nconst CarouselView = styled.h3`\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ${props => props.background};\n`;\n\nexport default () =>\n  <Carousel\n    autoplay\n    autoplayDuration={2 * 1000}\n  >\n    <Carousel.Item key="1">\n      <CarouselView background="MediumAquaMarine">1</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="2">\n      <CarouselView background="LightSeaGreen">2</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="3">\n      <CarouselView background="Coral">3</CarouselView>\n    </Carousel.Item>\n  </Carousel>',
                },
              },
              {
                title: 'Autoplay & AutoplayDuration',
                desc:
                  '<div class="markdown"><p>\u8bbe\u7f6e\u662f\u5426\u81ea\u52a8\u5207\u6362\u3002\u4f7f\u7528 autoplayDuration \u5c5e\u6027\u53ef\u8bbe\u7f6e\u81ea\u52a8\u5207\u6362\u65f6\u95f4\uff0c \u5355\u4f4d\uff1a\u6beb\u79d2\u3002</p></div>',
                dependencies: {
                  'faz-ui': '1.0.4',
                  'styled-components': '5.1.1',
                },
                files: {},
              },
            ),
            l.a.createElement(i, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h3',
              { id: '\u9762\u677f\u6307\u793a\u70b9' },
              l.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u9762\u677f\u6307\u793a\u70b9',
                },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u9762\u677f\u6307\u793a\u70b9',
            ),
          ),
          l.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Carousel } from \'faz-ui\';\nimport styled from \'styled-components\';\n\nconst CarouselView = styled.h3`\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ${props => props.background};\n`;\n\nexport default () =>\n  <Carousel showDots={false}>\n    <Carousel.Item key="1">\n      <CarouselView background="MediumAquaMarine">1</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="2">\n      <CarouselView background="LightSeaGreen">2</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="3">\n      <CarouselView background="Coral">3</CarouselView>\n    </Carousel.Item>\n  </Carousel>',
                },
              },
              {
                title: 'ShowDots',
                desc:
                  '<div class="markdown"><p>\u662f\u5426\u5c55\u793a\u9762\u677f\u6307\u793a\u70b9\u3002</p></div>',
                dependencies: {
                  'faz-ui': '1.0.4',
                  'styled-components': '5.1.1',
                },
                files: {},
              },
            ),
            l.a.createElement(m, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h3',
              { id: '\u9762\u677f\u6307\u793a\u70b9\u7c7b\u578b' },
              l.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u9762\u677f\u6307\u793a\u70b9\u7c7b\u578b',
                },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u9762\u677f\u6307\u793a\u70b9\u7c7b\u578b',
            ),
          ),
          l.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Carousel } from \'faz-ui\';\nimport styled from \'styled-components\';\n\nconst CarouselView = styled.h3`\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ${props => props.background};\n`;\n\nexport default () =>\n  <Carousel dotType="circle">\n    <Carousel.Item key="1">\n      <CarouselView background="MediumAquaMarine">1</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="2">\n      <CarouselView background="LightSeaGreen">2</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="3">\n      <CarouselView background="Coral">3</CarouselView>\n    </Carousel.Item>\n  </Carousel>',
                },
              },
              {
                title: 'DotType',
                desc:
                  '<div class="markdown"><p>\u6307\u5b9a\u9762\u677f\u6307\u793a\u70b9\u7c7b\u578b\uff0c\u53ef\u9009 <code>line</code> | <code>circle</code>\u3002</p></div>',
                dependencies: {
                  'faz-ui': '1.0.4',
                  'styled-components': '5.1.1',
                },
                files: {},
              },
            ),
            l.a.createElement(s, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'p',
              null,
              l.a.createElement('strong', null, 'DotStyle'),
            ),
            l.a.createElement(
              'h3',
              { id: '\u9762\u677f\u6307\u793a\u70b9\u6837\u5f0f' },
              l.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u9762\u677f\u6307\u793a\u70b9\u6837\u5f0f',
                },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u9762\u677f\u6307\u793a\u70b9\u6837\u5f0f',
            ),
          ),
          l.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Carousel } from \'faz-ui\';\nimport styled from \'styled-components\';\n\nconst CarouselView = styled.h3`\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ${props => props.background};\n`;\n\nexport default () =>\n  <Carousel\n    dotStyle={{\n      background: \'Crimson\',\n      width: 40,\n      height: 3,\n      margin: \'0 4px\',\n      activeOpacity: .85,\n      opacity: .25,\n    }}\n  >\n    <Carousel.Item key="1">\n      <CarouselView background="MediumAquaMarine">1</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="2">\n      <CarouselView background="LightSeaGreen">2</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="3">\n      <CarouselView background="Coral">3</CarouselView>\n    </Carousel.Item>\n  </Carousel>',
                },
              },
              {
                title: 'DotStyle',
                desc:
                  '<div class="markdown"><p>\u8bbe\u7f6e\u9762\u677f\u6307\u793a\u70b9\u6837\u5f0f\u3002</p></div>',
                dependencies: {
                  'faz-ui': '1.0.4',
                  'styled-components': '5.1.1',
                },
                files: {},
              },
            ),
            l.a.createElement(d, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h3',
              { id: '\u5207\u6362\u52a8\u753b' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u5207\u6362\u52a8\u753b' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5207\u6362\u52a8\u753b',
            ),
          ),
          l.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Carousel } from \'faz-ui\';\nimport styled from \'styled-components\';\n\nconst CarouselView = styled.h3`\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ${props => props.background};\n`;\n\nexport default () =>\n  <Carousel animation={{ timingFunction: \'ease-in-out\', duration: 0.3, delay: 0 }}>\n    <Carousel.Item key="1">\n      <CarouselView background="MediumAquaMarine">1</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="2">\n      <CarouselView background="LightSeaGreen">2</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="3">\n      <CarouselView background="Coral">3</CarouselView>\n    </Carousel.Item>\n  </Carousel>',
                },
              },
              {
                title: 'Animation',
                desc:
                  '<div class="markdown"><p>\u81ea\u5b9a\u4e49\u9762\u677f\u5207\u6362\u52a8\u753b\uff0c\u53ef\u5b9a\u4e49 timingFunction | duration | delay\u3002</p></div>',
                dependencies: {
                  'faz-ui': '1.0.4',
                  'styled-components': '5.1.1',
                },
                files: {},
              },
            ),
            l.a.createElement(f, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h3',
              { id: '\u5bfc\u822a\u7bad\u5934' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u5bfc\u822a\u7bad\u5934' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5bfc\u822a\u7bad\u5934',
            ),
          ),
          l.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Carousel } from \'faz-ui\';\nimport styled from \'styled-components\';\n\nconst CarouselView = styled.h3`\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ${props => props.background};\n`;\n\nexport default () =>\n  <Carousel arrows={false}>\n    <Carousel.Item key="1">\n      <CarouselView background="MediumAquaMarine">1</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="2">\n      <CarouselView background="LightSeaGreen">2</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="3">\n      <CarouselView background="Coral">3</CarouselView>\n    </Carousel.Item>\n  </Carousel>',
                },
              },
              {
                title: 'Arrows',
                desc:
                  '<div class="markdown"><p>\u662f\u5426\u5c55\u793a\u4e0a\u4e00\u9875\u4e0b\u4e00\u9875\u5bfc\u822a\u7bad\u5934\u3002</p></div>',
                dependencies: {
                  'faz-ui': '1.0.4',
                  'styled-components': '5.1.1',
                },
                files: {},
              },
            ),
            l.a.createElement(p, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h3',
              { id: '\u81ea\u5b9a\u4e49\u5bfc\u822a\u7bad\u5934' },
              l.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u81ea\u5b9a\u4e49\u5bfc\u822a\u7bad\u5934',
                },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u81ea\u5b9a\u4e49\u5bfc\u822a\u7bad\u5934',
            ),
          ),
          l.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Carousel } from \'faz-ui\';\nimport styled from \'styled-components\';\n\nconst CarouselView = styled.h3`\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ${props => props.background};\n`;\n\nexport default () =>\n  <Carousel nextArrow=">" prevArrow="<">\n    <Carousel.Item key="1">\n      <CarouselView background="MediumAquaMarine">1</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="2">\n      <CarouselView background="LightSeaGreen">2</CarouselView>\n    </Carousel.Item>\n    <Carousel.Item key="3">\n      <CarouselView background="Coral">3</CarouselView>\n    </Carousel.Item>\n  </Carousel>',
                },
              },
              {
                title: 'NextArrow & PrevArrow',
                desc:
                  '<div class="markdown"><p>\u81ea\u5b9a\u4e49\u4e0a\u4e00\u9875\u4e0b\u4e00\u9875\u5bfc\u822a\u7bad\u5934\u3002</p></div>',
                dependencies: {
                  'faz-ui': '1.0.4',
                  'styled-components': '5.1.1',
                },
                files: {},
              },
            ),
            l.a.createElement(g, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h3',
              { id: '\u65b9\u6cd5\u8c03\u7528' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u65b9\u6cd5\u8c03\u7528' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u65b9\u6cd5\u8c03\u7528',
            ),
          ),
          l.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    'import React, { useState, useRef } from \'react\';\nimport { Carousel, Button, Input } from \'faz-ui\';\nimport styled from \'styled-components\';\n\nconst CarouselView = styled.h3`\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ${props => props.background};\n`;\n\nconst carouselRef = useRef(null);\n\nfunction onPrev() {\n  carouselRef?.current.prev();\n}\n\nfunction onNext() {\n  carouselRef?.current.next();\n}\n\nfunction onGoto(key: string, lockAnimation: boolean) {\n  carouselRef?.current.goto(key, lockAnimation);\n}\n\nexport default () =>\n  <div>\n    <Button style={{ marginRight: 8 }} type="primary" onClick={onPrev}>\n      Prev Page\n    </Button>\n    <Button style={{ marginRight: 8 }} type="primary" onClick={onNext}>\n      Next Page\n    </Button>\n    <Input\n      style={{ width: 200 }}\n      placeholder="input goto key"\n      onChange={e => onGoto(e.target.value, true)}\n    />\n    <Carousel ref={carouselRef} style={{ marginTop: 16 }}>\n      <Carousel.Item key="1">\n        <CarouselView background="MediumAquaMarine">1</CarouselView>\n      </Carousel.Item>\n      <Carousel.Item key="2">\n        <CarouselView background="LightSeaGreen">2</CarouselView>\n      </Carousel.Item>\n      <Carousel.Item key="3">\n        <CarouselView background="Coral">3</CarouselView>\n      </Carousel.Item>\n    </Carousel>\n  </div>',
                  jsx:
                    'import React, { useRef } from \'react\';\nimport { Carousel, Button, Input } from \'faz-ui\';\nimport styled from \'styled-components\';\n\nconst CarouselView = styled.h3`\n  color: #fff;\n  font-size: 40px;\n  margin: 0;\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: ${props => props.background};\n`;\nconst carouselRef = useRef(null);\n\nfunction onPrev() {\n  carouselRef?.current.prev();\n}\n\nfunction onNext() {\n  carouselRef?.current.next();\n}\n\nfunction onGoto(key, lockAnimation) {\n  carouselRef?.current.goto(key, lockAnimation);\n}\n\nexport default () => (\n  <div>\n    <Button\n      style={{\n        marginRight: 8,\n      }}\n      type="primary"\n      onClick={onPrev}\n    >\n      Prev Page\n    </Button>\n    <Button\n      style={{\n        marginRight: 8,\n      }}\n      type="primary"\n      onClick={onNext}\n    >\n      Next Page\n    </Button>\n    <Input\n      style={{\n        width: 200,\n      }}\n      placeholder="input goto key"\n      onChange={e => onGoto(e.target.value, true)}\n    />\n    <Carousel\n      ref={carouselRef}\n      style={{\n        marginTop: 16,\n      }}\n    >\n      <Carousel.Item key="1">\n        <CarouselView background="MediumAquaMarine">1</CarouselView>\n      </Carousel.Item>\n      <Carousel.Item key="2">\n        <CarouselView background="LightSeaGreen">2</CarouselView>\n      </Carousel.Item>\n      <Carousel.Item key="3">\n        <CarouselView background="Coral">3</CarouselView>\n      </Carousel.Item>\n    </Carousel>\n  </div>\n);\n',
                },
              },
              {
                title: 'Methods',
                desc:
                  '<div class="markdown"><p>\u4f7f\u7528 ref \u53ef\u8c03\u7528\u4ee5\u4e0b\u65b9\u6cd5 prev()\u3001next()\u3001goto(key, lockAnimation)\u3002</p></div>',
                dependencies: {
                  'faz-ui': '1.0.4',
                  'styled-components': '5.1.1',
                },
                files: {},
              },
            ),
            l.a.createElement(C, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h2',
              { id: 'api' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            l.a.createElement(
              'table',
              null,
              l.a.createElement(
                'thead',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('th', null, '\u5c5e\u6027'),
                  l.a.createElement('th', null, '\u8bf4\u660e'),
                  l.a.createElement('th', null, '\u7c7b\u578b'),
                  l.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              l.a.createElement(
                'tbody',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'autoplay'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u81ea\u52a8\u5207\u6362',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'true'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'autoplayDuration'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u52a8\u5207\u6362\u95f4\u9694\u65f6\u957f',
                  ),
                  l.a.createElement('td', null, 'number'),
                  l.a.createElement('td', null, '3000'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'arrows'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u5c55\u793a\u4e0a\u4e00\u9875\u4e0b\u4e00\u9875\u5bfc\u822a\u7bad\u5934',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'true'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'showDots'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u5c55\u793a\u9762\u677f\u6307\u793a\u70b9',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'true'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'animation'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u9762\u677f\u5207\u6362\u52a8\u753b',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement(
                      'code',
                      null,
                      '{',
                      ' timingFunction?: string; duration?: number; delay?: number; ',
                      '}',
                    ),
                  ),
                  l.a.createElement('td', null, '{}'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'nextArrow'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u4e0b\u4e00\u9875\u5bfc\u822a\u7bad\u5934',
                  ),
                  l.a.createElement('td', null, 'React.ReactNode'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'prevArrow'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u4e0a\u4e00\u9875\u5bfc\u822a\u7bad\u5934',
                  ),
                  l.a.createElement('td', null, 'React.ReactNode'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'dotType'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u9762\u677f\u6307\u793a\u70b9\u7c7b\u578b',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, 'line'),
                    ' ',
                    l.a.createElement('code', null, 'circle'),
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, 'line'),
                  ),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'dotStyle'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8986\u76d6\u9762\u677f\u6307\u793a\u70b9\u6837\u5f0f',
                  ),
                  l.a.createElement('td', null, 'object'),
                  l.a.createElement('td', null, '{}'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'style'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e Carousel Wrapper \u7684\u6837\u5f0f',
                  ),
                  l.a.createElement('td', null, 'React.CSSProperties'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'className'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e Carousel Wrapper \u7684\u7c7b\u540d',
                  ),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onChange'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u9762\u677f\u53d8\u5316\u65f6\u7684\u56de\u8c03',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement(
                      'code',
                      null,
                      '(slideKey: React.Key) => void',
                    ),
                  ),
                  l.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
