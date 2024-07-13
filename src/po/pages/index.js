const FormPage = require("./form.page");
const ResultPage = require("./result.page");

/**
 * @param {*} name {'form' | 'result}
 * @returns {FormPage | ResultPage}
 */
function pages(name) {
    const items = {
        form: new FormPage(),
        result: new ResultPage()
    }
    return items[name.toLowerCase()]
}
module.exports = {
    FormPage,
    ResultPage,
    pages
}