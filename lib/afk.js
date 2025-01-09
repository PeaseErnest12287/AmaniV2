function hi() {
    console.log("Hello World!");
  }
  hi();
  const fs = require('fs');
  const addAfkUser = (_0x16ec8b, _0x2abb8e, _0x241212, _0x250f3f) => {
    const _0x442b4a = {
      'id': _0x16ec8b,
      'time': _0x2abb8e,
      'reason': _0x241212
    };
    _0x250f3f.push(_0x442b4a);
    fs.writeFileSync('./database/afk.json', JSON.stringify(_0x250f3f, null, 0x2));
  };
  const checkAfkUser = (_0x4f5398, _0x5007fc) => {
    let _0x36f093 = false;
    Object.keys(_0x5007fc).forEach(_0x3d5fce => {
      if (_0x5007fc[_0x3d5fce].id === _0x4f5398) {
        _0x36f093 = true;
      }
    });
    return _0x36f093;
  };
  const getAfkReason = (_0x1b4c22, _0xb2244f) => {
    let _0x3537e9 = null;
    Object.keys(_0xb2244f).forEach(_0x9549c7 => {
      if (_0xb2244f[_0x9549c7].id === _0x1b4c22) {
        _0x3537e9 = _0x9549c7;
      }
    });
    if (_0x3537e9 !== null) {
      return _0xb2244f[_0x3537e9].reason;
    }
  };
  const getAfkTime = (_0x132c49, _0x146a92) => {
    let _0x3ca897 = null;
    Object.keys(_0x146a92).forEach(_0x5f2256 => {
      if (_0x146a92[_0x5f2256].id === _0x132c49) {
        _0x3ca897 = _0x5f2256;
      }
    });
    if (_0x3ca897 !== null) {
      return _0x146a92[_0x3ca897].time;
    }
  };
  const getAfkId = (_0x479aec, _0x38ae85) => {
    let _0x490705 = null;
    Object.keys(_0x38ae85).forEach(_0x292aec => {
      if (_0x38ae85[_0x292aec].id === _0x479aec) {
        _0x490705 = _0x292aec;
      }
    });
    if (_0x490705 !== null) {
      return _0x38ae85[_0x490705].id;
    }
  };
  const getAfkPosition = (_0x44c020, _0x5cd89b) => {
    let _0x5b501f = null;
    Object.keys(_0x5cd89b).forEach(_0x463740 => {
      if (_0x5cd89b[_0x463740].id === _0x44c020) {
        _0x5b501f = _0x463740;
      }
    });
    return _0x5b501f;
  };
  module.exports = {
    'addAfkUser': addAfkUser,
    'checkAfkUser': checkAfkUser,
    'getAfkReason': getAfkReason,
    'getAfkTime': getAfkTime,
    'getAfkId': getAfkId,
    'getAfkPosition': getAfkPosition
  };