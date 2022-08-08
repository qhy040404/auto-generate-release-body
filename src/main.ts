import * as core from '@actions/core'
import {checkInputs} from './check-inputs'
import {findFiles, split} from "./file-helper";
import * as fs from 'fs'

async function run() {
    core.info('Import input datas')
    const changelog_name = core.getInput('changelog', {required: true})
    const template_name = core.getInput('template', {required: true})
    const tag_name = core.getInput('tag', {required: true})
    const template_data = core.getInput('template-data', {required: true})
    const fore_delim = core.getInput('fore-delimiter', {required: true})
    const back_delim = core.getInput('back-delimiter', {required: true})

    const check_result = await checkInputs(changelog_name, template_name, tag_name, template_data, fore_delim, back_delim)
    if (check_result == "Nice") core.info('Everything imported')
    else core.setFailed(`${check_result} was not set`)

    const changelog = await findFiles(changelog_name)
    const template = await findFiles(template_name)

    const cdata = fs.readFileSync(changelog, 'utf8')
    let tdata = fs.readFileSync(template, 'utf8')

    const cl = await split(await split(cdata, fore_delim, 1), back_delim, 0)
    core.debug(cl)

    core.info('Replacing changelog template content')
    tdata = tdata.replace(template_data, cl)

    core.info('Writing release body')
    try {
        fs.writeFileSync(template, tdata, 'utf8')
        core.info('Release body overwritten')
    } catch (e) {
        core.error(`${e}`)
    }
}

// noinspection JSIgnoredPromiseFromCall
run()