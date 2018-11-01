!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var u = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(u.exports, u, u.exports, n), (u.l = !0), u.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var u in e)
          n.d(
            r,
            u,
            function(t) {
              return e[t];
            }.bind(null, u)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = '/'),
    n((n.s = 4));
})([
  function(e, t) {
    e.exports = require('react');
  },
  function(e, t) {
    e.exports = require('redux');
  },
  function(e, t) {
    e.exports = require('react-redux');
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    (t.REQUEST_STATS = 'REQUEST_STATS'),
      (t.RECEIVE_STATS = 'RECEIVE_STATS'),
      (t.ERROR_STATS = 'ERROR STATS');
  },
  function(e, t, n) {
    'use strict';
    var r = s(n(5)),
      u = s(n(6)),
      o = s(n(0)),
      i = n(7),
      a = n(2),
      c = (s(n(8)), n(9)),
      l = s(n(11)),
      f = s(n(16));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var d = (0, r.default)();
    d.use((0, u.default)()),
      d.use(r.default.static('public')),
      d.get('*', function(e, t, n) {
        f.default.getState();
        var r = (0, i.renderToString)(
          o.default.createElement(
            a.Provider,
            { store: f.default },
            o.default.createElement(l.default, null)
          )
        );
        t.send(
          '<!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>Title</title>\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <script src="/bundle.js" defer></script>\n    </head>\n    <body>\n    <div id="root">' +
            r +
            '</div>\n    </body>\n    </html>'
        );
      }),
      d.listen(c.PORT, function() {
        console.log('Web server listening on: ' + c.PORT);
      });
  },
  function(e, t) {
    e.exports = require('express');
  },
  function(e, t) {
    e.exports = require('cors');
  },
  function(e, t) {
    e.exports = require('react-dom/server');
  },
  function(e, t) {
    e.exports = require('serialize-javascript');
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.PORT = t.ENVIRONMENT = void 0);
    var r = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(10));
    var u = process.env.PORT || r.default.WEB_SERVER.PORT;
    (t.ENVIRONMENT = 'production'), (t.PORT = u);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = { WEB_SERVER: { PORT: 30012 } });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      u = n(0),
      o = a(u),
      i = a(n(12));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
          (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          )
        );
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, u.Component),
        r(t, [
          {
            key: 'render',
            value: function() {
              return o.default.createElement(
                'div',
                null,
                o.default.createElement(i.default, null)
              );
            }
          }
        ]),
        t
      );
    })();
    t.default = c;
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(2),
      u = n(1),
      o = n(13),
      i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(15));
    t.default = (0, r.connect)(
      function(e) {
        return { stats: e.stats };
      },
      function(e) {
        return (0, u.bindActionCreators)({ getStats: o.getStats }, e);
      }
    )(i.default);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.getStats = void 0);
    var r = n(14);
    t.getStats = r.getStats;
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.getStats = void 0);
    var r = n(3);
    t.getStats = function() {
      return function(e) {
        return (
          e({ type: r.REQUEST_STATS }),
          fetch(
            'https://api.coinmarketcap.com/v2/ticker/?start=101&limit=10&sort=id&structure=array'
          )
            .then(function(e) {
              return e.json();
            })
            .then(function(t) {
              return e(
                (function(e) {
                  return { type: r.RECEIVE_STATS, payload: e };
                })(t.data)
              );
            })
            .catch(function(t) {
              return e(
                (function(e) {
                  return { type: r.ERROR_STATS, payload: e };
                })()
              );
            })
        );
      };
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      u = n(0),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(u);
    var i = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
          (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          )
        );
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, u.Component),
        r(t, [
          {
            key: 'componentDidMount',
            value: function() {
              (0, this.props.getStats)();
            }
          },
          {
            key: 'render',
            value: function() {
              var e = this.props.stats;
              return 0 === e.length
                ? o.default.createElement('h1', null, ' Loadng!!')
                : o.default.createElement(
                    'div',
                    null,
                    e.map(function(e) {
                      return o.default.createElement('h1', null, e.name);
                    })
                  );
            }
          }
        ]),
        t
      );
    })();
    t.default = i;
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = i(n(17)),
      u = n(1),
      o = i(n(18));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = (0, u.createStore)(o.default, (0, u.applyMiddleware)(r.default));
    t.default = a;
  },
  function(e, t) {
    e.exports = require('redux-thunk');
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(1),
      u = n(19);
    t.default = (0, r.combineReducers)({
      stats: u.stats,
      requestStatus: u.requestStatus
    });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.stats = t.requestStatus = void 0);
    var r = n(3);
    (t.requestStatus = function() {
      var e =
        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      switch (arguments[1].type) {
        case r.REQUEST_STATS:
          return !0;
        case r.ERROR_STATS:
          return !1;
        default:
          return e;
      }
    }),
      (t.stats = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments[1];
        switch (t.type) {
          case r.RECEIVE_STATS:
            return t.payload;
          default:
            return e;
        }
      });
  }
]);
