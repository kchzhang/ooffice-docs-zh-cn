/* 动态添加css
 * @param {String}  url 指定要加载的css地址
 */

export function loadLink(url) {
    var doc = document;
    var link = doc.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", url);

    var heads = doc.getElementsByTagName("head");
    if (heads.length) {
        heads[0].appendChild(link);
    } else {
        doc.documentElement.appendChild(link);
    }
}

/**
 * 串行加载指定的脚本
 * 串行加载[异步]逐个加载，每个加载完成后加载下一个
 * 全部加载完成后执行回调
 * @param {Array|String}  scripts 指定要加载的脚本
 * @param {Object} options 属性设置
 * @param {Function} callback 成功后回调的函数
 * @return {Array} 所有生成的脚本元素对象数组
 */

export function seriesLoadScripts(scripts, options, callback) {
    if (typeof scripts !== "object") {
        var scripts = [scripts];
    }
    var HEAD = document.getElementsByTagName("head")[0] || document.documentElement;
    var s = [];
    var last = scripts.length - 1;
    //递归
    var recursiveLoad = function (i) {
        s[i] = document.createElement("script");
        s[i].setAttribute("type", "text/javascript");
        // Attach handlers for all browsers
        // 异步
        s[i].onload = s[i].onreadystatechange = function () {
            if (!(/*@cc_on!@*/ 0) || this.readyState === "loaded" || this.readyState === "complete") {
                this.onload = this.onreadystatechange = null;
                this.parentNode.removeChild(this);
                if (i !== last) {
                    recursiveLoad(i + 1);
                } else if (typeof callback === "function") {
                    callback();
                }
            }
        };
        // 同步
        s[i].setAttribute("src", scripts[i]);

        // 设置属性
        if (typeof options === "object") {
            for (var attr in options) {
                s[i].setAttribute(attr, options[attr]);
            }
        }

        HEAD.appendChild(s[i]);
    };
    recursiveLoad(0);
}

/**
 * 并行加载指定的脚本
 * 并行加载[同步]同时加载，不管上个是否加载完成，直接加载全部
 * 全部加载完成后执行回调
 * @param {Array|String}  scripts 指定要加载的脚本
 * @param {Object} options 属性设置
 * @param {Function} callback 成功后回调的函数
 * @return {Array} 所有生成的脚本元素对象数组
 */

export function parallelLoadScripts(scripts, options, callback) {
    if (typeof scripts !== "object") {
        var scripts = [scripts];
    }
    var HEAD = document.getElementsByTagName("head")[0] || document.documentElement;
    var s = [];
    var loaded = 0;
    for (var i = 0; i < scripts.length; i++) {
        s[i] = document.createElement("script");
        s[i].setAttribute("type", "text/javascript");
        // Attach handlers for all browsers
        // 异步
        s[i].onload = s[i].onreadystatechange = function () {
            if (!(/*@cc_on!@*/ 0) || this.readyState === "loaded" || this.readyState === "complete") {
                loaded++;
                this.onload = this.onreadystatechange = null;
                this.parentNode.removeChild(this);
                if (loaded === scripts.length && typeof callback === "function") callback();
            }
        };
        // 同步
        s[i].setAttribute("src", scripts[i]);

        // 设置属性
        if (typeof options === "object") {
            for (var attr in options) {
                s[i].setAttribute(attr, options[attr]);
            }
        }

        HEAD.appendChild(s[i]);
    }
}

export async function fetchExcelFile(url) {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new File([blob], "filename.xlsx", {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
    } catch (error) {
        console.error("Failed to fetch the file:", error);
    }
}