const VALUETEXT = 'git config --global user.name  "New Sheriff in Town"\n' +
    'git reset $(git commit-tree HEAD^{tree} -m "Legacy code")\n' +
    'git push origin master --force\n'

const VALUETITLE = 'how to gain dominance among developers'

const VALUETIME = '10 Minutes'

const VALUESYNTAX = 'Bash'

module.exports = {
    VALUETEXT,
    VALUETITLE,
    VALUETIME,
    VALUESYNTAX
}