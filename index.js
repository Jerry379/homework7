/*
 * @Author: kael 
 * @Date: 2018-02-14 17:50:28 
 * @Last Modified by: kael
 * @Last Modified time: 2018-07-10 16:50:09
 */

module.exports = {
  mobile: /^1\d{10}$/,
  qq: /^[1-9]\d{4,10}$/,
  number: /^[-+]?(?:\d+(?:\.\d*)|(?:\d*\.)?\d+)$/,
  email: /^\w+@\w+.\w+$/,
  url: /^http[s]?:\/\/\S+$/,
  ipv4: /^(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))$/,
  idcard: /^\d{6}(1\d{3})|(20[0-1]{1}\d{1})(0\d{1})|(1[012]{1})[0-3]\d{1}\d{3}(\d|X)$/,
};