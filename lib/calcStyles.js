const allCSSRules = []
  let allCSSRulesStr = ''

  jqCalcStrArr.forEach(str => {
    let splitStr = str.split('\n')
    let selector = splitStr[0].replace(/(\$\(')([^']+)('\))/g, '$2')
    let ruleName = splitStr[1].replace(/(  \.css\(')([^']+)('\))/g, '$2')

    let calculated = (() => {
      try {
        return eval(str)
      } catch (err) {
        console.error(err)
      }
    })()

    if (calculated !== undefined) {
      let ruleStr = `

${selector} {
  ${ruleName}: ${calculated}
}

`

      allCSSRulesStr = allCSSRulesStr + ruleStr 

      allCSSRules.push(ruleStr)
    }
  })

  window.CSS_RULES_ARR = allCSSRules
  window.CSS_RULES_STR = allCSSRulesStr

  console.log('\n\n\nATTACHED ALL RULES TO WINDOW at CSS_RULES\n\n\n')

  console.log('\n\n\nWRITING STYLES TO FILE AT ', defaultStylesFile)

  writeFile(defaultStylesFile, allCSSRulesStr, 'utf8', err => {
    if (err) console.error(err)
    console.log('\n\n\nWROTE FILE....\n\n\n')
  })