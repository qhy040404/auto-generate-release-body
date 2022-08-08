import * as glob from '@actions/glob'
import * as core from '@actions/core'

export async function findFiles(name: string): Promise<string> {
    const globber = await glob.create(`**/${name}`)
    const files = await globber.glob()
    return files[0]
}

export async function splitData(data: string, delimiter: string, position: number): Promise<string> {
    try {
        core.debug(position.toString())
        data = data.split(delimiter)[position]
    } catch (e) {
        core.error(`Split Error \n ${e}`)
        data = ""
    }
    return data
}