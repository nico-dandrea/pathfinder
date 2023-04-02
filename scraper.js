const axios = require('axios')
const cheerio = require('cheerio')


const spell_ids = [3]  // Replace with the spell IDs you want to scrape

async function scrapeSpell(spell_id) {
    const url = `https://2e.aonprd.com/Spells.aspx?ID=${spell_id}`
    const response = await axios.get(url)
    const $html = cheerio.load(response.data)
    const output = $html('span#ctl00_RadDrawer1_Content_MainContent_DetailedOutput').html()
    const $ = cheerio.load(output)
    const spellName = $('.title').clone().children('span').remove().end().text().trim()
    const spellLevel = $('.title span').text().trim()
    const traits = []
    $('span.trait').each((i, el) => {
        const traitText = $(el).find('a').text().trim()
        if (traitText) {
            traits.push(traitText)
        }
    })
    const source = $('a.external-link i').text().trim()
    const traditions = [];
    $('b:contains("Traditions")').nextAll('u').find('a').each((i, el) => {
        const traditionText = $(el).text().trim();
        if (traditionText) {
            traditions.push(traditionText);
        }
    });
    console.log(`Spell Name: ${spellName}`)
    console.log(`Spell Level: ${spellLevel}`)
    console.log(`Traits: ${traits.join(', ')}`)
    console.log(`Source: ${source}`)
    console.log(`Traditions: ${traditions.join(', ')}`);
}

spell_ids.forEach(scrapeSpell)