(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.FelaStyleSheet = factory());
}(this, function () { 'use strict';

  var StyleSheet = {
    create: function create(styles) {
      return Object.keys(styles).reduce(function (rules, rule) {
        if (typeof styles[rule] !== 'function') {
          rules[rule] = function () {
            return styles[rule];
          };
        } else {
          rules[rule] = styles[rule];
        }

        return rules;
      }, {});
    }
  };

  return StyleSheet;

}));
//# sourceMappingURL=fela-stylesheet.js.map