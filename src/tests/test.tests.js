
const {pages} = require('./../po')
const {VALUETEXT, VALUETITLE, VALUETIME, VALUESYNTAX} = require('./values/values')
describe('Pastebin', () => {

    beforeEach(async () => {
        await pages('form').open()

    })
    it('Pastebin steps', async () => {
        await pages('form').newFormBtn.click()
        await pages('form').form.input('text').setValue(VALUETEXT)
        await pages('form').selectSyntax(VALUESYNTAX)
        await pages('form').selectExpiration(VALUETIME);
        await pages('form').form.input('title').setValue(VALUETITLE)
        await pages('form').form.submitBtn.click()

        const result = await pages('result').open()
        await $('.post-create').waitForExist({ timeout: 5000 })

        expect(await result.getResultItem('text').getText()).isEqual(VALUETEXT);
        expect(await result.getResultItem('expiration').getText()).isEqual(VALUETIME);
        expect(await result.getResultItem('syntax').getText()).isEqual(VALUESYNTAX);
        expect(await result.getResultItem('title').getText()).isEqual(VALUETITLE);
    })
})

