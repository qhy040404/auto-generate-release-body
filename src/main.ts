import * as core from '@actions/core'
import {checkInputs} from './check-inputs'

async function run() {
    core.info('Import input datas')
    const changelog_path = core.getInput('changelog', {required: true})
    const template_path = core.getInput('template', {required: true})
    const tag_name = core.getInput('tag', {required: true})
    const template_data = core.getInput('template-data', {required: true})
    const fore_delim = core.getInput('fore-delimiter', {required: true})
    const back_delim = core.getInput('back-delimiter', {required: true})

    const check_result = await checkInputs(changelog_path, template_path, tag_name, template_data, fore_delim, back_delim)
    if (check_result == "Nice") core.info('Everything imported')
    else core.setFailed(`${check_result} was not set`)
}

// noinspection JSIgnoredPromiseFromCall
run()